// src/actions/actionHandler.js
import methods from "./methods";
import resolvePlaceholders from "./resolvePlaceholders";

export default function actionHandler(actionKey, rowData, setActiveForm) {
  if (!actionKey) return;

  const [type, rest] = actionKey.split("#");
  const resolvedAction = resolvePlaceholders(rest, rowData);

  switch (type) {
    case "form": {
      const [formName] = resolvedAction.split("/");
      setActiveForm({ formName, rowData });
      break;
    }

    case "func": {
      const fnName = resolvedAction.split("/")[0];
      const fn = methods[fnName];
      if (typeof fn === "function") {
        fn(rowData);
      } else {
        console.warn(`No function found for: ${fnName}`);
      }
      break;
    }

    case "alert": {
      alert(resolvedAction);
      break;
    }

    default:
      console.warn("Unknown action:", actionKey);
  }
}
