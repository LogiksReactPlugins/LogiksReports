export const report={
	"schema":"1.0",
	"title":"Test Report",
	"category":"CMS",
	"privilege":"*",
	"blocked":false,
	"rowlink":false,
	"rowsPerPage":20,
	"showExtraColumn":"checkbox",
	"custombar":false,
	"source":{
		"type":"php",
		"file":"plugins/modules/test/test.php"
	},
	"actions":{
		"addRecord": {
			"label":"",
			"icon":"<i class='fa fa-plus'></i>"
		}
	},
	"toolbar":{
		"search":false,
		"print":false,
		"export":false,
		"email":false
	},
	"datagrid":{
		"id":{
			"label":"ID",
			"hidden":false,
			"searchable":false,
			"sortable":true,
			"groupable":false,
			"classes":"",
			"style":"width:50px;",
			"formatter":"text"
		},
		"userid":{
			"label":"UserID",
			"sortable":true,
			"searchable":true,
			"filter":{
				"type":"createDataSelectorFromUniques",
				"table":"lgks_users",
				"col1":"userid",
				"where":{
					"guid":{"VALUE":"seleccontrols","OP":"EQ"},
					"id":{"RAW":"id>1"}
				}
			}
		},
		"gender":{
			"label":"Gender",
			"searchable":true,
			"filter":{
				"type":"select",
				"options":{
					"male":"Male",
					"female":"Female"
				}
			}
		},
		"name":{
			"label":"User Name",
			"hidden":true,
			"searchable":true
		},
		"blocked":{
			"label":"Blocked",
			"formatter":"checkbox",
			"searchable":true,
			"filter":{
				"type":"select",
				"nofilter":"--",
				"options":{
					"true":"Blocked",
					"false":"Not Blocked"
				}
			}
		},
		"dtoc":{
			"label":"Created At",
			"formatter":"date",
			"searchable":true,
			"filter":{
				"type":"date"
			}
		},

		"dtoe":{
			"label":"Updated At",
			"formatter":"time"
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
