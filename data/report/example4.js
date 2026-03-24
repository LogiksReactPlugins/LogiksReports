export const report = {
  endPoints: {
    saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImtGNlBRMmg3UUdOZFZRa3RVMDBLSUJPeXNaU0QvZmJYOU1pZ3k1WUpyRHRuUEtSNWpRWUJkU1MxUHFiTmgybm5aZGUvMU8rNnRXMzV2d1EzNHlyYk1hbmRnRnpqTnZid0NxK2NxTS9ZZHRheG8xeW45WUF3QnNJMEEwcHBHbDh1SVlpS3lJWmJudG5XbXNuaU5uNTlRUEY4TW11M3NwczJmemIzbFFucEtNR2JTaDZzdWFZcENuY0ZBKzVMby8yZ1VzNFRoTVJJUUJPQ0Mwalpqa3NFdFgzamFtcEtuVEtaQ2M4ZEFZSnJMZ2lybmNGUXhFYWZDU1p2MDRnMFZ1YzFwYXpvKzEwU21lTGErS3dVcDdXLzVFZXE4bG5uZHlVdEZoRytiRXc9IiwiaWF0IjoxNzc0MzU0OTE3LCJleHAiOjE3NzQzNTg1MTcsImp0aSI6ImFjYzoxOjE3NzQzNTQ5MTc0NTU6d2ViIn0.FxZIJE1q0B_ABF55goaSPKMYPiWvNijP5xqHCrrTJp8",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImtGNlBRMmg3UUdOZFZRa3RVMDBLSUJPeXNaU0QvZmJYOU1pZ3k1WUpyRHRuUEtSNWpRWUJkU1MxUHFiTmgybm5aZGUvMU8rNnRXMzV2d1EzNHlyYk1hbmRnRnpqTnZid0NxK2NxTS9ZZHRheG8xeW45WUF3QnNJMEEwcHBHbDh1SVlpS3lJWmJudG5XbXNuaU5uNTlRUEY4TW11M3NwczJmemIzbFFucEtNR2JTaDZzdWFZcENuY0ZBKzVMby8yZ1VzNFRoTVJJUUJPQ0Mwalpqa3NFdFgzamFtcEtuVEtaQ2M4ZEFZSnJMZ2lybmNGUXhFYWZDU1p2MDRnMFZ1YzFwYXpvKzEwU21lTGErS3dVcDdXLzVFZXE4bG5uZHlVdEZoRytiRXc9IiwiaWF0IjoxNzc0MzU0OTE3LCJleHAiOjE3NzQzNTg1MTcsImp0aSI6ImFjYzoxOjE3NzQzNTQ5MTc0NTU6d2ViIn0.FxZIJE1q0B_ABF55goaSPKMYPiWvNijP5xqHCrrTJp8`,
      "Content-Type": "application/json",
    },
  },
  "schema": "1.0",
  "title": "My Files - All Files",
  "category": "Profile",
  "privilege": "*",
  "blocked": false,
  "rowlink": false,
  "rowsPerPage": 20,
  "showExtraColumn": "checkbox",
  "uiswitcher": true,
  "custombar": false,
  "topbar": {
    "uitype": "type1"
  },
  "DEBUG": true,
 "source": {
            "type": "sql",
            "queryid": "reports%40eoffice.allFiles%40source"
        },
  "actions": {
    "api@eoffice.on_hold": {
      "label": "Hold",
      "icon": "fa-solid fa-pause",
      "lgksPrompt": "Add Remark"
    },
    "api@eoffice.markAsComplete": {
      "label": "Mark As Complete",
      "icon": "fa-solid fa-check-double"
    }
  },
  "buttons": {
    "page@eoffice.chat": {
      "label": "{file_code}",
      "icon": "fa-solid fa-circle-info"
    }
  },
  "toolbar": {
    "search": true,
    "print": true,
    "email": false
  },
  "datagrid": {
    "eoffice_files_tbl.id": {
      "label": "ID",
      "hidden": true,
      "searchable": true,
      "sortable": true,
      "groupable": false,
      "classes": "",
      "style": "width:50px;",
      "formatter": "text"
    },
    "eoffice_files_tbl.file_code": {
      "label": "File No.",
      "searchable": true,
      "sortable": true,
      "hidden": true,
      "unilink": "page@eoffice.chat"
    },
    "eoffice_files_tbl.subject": {
      "label": "Subject",
      "searchable": true,
      "sortable": true,
      "hidden": false,
      "unilink": "page@eoffice.chat",
      "editable":{
        type:"dropdown",
      }
    },
    "eoffice_files_tbl.seen_at": {
      "label": "Seen At",
      "sortable": true,
      "hidden": false,
      "formatter": "datetime"
    },
    "eoffice_files_tbl.status": {
      "label": "Status",
      "searchable": true,
      "sortable": true,
      "hidden": true,
      "formatter": "pretty",
      "groupable": true
    },
    "eoffice_files_tbl.pending_at": {
      "label": "Currently With",
      "sortable": true,
      "searchable": true,
      "groupable": true
    },
    "eoffice_files_tbl.created_by": {
      "label": "Created By",
      "searchable": true,
      "sortable": true,
      "hidden": true,
      "groupable": true
    },
    "eoffice_files_tbl.created_on": {
      "label": "Total Ageing",
      "searchable": true,
      "sortable": true,
      "hidden": false,
      "formatter": "edge",
      "groupable": true
    },
    "eoffice_files_tbl.created_date": {
      "label": "Created On",
      "searchable": true,
      "sortable": true,
      "hidden": false,
      "groupable": true,
      "filter": {
        "type": "date"
      }
    },
    "eoffice_files_tbl.edited_on": {
      "label": "Edited On",
      "sortable": true,
      "searchable": true,
      "formatter": "datetime",
      "hidden": true,
      "filter": {
        "type": "daterange"
      }
    }
  },
  script:
    "ZnVuY3Rpb24gdGVzdChkYXRhKSB7CiAgY29uc29sZS5sb2coeyBkYXRhIH0pOwogIGFsZXJ0KCJ0aGlzIGlzIHRlc3QgZnVuY3Rpb24gZnJvbSBBUEkgc2NyaXB0Iik7Cn0K",
  module_refid: "lead.main",
  module_type: "reports",
  cards: {
    colmap: {
      title: "eoffice_files_tbl.file_code",
      descs: "eoffice_files_tbl.subject",
      category: "eoffice_files_tbl.status",
      due_date: "eoffice_files_tbl.created_on",
      avatar: "persona_avatar",
      color: "status",
    },
    colormap: {
      active: "card_green",
      under_notice: "card_red",
      probationary: "card_blue",
    },
    unilink: "staff.main",
    default_avatar: true,
  },
  kanban: {
    colkeys: {
          "eoffice_files_tbl.created_by": {
        label: "created by",
      },
      "eoffice_files_tbl.file_code": {
        label: "File code",
      },
  
      editable: {
        label: "editable",
      },
      status: {
        label: "status",
      },
      visibility: {
        label: "visibility",
      },
    },
    colmap: {
      title: "eoffice_files_tbl.file_code",
      // "descs": "department",
      department: "created_by",
      descs: "eoffice_files_tbl.subject",
      category: "eoffice_files_tbl.status",

      due_date: "dtoe",
      avatar: "persona_avatar",

      color: "type",
      tags: "role",
      counter: "rating",
    },
    unilink: "staff.main",
  },
    calendar: {
    colmap: {
      title: "eoffice_files_tbl.file_code",
      descs: "eoffice_files_tbl.subject",
    },

    date_col: {
      "eoffice_files_tbl.created_on": "#333",
      "eoffice_files_tbl.edited_on": "orange",
    },
    unilink: "staff.main",
    notes_user:
      "<div class='text-center' style='color:white;'><span style='background:#333;padding:5px;'>created on</span><span style='background:orange;padding:5px;'>edited on</span></div>",
  },
    gallery: {
    colmap: {
      avatar: "eoffice_files_tbl.file_code",
      title: "eoffice_files_tbl.file_code",
      descs: "eoffice_files_tbl.subject",
      due_date: "eoffice_files_tbl.created_on",
    },
    unilink: "staff.main",
  },
};
