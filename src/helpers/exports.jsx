// exports.js
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";

/**
 * Find indexes of excluded columns (like "Actions")
 */
const getExcludedColumns = (table) => {
  const excluded = [];
  table.querySelectorAll("thead th").forEach((th, index) => {
    if (th.innerText.trim().toLowerCase() === "actions") {
      excluded.push(index);
    }
  });
  return excluded;
};

/**
 * Clone table without excluded columns
 */
const cloneTableWithoutExcluded = (table) => {
  const excluded = getExcludedColumns(table);
  const clone = table.cloneNode(true);

  clone.querySelectorAll("tr").forEach((row) => {
    excluded.slice().reverse().forEach((i) => {
      if (row.children[i]) row.removeChild(row.children[i]);
    });
  });

  return clone;
};

/**
 * Export main function
 */
export const exportTable = async (type) => {
  const table = document.getElementById("printable");
  if (!table) {
    alert("Table not found!");
    return;
  }

  switch (type) {
    case "csv": {
      const cleanTable = cloneTableWithoutExcluded(table);
      const ws = XLSX.utils.table_to_sheet(cleanTable);
      const csv = XLSX.utils.sheet_to_csv(ws);
      saveAs(new Blob([csv], { type: "text/csv;charset=utf-8" }), "export.csv");
      break;
    }

    case "excel": {
      const cleanTable = cloneTableWithoutExcluded(table);
      const ws = XLSX.utils.table_to_sheet(cleanTable);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Report");
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      saveAs(
        new Blob([excelBuffer], { type: "application/octet-stream" }),
        "export.xlsx"
      );
      break;
    }

    case "xml": {
      const cleanTable = cloneTableWithoutExcluded(table);
      const escapeXML = (str) =>
        str
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;");

      let xml = '<?xml version="1.0" encoding="utf-8"?>\n<table>\n';
      cleanTable.querySelectorAll("tbody tr").forEach((row, i) => {
        xml += `  <row index="${i}">\n`;
        row.querySelectorAll("td").forEach((cell, j) => {
          xml += `    <col index="${j}">${escapeXML(
            cell.innerText.trim()
          )}</col>\n`;
        });
        xml += "  </row>\n";
      });
      xml += "</table>";

      saveAs(
        new Blob([xml], { type: "application/xml;charset=utf-8" }),
        "export.xml"
      );
      break;
    }

    case "htm": {
  const cleanTable = cloneTableWithoutExcluded(table);

  // Remove unwanted elements (buttons, svgs, icons etc.)
  cleanTable.querySelectorAll("button, svg, i").forEach((el) => el.remove());

  const html = `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          table { border-collapse: collapse; width: 100%; font-size: 12px; }
          th, td { border: 1px solid #333; padding: 6px; }
          th { background: #f9f9f9; }
        </style>
      </head>
      <body>
        ${cleanTable.outerHTML}
      </body>
    </html>`;

  saveAs(new Blob([html], { type: "text/html;charset=utf-8" }), "export.html");
  break;
}

 case "img": {
  const table = document.getElementById("printable");
  if (!table) return;

  // Find index of "Actions" column
  const excluded = getExcludedColumns(table);

  // Hide the column(s)
  const hidden = [];
  table.querySelectorAll("tr").forEach((row) => {
    excluded.forEach((i) => {
      if (row.children[i]) {
        hidden.push(row.children[i]);
        row.children[i].style.display = "none";
      }
    });
  });

  // Now use html-to-image on the real table
  toPng(table, { cacheBust: true })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "export.png";
      link.click();
    })
    .finally(() => {
      // Restore hidden columns
      hidden.forEach((cell) => (cell.style.display = ""));
    });

  break;
}


case "pdf": {
  const cleanTable = cloneTableWithoutExcluded(table);

  // Remove buttons/icons etc.
  cleanTable.querySelectorAll("button, svg, i").forEach((el) => el.remove());

  // Inline RGB fallback styles (fixes Tailwind oklch colors)
  cleanTable.querySelectorAll("*").forEach((el) => {
    const style = window.getComputedStyle(el);

    // Convert problematic oklch/lab/hwb into safe rgb
    ["color", "backgroundColor", "borderColor"].forEach((prop) => {
      let val = style[prop];
      if (val && val.includes("oklch")) {
        el.style[prop] = "rgb(0,0,0)"; // fallback to black
      } else if (val && val.includes("oklab")) {
        el.style[prop] = "rgb(0,0,0)";
      } else if (val && val.includes("hwb")) {
        el.style[prop] = "rgb(0,0,0)";
      } else {
        el.style[prop] = val;
      }
    });
  });

  // Attach offscreen for rendering
  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.top = "-9999px";
  document.body.appendChild(wrapper);
  wrapper.appendChild(cleanTable);

  toPng(cleanTable, { cacheBust: true })
    .then((dataUrl) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(dataUrl);
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (imgProps.height * pageWidth) / imgProps.width;

      let position = 0;
      let heightLeft = imgHeight;

      pdf.addImage(dataUrl, "PNG", 0, position, pageWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(dataUrl, "PNG", 0, position, pageWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("export.pdf");
      document.body.removeChild(wrapper);
    })
    .catch((err) => console.error("PDF export failed", err));

  break;
}
    default:
      alert("Unsupported export type");
  }
};
