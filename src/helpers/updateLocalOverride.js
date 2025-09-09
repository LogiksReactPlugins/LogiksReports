export default function updateLocalOverride(key, value) {
  const existing = JSON.parse(localStorage.getItem("tableOverrides")) || {};
  const updated = { ...existing, [key]: value };
  localStorage.setItem("tableOverrides", JSON.stringify(updated));
}
