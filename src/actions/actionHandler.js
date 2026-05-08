// src/actions/actionHandler.js
import methods from "./methods";
import resolvePlaceholders from "./resolvePlaceholders";

export default function actionHandler(actionKey, rowData, setActiveForm) {
  if (!actionKey) return;

  const [type, rest] = actionKey?.split("#");
  const resolvedAction = resolvePlaceholders(rest, rowData);

  switch (type) {
  

    default:
      console.warn("Unknown action:", {actionKey,rowData});
  }
}
