export default function formatCellValue(
  value,
  formatter,
  record = {},
  columnInfo = {}
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

    case "date":
      return new Date(value).toLocaleDateString();

    case "time":
      return new Date(value).toLocaleTimeString();

    case "datetime":
      return new Date(value).toLocaleString();

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

    case "url":
      return value ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {value}
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
            value
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
    case "media":
      return (
        <img
          src={value || "/images/noimg.png"}
          alt="media"
          className="w-12 h-12 rounded object-cover"
        />
      );

    case "file":
    case "attachment":
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
      return (
        <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-gray-100 p-2 rounded">
          {typeof value === "object"
            ? JSON.stringify(value, null, 2)
            : String(value)}
        </pre>
      );

    case "uppercase":
      return String(value).toUpperCase();

    case "lowercase":
      return String(value).toLowerCase();

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

    case "content":
      if (!value) return "No Content";
      const cleanValue = String(value)
        .replace(/\\r\\n/g, "<br>")
        .replace(/\\n/g, "<br>")
        .replace(/\\'s/g, "'s")
        .replace(/\\"/g, '"');
      if (cleanValue.length > 40) {
        const abstract = cleanValue.substring(0, 35) + " ...";
        return (
          <div className="cursor-pointer">
            {abstract}
            <div
              className="hidden"
              dangerouslySetInnerHTML={{ __html: cleanValue }}
            />
          </div>
        );
      }
      return <span dangerouslySetInnerHTML={{ __html: cleanValue }} />;

    case "template":
      if (columnInfo?.template) {
        // Replace %field% with record[field]
        return columnInfo.template.replace(
          /%([\w.-]+)%/g,
          (_, key) => record[key] ?? ""
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
