export const report = {
  endPoints: {
    saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IktFUG11MWdLZEdGbXJSUHBPeTlwSUU1ZEQ0OFBwMTdKZnZ3d3lVVFZVQXRSeHVHTUhMM2lTK0taK2ZlcHdKWlVVTXdiUmpPTkRMNG1rSVo1WjZlR3Y5Qit1aFF0VExlUW5WcFdCY0ZPcmdGQTVVRmZza29JMmJVQXVOOXdyNEtwRFhBdEpscWFIM1ptZ3VLSWNaK0NyOVdlNGk2WUU0UERuMzQ4eWk0YUNZcnRpRmMyU21FZUhVcU9HTVlMTkNvZW4zZkFTdnI4MGQ1amY5MmVCQkhKbTRYRWpTaXo4czhRV1RJZkJ1cHlzZC81cG1FbFp3V3UzMWYyaG9EWmExU2MwOWdlcXNqS3k1a3lYdEU4M25rWkR4bHVSMUl0cFJJendnS0VsYzJsIiwiaWF0IjoxNzc0NDI4MzczLCJleHAiOjE3NzQ0MzE5NzMsImp0aSI6ImFjYzoxOjE3NzQ0MjgzNzM4MzI6d2ViIn0.SNAti16iGqG5DI55UKTV-b0UWpDtWWBkq569ZQixCvc",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IktFUG11MWdLZEdGbXJSUHBPeTlwSUU1ZEQ0OFBwMTdKZnZ3d3lVVFZVQXRSeHVHTUhMM2lTK0taK2ZlcHdKWlVVTXdiUmpPTkRMNG1rSVo1WjZlR3Y5Qit1aFF0VExlUW5WcFdCY0ZPcmdGQTVVRmZza29JMmJVQXVOOXdyNEtwRFhBdEpscWFIM1ptZ3VLSWNaK0NyOVdlNGk2WUU0UERuMzQ4eWk0YUNZcnRpRmMyU21FZUhVcU9HTVlMTkNvZW4zZkFTdnI4MGQ1amY5MmVCQkhKbTRYRWpTaXo4czhRV1RJZkJ1cHlzZC81cG1FbFp3V3UzMWYyaG9EWmExU2MwOWdlcXNqS3k1a3lYdEU4M25rWkR4bHVSMUl0cFJJendnS0VsYzJsIiwiaWF0IjoxNzc0NDI4MzczLCJleHAiOjE3NzQ0MzE5NzMsImp0aSI6ImFjYzoxOjE3NzQ0MjgzNzM4MzI6d2ViIn0.SNAti16iGqG5DI55UKTV-b0UWpDtWWBkq569ZQixCvc`,
      "Content-Type": "application/json",
    },
  }, "schema": "1.0",
        "title": "HSE Induction",
        "category": "HSE",
        "privilege": "*",
        "blocked": false,
        "rowlink": false,
        "rowsPerPage": 20,
        "showExtraColumn": false,
        "custombar": false,
        "topbar": {
            "uitype": "type1"
        },
        "DEBUG":true,
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
