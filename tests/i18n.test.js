import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { experience } from "../src/data/experience.js";
import { skills } from "../src/data/skills.js";

const load = (name) => JSON.parse(readFileSync(new URL(`../src/i18n/${name}.json`, import.meta.url), "utf8"));
const locales = readdirSync(new URL("../src/i18n/", import.meta.url)).filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5));
const dicts = Object.fromEntries(locales.map((l) => [l, load(l)]));
const es = dicts.es; // reference language: the default locale

// Flattens a dictionary into "a.b.0" paths so both languages can be compared.
const paths = (value, prefix = "") =>
  value !== null && typeof value === "object"
    ? Object.entries(value).flatMap(([k, v]) => paths(v, prefix ? `${prefix}.${k}` : k))
    : [prefix];

test("every language has exactly the same keys as the default one (es)", () => {
  assert.ok(locales.length >= 2);
  for (const l of locales) assert.deepEqual(paths(dicts[l]).sort(), paths(es).sort(), `keys differ in ${l}`);
});

test("every language has its CV and the static HTML matches the default language", () => {
  for (const l of locales) assert.ok(existsSync(new URL(`../public/David_Marsal_Ivars_CV_${l.toUpperCase()}.pdf`, import.meta.url)), `missing CV for ${l}`);
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.ok(html.includes('<html lang="es">'));
  assert.ok(html.includes(`<title>${es.meta.title}</title>`));
  assert.ok(html.includes(`content="${es.meta.description}"`));
});

test("no translation is empty", () => {
  for (const dict of Object.values(dicts)) for (const p of paths(dict)) {
    const value = p.split(".").reduce((o, k) => o[k], dict);
    assert.ok(String(value).trim() !== "", `empty value at ${p}`);
  }
});

test("every experience entry has a text in every language", () => {
  for (const { key } of experience) {
    for (const d of Object.values(dicts)) assert.ok(d.experience.items[key], `missing experience.items.${key}`);
  }
});

test("every skill group has a title, and architecture items are translated", () => {
  for (const { key, items } of skills) {
    for (const d of Object.values(dicts)) {
      assert.ok(d.skills.groups[key], `missing skills.groups.${key}`);
      if (items === null) assert.ok(Array.isArray(d.skills[key]), `missing skills.${key}`);
    }
  }
});

test("every project has a case study in every language", () => {
  // projects.js imports images, which Node cannot load, so read its keys from the source.
  const source = readFileSync(new URL("../src/data/projects.js", import.meta.url), "utf8");
  const keys = [...source.matchAll(/key: "(\w+)"/g)].map((m) => m[1]);
  assert.ok(keys.length > 0);
  for (const key of keys) {
    for (const dict of Object.values(dicts)) assert.ok(dict.projects.items[key]?.decisions?.length, `missing projects.items.${key}`);
  }
});
