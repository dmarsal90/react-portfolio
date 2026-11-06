import { useEffect, useRef, useState } from "react";

// Drop-in for react-on-screen (it relies on findDOMNode, removed in React 19).
export default function TrackVisibility({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children({ isVisible })}</div>;
}
