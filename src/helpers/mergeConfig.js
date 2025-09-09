export default function mergeConfig(serverConfig, localOverrides) {
    if (!localOverrides) return serverConfig;

    const merged = {
      ...serverConfig,
      rowsPerPage: localOverrides.rowsPerPage ?? serverConfig.rowsPerPage,
      wrapLines: localOverrides.wrapLines ?? serverConfig.wrapLines,
      stripedRows: localOverrides.stripedRows ?? serverConfig.stripedRows,
      rowClickSelection: localOverrides.rowClickSelection ?? serverConfig.rowClickSelection,
      compactMode: localOverrides.compactMode ?? serverConfig.compactMode,
      fixFirstColumn: localOverrides.fixFirstColumn ?? serverConfig.fixFirstColumn,
      fixFirstTwoColumns: localOverrides.fixFirstTwoColumns ?? serverConfig.fixFirstTwoColumns,
      fixLastColumn: localOverrides.fixLastColumn ?? serverConfig.fixLastColumn,
      datagrid: {},
    };

    Object.keys(serverConfig.datagrid).forEach((key) => {
      const serverCol = serverConfig.datagrid[key];
      const userCol = localOverrides.datagrid?.[key];

      merged.datagrid[key] = {
        ...serverCol,
        hidden: userCol?.hidden ?? serverCol.hidden ?? false,
      };
    });

    return merged;
  }