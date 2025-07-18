export const report = {
    "schema": "1.0",
    "title": "Active Staff",
    "category": "Profile",
    "privilege": "*",
    "blocked": false,
    "rowlink": false,
    "rowsPerPage": 20,
    "showExtraColumn": false,
    "uiswitcher": true,
    "policy": "staff.tab.access",
    "custombar": false,
    "DEBUG": false,
    "script": "staff",
    "topbar": {
        "uitype": "type1"
    },
    "source": {
        "type": "sql",
        "table": "staff_tbl,my_branches",
        "cols": "staff_tbl.id,staff_tbl.guid,staff_tbl.full_name,staff_tbl.type,staff_tbl.uan_no,staff_tbl.pf_no,staff_tbl.esic_no,staff_tbl.status,staff_tbl.department,staff_tbl.designation,staff_tbl.email1,staff_tbl.mobile,staff_tbl.aadhar,staff_tbl.tags,staff_tbl.loginid,staff_tbl.email2,staff_tbl.remarks,staff_tbl.gender,staff_tbl.dob,staff_tbl.blocked,staff_tbl.designation,my_branches.name,staff_tbl.blacklist,staff_tbl.created_on,staff_tbl.created_by,staff_tbl.edited_on,staff_tbl.edited_by,staff_tbl.profile_code,staff_tbl.category,staff_tbl.avatar,staff_tbl.pan,staff_tbl.sub_category,staff_tbl.id as staff_id,staff_tbl.joining_date,staff_tbl.reporting_to,concat(staff_tbl.tags,',',staff_tbl.status) as tagged, concat('Since ',staff_tbl.joining_date) as vintage_date, TIMESTAMPDIFF(MONTH, joining_date, CURDATE()) AS vintage,staff_tbl.branch, CONCAT(YEAR(now()),DATE_FORMAT(staff_tbl.dob,'-%m-%d')) as dateofbirth",
        "where": {
            "staff_tbl.status in ('active','under_notice','probationary')": "RAW",
            "staff_tbl.blocked": "false",
            "(my_branches.id=staff_tbl.branch)": "RAW",
            "staff_tbl.organization": "#COMP_ID#",
            "my_branches.blocked": "false",
            "staff_tbl.guid": "#SESS_GUID#",
            "staff_tbl.id": ["1", "GT"]
        },
        "limit": 1000
    },
    "actions1": {
        "forms@staff.main/new": {
            "label": "Staff",
            "icon": "fa fa-plus",
            "class": "btn btn-info profile-employees"
        }
    },
    "buttons": {
        "viewProfileInfo": {
            "label": "View Active Staff",
            "icon": "fa fa-eye",
            "class": "profile-employees",
            "policy": "staff.view.access"
        },
        "forms@staff.main_edit/edit/{hashid}": {
            "label": "Edit Active Staff",
            "icon": "fa fa-pencil",
            "class": "profile-employees",
            "policy": "staff.update.access"
        },
        "viewStaffSummary": {
            "label": "View Staff Summary",
            "icon": "fa fa-user",
            "policy": "staff.view.access"
        },
        "more": {
            "promationToStaff": {
                "label": "Promotion",
                "icon": "fa fa-check",
                "policy": "staff.update.access"
            },
            "forms@staff.resign_by_staff/edit/{hashid}": {
                "label": "Resign",
                "icon": "fa fa-close",
                "policy": "staff.update.access"
            },
            "settlement": {
                "label": "Settlement",
                "icon": "fa fa-exchange",
                "policy": "staff.update.access"
            },
            "forms@staff.blacklist_staff/new?staff_id={staff_id}": {
                "label": "Blacklist Staff",
                "icon": "fa fa-ban",
                "policy": "staff.update.access"
            }
        }
    },
    "sidebar1": {
        "type": "filter",
        "source": {
            "designation": {
                "type": "sql",
                "table": "staff_tbl",
                "cols": "designation as title, designation as value",
                "where": {
                    "blocked": "false",
                    "status in ('active','under_notice','probationary')": "RAW"
                },
                "groupby": "staff_tbl.designation",
                "orderby": "staff_tbl.designation"
            }
        }
    },
    "sidebar": {
        "type": "filter",
        "source": {
            "designation": {
                "title": "Designation",
                "type": "dataSelectorFromTable",
                "table": "staff_tbl,my_branches",
                "cols": "REPLACE(designation,'_',' ') as title, designation as value",
                "where": {
                    "staff_tbl.designation !=''": "RAW",
                    "staff_tbl.status in ('active','under_notice','probationary')": "RAW",
                    "staff_tbl.blocked": "false",
                    "(my_branches.id=staff_tbl.branch)": "RAW",
                    "staff_tbl.organization": "#COMP_ID#",
                    "my_branches.blocked": "false",
                    "staff_tbl.guid": "#SESS_GUID#"
                },
                "groupby": "staff_tbl.designation",
                "orderby": "staff_tbl.designation asc",
                "no-option": "Select Designation"
            },
            "my_branches.id": {
                "title": "Branch",
                "type": "dataSelectorFromTable",
                "table": "my_branches,staff_tbl",
                "cols": "my_branches.name as title,my_branches.id as value",
                "where": {
                    "my_branches.name !=''": "RAW",
                    "staff_tbl.status in ('active','under_notice','probationary')": "RAW",
                    "staff_tbl.blocked": "false",
                    "(my_branches.id=staff_tbl.branch)": "RAW",
                    "staff_tbl.organization": "#COMP_ID#",
                    "my_branches.blocked": "false",
                    "my_branches.guid": "#SESS_GUID#"
                },
                "groupby": "my_branches.id",
                "orderby": "my_branches.name asc",
                "no-option": "Select Branch"
            },
            "staff_tbl.category": {
                "title": "Team/Group",
                "type": "dataSelectorFromTable",
                "table": "do_lists",
                "cols": "title as title, value as value",
                "where": {
                    "do_lists.groupid": "staff_team_group"
                },
                "no-option": "Select Team/Group"
            },
            "department": {
                "title": "Department",
                "type": "dataSelectorFromTable",
                "table": "staff_tbl",
                "cols": "upper(department) as title, department as value",
                "where": {
                    "blocked": "false",
                    "status in ('active','under_notice','probationary')": "RAW"
                },
                "groupby": "staff_tbl.department",
                "orderby": "staff_tbl.department",
                "no-option": "Select Department"
            }
        }
    },
    "datagrid": {
        "staff_tbl.id": {
            "label": "ID",
            "hidden": false,
            "searchable": true,
            "sortable": true,
            "groupable": false,
            "classes": "",
            "style": "width:50px;",
            "formatter": "text"
        },
        "staff_tbl.profile_code": {
            "label": "Staff Code",
            "searchable": true,
            "sortable": true
        },
        "staff_tbl.full_name": {
            "label": "Employee Name",
            "searchable": true,
            "sortable": true
        },
        "staff_tbl.type": {
            "label": "Type",
            "searchable": true,
            "sortable": true,
            "formatter": "pretty",
            "filter": {
                "type": "dataSelectorFromUniques",
                "nofilter": "--",
                "table": "do_lists",
                "columns": "title,value",
                "where": {
                    "groupid": "employee_type"
                }
            }
        },

        "staff_tbl.department": {
            "label": "Department",
            "searchable": true,
            "sortable": true,
            "formatter": "pretty",
            "filter": {
                "type": "dataSelectorFromUniques",
                "nofilter": "--",
                "table": "do_lists",
                "columns": "title,value",
                "where": {
                    "groupid": "hr_department_type"
                }
            }
        },
        "staff_tbl.designation": {
            "label": "Designation",
            "searchable": true,
            "sortable": true,
            "formatter": "pretty",
            "filter": {
                "type": "text"
            }
        },

        "staff_tbl.category": {
            "label": "Team/Group",
            "searchable": true,
            "sortable": true,
            "hidden": false,
            "formatter": "pretty",
            "filter": {
                "type": "dataSelector",
                "nofilter": "--",
                "groupid": "staff_team_group"
            }
        },
        "my_branches.name": {
            "label": "Branch",
            "searchable": true,
            "sortable": true,
            "hidden": false,
            "formatter": "pretty",
            "filter": {
                "type": "dataSelectorFromUniques",
                "nofilter": "--",
                "table": "my_branches",
                "columns": "name,name"
            }
        },
        "staff_tbl.loginid": {
            "label": "Login ID",
            "searchable": true,
            "sortable": true,
            "hidden": true
        },
        "staff_tbl.sub_category": {
            "label": "Grade",
            "searchable": true,
            "sortable": true,
            "formatter": "pretty",
            "hidden": true
        },
        "staff_tbl.avatar": {
            "label": "Avatar",
            "searchable": true,
            "sortable": true,
            "type": "file",
            "hidden": true
        },
        "staff_tbl.email1": {
            "label": "Email",
            "searchable": true,
            "sortable": true
        },
        "staff_tbl.email2": {
            "label": "Alternate Email",
            "searchable": true,
            "sortable": true,
            "hidden": true
        },
        "staff_tbl.mobile": {
            "label": "Mobile",
            "searchable": true,
            "sortable": true
        },

        "staff_tbl.gender": {
            "label": "Gender",
            "searchable": true,
            "sortable": true,
            "hidden": true,
            "formatter": "pretty",
            "filter": {
                "type": "dataSelectorFromUniques",
                "nofilter": "--",
                "table": "do_lists",
                "columns": "title,value",
                "where": {
                    "groupid": "user_gender"
                }
            }
        },
        "staff_tbl.dob": {
            "label": "DOB",
            "searchable": true,
            "sortable": true,
            "formatter": "date",
            "hidden": true,
            "filter": {
                "type": "date"
            }
        },
        "staff_tbl.reporting_to": {
            "label": "Reporting TO",
            "searchable": true,
            "sortable": true,
            "hidden": true
        },
        "staff_tbl.joining_date": {
            "label": "Joining Date",
            "searchable": true,
            "sortable": true,
            "formatter": "date",
            "hidden": true,
            "filter": {
                "type": "date"
            }
        },
        "staff_tbl.pan": {
            "label": "PAN No",
            "searchable": true,
            "sortable": true,
            "hidden": true
        },
        "staff_tbl.aadhar": {
            "label": "Aadhaar No",
            "searchable": true,
            "sortable": true,
            "hidden": true
        },
        "staff_tbl.uan_no": {
            "label": "UAN Number",
            "searchable": true,
            "sortable": true
        },
        "staff_tbl.pf_no": {
            "label": "PF Number",
            "searchable": true,
            "sortable": true
        },
        "staff_tbl.esic_no": {
            "label": "ESIC Number",
            "searchable": true,
            "sortable": true
        },
        "staff_tbl.status": {
            "label": "Status",
            "searchable": true,
            "sortable": true,
            "formatter": "pretty",
            "filter": {
                "type": "dataSelectorFromUniques",
                "nofilter": "--",
                "table": "do_lists",
                "columns": "title,value",
                "where": {
                    "groupid": "profile_staff_status",
                    "value in ('active','under_notice','probationary')": "RAW"
                }
            }
        },
        "staff_tbl.tags": {
            "label": "Tags",
            "searchable": true,
            "sortable": true,
            "formatter": "pretty",
            "hidden": true
        },
        "staff_tbl.blocked": {
            "label": "Blocked",
            "searchable": true,
            "sortable": true,
            "hidden": true,
            "formatter": "pretty",
            "filter": {
                "type": "dataSelectorFromUniques",
                "nofilter": "--",
                "table": "do_lists",
                "columns": "title,value",
                "where": {
                    "groupid": "boolean"
                }
            }
        },
        "staff_tbl.created_on": {
            "label": "Added On",
            "sortable": true,
            "searchable": true,
            "formatter": "datetime",
            "hidden": true,
            "filter": {
                "type": "date"
            }
        },
        "staff_tbl.created_by": {
            "label": "Added By",
            "sortable": true,
            "searchable": true,
            "hidden": true

        },
        "staff_tbl.edited_on": {
            "label": "Edited On",
            "sortable": true,
            "searchable": true,
            "formatter": "datetime",
            "hidden": true,
            "filter": {
                "type": "date"
            }
        },
        "staff_tbl.edited_by": {
            "label": "Edited By",
            "sortable": true,
            "searchable": true,
            "hidden": true

        }
    },
    "cards": {
        "colmap": {
            "title": "full_name",
            "descs": "department",
            "category": "category",
            "due_date": "vintage_date",
            "avatar": "avatar",
            "color": "status",
            "tags": "tagged",
            "counter": "vintage"
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
            "branch": {
                "label": "Branch",
                "table": "my_branches",
                "columns": "name as title,id as value"
            },
            "designation": {
                "label": "Designation",
                "table": "staff_tbl",
                "columns": "designation as title,designation as value"
            },
            "status": {
                "label": "Status",
                "table": "staff_tbl",
                "columns": "status as title,status as value"
            },
            "sub_category": {
                "label": "Grade",
                "table": "staff_tbl",
                "columns": "sub_category as title,sub_category as value"
            },
            "department": {
                "label": "Department",
                "table": "staff_tbl",
                "columns": "department as title,department as value"
            }

        },
        "colmap": {
            "title": "full_name",
            "descs": "department",
            "category": "category",
            "due_date": "vintage_date",
            "avatar": "avatar",
            "color": "status",
            "tags": "tagged",
            "counter": "vintage"
        },
        "unilink": "staff.main"
    },
    "calendar": {
        "colmap": {
            "title": "full_name",
            "descs": "department"
        },
        "date_col1": "dateofbirth",
        "date_col": {
            "dateofbirth": "#333",
            "joining_date": "orange"
        },
        "unilink": "staff.main",
        "notes_user": "<div class='text-center' style='color:white;'><span style='background:#333;padding:5px;'>Birthday</span><span style='background:orange;padding:5px;'>Joining Date</span></div>"
    },
    "rows": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
}