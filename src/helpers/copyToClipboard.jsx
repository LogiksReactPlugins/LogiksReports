const copyToClipboard = (text, cellKey, setCopiedCell) => {
  setCopiedCell(cellKey);
  setTimeout(() => setCopiedCell(null), 1500);

  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(text).catch(() => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    });
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
};



export const formatCardContent = (row, datagrid) => {
  let content = [];
  console.log({ "ROWWWWWW": row })

  Object.entries(row).forEach(([key, value]) => {
    if (value === null || value === undefined || key === "id") return;

    const column = datagrid[key];
    console.log({ datagrid })
    if (!column || column.hidden) return;

    let displayVal = value;
    if (column.formatter === "checkbox") {
      displayVal = value ? "Yes" : "No";
    } else if (column.formatter === "date") {
      displayVal = new Date(value).toLocaleDateString();
    }

    content.push(`${column.label || key}: ${displayVal}`);
    console.log(`${column.label || key}: ${displayVal}`);
  });

  return content.join("\n");
};

export const formatKanbanCardContent = (row, getCardValue) => {
  let content = "";

  // Title
  if (getCardValue(row, "title") || row.name) {
    content += `Title: ${getCardValue(row, "title") || row.name}\n`;
  }

  // Description
  if (getCardValue(row, "descs")) {
    content += `Description: ${getCardValue(row, "descs")}\n`;
  }

  // Counter
  if (getCardValue(row, "counter")) {
    content += `Counter: ${getCardValue(row, "counter")}\n`;
  }

  if (getCardValue(row, "category")) {
    content += `Category: ${getCardValue(row, "category")}\n`;
  }

  if (getCardValue(row, "due_date")) {
    content += `Due Date: ${new Date(getCardValue(row, "due_date")).toLocaleDateString()}\n`;
  }

  //   Object.entries(row).forEach(([key, value]) => {
  //     if (
  //       !value ||
  //       ["id", "title", "name", "descs", "counter", "category", "due_date"].includes(key)
  //     ) {
  //       return;
  //     }
  //     content += `${key}: ${value}\n`;
  //   });

  return content.trim();
};


export default copyToClipboard;