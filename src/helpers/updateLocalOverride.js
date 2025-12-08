import CONSTANTS from "../constants";
import getPathKey from "./getPathKey";

// export default function updateLocalOverride(key, value) {
//   const STORAGE_KEY=getPathKey()
//   const existing = JSON.parse(localStorage.getItem(`${CONSTANTS.REPORT_LOCALSTORAGE_PRIFIX}${STORAGE_KEY}`)) || {};
// console.log({existing})
// const updated = { ...existing, [key]: value };
// localStorage.setItem(`${CONSTANTS.REPORT_LOCALSTORAGE_PRIFIX}${STORAGE_KEY}`, JSON.stringify(updated));
// console.log({updated})
// }


export default function updateLocalOverride(key, value,baseConfig) {
 const STORAGE_KEY = getPathKey();
  const fullKey = `${CONSTANTS.REPORT_LOCALSTORAGE_PRIFIX}${STORAGE_KEY}`;

  // Load existing overrides
  const existing = JSON.parse(localStorage.getItem(fullKey) || "null");

  // If nothing exists yet → initialize with base config first
  const safeBase = existing ?? baseConfig ?? {};

  let updated = { ...safeBase };

  // Deep merge datagrid
  if (key === "datagrid") {
    updated.datagrid = {
      ...(safeBase.datagrid || {}),
      ...value,
    };
  } else {
    updated[key] = value;
  }

  localStorage.setItem(fullKey, JSON.stringify(updated));
}