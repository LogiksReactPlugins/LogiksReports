export default  function saveOverrides(config) {
        const overrides = {
            rowsPerPage: config.rowsPerPage,
            wrapLines: config.wrapLines,
            stripedRows: config.stripedRows,
            rowClickSelection: config.rowClickSelection,
            compactMode: config.compactMode,
            fixFirstColumn: config.fixFirstColumn,
            fixFirstTwoColumns: config.fixFirstTwoColumns,
            fixLastColumn: config.fixLastColumn,
            datagrid: Object.fromEntries(
                Object.entries(config.datagrid).map(([key, col]) => [
                    key,
                    { hidden: col.hidden },
                ])
            ),
        };
        localStorage.setItem("tableOverrides", JSON.stringify(overrides));
    }