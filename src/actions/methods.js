const methods = {
  edit: (row) => console.log("Editing row:", row),
  remark: (row) => alert("Add remark for ID: " + row.id),
  refresh: () => console.log("Refreshing report..."),
};

export default methods;
