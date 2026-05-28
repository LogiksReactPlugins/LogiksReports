const CONSTANTS={
    DEFAULT_EXPORTS :["pdf", "csv", "xml", "htm", "img","all"],
    EXPORT_LABELS : {
        csv: "Export CSV",
        xml: "Export XML",
        htm: "Export HTML",
        img: "Export Image",
        pdf: "Print Report",
        csvdown: "Download CSV",
        email: "Email Report",
        all: "Export All",
    },
    EXPORT_ORDER : ["pdf", "csv", "xml", "htm", "img", "csvdown"],
    REPORT_LOCALSTORAGE_PRIFIX:"RPT-",
    EXPORT_LIMIT:2000
}
export default CONSTANTS