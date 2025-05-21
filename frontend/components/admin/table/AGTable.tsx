"use client";

import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { useIntl } from "react-intl";
import ActionRender from "./ActionRender";
import OrderItemsRender from "./OrderItemsRender";
import OrderStatusRender from "./OrderStatusRender";
import { AGTableModelType } from "lib/types";
import { localeCache } from "lib/api";

const defaultColDef: ColDef = {
  resizable: true,
  filter: true,
  sortable: true,
};

const AGTable = ({
  cols,
  rows,
}: {
  cols: ColDef<AGTableModelType>[];
  rows: AGTableModelType[];
}) => {
  const intl = useIntl();
  const direction = localeCache.dir(); // "rtl" or "ltr"
  const isRtl = direction === "rtl";

  const localizedCols: ColDef<AGTableModelType>[] = cols.map((col) => ({
    ...col,
    headerName: intl.formatMessage({ id: `table.headerName.${col.field}` }),
    cellStyle: { textAlign: isRtl ? "right" : "left", direction }, // apply per-cell
    headerClass: isRtl ? "ag-header-cell-rtl" : "ag-header-cell-ltr",
  }));

  return (
    <div
      className="ag-theme-alpine"
      data-testid="ag-table"
      dir={direction}
      style={{
        height: 600,
        width: "100%",
        overflowX: "auto",
        direction,
      }}
    >
      <AgGridReact<AGTableModelType>
        rowData={rows}
        columnDefs={isRtl ? [...localizedCols].reverse() : localizedCols}
        defaultColDef={defaultColDef}
        enableRtl={isRtl}
        rowHeight={30}
        frameworkComponents={{
          ActionRender,
          OrderItemsRender,
          OrderStatusRender,
        }}
      />
    </div>
  );
};

export default AGTable;
