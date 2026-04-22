export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Im1Ya0ZJL2hONUVJcnYxdW5RVC96QXQva0N0VGFDOVNSbmEvSjlxL1VQNHZhL2hJbGdGNm5xNUNpTkI1ZnFVUDk1L1lZM2NqUEVyUWtVall3Q3p0TG1PQS9iUUFnMkNrUHprTDR4TWtqWU5EMm1ORXkzU3FDNkd6RkY5T2xxSWJmcktXbm9YbjRES29hVlJTSzJtZTAydkpPQUx5QXdOYjBTV096dzYxcEFmRmIweFd5TklaaVJvZTRIYVlRcFJDV1loMUx4YTZGSVlrY29MbUx6RE5NaGFHcWFNQmlWQTJJaHVzdFBMNXhhOVJ0bGJDWnRjY05SUUhKMTJ3cWVCVGpQZENZSmZPTFRodHNzOHpVdisxR1BKSU9hUT09IiwiaWF0IjoxNzc2ODQ4NzUyLCJleHAiOjE3NzY4NTIzNTIsImp0aSI6ImFjYzoxOjE3NzY4NDg3NTI0MTE6d2ViIn0.YwkgEDQSx30z94_h4PyvSXdqdhDObJ4RKKvE37WKuEQ",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Im1Ya0ZJL2hONUVJcnYxdW5RVC96QXQva0N0VGFDOVNSbmEvSjlxL1VQNHZhL2hJbGdGNm5xNUNpTkI1ZnFVUDk1L1lZM2NqUEVyUWtVall3Q3p0TG1PQS9iUUFnMkNrUHprTDR4TWtqWU5EMm1ORXkzU3FDNkd6RkY5T2xxSWJmcktXbm9YbjRES29hVlJTSzJtZTAydkpPQUx5QXdOYjBTV096dzYxcEFmRmIweFd5TklaaVJvZTRIYVlRcFJDV1loMUx4YTZGSVlrY29MbUx6RE5NaGFHcWFNQmlWQTJJaHVzdFBMNXhhOVJ0bGJDWnRjY05SUUhKMTJ3cWVCVGpQZENZSmZPTFRodHNzOHpVdisxR1BKSU9hUT09IiwiaWF0IjoxNzc2ODQ4NzUyLCJleHAiOjE3NzY4NTIzNTIsImp0aSI6ImFjYzoxOjE3NzY4NDg3NTI0MTE6d2ViIn0.YwkgEDQSx30z94_h4PyvSXdqdhDObJ4RKKvE37WKuEQ`,
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
