export const report={
	"schema": "1.0",
	"title": "Leave Applications",
	"category": "personal",
	"privilege": "*",
	"blocked": false,
	"rowlink": false,
	"rowsPerPage": 20,
	"showExtraColumn": "checkbox",
	"custombar": false,
	"uiswitcher": false,
	"template": "list",
	"force_template": "grid",
	"hooks": {
		"fieldupdate": {
		    "modules":["bizflow","bizlogger"]
		}
	},
	"source": {
		"type": "sql",
		"table": "hr_applications,profiletbl",
		"cols": "hr_applications.id,hr_applications.title,hr_applications.type,hr_applications.sub_type,hr_applications.status,hr_applications.date_start,hr_applications.start_time,hr_applications.date_end,hr_applications.end_time,hr_applications.descs,hr_applications.verified_by,hr_applications.application_to,hr_applications.remarks",
		"where": {
			"hr_applications.profile_id=profiletbl.id":"RAW"
		},
		"limit": 20
	},
	"buttons_align": "left",
	"buttons": {
	    "more": {
	        "infoview@profile.main/{hashid}": {
    			"label": "View Leave Application",
    			"icon": "fa fa-code"
    		},
    		"forms@hr.my_misc_appl/new": {
    			"label": "Show Misc Application",
    			"icon": "fa fa-plus"
    		}
	    },
	    "infoview@profile.main/{hashid}": {
    			"label": "View Leave Application",
    			"icon": "fa fa-code"
    		}
	},
	"sidebar":{
        "type":"filter",
        "source":{
            "hr_applications.type":{
                "title": "Type",
                "type": "dataSelectorFromTable",
				"table": "hr_applications",
				"cols": "hr_applications.type as title, hr_applications.type as value",
				"where":{
				    "hr_applications.blocked":"false"
				},
				"groupby":"hr_applications.type",
				"multiple": true
            },
            "hr_applications.sub_type":{
                "title": "Subtype",
                "type": "dataSelectorFromTable",
				"table": "hr_applications",
				"cols": "hr_applications.sub_type as title, hr_applications.sub_type as value",
				"where":{
				    "hr_applications.blocked":"false",
				    "(hr_applications.sub_type IS NOT NULL AND length(hr_applications.sub_type)>0)": "RAW"
				},
				"groupby":"hr_applications.sub_type"
            }
        }
	},
	"datagrid": {
		"hr_applications.id": {
			"label": "ID",
			"hidden": false,
			"searchable": true,
			"sortable": true,
			"groupable": false,
			"classes": "",
			"style": "width:50px;",
			"formatter": "text"
		},
		"hr_applications.title": {
			"label": "Subject",
			"sortable": true,
			"searchable": true,
			"hidden": false
		},
		"hr_applications.type": {
			"label": "Type",
			"sortable": true,
			"searchable": true,
			"hidden": true
		},
		"hr_applications.sub_type": {
			"label": "Sub Type",
			"sortable": true,
			"searchable": true
		},
		"hr_applications.status": {
			"label": "Status",
			"sortable": true,
			"searchable": true
		},
		"hr_applications.date_start": {
			"label": "Date Start",
			"format": "date",
			"sortable": true,
			"searchable": true
		},
		"hr_applications.start_time": {
			"label": "Start Time",
			"format": "time",
			"sortable": true,
			"hidden": true,
			"searchable": true
		},
		"hr_applications.date_end": {
			"label": "Date End",
			"format": "date",
			"sortable": true,
			"searchable": true
		},
		"hr_applications.end_time": {
			"label": "End time",
			"format": "time",
			"sortable": true,
			"hidden": true,
			"searchable": true
		},
		"hr_applications.descs": {
			"label": "Descs",
			"hidden": true
		},
		"hr_applications.verified_by": {
			"label": "Verified By",
			"sortable": true,
			"searchable": true,
			"hidden": true
		},
		"hr_applications.application_to": {
			"label": "Application To",
			"sortable": true,
			"searchable": true
		},
		"hr_applications.remarks": {
			"label": "Remark",
			"searchable": true,
			"hidden": true
		}
	},
  "rows": [
    {
      id: 1,
      userid: "user001",
      name: "Alice",
      gender: "female",
      blocked: false,
      dtoc: "2023-01-01",
      dtoe: "2023-01-01T10:30:00"
    },
    {
      id: 2,
      userid: "user002",
      name: "Bob",
      gender: "male",
      blocked: true,
      dtoc: "2023-01-15",
      dtoe: "2023-01-15T14:45:00"
    },
    {
      id: 3,
      userid: "user003",
      name: "Charlie",
      gender: "male",
      blocked: false,
      dtoc: "2023-02-01",
      dtoe: "2023-02-01T09:15:00"
    },
    {
      id: 4,
      userid: "user004",
      name: "Diana",
      gender: "female",
      blocked: true,
      dtoc: "2023-02-10",
      dtoe: "2023-02-10T16:20:00"
    },
    {
      id: 5,
      userid: "user005",
      name: "Eve",
      gender: "female",
      blocked: false,
      dtoc: "2023-02-15",
      dtoe: "2023-02-15T11:30:00"
    },
    {
      id: 6,
      userid: "user006",
      name: "Frank",
      gender: "male",
      blocked: false,
      dtoc: "2023-02-20",
      dtoe: "2023-02-20T13:45:00"
    },
    {
      id: 7,
      userid: "user007",
      name: "Grace",
      gender: "female",
      blocked: true,
      dtoc: "2023-02-25",
      dtoe: "2023-02-25T08:30:00"
    },
    {
      id: 8,
      userid: "user008",
      name: "Henry",
      gender: "male",
      blocked: false,
      dtoc: "2023-03-01",
      dtoe: "2023-03-01T15:10:00"
    },
    {
      id: 9,
      userid: "user009",
      name: "Ivy",
      gender: "female",
      blocked: false,
      dtoc: "2023-03-05",
      dtoe: "2023-03-05T12:20:00"
    },
    {
      id: 10,
      userid: "user010",
      name: "Jack",
      gender: "male",
      blocked: true,
      dtoc: "2023-03-10",
      dtoe: "2023-03-10T17:30:00"
    },
    {
      id: 11,
      userid: "user011",
      name: "Kate",
      gender: "female",
      blocked: false,
      dtoc: "2023-03-15",
      dtoe: "2023-03-15T10:45:00"
    },
    {
      id: 12,
      userid: "user012",
      name: "Leo",
      gender: "male",
      blocked: false,
      dtoc: "2023-03-20",
      dtoe: "2023-03-20T14:15:00"
    },
    {
      id: 13,
      userid: "user013",
      name: "Mia",
      gender: "female",
      blocked: true,
      dtoc: "2023-03-25",
      dtoe: "2023-03-25T09:50:00"
    },
    {
      id: 14,
      userid: "user014",
      name: "Noah",
      gender: "male",
      blocked: false,
      dtoc: "2023-03-30",
      dtoe: "2023-03-30T16:25:00"
    },
    {
      id: 15,
      userid: "user015",
      name: "Olivia",
      gender: "female",
      blocked: false,
      dtoc: "2023-04-01",
      dtoe: "2023-04-01T11:40:00"
    }]
}
