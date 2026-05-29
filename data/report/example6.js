export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    printRequest: `/api/services/printRequest/print_request`,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IlEyckU4b090QkoxYmtSd21xeDVSd1N3ajR1NVNMV2wwQVVDRlM5d21iYWc4c0tTSmtRanNvMnliNzdpWWhlUHRiUjQ0ejBQQ0ZzRlpHTnUvWGtQTHRhSWFVSTNFYkhnUTVlWnNRbmtxVEJnaDhIb2V3OXRSQ1pxMlRMZzRrOTN0R3hqSllXQTRsVWo3S2YyOXQ3N1N4bWZlMVZDMjlBcUw1WmFjMVlIbjV4eDVrd2lNcGRud3VsZnUzWFMvTzFDbXlhSkVRL1hRRm9Lejd2dnFVSUtPVlYwdC90UU91cWZ4RThtTEdQekNFZmtkWUZBRnNlSnFRR2FVM3N4TE0vVDQ0U1FDZGM4aHVCUmVDY0g0QW94WlJPcjMvcnk3UDJKcFdDVlFRbDIrVkM2MHo0MzkxSHVUb2ZYK2Z5bDQ3cFhWN1FkV0ROYkN1bzV2aWZGSjFsSDJtSERYSXdHZ1RYRUs4bVBsMW82dEp2d1ZURTZkQzEwU1JoY0FkU25MaHJYYU5qMEx2RVJGSzI0aTBHQU1WQVkvRmt5djBMaTJQcit3YTdjcXZVaUdPZ1pHZHZyTUlGRHc1ZG1sQXlsT3I5S1JJWCtsUjBFcGZsdmJVeGRHNmY0enFlOUpVYi8yVVVRR2RhVzV4K1RaR25zTiIsImlhdCI6MTc3OTE4MTMyNywiZXhwIjoxNzc5MTg0OTI3LCJqdGkiOiJhY2M6MToxNzc5MTgxMzI3MTc5OndlYiJ9.yRVCJQjV1lVgzKwnMAotag6y5yBtohuZaq-US2xr3E8",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IlEyckU4b090QkoxYmtSd21xeDVSd1N3ajR1NVNMV2wwQVVDRlM5d21iYWc4c0tTSmtRanNvMnliNzdpWWhlUHRiUjQ0ejBQQ0ZzRlpHTnUvWGtQTHRhSWFVSTNFYkhnUTVlWnNRbmtxVEJnaDhIb2V3OXRSQ1pxMlRMZzRrOTN0R3hqSllXQTRsVWo3S2YyOXQ3N1N4bWZlMVZDMjlBcUw1WmFjMVlIbjV4eDVrd2lNcGRud3VsZnUzWFMvTzFDbXlhSkVRL1hRRm9Lejd2dnFVSUtPVlYwdC90UU91cWZ4RThtTEdQekNFZmtkWUZBRnNlSnFRR2FVM3N4TE0vVDQ0U1FDZGM4aHVCUmVDY0g0QW94WlJPcjMvcnk3UDJKcFdDVlFRbDIrVkM2MHo0MzkxSHVUb2ZYK2Z5bDQ3cFhWN1FkV0ROYkN1bzV2aWZGSjFsSDJtSERYSXdHZ1RYRUs4bVBsMW82dEp2d1ZURTZkQzEwU1JoY0FkU25MaHJYYU5qMEx2RVJGSzI0aTBHQU1WQVkvRmt5djBMaTJQcit3YTdjcXZVaUdPZ1pHZHZyTUlGRHc1ZG1sQXlsT3I5S1JJWCtsUjBFcGZsdmJVeGRHNmY0enFlOUpVYi8yVVVRR2RhVzV4K1RaR25zTiIsImlhdCI6MTc3OTE4MTMyNywiZXhwIjoxNzc5MTg0OTI3LCJqdGkiOiJhY2M6MToxNzc5MTgxMzI3MTc5OndlYiJ9.yRVCJQjV1lVgzKwnMAotag6y5yBtohuZaq-US2xr3E8`,
      "Content-Type": "application/json",
    },
  }, 
   "schema": "1.0",
        "title": "Key Issues Observations",
        "category": "keyIssues",
        "privilege": "*",
        "blocked": false,
        "rowlink": false,
        "rowsPerPage": 20,
        "showExtraColumn": false,
        "custombar": false,
        "source": {
            "type": "sql",
            "queryid": "reports%40keyIssues.main%40source"
        },
        "buttons": {
            "infoview@keyIssues.edit/{id}": {
                "label": "View Key Issues Observations",
                "policy": "key_issues.observations.view",
                "icon": "fa fa-eye"
            },
            "popup@activity_logs.popup_activity_logs/{id}": {
                "label": "History",
                "params": {
                    "ref_src": [
                        "forms@keyIssues.observation",
                        "forms@keyIssues.edit"
                    ]
                },
                "policy": "key_issues.observations.view",
                "icon": "fa-solid fa-clock-rotate-left"
            },
            "api@keyIssues.deleteRecord": {
                "label": "Delete Key Issues Observation",
                "icon": "fa fa-trash",
                "policy": "key_issues.observations.delete",
                "lgksConfirm": "Are you sure you want to delete this record?"
            },
            "api@keyIssues.sendReminderEmail": {
                "label": "Send Remider Email",
                "policy": "key_issues.observations.create",
                "icon": "fa-solid fa-envelope"
            }
        },
        "actions": {
            "forms@keyIssues.main/new": {
                "label": "Add Key Issues Observations",
                "policy": "key_issues.observations.create",
                "icon": "fa fa-plus"
            }
        },
        "toolbar": {
            "search": true,
            "export": true,
            "email": false
        },
        "DEBUG": false,
        "datagrid": {
            "keyissues_observations.id": {
                "label": "ID",
                "hidden": true,
                "searchable": true,
                "sortable": true,
                "style": "width:50px%3B",
                "formatter": "text",
                "filter": {
                    "type": "text"
                }
            },
            "company_tbl.title": {
                "label": "Company/SPV",
                "sortable": true,
                "searchable": true,
                "hidden": false,
                "filter": {
                    "type": "text"
                }
            },
            "data_sector.title": {
                "label": "Sector",
                "sortable": true,
                "searchable": true,
                "hidden": false,
                "filter": {
                    "type": "text"
                }
            },
            "data_project_function.title": {
                "label": "Project",
                "sortable": true,
                "searchable": true,
                "hidden": false,
                "filter": {
                    "type": "text"
                }
            },
            "date": {
                "label": "Date",
                "hidden": false,
                "searchable": true,
                "sortable": true,
                "formatter": "date",
                "filter": {
                    "type": "date"
                }
            },
            "category": {
                "label": "Issue  Category",
                "hidden": false,
                "searchable": true,
                "formatter": "pretty",
                "filter": {
                    "type": "text"
                }
            },
            "priority": {
                "label": "Priority",
                "hidden": false,
                "searchable": true,
                "formatter": "pretty",
                "filter": {
                    "type": "text"
                }
            },
            "management_review": {
                "label": "Management Review",
                "hidden": false,
                "searchable": true,
                "formatter": "management_review",
                "filter": {
                    "type": "text"
                }
            },
            "sub_contractor": {
                "label": "Sub Contractor",
                "hidden": false,
                "formatter": "content",
                "searchable": true,
                "filter": {
                    "type": "text"
                }
            },
            "target_date": {
                "label": "Target Date",
                "hidden": false,
                "searchable": true,
                "sortable": true,
                "formatter": "target_date_formatter",
                "filter": {
                    "type": "date"
                }
            },
            "revised_target_date": {
                "label": "Revised Target Date",
                "hidden": false,
                "searchable": true,
                "sortable": true,
                "formatter": "date",
                "filter": {
                    "type": "date"
                }
            },
            "revised_target_date_history": {
                "label": "Revised Target Date History",
                "hidden": false,
                "searchable": true,
                "formatter": "revised_target_date_history",
                "sortable": true,
                "filter": {
                    "type": "date"
                }
            },
            "assignee": {
                "label": "Assignee / Responsibility",
                "hidden": false,
                "formatter": "pretty",
                "searchable": true,
                "filter": {
                    "type": "text"
                }
            },
            "forward_to": {
                "label": "Forward To",
                "hidden": false,
                "searchable": true,
                "filter": {
                    "type": "text"
                }
            },
            "mail_cc_user": {
                "label": "Reviewers",
                "hidden": false,
                "searchable": true,
                "filter": {
                    "type": "text"
                }
            },
            "attachment": {
                "label": "Attachment",
                "hidden": false,
                "searchable": false,
                "formatter": "attachment"
            },
            "observation_photograph": {
                "label": "Observation Photo",
                "hidden": false,
                "searchable": false,
                "formatter": "attachment"
            },
            "status": {
                "label": "Status",
                "hidden": false,
                "searchable": true,
                "formatter": "pretty",
                "filter": {
                    "type": "text"
                }
            },
            "budget_impact": {
                "label": "Budget Impact",
                "hidden": false,
                "searchable": true,
                "formatter": "pretty",
                "filter": {
                    "type": "text"
                }
            },
            "impact_timeline": {
                "label": "Impact Timeline",
                "hidden": false,
                "searchable": true,
                "formatter": "pretty",
                "filter": {
                    "type": "text"
                }
            },
            "description": {
                "label": "Key Issues",
                "hidden": false,
                "formatter": "html",
                "searchable": true
            },
            "observation": {
                "label": "Latest status / Response By Assignee",
                "hidden": false,
                "formatter": "html",
                "searchable": true
            },
            "created_on": {
                "label": "Open Since",
                "hidden": false,
                "searchable": true,
                "sortable": true,
                "formatter": "edge",
                "filter": {
                    "type": "date"
                }
            },
            "keyissues_observations.blocked": {
                "label": "Blocked",
                "hidden": false,
                "searchable": true,
                "sortable": true,
                "formatter": "pretty",
                "filter": {
                    "type": "text"
                }
            },
            "keyissues_observations.created_by": {
                "label": "Created By",
                "hidden": false,
                "searchable": true,
                "filter": {
                    "type": "text"
                }
            },
            "keyissues_observations.created_on": {
                "label": "Created On",
                "hidden": false,
                "searchable": true,
                "sortable": true,
                "formatter": "datetime",
                "filter": {
                    "type": "date"
                }
            },
            "keyissues_observations.edited_by": {
                "label": "Edited By",
                "hidden": false,
                "searchable": true,
                "filter": {
                    "type": "text"
                }
            },
            "keyissues_observations.edited_on": {
                "label": "Edited On",
                "hidden": false,
                "searchable": true,
                "sortable": true,
                "formatter": "datetime",
                "filter": {
                    "type": "date"
                }
            }
        },
        "cards": {
            "colmap": {
                "title": "Cardtitle",
                "descs": "CardDesc",
                "category": "status",
                "due_date": "created_on"
            }
        },
        "script": "ZnVuY3Rpb24gdGFyZ2V0X2RhdGVfZm9ybWF0dGVyKAogICAgY29sX3ZhbHVlLAogICAgcm93X2RhdGEsCiAgICBjb2x1bW5fZGF0YSwKICAgIGpzb25fZGF0YQopIHsKCiAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9ICItIjsKICAgIGxldCBiZ0NvbG9yID0gImdyZWVuIjsKICAgIGxldCB0ZXh0Q29sb3IgPSAid2hpdGUiOwoKICAgIGlmIChjb2xfdmFsdWUpIHsKCiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGNvbF92YWx1ZSk7CgogICAgICAgIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkKICAgICAgICAgICAgLnBhZFN0YXJ0KDIsICIwIik7CgogICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpCiAgICAgICAgICAgIC5wYWRTdGFydCgyLCAiMCIpOwoKICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOwoKICAgICAgICBmb3JtYXR0ZWREYXRlID0gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDsKCiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpOwoKICAgICAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTsKICAgICAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApOwoKICAgICAgICBjb25zdCBkaWZmVGltZSA9IGRhdGUgLSB0b2RheTsKCiAgICAgICAgY29uc3QgZGlmZkRheXMgPSBNYXRoLmNlaWwoCiAgICAgICAgICAgIGRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpCiAgICAgICAgKTsKCiAgICAgICAgLy8gTGVzcyB0aGFuIDcgZGF5cwogICAgICAgIGlmIChkaWZmRGF5cyA8IDcpIHsKCiAgICAgICAgICAgIGJnQ29sb3IgPSAicmVkIjsKCiAgICAgICAgfQogICAgICAgIC8vIEJldHdlZW4gNyBhbmQgMTQgZGF5cwogICAgICAgIGVsc2UgaWYgKAogICAgICAgICAgICBkaWZmRGF5cyA+PSA3ICYmCiAgICAgICAgICAgIGRpZmZEYXlzIDwgMTQKICAgICAgICApIHsKCiAgICAgICAgICAgIGJnQ29sb3IgPSAiI0VBQjMwOCI7CiAgICAgICAgICAgIHRleHRDb2xvciA9ICJibGFjayI7CgogICAgICAgIH0KICAgICAgICAvLyBCZXR3ZWVuIDE0IGFuZCAzMCBkYXlzCiAgICAgICAgZWxzZSBpZiAoCiAgICAgICAgICAgIGRpZmZEYXlzID49IDE0ICYmCiAgICAgICAgICAgIGRpZmZEYXlzIDw9IDMwCiAgICAgICAgKSB7CgogICAgICAgICAgICBiZ0NvbG9yID0gImdyZWVuIjsKICAgICAgICB9CiAgICB9CgogICAgcmV0dXJuIGAKICAgICAgICA8ZGl2IHN0eWxlPSIKICAgICAgICAgICAgYmFja2dyb3VuZDoke2JnQ29sb3J9OwogICAgICAgICAgICBjb2xvcjoke3RleHRDb2xvcn07CiAgICAgICAgICAgIHBhZGRpbmc6NnB4IDEwcHg7CiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NnB4OwogICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjsKICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwOwogICAgICAgICAgICB3aWR0aDoxMDAlOwogICAgICAgICI+CiAgICAgICAgICAgICR7Zm9ybWF0dGVkRGF0ZX0KICAgICAgICA8L2Rpdj4KICAgIGA7Cn0KLyogZnVuY3Rpb24gcmV2aXNlZF90YXJnZXRfZGF0ZV9oaXN0b3J5KGNvbF92YWx1ZSwgcm93X2RhdGEsIGNvbHVtbl9kYXRhLCBqc29uX2RhdGEpIHsKICAgIGNvbnN0IGhpc3RvcnkgPSByb3dfZGF0YVsia2V5aXNzdWVzX29ic2VydmF0aW9ucy5yZXZpc2VkX3RhcmdldF9kYXRlX2hpc3RvcnkiXTsKCiAgICAvLyBQYXJzZSBoaXN0b3J5IChoYW5kbGUgc3RyaW5nIEpTT04gb3IgYXJyYXkpCiAgICBsZXQgaGlzdG9yeUFyciA9IFtdOwogICAgaWYgKGhpc3RvcnkpIHsKICAgICAgICB0cnkgewogICAgICAgICAgICBoaXN0b3J5QXJyID0gdHlwZW9mIGhpc3RvcnkgPT09ICJzdHJpbmciID8gSlNPTi5wYXJzZShoaXN0b3J5KSA6IGhpc3Rvcnk7CiAgICAgICAgfSBjYXRjaCB7CiAgICAgICAgICAgIGhpc3RvcnlBcnIgPSBbXTsKICAgICAgICB9CiAgICB9CgogICAgLy8gU2tpcCBmaXJzdCB2YWx1ZSwgc2hvdyBmcm9tIGluZGV4IDEgb253YXJkcwogICAgLy9jb25zdCBkaXNwbGF5QXJyID0gaGlzdG9yeUFyci5zbGljZSgxKTsKICAgIC8vIFNraXAgbGFzdCB2YWx1ZQogICAgY29uc3QgZGlzcGxheUFyciA9IGhpc3RvcnlBcnIuc2xpY2UoMCwgLTEpOwoKICAgIGlmIChkaXNwbGF5QXJyLmxlbmd0aCA9PT0gMCkgewogICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz0idXNlckRldGFpbHMiPjxoMj4tPC9oMj48L2Rpdj5gOwogICAgfQoKICAgIHJldHVybiBgCiAgICAgICAgPGRpdiBjbGFzcz0idXNlckRldGFpbHMiPgogICAgICAgICAgICAke2Rpc3BsYXlBcnIubWFwKGRhdGUgPT4gYDxoMj4ke2RhdGV9PC9oMj5gKS5qb2luKCIiKX0KICAgICAgICA8L2Rpdj4KICAgIGA7Cn0gKi8KCmZ1bmN0aW9uIG1hbmFnZW1lbnRfcmV2aWV3KGNvbF92YWx1ZSwgcm93X2RhdGEsIGNvbHVtbl9kYXRhLCBqc29uX2RhdGEpIHsKICAgIGNvbnN0IGhpc3RvcnkgPSByb3dfZGF0YVsia2V5aXNzdWVzX29ic2VydmF0aW9ucy5tYW5hZ2VtZW50X3JldmlldyJdOwoKICAgIGlmICghaGlzdG9yeSkgewogICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz0idXNlckRldGFpbHMiPjxoMj4tPC9oMj48L2Rpdj5gOwogICAgfQoKICAgIGNvbnN0IGZvcm1hdHRlZCA9IGhpc3RvcnkudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLnJlcGxhY2VBbGwoIl8iLCAiLyIpOwoKICAgIHJldHVybiBgPGRpdiBjbGFzcz0idXNlckRldGFpbHMiPjxoMj4ke2Zvcm1hdHRlZH08L2gyPjwvZGl2PmA7Cn0KZnVuY3Rpb24gcmV2aXNlZF90YXJnZXRfZGF0ZV9oaXN0b3J5KGNvbF92YWx1ZSwgcm93X2RhdGEsIGNvbHVtbl9kYXRhLCBqc29uX2RhdGEpIHsKICAgIGNvbnN0IGhpc3RvcnkgPSByb3dfZGF0YVsia2V5aXNzdWVzX29ic2VydmF0aW9ucy5yZXZpc2VkX3RhcmdldF9kYXRlX2hpc3RvcnkiXTsKCiAgICBsZXQgaGlzdG9yeUFyciA9IFtdOwogICAgaWYgKGhpc3RvcnkpIHsKICAgICAgICB0cnkgewogICAgICAgICAgICBoaXN0b3J5QXJyID0gdHlwZW9mIGhpc3RvcnkgPT09ICJzdHJpbmciID8gSlNPTi5wYXJzZShoaXN0b3J5KSA6IGhpc3Rvcnk7CiAgICAgICAgfSBjYXRjaCB7CiAgICAgICAgICAgIGhpc3RvcnlBcnIgPSBbXTsKICAgICAgICB9CiAgICB9CgogICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyKSA9PiB7CiAgICAgICAgaWYgKCFkYXRlU3RyKSByZXR1cm4gIi0iOwogICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlU3RyKTsKICAgICAgICBpZiAoaXNOYU4oZCkpIHJldHVybiBkYXRlU3RyOyAvLyBmYWxsYmFjayB0byBvcmlnaW5hbCBpZiBpbnZhbGlkCiAgICAgICAgY29uc3QgZGQgPSBTdHJpbmcoZC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICIwIik7CiAgICAgICAgY29uc3QgbW0gPSBTdHJpbmcoZC5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgIjAiKTsKICAgICAgICBjb25zdCB5eXl5ID0gZC5nZXRGdWxsWWVhcigpOwogICAgICAgIHJldHVybiBgJHtkZH0vJHttbX0vJHt5eXl5fWA7CiAgICB9OwoKICAgIGNvbnN0IGRpc3BsYXlBcnIgPSBoaXN0b3J5QXJyLnNsaWNlKDAsIC0xKTsKCiAgICBpZiAoZGlzcGxheUFyci5sZW5ndGggPT09IDApIHsKICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9InVzZXJEZXRhaWxzIj48aDI+LTwvaDI+PC9kaXY+YDsKICAgIH0KCiAgICByZXR1cm4gYAogICAgICAgIDxkaXYgY2xhc3M9InVzZXJEZXRhaWxzIj4KICAgICAgICAgICAgJHtkaXNwbGF5QXJyLm1hcChkYXRlID0+IGA8aDI+JHtmb3JtYXREYXRlKGRhdGUpfTwvaDI+YCkuam9pbigiIil9CiAgICAgICAgPC9kaXY+CiAgICBgOwp9CmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVN0cikgPT4gewogICAgaWYgKCFkYXRlU3RyKSByZXR1cm4gIi0iOwogICAgY29uc3QgZGF0ZVBhcnQgPSBkYXRlU3RyLnNwbGl0KCJUIilbMF07IC8vIGhhbmRsZSBJU08gZm9ybWF0IGxpa2UgMjAyNi0wNS0xNVQwMDowMDowMC4wMDBaCiAgICByZXR1cm4gZGF0ZVBhcnQuc3BsaXQoIi0iKS5yZXZlcnNlKCkuam9pbigiLyIpOyAvLyAyMDI2LTA1LTE1IOKGkiBbIjIwMjYiLCIwNSIsIjE1Il0g4oaSIFsiMTUiLCIwNSIsIjIwMjYiXSDihpIgMTUvMDUvMjAyNgp9Ow==",
        "module_refid": "keyIssues.main",
        "module_type": "reports"
    }
