export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IjdGS0w0M2NPd1FSMXd1RUVDWUdaSjNocFphVnZRdHhRTTVHdmw0b1dDOEtvY29yN1cxdG53NWR5Nk05cnZBbHl5cVJOOGpnWjlwSDYyVjV2RTZ3eStqSHl2Rk51WWpxTnlaOEVPZkZuWnJTWWtNT00rYUlwSHg1RXhlVUJzbk1aMlVCTk5HQ09tQ2lHcDF5Sy9zYXpnWFVmMFFjSFhJVHdiWkMxYXZsTGdXRjVhQ2hGUUVycVVHL2RuTkllVXZVdmNaa1hrNW81Q0VTSWtodTVqNG9mWm9rNklicHgzV0t2eFFjdlRKYkp5ZklmeUNLdXQ5aDY5Q08yLzFManhMQmNzQk0rQ0NENlowa3hGS3p1NENmUlg5cE5HYmswR0xUMVFxOGdHdEZIMGdMdW5YcjBSd0o2SXlQanpaS0dKSms9IiwiaWF0IjoxNzc1NDc0ODY0LCJleHAiOjE3NzU0Nzg0NjQsImp0aSI6ImFjYzoxOjE3NzU0NzQ4NjQ3OTM6d2ViIn0.yER3v0MeZO6fJby8cTwyoT7gF6ige1_aem7Y30uALrU",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IjdGS0w0M2NPd1FSMXd1RUVDWUdaSjNocFphVnZRdHhRTTVHdmw0b1dDOEtvY29yN1cxdG53NWR5Nk05cnZBbHl5cVJOOGpnWjlwSDYyVjV2RTZ3eStqSHl2Rk51WWpxTnlaOEVPZkZuWnJTWWtNT00rYUlwSHg1RXhlVUJzbk1aMlVCTk5HQ09tQ2lHcDF5Sy9zYXpnWFVmMFFjSFhJVHdiWkMxYXZsTGdXRjVhQ2hGUUVycVVHL2RuTkllVXZVdmNaa1hrNW81Q0VTSWtodTVqNG9mWm9rNklicHgzV0t2eFFjdlRKYkp5ZklmeUNLdXQ5aDY5Q08yLzFManhMQmNzQk0rQ0NENlowa3hGS3p1NENmUlg5cE5HYmswR0xUMVFxOGdHdEZIMGdMdW5YcjBSd0o2SXlQanpaS0dKSms9IiwiaWF0IjoxNzc1NDc0ODY0LCJleHAiOjE3NzU0Nzg0NjQsImp0aSI6ImFjYzoxOjE3NzU0NzQ4NjQ3OTM6d2ViIn0.yER3v0MeZO6fJby8cTwyoT7gF6ige1_aem7Y30uALrU`,
      "Content-Type": "application/json",
    },
  }, 
        "schema": "1.0",
        "title": "User Project Matrix",
        "category": "CMS",
        "privilege": "*",
        "blocked": false,
        "rowlink": false,
        "rowsPerPage": 20,
        "showExtraColumn": false,
        "custombar": false,
        "source": {
            "type": "sql",
            "queryid": "reports%40userManager.projectUserMapping%40source"
        },
        "sidebar": {
            "type": "list",
            "title":"test title",
            "source": {
                "userid": {
                    "type": "sql",
                    "queryid": "reports%40userManager.projectUserMapping%40sidebar.source.userid"
                }
            }
        },
        "actions": {
            "forms@userManager.projectUserMapping@Add Mapping": {
                "label": "Add Mapping",
                "icon": "fa fa-plus"
            }
        },
        "buttons": {
            "infoview@userManager.updateProjectUserMapping/{id}@View {userid} Mapping": {
                "label": "User Information",
                "icon": "fa fa-eye"
            },
            "forms@userManager.updateProjectUserMapping/update/{id}@Edit {userid} User": {
                "label": "Edit Mapping",
                "icon": "fa fa-pencil"
            }
        },
        "toolbar": {
            "search": true,
            "print": true,
            "email": false
        },
        "datagrid": {
            "id": {
                "label": "ID",
                "hidden": true,
                "searchable": false,
                "sortable": true,
                "groupable": false,
                "classes": "",
                "style": "width:50px;",
                "formatter": "text"
            },
            "userid": {
                "label": "User ID",
                "sortable": true,
                "searchable": true,
                "groupable": true
            },
            "company_spv_id": {
                "label": "Company/ SPV ID",
                "searchable": true,
                "hidden": true
            },
            "company_tbl.company_code": {
                "label": "Company Code",
                "searchable": true,
                "sortable": true,
                "hidden": true
            },
            "company_tbl.company_title": {
                "label": "Company/ SPV",
                "searchable": true,
                "sortable": true,
                "groupable": true
            },
            "sector_id": {
                "label": "Sector ID",
                "searchable": true,
                "hidden": true
            },
            "data_sector.sector_code": {
                "label": "Sector Code",
                "searchable": true,
                "sortable": true,
                "hidden": true
            },
            "data_sector.sector_title": {
                "label": "Sector",
                "searchable": true,
                "sortable": true,
                "groupable": true
            },
            "project_function_id": {
                "label": "Project/ Function ID",
                "searchable": true,
                "hidden": true
            },
            "data_project_function.pf_code": {
                "label": "Project/ Function Code",
                "searchable": true,
                "sortable": true,
                "hidden": true
            },
            "data_project_function.pf_title": {
                "label": "Project/ Function",
                "searchable": true,
                "sortable": true,
                "groupable": true
            },
            "location_id": {
                "label": "Location ID",
                "searchable": true,
                "hidden": true
            },
            "data_location.loc_code": {
                "label": "Location Code",
                "searchable": true,
                "sortable": true,
                "hidden": true
            },
            "data_location.loc_title": {
                "label": "Location",
                "searchable": true,
                "sortable": true,
                "groupable": true
            },
            "category_id": {
                "label": "Category ID",
                "hidden": true,
                "searchable": true
            },
            "data_category_tbl.category_code": {
                "label": "Category Code",
                "searchable": true,
                "sortable": true,
                "hidden": true
            },
            "data_category_tbl.category_title": {
                "label": "Category",
                "searchable": true,
                "sortable": true,
                "groupable": true,
                "formatter": "pretty"
            },
            "operation": {
                "label": "Operation",
                "searchable": true,
                "formatter": "pretty"
            },
            "blocked": {
                "label": "Blocked",
                "formatter": "checkbox",
                "searchable": true,
                "hidden": true,
                "filter": {
                    "type": "select",
                    "nofilter": "--",
                    "options": {
                        "true": "Blocked",
                        "false": "Not Blocked"
                    },
                    "value": "false"
                }
            },
            "created_on": {
                "label": "Added On",
                "formatter": "date",
                "searchable": true,
                "filter": {
                    "type": "date"
                },
                "hidden": true
            },
            "created_by": {
                "label": "Added By",
                "searchable": true,
                "filter": {
                    "type": "text"
                },
                "hidden": true
            },
            "edited_on": {
                "label": "Edited On",
                "formatter": "date",
                "searchable": true,
                "filter": {
                    "type": "date"
                },
                "hidden": true
            },
            "edited_by": {
                "label": "Edited By",
                "searchable": true,
                "filter": {
                    "type": "text"
                },
                "hidden": true
            }
        },
        "module_refid": "userManager.projectUserMapping",
        "module_type": "reports"
    }
