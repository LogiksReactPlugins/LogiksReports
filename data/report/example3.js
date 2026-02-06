export const report = {
  schema: "1.0",
  title: "Persona",
  category: "CMS",
  privilege: "*",
  blocked: false,
  rowlink: false,
  rowsPerPage: 10,
  template: "table",
  custombar: false,
  showExtraColumn: "checkbox",

  // "settings":false,
  // "filters":false,
  source: {
    type: "API",
    method: "get",
    url: "https://ai.smartinfologiks.com/api/skills/personas",
    headers: {
      appid: "app01",
      Authorization: "Bearer q5AJgy9ayLip",
      "Content-Type": "application/json",
    },
    // "limit": 10
    // "url":"http://192.168.0.20:9999/api/query",
    // "method":"post",
    //   "type": "sql",
    //     "table": "lgks_domains",
    //     "cols": "lgks_domains.domain_host,lgks_domains.blocked,lgks_domains.created_by,lgks_domains.created_on",
    //     "where": {
    //         "lgks_domains.id": "1",
    //         "(DATE(lgks_domains.created_on)< CURDATE())": "RAW"
    //     },
    //     "headers": {
    //       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwidXNlcklkIjoxMDEsInVzZXJuYW1lIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6InRlbmFudC0xIiwicm9sZXMiOlsiYWRtaW4iXSwic2NvcGVzIjpbInRlbmFudC0xOm9yZGVyczpyZWFkIiwidGVuYW50LTE6b3JkZXJzOndyaXRlIiwidGVuYW50LTE6ZG9jczpyZWFkIl0sImlwIjoiMTI3LjAuMC4xIiwiZGV2aWNlVHlwZSI6ImFwaSIsImlhdCI6MTc2NTEyOTE4NCwiZXhwIjoxNzY1NzMzOTg0LCJqdGkiOiJhY2M6MTAxOjE3NjUxMjkxODQwMjA6YXBpIn0.8lw9tzW_xkRGAwl_bgT61F4m3Qe6RD2E5dUeq3pZIxs",
    //       "Content-Type": "application/json",
    //   },
    limit: 10,
  },
  actions: {
    "forms@new": {
      label: "Add Persona",
      icon: "fa fa-plus",
    },
  },
  buttons: {
    "infoview@test.main/{hashid}": {
      label: "View Info",
      icon: "fa fa-eye",
      lgksPrompt: "CONFIRMATIOOOOOOOnn {persona_code} ",
    },
    more: {
      "forms@edit/{hashid}": {
        label: "Edit Info",
        icon: "fa-solid fa-pen-to-square",
      },
      "page@skills/{id}": {
        label: "Add",
        icon: "fa fa-gear pull-lef",
      },
      handelTrig: {
        label: "Add",
        icon: "fa fa-gear pull-lef",
      },
      handelTrig2: {
        label: "Add",
        icon: "fa fa-gear pull-lef",
      },
    },
  },
  toolbar: {
    // "search": true,
    // "print": true,
    // "email": false,
    // 'export':["pdf",'img']
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
      method: "test1",
    },

    persona_avatar: {
      label: "persona avatar",
      formatter: "avatar",
      searchable: false,
    },
    persona_code: {
      label: "persona code",
      sortable: true,
      searchable: true,
      formatter: "handelTrig2",
    },
    status: {
      label: "status",
      searchable: false,
      filter: {
        type: "select",
        options: {
          male: "published",
          female: "Female",
        },
      },
    },
    visibility: {
      label: "visibility",
      searchable: false,
      filter: {
        type: "select",
        options: {
          male: "public",
          female: "Female",
        },
      },
    },
    persona_group: {
      label: "persona group",
      hidden: false,
      searchable: true,
      groupable: true,
    },
    rating: {
      label: "rating",
      hidden: true,
      searchable: false,
    },
    created_on: {
      label: "created on",
      formatter: "date",
      hidden: true,
      searchable: false,
      unilink: "handelTrig",
    },
    persona_descs: {
      label: "persona descs",
    },
  },
  cards: {
    colmap: {
      title: "persona_name",
      descs: "persona_descs",
      category: "type",
      due_date: "created_on",
      avatar: "persona_avatar",
      color: "status",
    },
    colormap: {
      active: "card_green",
      under_notice: "card_red",
      probationary: "card_blue",
    },
    unilink: "staff.main",
    default_avatar: true,
  },
  kanban: {
    colkeys: {
      persona_group: {
        label: "persona group",
      },
      created_by: {
        label: "created by",
      },
      editable: {
        label: "editable",
      },
      status: {
        label: "status",
      },
      visibility: {
        label: "visibility",
      },
    },
    colmap: {
      title: "persona_name",
      // "descs": "department",
      department: "created_by",
      descs: "persona_descs",
      category: "gender",

      due_date: "dtoe",
      avatar: "persona_avatar",

      color: "type",
      tags: "role",
      counter: "rating",
    },
    unilink: "staff.main",
  },
  gallery: {
    colmap: {
      avatar: "persona_avatar",
      title: "persona_name",
      descs: "persona_desc",
      due_date: "persona_code",
    },
    unilink: "staff.main",
  },
  calendar: {
    colmap: {
      title: "persona_name",
      descs: "persona_desc",
    },

    date_col: {
      created_on: "#333",
      edited_on: "orange",
    },
    unilink: "staff.main",
    notes_user:
      "<div class='text-center' style='color:white;'><span style='background:#333;padding:5px;'>created on</span><span style='background:orange;padding:5px;'>edited on</span></div>",
  },
  gantt: {
    colmap: {
      id: "id",
      name: "persona_name",
      start: "created_on",
      end: "end_date",
      progress: "completion",
      owner: "assigned_to",
      milestone: "is_milestone",
      parent: "parent_id",
      dependencies: "depends_on",
    },
  },
  gmap: {
    zoom: 4,
    mapid: "terrain",
    colmap: {
      title: "name",
      descs: "info",
      geolocation: "geo",
    },
    template: `<div>
        <h2>$title</h2>
        <p>$descs</p>
      </div>`,
  },
  rules: {
    row_class: {
      persona_group: {
        Lifestyle: "bg-red-500",
      },
    },
    col_class: {
      persona_group: {
        Lifestyle: "bg-red-500",
      },
    },
  },
};
