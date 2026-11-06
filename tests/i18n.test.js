import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { experience } from "../src/data/experience.js";
import { skills } from "../src/data/skills.js";

const load = (name) => JSON.parse(readFileSync(new URL(`../src/i18n/${name}.json`, import.meta.url), "utf8"));
const en = load("en");
const es = load("es");

// Flattens a dictionary into "a.b.0" paths so both languages can be compared.
const paths = (value, prefix = "") =>
  value !== null && typeof value === "object"
    ? Object.entries(value).flatMap(([k, v]) => paths(v, prefix ? `${prefix}.${k}` : k))
    : [prefix];

test("en and es have exactly the same keys", () => {
  assert.deepEqual(paths(es).sort(), paths(en).sort());
});

test("no translation is empty", () => {
  for (const dict of [en, es]) for (const p of paths(dict)) {
    const value = p.split(".").reduce((o, k) => o[k], dict);
    assert.ok(String(value).trim() !== "", `empty value at ${p}`);
  }
});

test("every experience entry has a text in both languages", () => {
  for (const { key } of experience) {
    assert.ok(en.experience.items[key] && es.experience.items[key], `missing experience.items.${key}`);
  }
});

test("every skill group has a title, and architecture items are translated", () => {
  for (const { key, items } of skills) {
    assert.ok(en.skills.groups[key] && es.skills.groups[key], `missing skills.groups.${key}`);
    if (items === null) assert.ok(Array.isArray(en.skills[key]) && Array.isArray(es.skills[key]), `missing skills.${key}`);
  }
});

test("every project has a case study in both languages", () => {
  // projects.js imports images, which Node cannot load, so read its keys from the source.
  const source = readFileSync(new URL("../src/data/projects.js", import.meta.url), "utf8");
  const keys = [...source.matchAll(/key: "(\w+)"/g)].map((m) => m[1]);
  assert.ok(keys.length > 0);
  for (const key of keys) {
    for (const dict of [en, es]) assert.ok(dict.projects.items[key]?.decisions?.length, `missing projects.items.${key}`);
  }
});
