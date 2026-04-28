export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImptemNhemR3cHpETUlzZmh4NnFTaWFNZUxTdVFFVUZ1dVc4bWN4bk9lRnExbDRkUzZFWS8weTZqYlJiNTVDUVFhMWQ1eVRIUTkzRUJ0LzA5L2ltVDRUcTJlNFZ1RDg0aFhCbnl5K0g2bUNtUUFkcmpXM095SitJd1VYRmNLMTM5YmJhclVtMHppbXA1Yy9xNnU2Wk40Tzh5bmVzN1RUTFBJUDBLek10ZkZRdS9qOU1OaXZIZnAxUkZhNG0veENoclBzVW5OVjhlWWlHbW8yRUVUTzF5b3pDclA1eGw1UFhOb3VNMDlXTDA1NkNSQ1dwRUlWZ2VYc1FDYTdNSVhXNEU3RWphN0VPU3AyenNZWnRNV0twZGVUbTQvQ0JGeCs0dWRXSlVFVWh5V2JEV2tXQkJLa1dFRWlwb0dpNnN5MW05eG43THM1Q010ZjczeWJCMVdxMWhGeGd1MjU4U0RuaTY2VEc5d3JWZ0kvUURLWmFJaXpvdUp4d1Z5WWxrbWN1WUhvcldpQVRla2VqbzFSbjYyN3NiZEE1Qm9iYXlVUmdyMUF3aFFNMjByUT09IiwiaWF0IjoxNzc3MzUxNTc3LCJleHAiOjE3NzczNTUxNzcsImp0aSI6ImFjYzoxOjE3NzczNTE1Nzc0NzQ6d2ViIn0.4PZPtuxkNSlZJJWGoLry3vA51oVjkk87YhAL8PihJtw",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImptemNhemR3cHpETUlzZmh4NnFTaWFNZUxTdVFFVUZ1dVc4bWN4bk9lRnExbDRkUzZFWS8weTZqYlJiNTVDUVFhMWQ1eVRIUTkzRUJ0LzA5L2ltVDRUcTJlNFZ1RDg0aFhCbnl5K0g2bUNtUUFkcmpXM095SitJd1VYRmNLMTM5YmJhclVtMHppbXA1Yy9xNnU2Wk40Tzh5bmVzN1RUTFBJUDBLek10ZkZRdS9qOU1OaXZIZnAxUkZhNG0veENoclBzVW5OVjhlWWlHbW8yRUVUTzF5b3pDclA1eGw1UFhOb3VNMDlXTDA1NkNSQ1dwRUlWZ2VYc1FDYTdNSVhXNEU3RWphN0VPU3AyenNZWnRNV0twZGVUbTQvQ0JGeCs0dWRXSlVFVWh5V2JEV2tXQkJLa1dFRWlwb0dpNnN5MW05eG43THM1Q010ZjczeWJCMVdxMWhGeGd1MjU4U0RuaTY2VEc5d3JWZ0kvUURLWmFJaXpvdUp4d1Z5WWxrbWN1WUhvcldpQVRla2VqbzFSbjYyN3NiZEE1Qm9iYXlVUmdyMUF3aFFNMjByUT09IiwiaWF0IjoxNzc3MzUxNTc3LCJleHAiOjE3NzczNTUxNzcsImp0aSI6ImFjYzoxOjE3NzczNTE1Nzc0NzQ6d2ViIn0.4PZPtuxkNSlZJJWGoLry3vA51oVjkk87YhAL8PihJtw`,
      "Content-Type": "application/json",
    },
  }, 
  "schema": "1.0",
  "title": "All Quality Observations",
  "category": "CMS",
  "privilege": "*",
  "blocked": false,
  "rowlink": false,
  "rowsPerPage": 20,
  "showExtraColumn": false,
  "custombar": false,
  "source": {
    "type": "sql",
    "queryid": "reports%40quality.quality_observation_observer%40source"
  },
  "slotBindings": {
    "app-toolbar.toolbar": ""
  },
  "buttons": {
    "infoview@quality.edit_quality_observation/{id}": {
      "label": "View Quality Observation",
      "icon": "fa fa-eye"
    },
    "popup@activity_logs.popup_activity_logs/{id}": {
      "label": "History",
      "params": {
        "ref_src": [
          "forms@quality.quality_observation_status_update",
          "forms@quality.quality_observation",
          "forms@quality.edit_quality_observation_status_update",
          "forms@quality.edit_quality_observation"
        ]
      },
      "icon": "fa-solid fa-clock-rotate-left"
    }
  },
  "toolbar": {
    "search": true,
    "print": true,
    "export": true,
    "email": false
  },
  "datagrid": {
    "quality_observation.id": {
      "label": "ID",
      "hidden": true,
      "searchable": true,
      "sortable": true,
      "formatter": "text"
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
    "location_type": {
      "label": "Location Type",
      "hidden": false,
      "searchable": true,
      "sortable": true,
      "formatter": "pretty",
      "filter": {
        "type": "text"
      }
    },
    "quality_observation.chainage_from": {
      "label": "Chainage",
      "hidden": false,
      "searchable": true,
      "sortable": true,
      "formatter": "showChainage",
      "filter": {
        "type": "text"
      }
    },
    "quality_observation.location_other": {
      "label": "Location Other",
      "hidden": false,
      "searchable": true,
      "sortable": true,
      "filter": {
        "type": "text"
      }
    },
    "raised_date": {
      "label": "Raised On Date",
      "hidden": false,
      "searchable": true,
      "sortable": true,
      "formatter": "date",
      "filter": {
        "type": "date"
      }
    },
    "data_quality_section_master.section": {
      "label": "Section",
      "hidden": false,
      "formatter": "pretty",
      "searchable": true,
      "filter": {
        "type": "text"
      }
    },
    "data_structure.name": {
      "label": "Part Of Structure / Part",
      "formatter": "pretty",
      "hidden": false,
      "searchable": true,
      "filter": {
        "type": "text"
      }
    },
    "data_quality_department.name": {
      "label": "Department / Category",
      "hidden": false,
      "searchable": true,
      "formatter": "pretty",
      "filter": {
        "type": "select",
        "options": [
          {
            "name": "New department check edit"
          },
          {
            "name": "UAT-test department"
          },
          {
            "name": "Infoview testing"
          },
          {
            "name": "UAT-test department1"
          }
        ]
      }
    },
    "data_sub_contractor.name": {
      "label": "Sub Contractor",
      "hidden": false,
      "searchable": true,
      "formatter": "pretty",
      "filter": {
        "type": "select",
        "options": []
      }
    },
    "status": {
      "label": "Status",
      "hidden": false,
      "searchable": true,
      "formatter": "pretty",
      "filter": {
        "type": "select",
        "options": [
          {
            "status": "open"
          },
          {
            "status": "re_open"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "closed"
          },
          {
            "status": "closed"
          },
          {
            "status": "closed"
          },
          {
            "status": "submitted"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "re_open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "submitted"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "submitted"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "re_open"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "submitted"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "submitted"
          },
          {
            "status": "open"
          },
          {
            "status": "re_open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "re_open"
          },
          {
            "status": "re_open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "submitted"
          },
          {
            "status": "submitted"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "open"
          },
          {
            "status": "submitted"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          },
          {
            "status": "submitted"
          },
          {
            "status": "submitted"
          },
          {
            "status": "submitted"
          },
          {
            "status": "open"
          },
          {
            "status": "closed"
          },
          {
            "status": "submitted"
          },
          {
            "status": "closed"
          },
          {
            "status": "open"
          }
        ]
      }
    },
    "data_cost_borne_by.name": {
      "label": "Rework Cost Borne By",
      "sortable": true,
      "formatter": "pretty",
      "filter": {
        "type": "text"
      }
    },
    "severity_level": {
      "label": "Severity Level",
      "hidden": false,
      "searchable": true,
      "formatter": "pretty",
      "filter": {
        "type": "select",
        "options": [
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "minor"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "minor"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "minor"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "minor"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "minor"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "minor"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": ""
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "minor"
          },
          {
            "severity_level": "minor"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "minor"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "Moderate"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "critical"
          },
          {
            "severity_level": "minor"
          },
          {
            "severity_level": "Moderate"
          }
        ]
      }
    },
    "observation_photograph": {
      "label": "Observation Photograph",
      "sortable": true,
      "searchable": true,
      "formatter": "attachment"
    },
    "compliance_photograph": {
      "label": "Compliance Photograph",
      "sortable": true,
      "searchable": true,
      "formatter": "attachment"
    },
    "ageing_days": {
      "label": "Ageing Days",
      "hidden": false,
      "searchable": true,
      "sortable": true,
      "filter": {
        "type": "text"
      }
    },
    "raised_by": {
      "label": "Raised By",
      "formatter": "pretty",
      "hidden": false,
      "searchable": true,
      "filter": {
        "type": "text"
      }
    },
    "assigned_to": {
      "label": "Assigned To / Responsibility",
      "hidden": false,
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
    "closure_date": {
      "label": "Closure Date",
      "hidden": false,
      "searchable": true,
      "sortable": true,
      "formatter": "date",
      "filter": {
        "type": "date"
      }
    },
    "suggestion": {
      "label": "Suggestion / Way Forward / Corrective Action",
      "hidden": false,
      "searchable": true,
      "sortable": true,
      "filter": {
        "type": "text"
      }
    },
    "quality_observation.created_by": {
      "label": "Added By",
      "sortable": true,
      "searchable": true,
      "formatter": "pretty",
      "filter": {
        "type": "text"
      }
    },
    "quality_observation.created_on": {
      "label": "Added On",
      "sortable": true,
      "searchable": true,
      "formatter": "datetime",
      "hidden": true,
      "filter": {
        "type": "date"
      }
    },
    "quality_observation.edited_by": {
      "label": "Updated By",
      "sortable": true,
      "searchable": true,
      "formatter": "pretty",
      "filter": {
        "type": "text"
      }
    },
    "quality_observation.edited_on": {
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
  "cards": {
    "colmap": {
      "title": "Cardtitle",
      "descs": "CardDesc",
      "category": "status",
      "due_date": "created_on"
    }
  },
  "module_refid": "quality.quality_observation_observer",
  "module_type": "reports"

    }
