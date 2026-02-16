export default function mergeConfig(serverConfig, localOverrides) {
  if (!localOverrides) return serverConfig;

  const merged = {
    ...serverConfig,
    density: localOverrides.density ?? serverConfig.density,
    rowsPerPage: localOverrides.rowsPerPage ?? serverConfig.rowsPerPage,
    wrapLines: localOverrides.wrapLines ?? serverConfig.wrapLines,
    stripedRows: localOverrides.stripedRows ?? serverConfig.stripedRows,
    rowClickSelection:
      localOverrides.rowClickSelection ?? serverConfig.rowClickSelection,
    compactMode: localOverrides.compactMode ?? serverConfig.compactMode,
    fixFirstColumn:
      localOverrides.fixFirstColumn ?? serverConfig.fixFirstColumn,
    fixFirstTwoColumns:
      localOverrides.fixFirstTwoColumns ?? serverConfig.fixFirstTwoColumns,
    fixLastColumn: localOverrides.fixLastColumn ?? serverConfig.fixLastColumn,
    datagrid: {},
  };

  const serverDatagrid = serverConfig.datagrid || {};
  const savedDatagrid = localOverrides.datagrid || {};

  const orderedKeys = [
    ...Object.keys(savedDatagrid), 
    ...Object.keys(serverDatagrid).filter(
      (key) => !savedDatagrid[key], 
    ),
  ];

  orderedKeys.forEach((key) => {
    if (!serverDatagrid[key]) return; 

    merged.datagrid[key] = {
      ...serverDatagrid[key], 
      hidden:
        savedDatagrid[key]?.hidden ?? serverDatagrid[key]?.hidden ?? false,
    };
  });

  return merged;
}
