export const report = {
  endPoints: {
    saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/raw`,
    accessToken:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiYXBwSWQiOiJkZW1vIiwiaWQiOjEsInVzZXJJZCI6ImFkbWluIiwidXNlcm5hbWUiOiJBZG1pbiIsInRlbmFudElkIjoiU0lMSyIsImd1aWQiOiJTSUxLIiwicHJpdmlsZWdlIjoicm9vdCIsInJvbGVzIjpbIkdlbmVyYWwiLCJTSUxLIl0sInNjb3BlcyI6W10sImlwIjoiMTkyLjE2OC4wLjY2IiwiZGV2aWNlVHlwZSI6IndlYiIsImlhdCI6MTc2ODU0Mzg0NCwiZXhwIjoxNzY4NTQ3NDQ0LCJqdGkiOiJhY2M6MToxNzY4NTQzODQ0OTUwOndlYiJ9.mhEzqhgchDZe2WvEQFsVlui6JaJQM9Y6IF0QoNtkPEQ",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiYXBwSWQiOiJkZW1vIiwiaWQiOjEsInVzZXJJZCI6ImFkbWluIiwidXNlcm5hbWUiOiJBZG1pbiIsInRlbmFudElkIjoiU0lMSyIsImd1aWQiOiJTSUxLIiwicHJpdmlsZWdlIjoicm9vdCIsInJvbGVzIjpbIkdlbmVyYWwiLCJTSUxLIl0sInNjb3BlcyI6W10sImlwIjoiMTkyLjE2OC4wLjY2IiwiZGV2aWNlVHlwZSI6IndlYiIsImlhdCI6MTc2ODU0Mzg0NCwiZXhwIjoxNzY4NTQ3NDQ0LCJqdGkiOiJhY2M6MToxNzY4NTQzODQ0OTUwOndlYiJ9.mhEzqhgchDZe2WvEQFsVlui6JaJQM9Y6IF0QoNtkPEQ`,
      "Content-Type": "application/json",
    },
  },
  schema: "1.0",
  title: "My Leads",
  category: "Lead",
  privilege: "*",
  blocked: false,
  rowlink: false,
  rowsPerPage: 10,
  uiswitcher: true,
  policy: "leadbook.tab.access",
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
  script: "lead",
  actions: {
    "forms@lead.main": {
      label: "Add Lead",
      policy: "leadbook.view.access",
    },
  },
  rules: {
    row_class: {
      lead_status: {
        deal: "deal-lead-row",
      },
    },
  },
  buttons: {
    "infoview@lead.main_view/{id}": {
      label: "View My Lead",
      icon: "fa fa-eye",
      class: "leads-lead",
      policy: "leadbook.view.access",
    },
    "forms@lead.main/update/{id}": {
      label: "Edit My Lead",
      icon: "fa fa-pencil",
      class: "leads-lead",
      policy: "leadbook.update.access",
    },
    "forms@lead.add_follow_up": {
      label: "Add FOLLOW UP",
      icon: "fa fa-plus",
      policy: "leadbook.create.access",
    },
    more: {
      "forms@lead.add_actions/create/{id}": {
        label: "Add Actions",
        icon: "fa fa-code",
        class: "next-action-btn",
        policy: "leadbook.create.access",
      },
      "forms@lead.add_mom/create/{id}": {
        label: "Add MOM",
        icon: "fa fa-plus",
        class: "next-action-btn",
        policy: "leadbook.create.access",
      },
    },
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
      group: "a",
    },
    lead_date: {
      label: "Date",
      hidden: true,
      formatter: "date",
      sortable: true,
      searchable: false,
      filter: {
        type: "date",
      },
      group: "a",
    },
    "lead_followup.follow_up_date": {
      label: "Follow Up Date",
      hidden: true,
      formatter: "date",
      sortable: true,
      searchable: false,
      filter: {
        type: "date",
      },
      group: "c",
    },
    "lead_followup.follow_up_time": {
      label: "Follow Up Time",
      hidden: true,
      sortable: true,
      searchable: false,
      filter: {
        type: "time",
      },
      group: "a",
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
      group: "c",
    },
    "lead_actions.date": {
      label: "Action Date",
      hidden: true,
      formatter: "date",
      sortable: true,
      searchable: false,
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
        nofilter: "--",
        table: "do_lists",
        columns: "title,value",
        where: {
          groupid: "lead_priority",
        },
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
        nofilter: "--",
        table: "leads_tbl",
        columns:
          "CONCAT(UPPER(SUBSTRING(lead_status, 1, 1)), LOWER(SUBSTRING(lead_status, 2))) as title, lead_status as value",
        groupby: "lead_status",
        where: {
          "lead_status NOT IN ('dead', 'Converted', 'order', 'bad', 'lost', 'junk', 'closed')":
            "RAW",
        },
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
        nofilter: "--",
        table: "do_lists",
        columns: "title,value",
        where: {
          groupid: "lead_type",
        },
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
      searchable: false,
    },
    created_on: {
      label: "Created On",
      hidden: true,
      formatter: "date",
      sortable: true,
      searchable: false,
      filter: {
        type: "date",
      },
    },
    edited_by: {
      label: "Updated By",
      hidden: true,
      sortable: true,
      searchable: false,
    },
    edited_on: {
      label: "Updated On",
      sortable: true,
      searchable: false,
      formatter: "date",
      filter: {
        type: "date",
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
      lead_status: {
        label: "Status",
        table: "leads_tbl",
        columns: "lead_status as title,lead_status as value",
      },
      lead_type: {
        label: "Type",
        table: "leads_tbl",
        columns: "lead_type as title,lead_type as value",
      },
      net_amount: {
        label: "Net Amount",
        table: "leads_tbl",
        columns: "net_amount as title,net_amount as value",
      },
      customer_type: {
        label: "Customer Type",
        table: "leads_tbl",
        columns: "customer_type as title,customer_type as value",
      },
    },
    colmap: {
      title: "title",
      descs: "newContact",
      tag: "lead_status",
      due_date: "lead_date",
    },
    unilink: "lead.main",
  },
};
