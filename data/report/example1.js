

export const report = {
  "schema": "1.0",
  "title": "Test Report",
  "category": "CMS",
  "privilege": "*",
  "blocked": false,
  "rowlink": false,
  "rowsPerPage": 5,
  // "showExtraColumn": "checkbox",
  "template": "card",
  "custombar": false,
  "source": {
    "type": "sql",
    "table": "lgks_users",
    "where": {
      "guid": { "VALUE": "seleccontrols", "OP": "EQ" },
      "id": { "RAW": "id>1" }
    },
    "limit": 10
  },
  "actions": {
    "addRecord": {
      "label": "adddddd",
      "icon": "fa fa-plus",
       "event":{
        "click":"addButtonClick"
      }
    }
  },
  "buttons": {
    "infoview@test.main/{hashid}": {
      "label": "View Info",
      "icon": "fa fa-eye",
      "event":{
        "click":"eyeButtonClick"
      }
    },
    "func#edit/{id}/{status}": {
      "label": "Add Remarks",
      "icon": "fa fa-tags",
      "params": {
        "test_id": "id"
      }
    }
  },
  "toolbar": {
    // "search": true,
    // "print": true,
    // "export": { "csv": "Just CSV" },
    // "email": true
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
    "userid": {
      "label": "UserID",
      "sortable": false,
      "searchable": true,
      "filter": {
        "type": "createDataSelectorFromUniques",
        "table": "lgks_users",
        "col1": "userid",
        "where": {
          "guid": { "VALUE": "seleccontrols", "OP": "EQ" },
          "id": { "RAW": "id>1" }
        }
      }
    },
    "gender": {
      "label": "Gender",
      "searchable": true,
      "filter": {
        "type": "select",
        "options": {
          "male": "Male",
          "female": "Female"
        }
      }
    },
    "name": {
      "label": "User Name",
      "hidden": true,
      "searchable": true,
      "filter": {
        "qtype": "LIKE"
      }
    },
    "blocked": {
      "label": "Blocked",
      "formatter": "checkbox",
      "searchable": true,
      "filter": {
        "type": "select",
        "nofilter": "--",
        "options": {
          "true": "Blocked",
          "false": "Not Blocked"
        }
      }
    },
    "joining_date": {
      "label": "Date Of Joining",
      "formatter": "date",
      "searchable": true,
      "filter": {
        "type": "date"
      }
    },

    "birthdate": {
      "label": "birthdate",
      "formatter": "date"
    }
  },
  "cards": {
    "colmap": {
      "title": "full_name",
      "descs": "profile_code",
      "category": "type",
      "due_date": "created_on",
      "avatar": "avtar",
      "wallphoto": "wallphoto",
      "color": "status",
      "tags": "type",
      "counter": "type"
    },
    "colormap": {
      "active": "card_green",
      "under_notice": "card_red",
      "probationary": "card_blue"
    },
    "unilink": "staff.main",
    "default_avatar": true
  },
  "kanban": {
    "colkeys": {
      "gender": {
        "label": "Gender",
        "table": "lgks_users",
        "columns": "gender as title, gender as value"
      },
      "role": {
        "label": "role",
        "table": "staff_tbl",
        "columns": "type as title,type as value"
      },
      "role": {
        "label": "Role",
        "table": "staff_tbl",
        "columns": "designation as title,designation as value"
      },
      "status": {
        "label": "Status",
        "table": "staff_tbl",
        "columns": "status as title,status as value"
      },
      "pan": {
        "label": "Grade",
        "table": "staff_tbl",
        "columns": "pan as title,pan as value"
      },
      "department": {
        "label": "Department",
        "table": "staff_tbl",
        "columns": "department as title,department as value"
      }
    },
    "colmap": {
      "title": "full_name",
      // "descs": "department",
      "department": "department",
      "descs": "role",
      "category": "gender",

      "due_date": "dtoe",
      "avatar": "type",

      "color": "type",
      "tags": "role",
      "counter": "id"
    },
    "unilink": "staff.main"
  },

  "calendar": {
    "colmap": {
      "title": "name",
      "descs": "userid"
    },
    
    "date_col": {
      "joining_date": "#333",
      "birthDay": "orange"
    },
    "unilink": "staff.main",
    "notes_user": "<div class='text-center' style='color:white;'><span style='background:#333;padding:5px;'>Birthday</span><span style='background:orange;padding:5px;'>Joining Date</span></div>"
  },
  "rows": [
  {
    "id": 1,
    "userid": "user001",
    "name": "Alice",
    "gender": "female",
    "blocked": false,
    "department": "HR",
    "role": "Manager",
    "location": "Mumbai",
    "status": "Active",
    "joining_date": "2025-01-01",
    "exit_date": null,
    "birthdate": "1990-02-14"
  },
  {
    "id": 2,
    "userid": "user002",
    "name": "Bob",
    "gender": "male",
    "blocked": true,
    "department": "Engineering",
    "role": "Developer",
    "location": "Pune",
    "status": "Inactive",
    "joining_date": "2025-01-15",
    "exit_date": "2025-06-15",
    "birthdate": "1988-09-23"
  },
  {
    "id": 3,
    "userid": "user003",
    "name": "Charlie",
    "gender": "male",
    "blocked": false,
    "department": "Engineering",
    "role": "Lead",
    "location": "Delhi",
    "status": "Active",
    "joining_date": "2025-08-01",
    "exit_date": null,
    "birthdate": "1992-11-05"
  },
  {
    "id": 4,
    "userid": "user004",
    "name": "Diana",
    "gender": "female",
    "blocked": true,
    "department": "Marketing",
    "role": "Executive",
    "location": "Chennai",
    "status": "On Leave",
    "joining_date": "2025-08-10",
    "exit_date": null,
    "birthdate": "1993-04-10"
  },
  {
    "id": 5,
    "userid": "user005",
    "name": "Eve",
    "gender": "female",
    "blocked": false,
    "department": "Finance",
    "role": "Analyst",
    "location": "Hyderabad",
    "status": "Active",
    "joining_date": "2025-08-15",
    "exit_date": null,
    "birthdate": "1987-08-15"
  },
  {
    "id": 6,
    "userid": "user006",
    "name": "Frank",
    "gender": "male",
    "blocked": false,
    "department": "Engineering",
    "role": "Intern",
    "location": "Mumbai",
    "status": "Training",
    "joining_date": "2025-08-20",
    "exit_date": null,
    "birthdate": "2001-01-01"
  },
  {
    "id": 7,
    "userid": "user007",
    "name": "Grace",
    "gender": "female",
    "blocked": true,
    "department": "Support",
    "role": "Agent",
    "location": "Kolkata",
    "status": "Suspended",
    "joining_date": "2025-08-25",
    "exit_date": "2025-09-01",
    "birthdate": "1995-05-20"
  },
  {
    "id": 8,
    "userid": "user008",
    "name": "Henry",
    "gender": "male",
    "blocked": false,
    "department": "HR",
    "role": "Recruiter",
    "location": "Bangalore",
    "status": "Active",
    "joining_date": "2025-03-01",
    "exit_date": null,
    "birthdate": "1990-07-07"
  },
  {
    "id": 9,
    "userid": "user009",
    "name": "Ivy",
    "gender": "female",
    "blocked": false,
    "department": "Engineering",
    "role": "Tester",
    "location": "Pune",
    "status": "Active",
    "joining_date": "2025-03-05",
    "exit_date": null,
    "birthdate": "1996-12-12"
  },
  {
    "id": 10,
    "userid": "user010",
    "name": "Jack",
    "gender": "male",
    "blocked": true,
    "department": "Finance",
    "role": "Accountant",
    "location": "Delhi",
    "status": "Inactive",
    "joining_date": "2025-03-10",
    "exit_date": "2025-06-30",
    "birthdate": "1985-10-10"
  }
]

}

