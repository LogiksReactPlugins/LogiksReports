export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IjdndXg4TThmbEFaOG9tN0ZUVFpYVFVIKzViY1NGcFdnVmx4dkZlV3FCVklEeTA3OXpOYjhuazdkK3c4YktXdFgwUTY3S1FUMjFrRnRaOWd0emxreXVHVEFMMFppS3gweVNoWklHbE1vcGhhVzVwYVZ1WGhwZEFGVUJCODlaQlVXeWxQZGUxVUgvVVVOUTFsTkRPQngrRG0rSkh4SVdNLzZZckVDZlFsMXBSZmVzeXVCMFJ6c09UaUF3b01oeGUzWlZLWUx0ME1GUy95Z2xES2FldWp4SFZweVlyMDVMZDZ3NWZrMVU5RjJxWENFRG9nMlo0SGl3Q1lVT1kxSmhPa1BzVWdzOG5EeGVON1hPaHFjdjlNK1Q2U0dyQT09IiwiaWF0IjoxNzc2MTQyODcxLCJleHAiOjE3NzYxNDY0NzEsImp0aSI6ImFjYzoxOjE3NzYxNDI4NzE3MzU6d2ViIn0.RJYhFUaSHSVHAK9Chb4zrptZKt7MAeFhsBZ1S1dHaQQ",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IjdndXg4TThmbEFaOG9tN0ZUVFpYVFVIKzViY1NGcFdnVmx4dkZlV3FCVklEeTA3OXpOYjhuazdkK3c4YktXdFgwUTY3S1FUMjFrRnRaOWd0emxreXVHVEFMMFppS3gweVNoWklHbE1vcGhhVzVwYVZ1WGhwZEFGVUJCODlaQlVXeWxQZGUxVUgvVVVOUTFsTkRPQngrRG0rSkh4SVdNLzZZckVDZlFsMXBSZmVzeXVCMFJ6c09UaUF3b01oeGUzWlZLWUx0ME1GUy95Z2xES2FldWp4SFZweVlyMDVMZDZ3NWZrMVU5RjJxWENFRG9nMlo0SGl3Q1lVT1kxSmhPa1BzVWdzOG5EeGVON1hPaHFjdjlNK1Q2U0dyQT09IiwiaWF0IjoxNzc2MTQyODcxLCJleHAiOjE3NzYxNDY0NzEsImp0aSI6ImFjYzoxOjE3NzYxNDI4NzE3MzU6d2ViIn0.RJYhFUaSHSVHAK9Chb4zrptZKt7MAeFhsBZ1S1dHaQQ`,
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
            "queryid": "reports%40menuManager.main%40source"
        },
        "actions": {
            "forms@hse.induction": {
                "label": "Add Induction",
                "icon": "fa fa-plus"
            }
        },
        "sidebar": {
            "type": "filter",
            "source": {
                "category": {
                      "title": "Select category for filter",
                    "type": "sql",
                    "table": "do_links",
                    "cols": "category as title, category as value",
                    "where": {
                        "blocked": "false",
                      
                    },
                    "groupby": "category",
                    "orderby": "category asc"
                },
                  "weight": {
                      "title": "Whom to Meet/Authorizer",
                    "type": "sql",
                    "table": "do_links",
                    "cols": "weight as title, weight as value",
                    "where": {
                        "blocked": "false",
                    },
                    "groupby": "weight",
                    "orderby": "weight asc"
                }
            }
        },
        "actions": {
            "forms@menuManager.main": {
                "label": "Add Menus",
                "icon": "fa fa-plus"
            }
        },
        "buttons": {
            "infoview@menuManager.main/{id}": {
                "label": "View Menu Manager",
                "icon": "fa fa-eye",
                "class": "masters-terms"
            },
            "forms@menuManager.main/update/{id}": {
                "label": "Edit Menu Manager",
                "icon": "fa fa-pencil",
                "class": "masters-terms"
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
        "module_refid": "menuManager.main",
        "module_type": "reports"
};
