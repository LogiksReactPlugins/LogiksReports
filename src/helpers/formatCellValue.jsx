import React from "react";

export default function formatCellValue(
  value,
  formatter,
  record = {},
  columnInfo = {},
  config,
  methods,
) {
  if (!value && value !== false) return "";
  if (formatter && typeof methods[formatter] === "function") {
    const formatted = methods[formatter](value, record, columnInfo, config);

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: formatted ?? "",
        }}
      />
    );
  }
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
          {invalid ? "Invalid Date" : d.toLocaleDateString("en-GB")}
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
            : new Date(2000, month - 1).toLocaleString("en-GB", {
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
          {invalid ? "Invalid Time" : d.toLocaleTimeString("en-GB")}
        </span>
      );
    }

    case "datetime": {
      const d = new Date(value);
      const invalid = isNaN(d.getTime());

      return (
        <span title={String(value)}>
          {invalid ? "Invalid Date" : d.toLocaleString("en-GB")}
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
          LINK
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
    case "media":
      return (
        <img
          src={value || "/images/noimg.png"}
          alt="media"
          className="w-12 h-12 rounded object-cover"
        />
      );

    case "file":
    case "attachment": {
      if (!value) return "No File";
  let links = [];

        const stringValue = String(value).trim();


  const isBase64 =
    stringValue.startsWith("data:");

  if (isBase64) {
    links = [stringValue];
  } else {
    links = stringValue
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  }


      return (
        <div className="flex flex-col gap-1">
          {links.map((link, idx) => (
            <AttachmentPopup key={idx} url={link} index={idx} config={config} />
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

     const plainText = cleanValue.replace(/<[^>]+>/g, "");

const abstract =
  plainText.length > 35
    ? plainText.slice(0, 35) + " ..."
    : plainText;

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

function AttachmentPopup({
  url,
  config,
}) {
  const [open, setOpen] =
    React.useState(false);

  const [previewUrl, setPreviewUrl] =
    React.useState(null);

  const [previewType, setPreviewType] =
    React.useState("");

  const [loading, setLoading] =
    React.useState(false);

  const [frameLoading, setFrameLoading] =
    React.useState(false);

  const [csvText, setCsvText] =
    React.useState("");
  
    const [downloading, setDownloading] =
  React.useState(false);


  const objectUrlRef =
    React.useRef(null);

  const getFileName = () => {
    if (!url) {
      return "Preview";
    }

    // base64
    if (
      typeof url === "string" &&
      url.startsWith("data:")
    ) {
      if (
        url.includes("image/")
      ) {
        return "Image Preview";
      }

      if (
        url.includes("pdf")
      ) {
        return "PDF Preview";
      }

      if (
        url.includes("csv")
      ) {
        return "CSV Preview";
      }

      return "File Preview";
    }

    try {
      const clean =
        url.split("?")[0];

      return (
        clean
          .split("/")
          ?.pop() || "Preview"
      );
    } catch {
      return "Preview";
    }
  };

  const fileName =
    getFileName();

  const isHttp =
    typeof url === "string" &&
    /^https?:\/\//i.test(url);

  const isBase64 =
    typeof url === "string" &&
    url.startsWith("data:");

  const cleanPath =
    typeof url === "string" &&
    url.includes("&")
      ? url
          .split("&")
          .slice(1)
          .join("&")
      : url;

      const unsupportedPreviewConfig = {
  excel: {
    title: "Excel File",
    description:
      "Excel preview is not supported in browser",
    buttonText:
      "Download Excel File",
    bg: "from-green-50 to-white",
    button:
      "bg-green-600 hover:bg-green-700",
    iconBg: "bg-green-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-14 h-14"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 1.5L18.5 8H14zM8.6 17l1.9-3-1.8-2.9h1.8l1 1.8 1-1.8h1.8L13.5 14l1.9 3h-1.9l-1.1-1.9L11.3 17z" />
      </svg>
    ),
  },

  doc: {
    title: "Word Document",
    description:
      "Document preview is not supported in browser",
    buttonText:
      "Download Document",
    bg: "from-blue-50 to-white",
    button:
      "bg-blue-600 hover:bg-blue-700",
    iconBg: "bg-blue-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-14 h-14"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 1.5L18.5 8H14zM8 12h8v1.5H8zm0 3h6v1.5H8zm0-6h8v1.5H8z" />
      </svg>
    ),
  },

  ppt: {
    title:
      "PowerPoint Presentation",
    description:
      "Presentation preview is not supported in browser",
    buttonText:
      "Download Presentation",
    bg: "from-orange-50 to-white",
    button:
      "bg-orange-600 hover:bg-orange-700",
    iconBg:
      "bg-orange-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-14 h-14"
      >
        <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 7h4a3 3 0 1 1 0 6H9v3H8zm1 1v4h3a2 2 0 1 0 0-4z" />
      </svg>
    ),
  },

  zip: {
    title: "Archive File",
    description:
      "Archive preview is not supported in browser",
    buttonText:
      "Download Archive",
    bg: "from-gray-50 to-white",
    button:
      "bg-gray-700 hover:bg-gray-800",
    iconBg: "bg-gray-700",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-14 h-14"
      >
        <path d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-6-6zm3 1v5h5v12H7V4h3zm1 8h2v2h-2zm0 3h2v2h-2z" />
      </svg>
    ),
  },
  pdf: {
  title: "PDF Document",
  description:  "PDF preview is not supported on this device",
  buttonText: "Download PDF",
  bg: "from-red-50 to-white",
  button:
    "bg-red-600 hover:bg-red-700",
  iconBg: "bg-red-600",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-14 h-14"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    </svg>
  ),
},
};

const unsupportedPreview =
  unsupportedPreviewConfig[
    previewType
  ];

const isNative =
  window?.Capacitor?.isNativePlatform?.();

  const showUnsupportedPreview =
  ["excel", "doc", "ppt", "zip"].includes(
    previewType
  );

  React.useEffect(() => {
    if (!open) {
      setPreviewUrl(null);
      setPreviewType("");
      setCsvText("");
      setLoading(false);
      setFrameLoading(false);

      return;
    }

    const resetState = () => {
      setPreviewUrl(null);
      setPreviewType("");
      setCsvText("");
      setFrameLoading(false);
    };

    // direct preview
    if (isHttp || isBase64) {
      resetState();

      setPreviewUrl(url);

      if (
        url?.startsWith(
          "data:image"
        ) ||
        /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(
          url
        )
      ) {
        setPreviewType("image");
      } else if (
        url?.startsWith(
          "data:application/pdf"
        ) ||
        /\.pdf$/i.test(url)
      ) {
        setPreviewType("pdf");
      }  else if (
  /\.(xlsx|xls)$/i.test(
    url
  )
) {
  setPreviewType(
    "excel"
  );
} else if (
  /\.(doc|docx)$/i.test(
    url
  )
) {
  setPreviewType("doc");
} else if (
  /\.(ppt|pptx)$/i.test(
    url
  )
) {
  setPreviewType("ppt");
} else if (
  /\.(zip|rar|7z)$/i.test(
    url
  )
) {
  setPreviewType("zip");
} else if (
  /\.csv$/i.test(url)
) {
  setPreviewType("csv");
}

      setLoading(false);
      setFrameLoading(false);

      return;
    }

    if (
      !cleanPath ||
      !config?.endPoints?.preview
    ) {
      setLoading(false);
      setFrameLoading(false);

      return;
    }

    const controller =
      new AbortController();

    const loadPreview =
      async () => {
        try {
          setLoading(true);
          setFrameLoading(true);

          resetState();

          const res = await fetch(
            `${config?.endPoints?.preview}?uri=${encodeURIComponent(
              cleanPath
            )}`,
            {
              headers:
                config?.endPoints
                  ?.headers || {},
              signal:
                controller.signal,
            }
          );

          if (!res.ok) {
            throw new Error(
              "Preview fetch failed"
            );
          }

          const contentType =
            res.headers.get(
              "content-type"
            ) || "";

          const blob =
            await res.blob();

          const isExcelType =
            contentType.includes(
              "spreadsheet"
            ) ||
            contentType.includes(
              "excel"
            );

          const isCsvType =
            contentType.includes(
              "csv"
            ) ||
            contentType.includes(
              "text/plain"
            ) ||
            contentType.includes(
              "text/csv"
            );
            const isDocType =
  contentType.includes(
    "word"
  ) ||
  contentType.includes(
    "document"
  );

const isPptType =
  contentType.includes(
    "presentation"
  ) ||
  contentType.includes(
    "powerpoint"
  );

const isZipType =
  contentType.includes(
    "zip"
  ) ||
  contentType.includes(
    "compressed"
  );


          const isSupported =
            contentType.startsWith(
              "image/"
            ) ||
            contentType.includes(
              "pdf"
            ) ||
            isExcelType ||
            isCsvType ||
  isDocType ||
  isPptType ||
  isZipType;

          if (!isSupported) {
            throw new Error(
              "Preview not supported"
            );
          }

          // cleanup old blob
          if (
            objectUrlRef.current
          ) {
            URL.revokeObjectURL(
              objectUrlRef.current
            );
          }

          const blobUrl =
            URL.createObjectURL(
              blob
            );

          objectUrlRef.current =
            blobUrl;

          setPreviewUrl(blobUrl);

          if (
            contentType.startsWith(
              "image/"
            )
          ) {
            setPreviewType(
              "image"
            );
          } else if (
            contentType.includes(
              "pdf"
            )
          ) {
            setPreviewType("pdf");
         } else if (
  isExcelType
) {
  setPreviewType(
    "excel"
  );
} else if (
  isDocType
) {
  setPreviewType("doc");
} else if (
  isPptType
) {
  setPreviewType("ppt");
} else if (
  isZipType
) {
  setPreviewType("zip");
} else if (
  isCsvType
) {
            const text =
              await blob.text();

            setCsvText(text);

            setPreviewType("csv");
          }
        } catch (e) {
          if (
            e.name !==
            "AbortError"
          ) {
            console.error(
              "Preview load failed",
              e
            );
          }

          resetState();
        } finally {
          // IMPORTANT FIX
          // prevent infinite loading
          setLoading(false);
          setFrameLoading(false);
        }
      };

    loadPreview();

    return () => {
      controller.abort();

      if (
        objectUrlRef.current
      ) {
        URL.revokeObjectURL(
          objectUrlRef.current
        );

        objectUrlRef.current =
          null;
      }
    };
  }, [
    open,
    url,
    isHttp,
    isBase64,
    cleanPath,
    config?.endPoints?.preview,
  ]);

  const isImage =
    previewType === "image";

  const isPdf =
    previewType === "pdf";

  const isExcel =
    previewType === "excel";

  const isCsv =
    previewType === "csv";

  const handleClose = () => {
    setOpen(false);

    setPreviewUrl(null);

    setPreviewType("");

    setCsvText("");

    setLoading(false);

    setFrameLoading(false);

    if (
      objectUrlRef.current
    ) {
      URL.revokeObjectURL(
        objectUrlRef.current
      );

      objectUrlRef.current =
        null;
    }
  };

const handleDownload = async () => {
  if (downloading) return;

setDownloading(true);

  try {
    let downloadUrl = url;
    let blob = null;

    if (
      !isHttp &&
      !isBase64 &&
      cleanPath
    ) {
      const res = await fetch(
        `${config?.endPoints?.preview}?uri=${encodeURIComponent(
          cleanPath
        )}`,
        {
          headers:
            config?.endPoints?.headers || {},
        }
      );

      if (!res.ok) {
        throw new Error("Download failed");
      }

      blob = await res.blob();

      downloadUrl =
        URL.createObjectURL(blob);
    }

    if (
      config?.native?.downloadFile &&
      typeof config.native.downloadFile ===
        "function" &&
      blob
    ) {
      await config.native.downloadFile(
        blob,
        fileName
      );

      return;
    }

    const a =
      document.createElement("a");

    a.href = downloadUrl;
    a.download =
      fileName || "download";

    document.body.appendChild(a);

    a.click();

    a.remove();

    if (
      downloadUrl?.startsWith(
        "blob:"
      )
    ) {
      setTimeout(() => {
        URL.revokeObjectURL(
          downloadUrl
        );
      }, 1000);
    }
  } catch (err) {
    console.error(
      "Download failed",
      err
    );
  }finally {
    setDownloading(false);
  }
};

  return (
    <>
      <span
        className="text-blue-600 underline cursor-pointer text-sm"
        onClick={() => {
          setOpen(true);
        }}
      >
        LINK
      </span>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={(e) => {
            if (
              e.target ===
              e.currentTarget
            ) {
              handleClose();
            }
          }}
        >
          <div className="bg-white max-w-6xl w-full rounded-xl shadow-lg relative overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between border-b px-4 py-3 gap-3">
              <div
                className="text-sm font-medium text-gray-700 truncate max-w-[75%]"
                title={fileName}
              >
                {fileName}
              </div>

              <div className="flex items-center gap-2">
                <button
                  className={`cursor-pointer text-sm text-white rounded px-3 py-1 flex items-center gap-2 ${
                    downloading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  onClick={handleDownload}
                  disabled={downloading}
                >
                  {downloading && (
                    <span className="inline-block w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}

                  {downloading
                    ? "Downloading..."
                    : "Download"}
                </button>

                <button
                  className="cursor-pointer text-gray-500 hover:text-black bg-gray-100 hover:bg-gray-200 rounded px-2 py-1 text-sm"
                  onClick={
                    handleClose
                  }
                >
                  ✕
                </button>
              </div>
            </div>

            {/* body */}
            <div className="p-4 min-h-[300px] flex items-center justify-center">
              {(loading ||
                frameLoading) && (
                <div className="text-sm text-gray-500">
                  Loading
                  preview...
                </div>
              )}

            {!loading &&
  !frameLoading &&
  (previewUrl ||
    (isNative && isPdf)) && (
                  <>
                    {/* image */}
                    {isImage && (
                      <img
                        src={
                          previewUrl
                        }
                        alt={fileName}
                        onLoad={() =>
                          setFrameLoading(
                            false
                          )
                        }
                        onError={() => {
                          setFrameLoading(
                            false
                          );

                          setPreviewUrl(
                            null
                          );
                        }}
                        className="max-w-full max-h-[75vh] rounded"
                      />
                    )}

   {/* PDF - Web */}
{isPdf && !isNative && (
  <iframe
    src={previewUrl}
    title={fileName}
    onLoad={() =>
      setFrameLoading(false)
    }
    onError={() => {
      setFrameLoading(false);
      setPreviewUrl(null);
    }}
    className="w-full h-[75vh] border rounded"
  />
)}

{/* PDF - Capacitor */}
{isPdf && isNative && (
  <div
    className={`w-full min-h-[420px] flex flex-col items-center justify-center gap-5 border border-gray-200 rounded-xl bg-gradient-to-b ${unsupportedPreviewConfig.pdf.bg}`}
  >
    <div
      className={`w-24 h-24 rounded-2xl text-white flex items-center justify-center shadow-lg ${unsupportedPreviewConfig.pdf.iconBg}`}
    >
      {unsupportedPreviewConfig.pdf.icon}
    </div>

    <div className="text-center">
      <div className="text-lg font-semibold text-gray-800">
        {unsupportedPreviewConfig.pdf.title}
      </div>

      <div className="text-sm text-gray-500 break-all px-4">
        {fileName}
      </div>
    </div>

    <button
      onClick={handleDownload}
      className={`${unsupportedPreviewConfig.pdf.button} text-white px-5 py-2.5 rounded-lg`}
    >
      {unsupportedPreviewConfig.pdf.buttonText}
    </button>
  </div>
)}
                    {/* csv */}
                    {isCsv && (
                      <div className="w-full overflow-auto max-h-[75vh] border rounded p-3 bg-gray-50">
                        <pre className="text-xs whitespace-pre-wrap">
                          {
                            csvText
                          }
                        </pre>
                      </div>
                    )}

                    {/* excel */}
                {/* excel */}
{/* unsupported preview */}
{showUnsupportedPreview &&  (  <div
    className={`w-full min-h-[420px] flex flex-col items-center justify-center gap-5 border border-gray-200 rounded-xl bg-gradient-to-b ${unsupportedPreview.bg}`}
  >
    {/* icon */}
    <div
      className={`w-24 h-24 rounded-2xl text-white flex items-center justify-center shadow-lg text-2xl font-bold ${unsupportedPreview.iconBg}`}
    >
      {
        unsupportedPreview.icon
      }
    </div>

    {/* text */}
    <div className="text-center space-y-1">
      <div className="text-lg font-semibold text-gray-800">
        {
          unsupportedPreview.title
        }
      </div>

      <div className="text-sm text-gray-500 max-w-md break-all px-4">
        {fileName}
      </div>

    </div>

    {/* action */}
 <button
  onClick={handleDownload}
  disabled={downloading}
  className={`${unsupportedPreview.button} text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow flex items-center justify-center gap-2 ${
    downloading
      ? "opacity-70 cursor-not-allowed"
      : ""
  }`}
>
  {downloading && (
    <span className="inline-block w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
  )}

  {downloading
    ? "Downloading..."
    : unsupportedPreview.buttonText}
</button>
  </div>
)}
                  </>
                )}
{!loading &&
 !previewUrl &&
 !showUnsupportedPreview &&
 !(isPdf && isNative) && (
                  <div className="text-sm text-red-500 flex flex-col items-center gap-2">
                    <div>
                      Preview not
                      available
                    </div>

                    {url && (
                   <button
                                onClick={handleDownload}
                                disabled={downloading}
                                className={`text-sm flex items-center gap-2 ${
                                  downloading
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "text-blue-600 underline"
                                }`}
                              >
                                {downloading && (
                                  <span className="inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                )}

                                {downloading
                                  ? "Downloading..."
                                  : "Download File"}
                              </button>
                    )}
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}