export const report = {
  "schema": "1.0",
  "title": "Persona",
  "category": "CMS",
  "privilege": "*",
  "blocked": false,
  "rowlink": false,
  "rowsPerPage": 50,
  "template": "cards",
  "custombar": false,
  // "showExtraColumn": "checkbox",

  // "settings":false,
  // "filters":false,
  "source": {
    "type": "API",  
    // "axiosObject": {
      "method": "get",
      "url": "https://ai.smartinfologiks.com/api/skills/personas", 
      "headers": {
          "appid": "app01",
          "Authorization": "Bearer q5AJgy9ayLip", 
          "Content-Type": "application/json", 
      },
    // },
    "limit": 10
  },
  "actions": {
    "forms@new": {
      "label": "Add Persona",
      "icon": "fa fa-plus",
    }
  },
  "buttons": {
    "infoview@test.main/{hashid}": {
      "label": "View Info",
      "icon": "fa fa-eye"
    },
    "forms@edit/{hashid}": {
      "label": "Edit Info",
      "icon": "fa-solid fa-pen-to-square"
    },
    "page@skills/{id}": {
      "label": "Add",
      "icon": "fa fa-gear pull-lef",
      "params": {
        "test_id": "id"
      }
    }
  },
  "toolbar": {
    // "search": true,
    // "print": true,
    // "email": false,
    // 'export':["pdf",'img']
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
      "formatter": "method",
      'method':'test1'
    },

    "persona_avatar": {
      "label": "persona avatar",
      "formatter":"avatar",
      "searchable": false
    },
    "persona_code": {
      "label": "persona code",
      "sortable": true,
      "searchable": true,     
    },
    "status": {
      "label": "status",
      "searchable": false,
      "filter": {
        "type": "select",
        "options": {
          "male": "published",
          "female": "Female"
        }
      }
    },
    "visibility": {
      "label": "visibility",
      "searchable": false,
      "filter": {
        "type": "select",
        "options": {
          "male": "public",
          "female": "Female"
        }
      }
    },
    "persona_group": {
      "label": "persona group",
      "hidden": false,
      "searchable": true,
            "groupable": true,

    },
    "rating": {
      "label": "rating",
      "hidden": true,
      "searchable": false
    },
    "created_on": {
      "label": "created on",
      'formatter':'date',
      "hidden": true,
      "searchable": false
    },
    "persona_descs": {
      "label": "persona descs"
    }
  },
  "cards": {
    "colmap": {
      "title": "persona_name",
      "descs": "persona_descs",
      "category": "type",
      "due_date": "created_on",
      "avatar": "persona_avatar",
      "color": "status",
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
      "persona_group": {
        "label": "persona group",
      },"created_by": {
        "label": "created by",
      },"editable": {
        "label": "editable",
      },"status": {
        "label": "status",
      },"visibility": {
        "label": "visibility",
      }
    },
    "colmap": {
      "title": "persona_name",
      // "descs": "department",
      "department": "created_by",
      "descs": "persona_descs",
      "category": "gender",

      "due_date": "dtoe",
      "avatar": "persona_avatar",

      "color": "type",
      "tags": "role",
      "counter": "rating"
    },
    "unilink": "staff.main"
  },

  "calendar": {
    "colmap": {
      "title": "persona_name",
      "descs": "persona_desc"
    },
    
    "date_col": {
      "created_on": "#333",
      "edited_on": "orange"
    },
    "unilink": "staff.main",
    "notes_user": "<div class='text-center' style='color:white;'><span style='background:#333;padding:5px;'>created on</span><span style='background:orange;padding:5px;'>edited on</span></div>"
  }
}

