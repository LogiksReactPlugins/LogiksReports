import getPathKey from "./getPathKey";

export default function updateLocalOverride(key, value) {
  const STORAGE_KEY=getPathKey()
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  const updated = { ...existing, [key]: value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
