export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImI4SUt4MnhYbGh3WHJvZ1VOQ0x1dnNDaUNHTUpuTno0L3dFbWlaTGNKV2R0L0QvbEVVZlpPMGVlOGN3VStyMVFjMm9CcjIvMlZPeTdWdlNFVXYydkw4dm1aZHVuWnNoNS92R3MyaXcrRzhySSs3aG5hVjB5ai9INUlZbENmNnhBVmJ0b1J1MUs2bDdXSXJEam5UeVpnTCsvZTgxVGVSUU1TaTJ1d2RkZ0EwSW9lbS8vRXBlMEtkR2VwWllQQmdHMmc1UUk3ei9hdmJFRHJlNmhuWDhUN3Rtb1VmSFFRN0RpSktvblJxSStZbS9LdlBxcFA5bnMyRUpwbWl3cW1aMkI5b3Q0UGVJYVduNm12M2JpbVpBODIwRDZkMmk1eFRXeE13dEdZK1JraGU1K3VLM1FKOGFUL1NPQWlVSndDU241OXc9PSIsImlhdCI6MTc3NjE1NzcxMywiZXhwIjoxNzc2MTYxMzEzLCJqdGkiOiJhY2M6MjoxNzc2MTU3NzEzNTYxOndlYiJ9.ulF_tCH3o4mXX-X9F--Vl5sTwJCxwR3aItQxr4QKcdI",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImI4SUt4MnhYbGh3WHJvZ1VOQ0x1dnNDaUNHTUpuTno0L3dFbWlaTGNKV2R0L0QvbEVVZlpPMGVlOGN3VStyMVFjMm9CcjIvMlZPeTdWdlNFVXYydkw4dm1aZHVuWnNoNS92R3MyaXcrRzhySSs3aG5hVjB5ai9INUlZbENmNnhBVmJ0b1J1MUs2bDdXSXJEam5UeVpnTCsvZTgxVGVSUU1TaTJ1d2RkZ0EwSW9lbS8vRXBlMEtkR2VwWllQQmdHMmc1UUk3ei9hdmJFRHJlNmhuWDhUN3Rtb1VmSFFRN0RpSktvblJxSStZbS9LdlBxcFA5bnMyRUpwbWl3cW1aMkI5b3Q0UGVJYVduNm12M2JpbVpBODIwRDZkMmk1eFRXeE13dEdZK1JraGU1K3VLM1FKOGFUL1NPQWlVSndDU241OXc9PSIsImlhdCI6MTc3NjE1NzcxMywiZXhwIjoxNzc2MTYxMzEzLCJqdGkiOiJhY2M6MjoxNzc2MTU3NzEzNTYxOndlYiJ9.ulF_tCH3o4mXX-X9F--Vl5sTwJCxwR3aItQxr4QKcdI`,
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
