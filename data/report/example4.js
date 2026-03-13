export const report = {
  endPoints: {
    saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/raw`,
    accessToken:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6InQ1RTNYM3B4WFNBbUhTdVA5a3ZBSDNiYW9XRXRlNTJrbzBtWENSQzU4KzA0Zmx6Zk5lbkFGNjNDVnc0R3ozQjh2Y1lHMzV0d0FZT1BOTjZaS2NGd2tnR1VJaWR5N2N6c0M3b3RvMVVYdUhDOGxENFN1bllHeDV5RzF2cWo1T0RtbXEvUEgzU3o0MWZ1bkYzRUlQU2ZDWEozSXIvbzF4OHJzUGJLTWxrUnFsMEVNN241R2IvY2NMRWxEb01pb0owb0J2SmczVUUzZWxuUHBnMjdiODdld3BqbGVWOTUycnQ5MUJtdDlYdXBkY0lsdVlVR0taWTgxUVV6VHEzWUM2bzU4WnJtMnVha0xaVWhLK0RmRkhrNnZ6MnVnWXBtWGp1MjZPMlYiLCJpYXQiOjE3NzMzODE4OTIsImV4cCI6MTc3MzM4NTQ5MiwianRpIjoiYWNjOjI6MTc3MzM4MTg5MjA3NDp3ZWIifQ.lFsMhErHocFT_X5w8gElLn6o4mhJ96DZlnGxc-q0veQ",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6InQ1RTNYM3B4WFNBbUhTdVA5a3ZBSDNiYW9XRXRlNTJrbzBtWENSQzU4KzA0Zmx6Zk5lbkFGNjNDVnc0R3ozQjh2Y1lHMzV0d0FZT1BOTjZaS2NGd2tnR1VJaWR5N2N6c0M3b3RvMVVYdUhDOGxENFN1bllHeDV5RzF2cWo1T0RtbXEvUEgzU3o0MWZ1bkYzRUlQU2ZDWEozSXIvbzF4OHJzUGJLTWxrUnFsMEVNN241R2IvY2NMRWxEb01pb0owb0J2SmczVUUzZWxuUHBnMjdiODdld3BqbGVWOTUycnQ5MUJtdDlYdXBkY0lsdVlVR0taWTgxUVV6VHEzWUM2bzU4WnJtMnVha0xaVWhLK0RmRkhrNnZ6MnVnWXBtWGp1MjZPMlYiLCJpYXQiOjE3NzMzODE4OTIsImV4cCI6MTc3MzM4NTQ5MiwianRpIjoiYWNjOjI6MTc3MzM4MTg5MjA3NDp3ZWIifQ.lFsMhErHocFT_X5w8gElLn6o4mhJ96DZlnGxc-q0veQ`,
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
  "DEBUG": false,
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
};
