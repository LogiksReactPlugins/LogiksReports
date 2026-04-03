export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Ikt1MG1oWDNDK3VoWTA2TGQxTm1jR1Rvb0hvZ1Ara0FzaUs3dXVUT05lUXduaGM0RGlvTjRHeExYWmNJVWkzVUQybGdVdW1rMm95bGR4VnFpZnh6a1lVekVCcFFPRzdWY0h2RTNaVFQxSENaVzV4TGFXUDhSTDRCM3I5Y1A0aGcvNUd4K1VLeXFZaFFhYmNVUDVMMjI0b0djNE5KbzJhR1FYUEFZSDU3RTBqd0JCdDdoeHhuM3cxUGhjQjFscEN3L1N6V2xGRU93TmdjaS9OMHlGT3Q0U1cwU2pZcTRoRjUrcXArT0RtdEQ3K2lNZS9tQ20wV0JNT3NDZGNnbkNFQ29IblJRS2o5OFRzR01mWTZaZW5uMlRLcDh5ZGpkMkxGeThGMHh0cmdLcFVySmwreVBQMXVPWGM1Z3JqT09UcjA9IiwiaWF0IjoxNzc1MTg5NDUzLCJleHAiOjE3NzUxOTMwNTMsImp0aSI6ImFjYzoxOjE3NzUxODk0NTMzMDg6d2ViIn0.Cdz1j8zL9fdAzM0ASN47vDr011xr1DM_oEfcfRb6Qr0",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Ikt1MG1oWDNDK3VoWTA2TGQxTm1jR1Rvb0hvZ1Ara0FzaUs3dXVUT05lUXduaGM0RGlvTjRHeExYWmNJVWkzVUQybGdVdW1rMm95bGR4VnFpZnh6a1lVekVCcFFPRzdWY0h2RTNaVFQxSENaVzV4TGFXUDhSTDRCM3I5Y1A0aGcvNUd4K1VLeXFZaFFhYmNVUDVMMjI0b0djNE5KbzJhR1FYUEFZSDU3RTBqd0JCdDdoeHhuM3cxUGhjQjFscEN3L1N6V2xGRU93TmdjaS9OMHlGT3Q0U1cwU2pZcTRoRjUrcXArT0RtdEQ3K2lNZS9tQ20wV0JNT3NDZGNnbkNFQ29IblJRS2o5OFRzR01mWTZaZW5uMlRLcDh5ZGpkMkxGeThGMHh0cmdLcFVySmwreVBQMXVPWGM1Z3JqT09UcjA9IiwiaWF0IjoxNzc1MTg5NDUzLCJleHAiOjE3NzUxOTMwNTMsImp0aSI6ImFjYzoxOjE3NzUxODk0NTMzMDg6d2ViIn0.Cdz1j8zL9fdAzM0ASN47vDr011xr1DM_oEfcfRb6Qr0`,
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
