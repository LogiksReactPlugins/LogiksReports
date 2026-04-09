export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImlwZDBGeUdLeTM2cVVwMUVvQXNpKzZiK2xzVVQ5aEJEYzJzWDc5TXNpUGhxbXNJN21xM2t2OEdUcFZ6TDlUclkvdUZSWFdUaEluQkZsb1BCUVhMd3pWTVlUNUpwdzlpcnBUTkdsODRpRGN3VGkzYjJzaE15cEhiZG9pWnJwQ3VPNkZTRTJ0QXdMRVI0VVNGOFJMZ2d0b1QrcjV6T1k1a0hnN2FuU1B3Wis3Y09JOEQ3T3dZa1dERG9QdnlGdURlU1UvUllBWXUza29JT3RrQldNYU9QTHlnU3RrYy9oamY5WFZFKzFLUEczSVF1YkQ4WWFOK1NlQklXU3hDZVZ4VTByVDM2VXh0Z2I1aE5UVk9sS0k0SGlIWGtNOFpFMTFxL2VYYzBDS0UydW5XZkI3WGMwRGNCQVZMK3l6RHoiLCJpYXQiOjE3NzU3MTgyNTEsImV4cCI6MTc3NTcyMTg1MSwianRpIjoiYWNjOjE6MTc3NTcxODI1MTc0MDp3ZWIifQ.T7YzcYE5a5-0iUg54fwd44z9WfVhivEAkVRcPhg5dD4",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImlwZDBGeUdLeTM2cVVwMUVvQXNpKzZiK2xzVVQ5aEJEYzJzWDc5TXNpUGhxbXNJN21xM2t2OEdUcFZ6TDlUclkvdUZSWFdUaEluQkZsb1BCUVhMd3pWTVlUNUpwdzlpcnBUTkdsODRpRGN3VGkzYjJzaE15cEhiZG9pWnJwQ3VPNkZTRTJ0QXdMRVI0VVNGOFJMZ2d0b1QrcjV6T1k1a0hnN2FuU1B3Wis3Y09JOEQ3T3dZa1dERG9QdnlGdURlU1UvUllBWXUza29JT3RrQldNYU9QTHlnU3RrYy9oamY5WFZFKzFLUEczSVF1YkQ4WWFOK1NlQklXU3hDZVZ4VTByVDM2VXh0Z2I1aE5UVk9sS0k0SGlIWGtNOFpFMTFxL2VYYzBDS0UydW5XZkI3WGMwRGNCQVZMK3l6RHoiLCJpYXQiOjE3NzU3MTgyNTEsImV4cCI6MTc3NTcyMTg1MSwianRpIjoiYWNjOjE6MTc3NTcxODI1MTc0MDp3ZWIifQ.T7YzcYE5a5-0iUg54fwd44z9WfVhivEAkVRcPhg5dD4`,
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
        "actions":{
  "infoview@menuManager.main/{id}@View '{title}' Menu details": {
                "label": "View Menu Manager",
                "icon": "fa fa-eye",
                "class": "masters-terms"
            }
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
