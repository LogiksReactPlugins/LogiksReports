export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImxzSUExbmVFaS9ZOGtWN3d5TlkzSDFMYlRsWWZKZnUzaW9Za25xYitjTXE1RUJTbXZJNk9FSkNDaU9PVWhhcWZ4RFN5Wnc3UXBEK0pLeFpJZ1Rwc2xiQU5QaC83ZEoxampGalAvRHNnM2QvVVhFYWxWTHIzN1kxTmxVQWRKM0VDM3pnYlM2UjdQb2xUQ0gwYnJTZ2J6cmxhT053Y0J1MVpjak1oelZmM0F5MmVRa1NlemFqSVJicDdSdFVEMTdaMEtjZWh3M25oWWYxOE0xQjVuY1RLV2pSSGhPQ2JyaDE5YlFSY3hFQlg3bmNRZ1dpWFpmMDhiazl2bW4yM044TkhiZEl1RUNJYzNjL0NVSEdyMVBiUWFSRWlNanRxRUwvUXg4SGtHajlSZlg0aDdQb1pxT2pGVllaTDM5UWwzR1BLdEx5TWNudC9zWXlPRmR2bVFpcTVHYkRZYjdMb0hwclYrcU9saXVVVndnNlNpRmQySU9MdjhIcHllWkRYbkU4TkRtZGl0K05sQUZzWU5RVVRVckUxNElZYks4VGhka3FGR0dWbU5iK0ZVcS9BZm1rb2Q0S3FOVTBtbXBTWk1GaGtKcmw3UksyV1JEemFVQ01aQW5nQnVwN0QxVUs5c1lXNHFTST0iLCJpYXQiOjE3Nzg3MzM2ODMsImV4cCI6MTc3ODczNzI4MywianRpIjoiYWNjOjE6MTc3ODczMzY4Mzk1Njp3ZWIifQ.dhLsaF0Whl1Umjj9B_bxMYoJxOGiWL4DsWe9z9T9Ep8",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImxzSUExbmVFaS9ZOGtWN3d5TlkzSDFMYlRsWWZKZnUzaW9Za25xYitjTXE1RUJTbXZJNk9FSkNDaU9PVWhhcWZ4RFN5Wnc3UXBEK0pLeFpJZ1Rwc2xiQU5QaC83ZEoxampGalAvRHNnM2QvVVhFYWxWTHIzN1kxTmxVQWRKM0VDM3pnYlM2UjdQb2xUQ0gwYnJTZ2J6cmxhT053Y0J1MVpjak1oelZmM0F5MmVRa1NlemFqSVJicDdSdFVEMTdaMEtjZWh3M25oWWYxOE0xQjVuY1RLV2pSSGhPQ2JyaDE5YlFSY3hFQlg3bmNRZ1dpWFpmMDhiazl2bW4yM044TkhiZEl1RUNJYzNjL0NVSEdyMVBiUWFSRWlNanRxRUwvUXg4SGtHajlSZlg0aDdQb1pxT2pGVllaTDM5UWwzR1BLdEx5TWNudC9zWXlPRmR2bVFpcTVHYkRZYjdMb0hwclYrcU9saXVVVndnNlNpRmQySU9MdjhIcHllWkRYbkU4TkRtZGl0K05sQUZzWU5RVVRVckUxNElZYks4VGhka3FGR0dWbU5iK0ZVcS9BZm1rb2Q0S3FOVTBtbXBTWk1GaGtKcmw3UksyV1JEemFVQ01aQW5nQnVwN0QxVUs5c1lXNHFTST0iLCJpYXQiOjE3Nzg3MzM2ODMsImV4cCI6MTc3ODczNzI4MywianRpIjoiYWNjOjE6MTc3ODczMzY4Mzk1Njp3ZWIifQ.dhLsaF0Whl1Umjj9B_bxMYoJxOGiWL4DsWe9z9T9Ep8`,
      "Content-Type": "application/json",
    },
  }, 
      "schema": "1.0",
        "title": "QR Listing",
        "category": "QR Listing",
        "privilege": "*",
        "blocked": false,
        "rowlink": false,
        "rowsPerPage": 20,
        "showExtraColumn": false,
        "custombar": false,
        "source": {
            "type": "sql",
            "queryid": "reports%40precastTracking.main%40source"
        },
        "actions": {
            "forms@precastTracking.main": {
                "label": "Add QR Generation Request",
                "icon": "fa fa-plus",
                "policy_1": "precastTracking.create.access"
            }
        },
        "buttons": {
            "infoview@precastTracking.main/{id}": {
                "label": "View",
                "icon": "fa fa-eye"
            },
            "forms@precastTracking.main/update/{id}": {
                "label": "Edit",
                "icon": "fa fa-pencil",
                "policy_1": "precastTracking.update.access"
            },
            "popup@activity_logs.popup_activity_logs/{id}": {
                "label": "History",
                "params": {
                    "ref_src": "forms@precastTracking.main"
                },
                "icon": "fa-solid fa-clock-rotate-left"
            }
        },
        "toolbar": {
            "print": true,
            "export": true,
            "email": false
        },
        "datagrid": {
            "precasttracking_qr_tbl.id": {
                "label": "ID",
                "searchable": true,
                "sortable": true,
                "hidden": true
            },
            "precasttracking_qr_tbl.qr_code_id": {
                "label": "QR Code Id",
                "searchable": true,
                "sortable": true,
                "hidden": false
            },
            "precasttracking_qr_tbl.qr_code": {
                "label": "QR Code",
                "searchable": true,
                "sortable": true,
                "formatter": "attachment",
                "hidden": false
            },
            "precasttracking_qr_request_tbl.category": {
                "label": "category",
                "searchable": true,
                "sortable": true,
                "hidden": false,
                "filter": {
                    "type": "text"
                }
            },
            "precasttracking_qr_request_tbl.sub_category": {
                "label": "Sub Category",
                "searchable": true,
                "sortable": true,
                "hidden": false,
                "filter": {
                    "type": "text"
                }
            },
            "precasttracking_qr_tbl.created_by": {
                "label": "Created By",
                "hidden": true,
                "searchable": true,
                "sortable": true,
                "formatter": "pretty",
                "filter": {
                    "type": "text"
                }
            },
            "precasttracking_qr_tbl.created_on": {
                "label": "Created At",
                "hidden": true,
                "searchable": true,
                "sortable": true,
                "formatter": "date",
                "filter": {
                    "type": "date"
                }
            },
            "precasttracking_qr_tbl.edited_by": {
                "label": "Edited By",
                "hidden": true,
                "searchable": true,
                "sortable": true,
                "formatter": "pretty",
                "filter": {
                    "type": "text"
                }
            },
            "precasttracking_qr_tbl.edited_on": {
                "label": "Created At",
                "hidden": true,
                "searchable": true,
                "sortable": true,
                "formatter": "date",
                "filter": {
                    "type": "date"
                }
            }
        },
        "module_refid": "precastTracking.main",
        "module_type": "reports"

    }
