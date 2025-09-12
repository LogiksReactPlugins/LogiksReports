import CONSTANTS from "../constants";
import getPathKey from "./getPathKey";

export default function updateLocalOverride(key, value) {
  const STORAGE_KEY=getPathKey()
  const existing = JSON.parse(localStorage.getItem(`${CONSTANTS.REPORT_LOCALSTORAGE_PRIFIX}${STORAGE_KEY}`)) || {};
  const updated = { ...existing, [key]: value };
  localStorage.setItem(`${CONSTANTS.REPORT_LOCALSTORAGE_PRIFIX}${STORAGE_KEY}`, JSON.stringify(updated));
}
