
export default function resolvePlaceholders(template, rowData = {}) {
  return template.replace(/\{([^}]+)\}/g, (_, key) => {
    return rowData[key] !== undefined ? rowData[key] : `{${key}}`;
  });
}
