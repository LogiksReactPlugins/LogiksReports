import React from "react";

export default function formatCellValue(
  value,
  formatter,
  record = {},
  columnInfo = {},
  config,
) {
  if (!value && value !== false) return "";

  switch (formatter?.toLowerCase()) {
    case "checkbox":
      return (
        <input
          type="checkbox"
          checked={Boolean(value)}
          readOnly
          className="w-4 h-4 text-green-600 accent-green-600 cursor-default"
        />
      );
    case "date": {
      const d = new Date(value);
      const invalid = isNaN(d.getTime());

      return (
        <span title={String(value)}>
          {invalid ? "Invalid Date" : d.toLocaleDateString()}
        </span>
      );
    }
    case "month": {
      const month = Number(value);
      const invalid = !Number.isInteger(month) || month < 1 || month > 12;

      return (
        <span title={String(value)}>
          {invalid
            ? "Invalid Month"
            : new Date(2000, month - 1).toLocaleString(undefined, {
                month: "long",
              })}
        </span>
      );
    }
    case "time": {
      const d = new Date(value);
      const invalid = isNaN(d.getTime());

      return (
        <span title={String(value)}>
          {invalid ? "Invalid Time" : d.toLocaleTimeString()}
        </span>
      );
    }

    case "datetime": {
      const d = new Date(value);
      const invalid = isNaN(d.getTime());

      return (
        <span title={String(value)}>
          {invalid ? "Invalid Date" : d.toLocaleString()}
        </span>
      );
    }

    case "currency":
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(value);

    case "number":
    case "num":
      return (
        <span className="text-center">{Number(value).toLocaleString()}</span>
      );

    case "link":
    case "url":
      return value ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Link
          {/* {value} */}
        </a>
      ) : null;

    case "email":
      return value ? (
        <a href={`mailto:${value}`} className="text-blue-600 underline">
          {value}
        </a>
      ) : null;

    case "tel":
    case "mob":
    case "phone":
    case "mobile":
      return value ? (
        <a href={`tel:${value}`} className="text-blue-600 underline">
          {value}
        </a>
      ) : null;

    case "geoloc":
    case "geolocation":
    case "geoaddress":
      return value ? (
        <a
          href={`https://www.google.com/maps/place/${encodeURIComponent(
            value,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {value}
        </a>
      ) : null;

    case "color":
      return value ? (
        <div className="flex items-center justify-center">
          <span
            className="w-5 h-5 rounded-full border"
            style={{ backgroundColor: value }}
          ></span>
        </div>
      ) : null;

    case "avatar":
      return (
        <img
          src={value || "/images/user.png"}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
      );

    case "photo":
    case "picture":
    case "image":
    case "media": {
      const src =
        typeof value === "string" && /^https?:\/\//i.test(value)
          ? value
          : `${config?.endPoints?.filePreview}/${value}`;

      return (
        <img src={src} alt="media" className="w-12 h-12 rounded object-cover" />
      );
    }

    case "file":
    case "attachment": {
      if (!value) return "No File";

      const links = String(value)
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);

      return (
        <div className="flex flex-col gap-1">
          {links.map((link, idx) => (
            <AttachmentPopup key={idx} url={link} index={idx} />
          ))}
        </div>
      );
    }

    case "json":
      try {
        const parsed = typeof value === "string" ? JSON.parse(value) : value;
        return (
          <pre className="whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded">
            {JSON.stringify(parsed, null, 2)}
          </pre>
        );
      } catch {
        return String(value);
      }

    case "pretty":
    case "uppercase":
    case "lowercase": {
      let val = value;

      if (Array.isArray(val)) {
        val = val.join(", ");
      }

      val = String(val).replace(/_/g, " ");

      switch (formatter.toLowerCase()) {
        case "pretty":
          val = val.replace(
            /\w\S*/g,
            (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(),
          );
          break;

        case "uppercase":
          val = val.toUpperCase();
          break;

        case "lowercase":
          val = val.toLowerCase();
          break;
      }

      return val;
    }

    case "html":
      return <div dangerouslySetInnerHTML={{ __html: value }} />;
    case "mediafile":
      return value ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          FILE
        </a>
      ) : (
        "No File"
      );

    case "method":
      // Call a custom function if passed in columnInfo
      if (columnInfo && typeof columnInfo.method === "function") {
        return columnInfo.method(value, record, columnInfo);
      }
      return "--";

    case "embed":
      return value ? (
        <div className="text-blue-600 underline cursor-pointer">
          <i className="fa fa-arrows-alt"></i> OPEN
          <div className="hidden">{value}</div>
        </div>
      ) : null;

    case "video":
    case "videoembed":
      return value ? (
        <div className="text-red-600 underline cursor-pointer">
          <i className="fa fa-youtube-play"></i> OPEN
          <div className="hidden">{value}</div>
        </div>
      ) : null;

    case "iframe":
      return value ? (
        <div className="text-blue-600 underline cursor-pointer">
          <i className="fa fa-arrows-alt"></i> OPEN
          <div className="hidden">
            <iframe
              width="560"
              height="315"
              src={value}
              frameBorder="0"
              allowFullScreen
              title="iframe-content"
            />
          </div>
        </div>
      ) : null;

    case "content": {
      if (!value) return "No Content";

      const cleanValue = String(value)
        .replace(/\\r\\n/g, "<br>")
        .replace(/\\n/g, "<br>")
        .replace(/\\'s/g, "'s")
        .replace(/\\"/g, '"');

      if (cleanValue.length <= 40) {
        return <span dangerouslySetInnerHTML={{ __html: cleanValue }} />;
      }

      const abstract = cleanValue.slice(0, 35) + " ...";

      return <ContentPopup abstract={abstract} content={cleanValue} />;
    }
    case "template":
      if (columnInfo?.template) {
        // Replace %field% with record[field]
        return columnInfo.template.replace(
          /%([\w.-]+)%/g,
          (_, key) => record[key] ?? "",
        );
      }
      return String(value);

    case "edge": {
      const date = new Date(value);
      const now = new Date();
      const diffMs = now - date;

      if (Number.isNaN(date.getTime())) return "";

      const sec = Math.floor(diffMs / 1000);
      const min = Math.floor(sec / 60);
      const hr = Math.floor(min / 60);
      const day = Math.floor(hr / 24);
      const week = Math.floor(day / 7);
      const month = Math.floor(day / 30);
      const year = Math.floor(day / 365);

      if (sec < 60) return `${sec || 1} sec ago`;
      if (min < 60) return `${min} min ago`;
      if (hr < 24) return `${hr} hr ago`;
      if (day < 7) return `${day} day${day > 1 ? "s" : ""} ago`;
      if (week < 5) return `${week} week${week > 1 ? "s" : ""} ago`;
      if (month < 12) return `${month} month${month > 1 ? "s" : ""} ago`;
      return `${year} yr${year > 1 ? "s" : ""} ago`;
    }

    default:
      if (Array.isArray(value)) {
        return value.join(", ");
      } else if (typeof value === "string" && value.length > 100) {
        return <pre className="whitespace-pre-wrap">{value}</pre>;
      } else if (typeof value === "string" && value.length > 20) {
        return <span>{value}</span>;
      } else {
        return String(value);
      }
  }
}

function ContentPopup({ abstract, content }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <span className="cursor-pointer" onClick={() => setOpen(true)}>
        {abstract}
      </span>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white max-w-2xl w-full rounded shadow-lg p-4 relative max-h-[80vh] overflow-y-auto">
            <div className="sticky  py-3 top-1">
              <button
                className=" absolute -top-2 -right-2 cursor-pointer text-gray-500 bg-gray-200 py-1 px-2 hover:text-gray-800"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div
              className="text-sm text-gray-800 whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      )}
    </>
  );
}

function AttachmentPopup({ url, index }) {
  const [open, setOpen] = React.useState(false);

  const fileName = url.split("/").pop();

  return (
    <>
      <span
        className="text-blue-600 underline cursor-pointer text-sm"
        onClick={() => setOpen(true)}
      >
        {fileName || `File ${index + 1}`}
      </span>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white max-w-3xl w-full rounded shadow-lg p-4 relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 cursor-pointer text-gray-500 bg-gray-200 px-2 py-1 hover:text-gray-800"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <div className="mb-3 text-sm font-medium text-gray-700">
              {fileName}
            </div>

            {/* File preview */}
            <iframe
              src={url}
              title={fileName}
              className="w-full h-[60vh] border border-slate-200 rounded"
            />

            <div className="mt-3 text-right">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                Open in new tab
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
