import React, {
  useMemo,
  useState,
} from "react";

import ShimmerTableRow from "./loadings/ShimmerTableRow";

import { MoreHorizontal } from "lucide-react";

const MatrixView = ({
  config,
  data,
  matrix = {},
  style,
  loading,

  visibleButtons,
  getIconComponent,
  moreButtons,

  handleButtonClick,
  formatCellValue,
  getRowValue,
  parseStyle,
  methods,

  openDropdown,
  setOpenDropdown,
  hasButtons,
  toggleDropdown,

  getLocalRefData,
}) => {
  const {
    row,
    column,
    colmap = {},
    colormap = {},
    unilink,

    cellAggregate,
    rowGrandAggregate,
  } = config?.matrix || {};

  const {
    stripedRows,
    compactMode,
    fixFirstColumn,
  } = config;

  const reportTitle = config?.title
    ?.toLowerCase()
    .trim()
    .replace(/\s+/g, "_");

  const activeLocalRef =
    config?.module_refid;

  const getMethod = (type) => {
    const key = Object.keys(
      methods || {}
    ).find(
      (k) =>
        k.toLowerCase() ===
        String(type).toLowerCase()
    );

    return key
      ? methods[key]
      : undefined;
  };

  const formatAggregateValue = (
    value,
    format = {}
  ) => {
    if (
      value == null ||
      isNaN(value)
    ) {
      return "";
    }

    const {
      type = "number",
      decimals = 1,
      compact,
      locale = "en-IN",
      currency = "INR",
    } = format;

    const formatWithDecimals = (
      num
    ) =>
      Number(num).toLocaleString(
        locale,
        {
          minimumFractionDigits:
            decimals,
          maximumFractionDigits:
            decimals,
        }
      );

    if (compact) {
      const abs = Math.abs(value);

      if (locale === "en-IN") {
        if (abs >= 1e7) {
          return (
            formatWithDecimals(
              value / 1e7
            ) + "Cr"
          );
        }

        if (abs >= 1e5) {
          return (
            formatWithDecimals(
              value / 1e5
            ) + "L"
          );
        }

        if (abs >= 1e3) {
          return (
            formatWithDecimals(
              value / 1e3
            ) + "K"
          );
        }
      } else {
        if (abs >= 1e9) {
          return (
            formatWithDecimals(
              value / 1e9
            ) + "B"
          );
        }

        if (abs >= 1e6) {
          return (
            formatWithDecimals(
              value / 1e6
            ) + "M"
          );
        }

        if (abs >= 1e3) {
          return (
            formatWithDecimals(
              value / 1e3
            ) + "K"
          );
        }
      }

      return formatWithDecimals(value);
    }

    if (type === "currency") {
      return new Intl.NumberFormat(
        locale,
        {
          style: "currency",
          currency,
          minimumFractionDigits:
            decimals,
          maximumFractionDigits:
            decimals,
        }
      ).format(value);
    }

    return new Intl.NumberFormat(
      locale,
      {
        minimumFractionDigits:
          decimals,
        maximumFractionDigits:
          decimals,
      }
    ).format(value);
  };

  const getAggregateValue = (
    aggregateConfig,
    rows = []
  ) => {
    if (
      !aggregateConfig?.type ||
      !aggregateConfig?.column
    ) {
      return null;
    }

    const rawType =
      aggregateConfig.type;

    const columnKey =
      aggregateConfig.column;

    const getNumericValues = () =>
      rows
        .map((row) => {
          const val = getRowValue(
            row,
            columnKey
          );

          return typeof val ===
            "number"
            ? val
            : Number(val);
        })
        .filter(
          (val) => !isNaN(val)
        );

    const calculateBase = (
      type
    ) => {
      const values =
        getNumericValues();

      switch (
        type.toUpperCase()
      ) {
        case "SUM":
          return values.reduce(
            (a, b) => a + b,
            0
          );

        case "AVG":
          return values.length
            ? values.reduce(
                (a, b) => a + b,
                0
              ) / values.length
            : 0;

        case "MIN":
          return values.length
            ? Math.min(...values)
            : 0;

        case "MAX":
          return values.length
            ? Math.max(...values)
            : 0;

        case "COUNT":
          return rows.length;

        default: {
          const fn =
            getMethod(type);

          const result = fn?.(
            values,
            rows
          );

          if (
            result !== undefined
          ) {
            return result;
          }

          return 0;
        }
      }
    };

    if (
      typeof rawType ===
        "string" &&
      /^[a-z0-9_]+$/i.test(
        rawType
      )
    ) {
      const result =
        calculateBase(
          rawType.toUpperCase()
        );

      return typeof result ===
        "number"
        ? Number(
            result.toFixed(2)
          )
        : result;
    }

    if (
      typeof rawType ===
      "string"
    ) {
      let expression =
        rawType;

      const fnRegex =
        new RegExp(
          `(${[
            "sum",
            "avg",
            "min",
            "max",
            "count",
            ...Object.keys(
              methods || {}
            ).map((k) =>
              k.toLowerCase()
            ),
          ].join(
            "|"
          )})\\((.*?)\\)`,
          "gi"
        );

      expression =
        expression.replace(
          fnRegex,
          (_, fn) => {
            const value =
              calculateBase(
                fn.toUpperCase()
              );

            return Number(value);
          }
        );

      try {
        if (
          !/^[0-9+\-*/().\s]+$/.test(
            expression
          )
        ) {
          return 0;
        }

        return Number(
          Function(
            `"use strict"; return (${expression})`
          )().toFixed(2)
        );
      } catch {
        return 0;
      }
    }

    return null;
  };

  const getStoredRowId = (
    data
  ) => {
    if (
      !data ||
      typeof data !== "object"
    ) {
      return null;
    }

    if (
      data.id !== undefined &&
      data.id !== null
    ) {
      return data.id;
    }

    const dynamicIdKey =
      Object.keys(data).find(
        (key) =>
          key
            .toLowerCase()
            .endsWith(".id")
      );

    if (dynamicIdKey) {
      return data[dynamicIdKey];
    }

    return null;
  };

  const highlightedRowId =
    activeLocalRef
      ? getStoredRowId(
          getLocalRefData(
            typeof activeLocalRef ===
              "string"
              ? activeLocalRef
              : Object.keys(
                  activeLocalRef
                )[0]
          )
        )
      : null;

  const [
    activeHighlightedRowId,
    setActiveHighlightedRowId,
  ] = useState(
    highlightedRowId
  );

  const matrixData = useMemo(() => {
    const rows = [
      ...new Set(
        data.map((r) =>
          getRowValue(
            r,
            row.key
          )
        )
      ),
    ];

    const columns = [
      ...new Set(
        data.map((r) =>
          getRowValue(
            r,
            column.key
          )
        )
      ),
    ];

    const grouped = {};

    const rowMap = {};

    const columnMap = {};

    data.forEach((record) => {
      const rowValue =
        getRowValue(
          record,
          row.key
        );

      const colValue =
        getRowValue(
          record,
          column.key
        );

      if (
        !grouped[rowValue]
      ) {
        grouped[rowValue] = {};
      }

      if (
        !grouped[rowValue][
          colValue
        ]
      ) {
        grouped[rowValue][
          colValue
        ] = [];
      }

      grouped[rowValue][
        colValue
      ].push(record);

      if (!rowMap[rowValue]) {
        rowMap[rowValue] = [];
      }

      rowMap[rowValue].push(
        record
      );

      if (
        !columnMap[colValue]
      ) {
        columnMap[colValue] =
          [];
      }

      columnMap[colValue].push(
        record
      );
    });

    return {
      rows,
      columns,
      grouped,
      rowMap,
      columnMap,
    };
  }, [
    data,
    row?.key,
    column?.key,
  ]);

  const renderCard = (
    record,
    index
  ) => {
    const rowId =
      getRowValue(
        record,
        "id"
      );

    const title =
      getRowValue(
        record,
        colmap?.title
      );

    const descs =
      getRowValue(
        record,
        colmap?.descs
      );

    const category =
      getRowValue(
        record,
        colmap?.category
      );

    const dueDate =
      getRowValue(
        record,
        colmap?.due_date
      );

    const avatar =
      getRowValue(
        record,
        colmap?.avatar
      );

    const tags =
      getRowValue(
        record,
        colmap?.tags
      );

    const counter =
      getRowValue(
        record,
        colmap?.counter
      );

    const colorValue =
      getRowValue(
        record,
        colmap?.color
      );

    const colorClass =
      colormap?.[
        colorValue
      ] || "";

    const isHighlighted =
      String(rowId) ===
      String(
        activeHighlightedRowId
      );

    return (
      <div
        key={index}
        id={`${reportTitle}_card_${rowId}`}
        onClick={(e) => {
          e.stopPropagation();

          setActiveHighlightedRowId(
            rowId
          );

          handleButtonClick?.(
            unilink,
            { unilink },
            record,
            e.currentTarget
          );
        }}
        className={`
          relative
          p-1
          border border-gray-200

          bg-white
          transition-all
          cursor-pointer
          hover:shadow-md

          ${
            compactMode
              ? "text-xs"
              : "text-sm"
          }

          ${
            isHighlighted
              ? "highlight-row"
              : ""
          }
        `}
      >
        <div
          className={`
            absolute
            left-0
            top-0
            bottom-0
            w-1
            rounded-l-xl
            ${colorClass}
          `}
        />

        <div className="flex gap-3">
          {avatar && (
            <img
              src={avatar}
              alt=""
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="font-medium truncate">
                  {formatCellValue(
                    title,
                    null,
                    record,
                    {},
                    config,
                    methods
                  )}
                </h3>

                {descs && (
                  <p className="text-gray-500 text-xs mt-1  line-clamp-2">
                    {formatCellValue(
                      descs,
                      null,
                      record,
                      {},
                      config,
                      methods
                    )}
                  </p>
                )}
              </div>

              {counter && (
                <span className="px-2 py-1 rounded bg-gray-100 text-xs shrink-0">
                  {counter}
                </span>
              )}
            </div>

{
  (category || dueDate) && 

            <div className="flex flex-wrap items-center gap-2 mt-3">
              {category && (
                <span className="px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs">
                  {category}
                </span>
              )}

              {dueDate && (
                <span className="text-gray-500 text-xs">
                  {dueDate}
                </span>
              )}
            </div>
  }
            {Array.isArray(tags) &&
              tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {tags.map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded bg-gray-100 text-[10px]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              )}
          </div>
        </div>

        {hasButtons && (
          <div className="mt-1 pt-1 border-t border-gray-100 rounded-b-lg">
            <div className="flex items-center justify-end">
              <div className="flex items-center space-x-2">
                {visibleButtons
                  .slice(0, 6)
                  .map(
                    ([
                      buttonKey,
                      button,
                    ]) => (
                      <button
                        key={
                          buttonKey
                        }
                        onClick={(
                          e
                        ) => {
                          e.stopPropagation();

                          handleButtonClick(
                            buttonKey,
                            button,
                            record
                          );
                        }}
                        className="inline-flex cursor-pointer items-center px-1 py-1 text-sm font-medium text-action"
                        title={
                          button.label
                        }
                      >
                        {getIconComponent(
                          button.icon
                        )}
                      </button>
                    )
                  )}
              </div>

              {(visibleButtons.length >
                6 ||
                moreButtons.length >
                  0) && (
                <div className="relative">
                  <button
                    onClick={(
                      e
                    ) => {
                      e.stopPropagation();

                      toggleDropdown(
                        getRowValue(
                          record,
                          "id"
                        )
                      );
                    }}
                    className="inline-flex cursor-pointer items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white rounded hover:bg-gray-50"
                  >
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </button>

                  {openDropdown ===
                    getRowValue(
                      record,
                      "id"
                    ) && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="py-1">
                        {visibleButtons
                          .slice(6)
                          .map(
                            ([
                              buttonKey,
                              button,
                            ]) => (
                              <button
                                key={
                                  buttonKey
                                }
                                onClick={(
                                  e
                                ) => {
                                  e.stopPropagation();

                                  handleButtonClick(
                                    buttonKey,
                                    button,
                                    record
                                  );

                                  setOpenDropdown(
                                    null
                                  );
                                }}
                                className="flex items-center cursor-pointer gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {getIconComponent(
                                  button.icon
                                )}

                                <span className="truncate">
                                  {
                                    button.label
                                  }
                                </span>
                              </button>
                            )
                          )}

                        {moreButtons.map(
                          ([
                            buttonKey,
                            button,
                          ]) => (
                            <button
                              key={
                                buttonKey
                              }
                              onClick={(
                                e
                              ) => {
                                e.stopPropagation();

                                handleButtonClick(
                                  buttonKey,
                                  button,
                                  record
                                );

                                setOpenDropdown(
                                  null
                                );
                              }}
                              className="flex items-center cursor-pointer gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {getIconComponent(
                                button.icon
                              )}

                              <span className="truncate">
                                {
                                  button.label
                                }
                              </span>
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="overflow-hidden">
<div className={`overflow-auto max-h-screen max-w-full thin-scrollbar data-matrix-table `}>
<table
  className="border-collapse min-w-max border border-gray-200"
  >
            <thead
            className={`
              ${
                style?.thead ||
                "bg-muted text-action"
              }
              
              sticky top-0 z-30
            `}
          >
            <tr>
            <th
  className={`
    ${
      style?.th ||
      "px-2 py-2 text-xs font-bold uppercase"
    }
border border-gray-200

    sticky
    top-0
    left-0
    z-50
    min-w-[220px]

    bg-muted
  `}
>
  {row?.label}
</th>

              {matrixData.columns.map(
                (colValue) => {
                  const columnRecords =
                    matrixData
                      .columnMap?.[
                      colValue
                    ] || [];

                  return (
                    <th
                       key={colValue}
  className={`
    ${
      style?.th ||
      "px-2 py-2 text-xs font-bold uppercase"
    }
border border-gray-200

    sticky
    top-0
    z-40

    bg-muted    min-w-[120px]
  `}
                    >
                      <div className="flex flex-col">
                        <span>
                          {colValue}
                        </span>

                        {column?.aggregate && (
                          <span className="text-[10px] font-normal text-gray-500 mt-1">
                            {
                              column
                                .aggregate
                                .label
                            }
                            :{" "}
                            {formatAggregateValue(
                              getAggregateValue(
                                column.aggregate,
                                columnRecords
                              ),
                              column
                                .aggregate
                                ?.format
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                  );
                }
              )}

              {rowGrandAggregate && (
                <th
                  className={
                    style?.th ||
                    "px-2 py-2 text-xs font-bold uppercase"
                  }
                >
                  {
                    rowGrandAggregate.label
                  }
                </th>
              )}
            </tr>
          </thead>

          <tbody
            className={
              style?.tbody ||
              "bg-white divide-y divide-gray-200"
            }
          >
            {loading ? (
              <>
                {Array.from({
                  length: 10,
                }).map((_, i) => (
                  <ShimmerTableRow
                    key={i}
                    columns={[
                      ["row"],
                      ...matrixData.columns.map(
                        (c) => [c]
                      ),
                    ]}
                  />
                ))}
              </>
            ) : (
              <>
                {matrixData.rows.map(
                  (
                    rowValue,
                    rowIndex
                  ) => {
                    const rowRecords =
                      matrixData
                        .rowMap?.[
                        rowValue
                      ] || [];

                    return (
                      <tr
                        key={
                          rowValue
                        }
                        className={`
                          ${
                            stripedRows &&
                            rowIndex %
                              2 ===
                              1
                              ? "bg-gray-50"
                              : ""
                          }
                        `}
                      >
                        <td
                          className={`
                                  ${
                                    style?.td ||
                                    "p-1 text-sm text-gray-900"
                                  }
border border-gray-200

                                  align-top
                                  font-medium

    bg-muted
    text-action
                                  sticky
                                  left-0
                                  z-30
                                  min-w-[220px]

                                  ${
                                    stripedRows &&
                                    rowIndex % 2 === 1
                                      ? "bg-gray-50"
                                      : "bg-white"
                                  }
                                `}
                        >
                          <div className="flex flex-col">
                            <span>
                              {
                                rowValue
                              }
                            </span>

                            {row?.aggregate && (
                              <span className="text-xs text-gray-500">
                                {
                                  row
                                    .aggregate
                                    .label
                                }
                                :{" "}
                                {formatAggregateValue(
                                  getAggregateValue(
                                    row.aggregate,
                                    rowRecords
                                  ),
                                  row
                                    .aggregate
                                    ?.format
                                )}
                              </span>
                            )}
                          </div>
                        </td>

                        {matrixData.columns.map(
                          (
                            colValue
                          ) => {
                            const records =
                              matrixData
                                .grouped?.[
                                rowValue
                              ]?.[
                                colValue
                              ] || [];

                            return (
                              <td
                               key={colValue}
  className={`
    ${
      style?.td ||
      "text-sm text-gray-900"
    }
    border border-gray-200


    align-top
    max-w-[120px]
  `}
                              >
                                <div className="flex flex-col   min-w-[120px]">
                                  {cellAggregate && (
                                    <div className="text-[11px] text-gray-500 border border-gray-200
 rounded px-2 py-1 bg-gray-50">
                                      {
                                        cellAggregate.label
                                      }
                                      :{" "}
                                      {formatAggregateValue(
                                        getAggregateValue(
                                          cellAggregate,
                                          records
                                        ),
                                        cellAggregate?.format
                                      )}
                                    </div>
                                  )}

                                  {records.length ===
                                  0 ? (
                                    <div className="text-gray-300 text-xs text-center py-1">
                                      —
                                    </div>
                                  ) : (
                                    records.map(
                                      renderCard
                                    )
                                  )}
                                </div>
                              </td>
                            );
                          }
                        )}

                        {rowGrandAggregate && (
                          <td
                            className={
                              style?.td ||
                              "p-1 text-sm text-gray-900"
                            }
                          >
                            {formatAggregateValue(
                              getAggregateValue(
                                rowGrandAggregate,
                                rowRecords
                              ),
                              rowGrandAggregate?.format
                            )}
                          </td>
                        )}
                      </tr>
                    );
                  }
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatrixView;