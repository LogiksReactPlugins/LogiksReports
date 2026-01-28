export const report = {
  endPoints: {
    saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/raw`,
    accessToken:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Im9Md0IxWVk3WkRsaEl3QTE5d1UxM0JjR0pKN2cyd3I3QUdaZG4valpCQU5VU2RXcUJud0QzZFVhNlpQeExpWHY1OWd6U3dBLzVnQ3pyeVRTVnNxL0pJME9rTW1qRXJhT1hEQmFVSGFUUHZSeS8wd2VHMHphUW5ieVZvR1NmRjUwcDlrWkhsSHJnNVRtYUI4Sm9Db1JSRUFtRVJMWVNkaUovbUxrTnNIa0V1RjlCbVY0QkIvZ0QrcitjSVphL1lPNC91MUZ0Y0lpOTNUTUd5VWxlVEVGZ0xTVVBUMS9HMFVpSnJFTlQwUDFGdUhHRXhmd1M1cjZMTWtvbW0weFZ1UjNNSjRaWUY4NnVJalpVM2JZWUpXSkh0clRyb0RZcXNLTkpwZGhmZmM9IiwiaWF0IjoxNzY5NDg4NzkyLCJleHAiOjE3Njk0OTIzOTIsImp0aSI6ImFjYzoxOjE3Njk0ODg3OTIyMDE6d2ViIn0.0QucFhKH5XCHTX9vVxh8ko-XwYoGHxPsyy3Nxv2FSEk",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Im9Md0IxWVk3WkRsaEl3QTE5d1UxM0JjR0pKN2cyd3I3QUdaZG4valpCQU5VU2RXcUJud0QzZFVhNlpQeExpWHY1OWd6U3dBLzVnQ3pyeVRTVnNxL0pJME9rTW1qRXJhT1hEQmFVSGFUUHZSeS8wd2VHMHphUW5ieVZvR1NmRjUwcDlrWkhsSHJnNVRtYUI4Sm9Db1JSRUFtRVJMWVNkaUovbUxrTnNIa0V1RjlCbVY0QkIvZ0QrcitjSVphL1lPNC91MUZ0Y0lpOTNUTUd5VWxlVEVGZ0xTVVBUMS9HMFVpSnJFTlQwUDFGdUhHRXhmd1M1cjZMTWtvbW0weFZ1UjNNSjRaWUY4NnVJalpVM2JZWUpXSkh0clRyb0RZcXNLTkpwZGhmZmM9IiwiaWF0IjoxNzY5NDg4NzkyLCJleHAiOjE3Njk0OTIzOTIsImp0aSI6ImFjYzoxOjE3Njk0ODg3OTIyMDE6d2ViIn0.0QucFhKH5XCHTX9vVxh8ko-XwYoGHxPsyy3Nxv2FSEk`,
      "Content-Type": "application/json",
    },
  },
  schema: "1.0",
  title: "My Leads",
  category: "Lead",
  privilege: "*",
  blocked: false,
  rowlink: false,
  rowsPerPage: 20,
  uiswitcher: true,
  custombar: false,
  showExtraColumn: "checkbox",
  DEBUG: false,
  topbar: {
    uitype: "type1",
  },
  source: {
    type: "sql",
    table: "leads_tbl",
    cols: "leads_tbl.*",
    where: {
      "(DATE(leads_tbl.created_on)< CURDATE())": "RAW",
    },
    limit: 500,
  },
  actions: {},
  rules: {
    row_class: {
      lead_status: {
        deal: "deal-lead-row",
      },
    },
  },
  buttons: {
    more: {},
  },
  smartfilter: {
    type: "list",
    all_records: true,
    source: {
      "leads_tbl.lead_status": {
        type: "sql",
        table: "leads_tbl",
        cols: "leads_tbl.lead_status as title, leads_tbl.lead_status as value, count(leads_tbl.id) as counter,leads_tbl.lead_status as icon",
        where: {
          "leads_tbl.lead_status NOT IN ('dead', 'Converted', 'order', 'bad', 'lost', 'junk', 'closed')":
            "RAW",
          "(leads_tbl.assigned_to='#SESS_USER_ID#' OR leads_tbl.manager='#SESS_USER_ID#' OR leads_tbl.open_by='#SESS_USER_ID#'  OR  #SESS_PRIVILEGE_ID# <= #ADMIN_PRIVILEGE_RANGE#)":
            "RAW",
          "leads_tbl.blocked": "false",
          "leads_tbl.guid": "#SESS_GUID#",
          "length(leads_tbl.assigned_to)>1": "RAW",
          "leads_tbl.company_id": "#COMP_ID#",
        },
        groupby: "leads_tbl.lead_status",
      },
    },
  },
  sidebar: {
    type: "filter",
    source: {
      "leads_tbl.assigned_to": {
        title: "Assigned To",
        type: "dataSelectorFromTable",
        table: "leads_tbl",
        cols: "assigned_to as title, assigned_to as value",
        where: {
          "leads_tbl.lead_status NOT IN ('dead', 'Converted', 'order', 'bad', 'lost', 'junk', 'closed')":
            "RAW",
          "(leads_tbl.assigned_to='#SESS_USER_ID#' OR leads_tbl.manager='#SESS_USER_ID#' OR leads_tbl.open_by='#SESS_USER_ID#'  OR  #SESS_PRIVILEGE_ID# <= #ADMIN_PRIVILEGE_RANGE#)":
            "RAW",
          "leads_tbl.blocked": "false",
          "leads_tbl.guid": "#SESS_GUID#",
          "length(leads_tbl.assigned_to)>1": "RAW",
          "leads_tbl.company_id": "#COMP_ID#",
          "leads_tbl.assigned_to !=''": "RAW",
        },
        groupby: "leads_tbl.assigned_to",
        orderby: "leads_tbl.assigned_to asc",
        "no-option": "Select Assigned To",
      },
      "leads_tbl.manager": {
        title: "Manager",
        type: "dataSelectorFromTable",
        table: "leads_tbl",
        cols: "manager as title,manager as value",
        where: {
          "leads_tbl.lead_status NOT IN ('dead', 'Converted', 'order', 'bad', 'lost', 'junk', 'closed')":
            "RAW",
          "(leads_tbl.assigned_to='#SESS_USER_ID#' OR leads_tbl.manager='#SESS_USER_ID#' OR leads_tbl.open_by='#SESS_USER_ID#'  OR  #SESS_PRIVILEGE_ID# <= #ADMIN_PRIVILEGE_RANGE#)":
            "RAW",
          "leads_tbl.blocked": "false",
          "leads_tbl.guid": "#SESS_GUID#",
          "length(leads_tbl.assigned_to)>1": "RAW",
          "leads_tbl.company_id": "#COMP_ID#",
          "leads_tbl.manager !=''": "RAW",
        },
        groupby: "leads_tbl.manager",
        orderby: "leads_tbl.manager asc",
        "no-option": "Select Manager",
      },
      "leads_tbl.customer_id": {
        title: "Customer",
        type: "dataSelectorFromTable",
        table: "leads_tbl,profiletbl",
        cols: "profiletbl.full_name as title,profiletbl.id as value",
        where: {
          "leads_tbl.lead_status NOT IN ('dead', 'Converted', 'order', 'bad', 'lost', 'junk', 'closed')":
            "RAW",
          "(leads_tbl.assigned_to='#SESS_USER_ID#' OR leads_tbl.manager='#SESS_USER_ID#' OR leads_tbl.open_by='#SESS_USER_ID#'  OR  #SESS_PRIVILEGE_ID# <= #ADMIN_PRIVILEGE_RANGE#)":
            "RAW",
          "leads_tbl.blocked": "false",
          "leads_tbl.guid": "#SESS_GUID#",
          "length(leads_tbl.assigned_to)>1": "RAW",
          "leads_tbl.customer_id=profiletbl.id": "RAW",
          "leads_tbl.company_id": "#COMP_ID#",
          "profiletbl.full_name !=''": "RAW",
        },
        groupby: "profiletbl.id",
        orderby: "profiletbl.full_name asc",
        "no-option": "Select Customer",
      },
      "leads_tbl.lead_date": {
        title: "Month-Year Wise",
        type: "dataSelectorFromTable",
        table: "leads_tbl",
        cols: "DATE_FORMAT(leads_tbl.lead_date, '%M-%Y') as title,DATE_FORMAT(leads_tbl.lead_date, '%Y-%m') as value",
        where: {
          "leads_tbl.lead_status NOT IN ('dead', 'Converted', 'order', 'bad', 'lost', 'junk', 'closed')":
            "RAW",
          "(leads_tbl.assigned_to='#SESS_USER_ID#' OR leads_tbl.manager='#SESS_USER_ID#' OR leads_tbl.open_by='#SESS_USER_ID#'  OR  #SESS_PRIVILEGE_ID# <= #ADMIN_PRIVILEGE_RANGE#)":
            "RAW",
          "leads_tbl.blocked": "false",
          "leads_tbl.guid": "#SESS_GUID#",
          "length(leads_tbl.assigned_to)>1": "RAW",
          "leads_tbl.company_id": "#COMP_ID#",
          "leads_tbl.assigned_to !=''": "RAW",
        },
        groupby: "DATE_FORMAT(leads_tbl.lead_date, '%M-%Y')",
        "no-option": "Select Month Wise leads",
        orderby: "leads_tbl.lead_date desc",
      },
    },
  },
  toolbar: {
    search: true,
    print: true,
    email: false,
  },
  datagrid: {
    id: {
      label: "ID",
      hidden: false,
      searchable: true,
      sortable: true,
      groupable: false,
      classes: "",
      style: "width:50px;",
      formatter: "text",
    },
    title: {
      label: "Title / For",
      sortable: true,
      searchable: true,
      hidden: false,
      groupable: true,
    },
    lead_date: {
      label: "Date",
      hidden: true,
      formatter: "date",
      sortable: true,
      searchable: true,
      filter: {
        type: "date",
      },
    },
    follow_up_date: {
      label: "Follow Up Date",
      hidden: true,
      formatter: "date",
      sortable: true,
      searchable: true,
      filter: {
        type: "date",
      },
    },
    follow_up_time: {
      label: "Follow Up Time",
      hidden: true,
      sortable: true,
      searchable: true,
      filter: {
        type: "time",
      },
    },
    followup_remark: {
      label: "Follow Remark",
      hidden: true,
      formatter: "text",
      sortable: true,
      searchable: false,
      filter: {
        type: "text",
      },
    },
    "lead_actions.date": {
      label: "Action Date",
      hidden: true,
      formatter: "date",
      sortable: true,
      searchable: true,
      filter: {
        type: "date",
      },
    },
    lead_actions_msg: {
      label: "Action Message",
      hidden: true,
      formatter: "text",
      sortable: true,
      searchable: false,
      filter: {
        type: "text",
      },
    },
    contact_name: {
      label: "Client",
      sortable: true,
      searchable: true,
      hidden: true,
    },
    contact_email: {
      label: "Client Email",
      sortable: true,
      searchable: true,
      hidden: true,
    },
    contact_mobile: {
      label: "Client Mobile",
      sortable: true,
      searchable: true,
      hidden: true,
    },
    days: {
      label: "Days",
      sortable: true,
      searchable: false,
      hidden: true,
    },
    lead_priority: {
      label: "Priority",
      sortable: true,
      searchable: true,
      hidden: true,
      formatter: "pretty",
      filter: {
        type: "dataSelectorFromUniques",
        queryid: "R5BMc07T_QnJ",
      },
    },
    lead_status: {
      label: "Status",
      hidden: false,
      sortable: true,
      searchable: true,
      formatter: "pretty",
      groupable: true,
      filter: {
        type: "dataSelectorFromTable",
        queryid: "g-iRMHV1y9hz",
      },
    },
    lead_type: {
      label: "Type",
      sortable: true,
      searchable: true,
      hidden: true,
      formatter: "pretty",
      filter: {
        type: "dataSelectorFromUniques",
        queryid: "fWmThqJb2Bw-",
      },
    },
    net_amount: {
      label: "Net Amount",
      sortable: true,
      searchable: true,
      hidden: true,
    },
    lead_value: {
      label: "Lead Value",
      sortable: true,
      searchable: true,
      hidden: true,
    },
    manager: {
      label: "Manager",
      sortable: true,
      searchable: true,
      filter: {
        type: "text",
      },
    },
    assigned_to: {
      label: "Assigned To",
      sortable: true,
      searchable: true,
      filter: {
        type: "text",
      },
    },
    open_by: {
      label: "Open By",
      sortable: true,
      searchable: true,
      filter: {
        type: "text",
      },
    },
    created_by: {
      label: "Created By",
      hidden: true,
      sortable: true,
      searchable: true,
    },
    created_on: {
      label: "Created On",
      hidden: true,
      formatter: "date",
      sortable: true,
      searchable: true,
      filter: {
        type: "daterange",
      },
    },
    edited_by: {
      label: "Updated By",
      hidden: true,
      sortable: true,
      searchable: true,
    },
    edited_on: {
      label: "Updated On",
      sortable: true,
      searchable: true,
      formatter: "date",
      filter: {
        type: "daterange",
      },
      hidden: true,
    },
    leadid: {
      label: "leadid",
      noshow: true,
    },
  },
  kanban: {
    colkeys: {
      title: {
        label: "Status",
        table: "leads_tbl",
        columns: "lead_status as title,lead_status as value",
      },
      created_on: {
        label: "Created On",
      },
    },
    colmap: {
      title: "title",
      due_date: "created_on",
    },
    unilink: "lead.main",
  },
  script:
    "ZnVuY3Rpb24gdGVzdChkYXRhKSB7CiAgY29uc29sZS5sb2coeyBkYXRhIH0pOwogIGFsZXJ0KCJ0aGlzIGlzIHRlc3QgZnVuY3Rpb24gZnJvbSBBUEkgc2NyaXB0Iik7Cn0K",
  module_refid: "lead.main",
  module_type: "reports",
};
