export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IjM4SHhtVUpraFRPdjc0NkgvVkNKV0JwbWg3NjNkNGQzL1VCMHRXVlhxVjRuRG1JTFl5ZlJVSWc0MmpkWjQvMVZ4TFlkVFpETXZ6TkI3UlRsWWJiZnVBOUtRNGZlV1VFKzhQNTJ5Y0NzZzVJdUpXbVpPa2Q1NWdwbnhiRzFqK1JmUTR2RzhIRDA4eEpKODBObVh6SkNscEVNUkkwQzlud0tDdktHWnhNdTM5N2svclk2cit6RXJUWk5wZlVWM29UaWV1MkhVSXorMVpVQmIrMkZiQks0cDUxM1FHaXh6TEl5bU1Vbmtob1FKZDVpeHhIb1JmZW1qWnQrWVZ3MW96N0Y0Z0pkT2pMUGhGbzRITHpBUk9iU21tTndUZW5ITDJ3L2I5bzYvQTFERnB3Ylg5NDFta1BhOENISEhLd1pSQT09IiwiaWF0IjoxNzc1NjQ3ODc2LCJleHAiOjE3NzU2NTE0NzYsImp0aSI6ImFjYzoxOjE3NzU2NDc4NzY3NjQ6d2ViIn0.22MOWkZPxS1hOO_p3kTV6G5X8G1jCwlQvSVtsQiT1_I",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IjM4SHhtVUpraFRPdjc0NkgvVkNKV0JwbWg3NjNkNGQzL1VCMHRXVlhxVjRuRG1JTFl5ZlJVSWc0MmpkWjQvMVZ4TFlkVFpETXZ6TkI3UlRsWWJiZnVBOUtRNGZlV1VFKzhQNTJ5Y0NzZzVJdUpXbVpPa2Q1NWdwbnhiRzFqK1JmUTR2RzhIRDA4eEpKODBObVh6SkNscEVNUkkwQzlud0tDdktHWnhNdTM5N2svclk2cit6RXJUWk5wZlVWM29UaWV1MkhVSXorMVpVQmIrMkZiQks0cDUxM1FHaXh6TEl5bU1Vbmtob1FKZDVpeHhIb1JmZW1qWnQrWVZ3MW96N0Y0Z0pkT2pMUGhGbzRITHpBUk9iU21tTndUZW5ITDJ3L2I5bzYvQTFERnB3Ylg5NDFta1BhOENISEhLd1pSQT09IiwiaWF0IjoxNzc1NjQ3ODc2LCJleHAiOjE3NzU2NTE0NzYsImp0aSI6ImFjYzoxOjE3NzU2NDc4NzY3NjQ6d2ViIn0.22MOWkZPxS1hOO_p3kTV6G5X8G1jCwlQvSVtsQiT1_I`,
      "Content-Type": "application/json",
    },
  }, 
        "schema": "1.0",
        "title": "Deactive Menu Manager",
        "category": "Tools",
        "privilege": "*",
        "blocked": false,
        "rowlink": false,
        "rowsPerPage": 20,
        "showExtraColumn": false,
        "custombar": false,
        "DEBUG": false,
        "source": {
            "type": "sql",
            "queryid": "reports%40menuManager.blockedMsg%40source"
        },
        "buttons": {
            "infoview@menuManager.main/{id}@View '{title}' Menu details": {
                "label": "View Menu Manager",
                "icon": "fa fa-eye",
                "class": "masters-terms"
            },
            "forms@menuManager.main/update/{id}@Edit '{title}' Menu": {
                "label": "Edit Menu Manager",
                "icon": "fa fa-pencil",
                "class": "masters-terms"
            }
        },
        "sidebar": {
            "type": "list",
            "source": {
                "title": {
                    "type": "sql",
                    "queryid": "reports%40menuManager.blockedMsg%40sidebar.source.title"
                }
            }
        },
        "datagrid": {
            "id": {
                "label": "ID",
                "hidden": false,
                "searchable": true,
                "sortable": true,
                "groupable": false,
                "classes": "",
                "style": "width:50px;",
                "formatter": "text"
            },
            "menuid": {
                "label": "Menu ID",
                "sortable": true,
                "searchable": true,
                "hidden": true
            },
            "title": {
                "label": "Title",
                "sortable": true,
                "searchable": true
            },
            "category": {
                "label": "Category",
                "sortable": true,
                "searchable": true
            },
            "class": {
                "label": "Class",
                "sortable": true,
                "hidden": true,
                "searchable": true
            },
            "onmenu": {
                "label": "OnMenu",
                "sortable": true,
                "searchable": true,
                "filter": {
                    "type": "select",
                    "nofilter": "--",
                    "options": {
                        "false": "False",
                        "true": "True"
                    },
                    "default": "true"
                }
            },
            "blocked": {
                "label": "Blocked",
                "sortable": true,
                "searchable": true,
                "filter": {
                    "type": "select",
                    "nofilter": "--",
                    "options": {
                        "false": "Not Blocked",
                        "true": "Blocked"
                    },
                    "default": "false"
                }
            },
            "to_check": {
                "label": "Scope Rules/Permission",
                "sortable": true,
                "hidden": false,
                "searchable": true
            },
            "link": {
                "label": "Link",
                "sortable": true,
                "hidden": false,
                "searchable": true
            },
            "menugroup": {
                "label": "Menugroup",
                "sortable": true,
                "searchable": true,
                "filter": {
                    "qtype": "EQ"
                }
            },
            "weight": {
                "label": "Weight",
                "sortable": true,
                "searchable": true
            },
            "device": {
                "label": "Device",
                "sortable": true,
                "searchable": true
            },
            "target": {
                "label": "Target",
                "sortable": true,
                "searchable": true
            },
            "edited_by": {
                "label": "Updated By",
                "sortable": true,
                "searchable": true,
                "hidden": true
            },
            "edited_on": {
                "label": "Last Update",
                "formatter": "date",
                "sortable": true,
                "searchable": true,
                "hidden": true
            }
        },
        "module_refid": "menuManager.blockedMsg",
        "module_type": "reports"
    }
