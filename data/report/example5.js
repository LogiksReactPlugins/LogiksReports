export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Iko4ZkxneUtZandKU3pnaU9TZ2ZoNjRIajl1WFJNOE5aUTNHRDBrakJMM0dLNmJvTVJMZ1Bqb1dWR3Rpem1NaUxOcDhheDJDSlN0M3BlVHV0RG5GQjFUelR6cjhreW1FSXlMS2sxdFJQZHlPNHZtM09aRHdIMzlZSisvRnpROEJ2ZHZBS2tTWXFXN29pN2FuMW12RXJrQjJoSDlYQzlNbE5SZytsa0JqR2N2MDVYTlFqSkp5SlZlRDZLNnBVc1BVUE5iREdXblp2V2F0QzlwVWtPUjZyMnQxT0ViN0pSdmU3NU1ZbnVzU2VSRk5iYzhnVDdMZ1dSOXVyMGsrbUZvRVBkcWlqL2pCK0JjL3VVQWFldkxvd212NWFIVWM9IiwiaWF0IjoxNzc2MTYzNzMxLCJleHAiOjE3NzYxNjczMzEsImp0aSI6ImFjYzoxOjE3NzYxNjM3MzE2OTg6d2ViIn0.6zTM0Wca03ElecwYN2hRjpWAj4qSAZUOiI13k2cgjYo",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Iko4ZkxneUtZandKU3pnaU9TZ2ZoNjRIajl1WFJNOE5aUTNHRDBrakJMM0dLNmJvTVJMZ1Bqb1dWR3Rpem1NaUxOcDhheDJDSlN0M3BlVHV0RG5GQjFUelR6cjhreW1FSXlMS2sxdFJQZHlPNHZtM09aRHdIMzlZSisvRnpROEJ2ZHZBS2tTWXFXN29pN2FuMW12RXJrQjJoSDlYQzlNbE5SZytsa0JqR2N2MDVYTlFqSkp5SlZlRDZLNnBVc1BVUE5iREdXblp2V2F0QzlwVWtPUjZyMnQxT0ViN0pSdmU3NU1ZbnVzU2VSRk5iYzhnVDdMZ1dSOXVyMGsrbUZvRVBkcWlqL2pCK0JjL3VVQWFldkxvd212NWFIVWM9IiwiaWF0IjoxNzc2MTYzNzMxLCJleHAiOjE3NzYxNjczMzEsImp0aSI6ImFjYzoxOjE3NzYxNjM3MzE2OTg6d2ViIn0.6zTM0Wca03ElecwYN2hRjpWAj4qSAZUOiI13k2cgjYo`,
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
