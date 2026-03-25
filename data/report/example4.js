export const report = {
  endPoints: {
    saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IktHVEgrOWtmM0dGTXBLdldqblJwRExPalhmTVdseTZabUtXV3lhazBWblJIQzVUdUdvNEx3OUtxdUx5empSQUhSNUpPT0E0RDNFb1hiNHJ4bHFZS3A1QXBQZ3EwNGdEOU9WQ0lxR2lhVVdYNUpOcWp1WnNScTNCUFRmTGtRL1RBcThHQmxIV0o0a0hnUCtFOHFWK0l3akJiT1M2RjJPcitiRGJlYXFMRFZGbEdkdUhnTVM3Q3gxcTdKeHl3T3cwZHhvNVlEeFFXWHFyV2NvckRDT3NnTzVJQ1YxZ0NrOWRRMmtOZVVSd1Z6eVNhWjlOTXluaU1ET0QwbUR6alZwTEt2WHVqcnVQanMrUXBHZklud3VYaHBsNWU2R2pQeHBpTTlMeWJYQ1Z5IiwiaWF0IjoxNzc0NDM5MTkxLCJleHAiOjE3NzQ0NDI3OTEsImp0aSI6ImFjYzoxOjE3NzQ0MzkxOTE1NjA6d2ViIn0.xTXDvT9RqWfZSLpRUxcTzS2Y4Ob9DsTPcqSs304cZJs",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IktHVEgrOWtmM0dGTXBLdldqblJwRExPalhmTVdseTZabUtXV3lhazBWblJIQzVUdUdvNEx3OUtxdUx5empSQUhSNUpPT0E0RDNFb1hiNHJ4bHFZS3A1QXBQZ3EwNGdEOU9WQ0lxR2lhVVdYNUpOcWp1WnNScTNCUFRmTGtRL1RBcThHQmxIV0o0a0hnUCtFOHFWK0l3akJiT1M2RjJPcitiRGJlYXFMRFZGbEdkdUhnTVM3Q3gxcTdKeHl3T3cwZHhvNVlEeFFXWHFyV2NvckRDT3NnTzVJQ1YxZ0NrOWRRMmtOZVVSd1Z6eVNhWjlOTXluaU1ET0QwbUR6alZwTEt2WHVqcnVQanMrUXBHZklud3VYaHBsNWU2R2pQeHBpTTlMeWJYQ1Z5IiwiaWF0IjoxNzc0NDM5MTkxLCJleHAiOjE3NzQ0NDI3OTEsImp0aSI6ImFjYzoxOjE3NzQ0MzkxOTE1NjA6d2ViIn0.xTXDvT9RqWfZSLpRUxcTzS2Y4Ob9DsTPcqSs304cZJs`,
      "Content-Type": "application/json",
    },
  }, "schema": "1.0",
        "title": "HSE Induction",
        "category": "HSE",
        "privilege": "*",
        "blocked": false,
        "rowlink": false,
        "rowsPerPage": 20,
        "showExtraColumn": "checkbox",
        "custombar": false,
        "topbar": {
            "uitype": "type1"
        },
        "source": {
            "type": "sql",
            "queryid": "reports%40hse.induction%40source"
        },
        "actions": {
            "forms@hse.induction": {
                "label": "Add Induction",
                "icon": "fa fa-plus"
            }
        },
        "buttons": {
            "infoview@hse.induction/{id}": {
                "label": "View Induction",
                "icon": "fa fa-eye"
            },
            "forms@hse.induction/update/{id}": {
                "label": "Edit Induction",
                "icon": "fa fa-pencil"
            },
            "popup@activity_logs.popup_activity_logs/{id}": {
                "label": "History",
                "params": {
                    "ref_src": "forms@hse.induction",
                    "columns": [
                        "created_on",
                        "category",
                        "subject"
                    ]
                },
                "icon": "fa-solid fa-clock-rotate-left"
            },
            "api@hse.deleteRecord": {
                "label": "Delete Induction",
                "icon": "fa fa-trash",
                "lgksConfirm": "Are you sure you want to delete this record?",
                "payload": "hse.induction.reports.buttons.api@hse.deleteRecord"
            }
        },
        "toolbar": {
            "search": true,
            "print": true,
            "export": true,
            "email": false
        },
        "datagrid": {
            "hse_induction.id": {
                "label": "ID",
                "searchable": true,
                "sortable": true,
                "groupable": false,
                "style": "width:50px;",
                "hidden": true
            },
            "date": {
                "label": "Date",
                "sortable": true,
                "formatter": "date",
                "searchable": true
            },
            "conducted_by_department": {
                "label": "Conducted By Department",
                "sortable": true,
                "searchable": true,
                "formatter": "pretty"
            },
            "user_name": {
                "label": "Conducted By (Name)",
                "sortable": true,
                "searchable": true
            },
            "participant_count": {
                "label": "Participants",
                "sortable": true,
                "searchable": true
            },
            "photo_attendance": {
                "label": "Induction Photo/Attendance",
                "sortable": true,
                "searchable": true,
                "formatter": "attachment"
            },
            "hse_induction.created_by": {
                "label": "Added By",
                "sortable": true,
                "searchable": true,
                "formatter": "pretty",
                "filter": {
                    "type": "text"
                }
            },
            "hse_induction.created_on": {
                "label": "Added On",
                "sortable": true,
                "searchable": true,
                "formatter": "datetime",
                "hidden": true,
                "filter": {
                    "type": "date"
                }
            },
            "hse_induction.edited_by": {
                "label": "Updated By",
                "sortable": true,
                "searchable": true,
                "formatter": "pretty",
                "filter": {
                    "type": "text"
                }
            },
            "hse_induction.edited_on": {
                "label": "Updated On",
                "sortable": true,
                "searchable": true,
                "formatter": "datetime",
                "hidden": true,
                "filter": {
                    "type": "date"
                }
            }
        },
        "module_refid": "hse.induction",
        "module_type": "reports"
};
