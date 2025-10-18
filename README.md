
{{>toc}}


---

## Usage

```tsx
import { Reports } from 'logiks-reports';
import "logiks-reports/index.css";


const reportJson = {
  "title": "Persona",
  "rowlink": false,
  "rowsPerPage": 10,
  "template": "",
  "custombar": false,
  "showExtraColumn": "checkbox",
  "source": {
    "type": "API",  
    "method": "get",
    "url": `APIURL`, 
    "headers": {
         "appid": "app01",
         "Authorization": "Bearer 1111", 
         "Content-Type": "application/json", 
    },
    "limit": 10
  },
  "actions": {
    "forms@new": {
      "label": "Persona",
      "icon": "fa fa-plus mr-1",
    }
  },
  "buttons": {
    "infoview@test": {
      "label": "View Info",
      "icon": "fa fa-eye"
    },
    "forms@edit": {
      "label": "Edit Info",
      "icon": "fa-solid fa-pen-to-square"
    },
    "page@skills": {
      "label": "Add",
      "icon": "fa fa-gear pull-lef"
    }
  },
  "toolbar": {
     "search": true,
    "print": true,
    "email": false,
    'export':[]
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
    "persona_group": {
      "label": "persona group",
      "hidden": false,
      "searchable": true,
      "groupable": true,

    },
    "persona_avatar": {
      "label": "persona avatar",
      "hidden": true,
      "searchable": false
    },
    "rating": {
      "label": "rating",
      "hidden": true,
      "searchable": false
    },
    "created_on": {
      "label": "created on",
      "formatter":"date",
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
      "department": "created_by",
      "descs": "persona_descs",
      "category": "gender",
      "due_date": "dtoe",
      "avatar": "persona_avatar",
      "color": "type",
      "tags": "role",
      "counter": "rating"
    },
  },

  "calendar": {
    "colmap": {
      "title": "persona_name",
      "descs": "persona_desc"
    },
    
    "date_col": {
      "created_on": "#9428C8",
      "edited_on": "#3653C6"
    },
    "unilink": "staff.main",
    "notes_user": "<div class='text-center' style='color:white;'><span style='background:#333;padding:5px;'>created on</span><span style='background:orange;padding:5px;'>edited on</span></div>"
  },
  "gallery":{
		"colmap":{
		    "avatar": "persona_avatar",
			"title":"persona_name",
			"descs":"persona_desc",
			"due_date":"persona_code"
		},
	},
    "gantt":{
    "colmap": {
        "id": "id",
        "name": "persona_name",
        "start": "created_on",
        "end": "end_date",
        "progress": "completion",
        "owner": "assigned_to",
        "milestone": "is_milestone",
        "parent": "parent_id",
        "dependencies": "depends_on"
      }
  },
   "gmap": {
    "zoom": 4,
    "mapid": "terrain",
    "colmap": {
      "title": "name",
      "descs": "info",
      "geolocation": "geo",
    },
    "template": `<div>
        <h2>$title</h2>
        <p>$descs</p>
      </div>`,
  }
}



export default function App() {
  return <Reports
          report={reportJson} 
          onButtonClick={handleAction}
          style={{}}
          data={[]}
          />;
}
````

---

## Props

| Prop        | Type      | Required | Default | Description                                               |
| ----------- | --------- | -------- | ------- | --------------------------------------------------------- |
| `report`   | `object`  | ✅ Yes    | —       | JSON config object that defines the report structure. |
| `style`   | `object`  | ❌ No   | —       |  - |
| `data`   | `Array[object]`  | ❌ No   | —       |  - |
| `onButtonClick` | `function` | ❌ No     | - | used to handel all button triggers and find what action to do . get (buttonKey, data) in return  |

---
## JSON Schema (`report`)

### Top-Level Configuration

| Key           | Type                 | Required | Default    | Description                                                                                                                                                                      |
| ------------- | -------------------- | -------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | `string`             | ❌ No       | `""`       | Optional report title. If enabled, the report data count is shown alongside.                                                                                                     |
| `rowsPerPage` | `number`             | ❌ No       | `10`       | Number of records per page. Available options: `10, 25, 50, 100, 200, 500, 1000, 2000, 5000`.                                                                                    |
| `template`    | `string`             | ❌ No       | `"table"`  | Default template type. Supported: `table`, `cards`, `calendar`, `kanban`, `gallery`, `gmap`, `gantt`. The corresponding key (`cards`, `kanban`, etc.) must exist in JSON config. |
| `uiswitcher`  | `boolean`            | ❌ No       | `true`     | Enables the UI switcher to toggle between report templates.                                                                                                                      |
| `showExtraColumn`  | `checkbox`            | ❌ No       | -     | Add extra column in table.                                                                                                                      |
| `toolbar`     | `object`             | ❌ No       | all active | Configure toolbar actions such as `print`, `export`, `email`, `search`.                                                                                                          |
| `source`      | `object`             | ❌ No       | —          | Data source definition (e.g., API endpoint or static data).                                                                                                                      |
| `actions`     | `object`             | ❌ No       | —          | Top-level action buttons (e.g., global “Add New” button).                                                                                                                        |
| `buttons`     | `object`             | ❌ No       | —          | Row-level action buttons for `table`, `cards`, and `kanban`.                                                                                                                     |
| `datagrid`    | `object<key,object>` | ✅ Yes       | —          | Maps incoming data keys to column configuration. Each key represents a column and its config (`searchable`, `sortable`, `groupable`, etc.).                                      |
| `cards`       | `object`             | ❌ No       | —          | Configuration specific to the **Card** template.                                                                                                                                 |
| `kanban`      | `object`             | ❌ No       | —          | Configuration specific to the **Kanban** template.                                                                                                                               |
| `gallery`     | `object`             | ❌ No       | —          | Configuration specific to the **Gallery** template.                                                                                                                              |
| `calendar`    | `object`             | ❌ No       | —          | Configuration specific to the **Calendar** template.                                                                                                                             |
| `gantt`       | `object`             | ❌ No       | —          | Configuration specific to the **Gantt** template.                                                                                                                                |
| `gmap`        | `object`             | ❌ No       | —          | Configuration specific to the **Maps** template.                                                                                                                          |

---


### `datagrid` Configuration

The `datagrid` object defines how raw data fields map to report columns.
Each key inside `datagrid` corresponds to a **data field** (e.g., `id`, `status`, `created_on`) with its own column settings.

### Column Object Properties

| Key          | Type      | Required | Default | Description                                                                                      |
| ------------ | --------- | -------- | ------- | ------------------------------------------------------------------------------------------------ |
| `label`      | `string`  | ✅ Yes    | —       | Display name for the column header.                                                              |
| `hidden`     | `boolean` | ❌ No     | `false` | If `true`, the column is not visible in the UI.                                                  |
| `searchable` | `boolean` | ❌ No     | `false` | Enables search on this column.                                                                   |
| `sortable`   | `boolean` | ❌ No     | `false` | Enables sorting on this column.                                                                  |
| `groupable`  | `boolean` | ❌ No     | `false` | Allows grouping by this column.                                                                  |
| `formatter`  | `string`  | ❌ No     | `text`  | Custom formatter for displaying values. Common options: `"                                       |
| `classes`    | `string`  | ❌ No     | `""`    | Custom CSS classes applied to the column.                                                        |
| `style`      | `string`  | ❌ No     | `""`    | Inline CSS style string (e.g., `"width:50px;"`).                                               |

---

### Example

```json
"datagrid": {
  "id": {
    "label": "ID",
    "hidden": false,
    "searchable": true,
    "sortable": true,
    "groupable": false,
    "classes": "",
    "style": "width:50px;",
    "method": "test1"
  },
  "persona_avatar": {
    "label": "Persona Avatar",
    "formatter": "avatar",
    "hidden": true,
    "searchable": false
  },
  "persona_code": {
    "label": "Persona Code",
    "sortable": true,
    "searchable": true
  },
  "status": {
    "label": "Status",
    "searchable": false,
    "filter": {
      "type": "select",
      "options": {
        "published": "Published",
        "draft": "Draft"
      }
    }
  },
  "created_on": {
    "label": "Created On",
    "formatter": "date",
    "hidden": true,
    "searchable": false
  },
  "persona_group": {
    "label": "Persona Group",
    "hidden": false,
    "searchable": true,
    "groupable": true
  },
  "rating": {
    "label": "Rating",
    "hidden": true,
    "searchable": false
  },
  "persona_descs": {
    "label": "Persona Descriptions"
  }
}
```

---

# Template Configurations

Each report template (`cards`, `kanban`, `gallery`, `calendar`, `gantt`, `gmap`) has its own configuration object. These define **how fields from your dataset map into the UI**.

---

## Cards

| Key              | Type      | Required | Description                                                                     |
| ---------------- | --------- | -------- | ------------------------------------------------------------------------------- |
| `colmap`         | `object`  | ✅ Yes    | Maps dataset fields to card elements.                                           |
| └ `title`        | `string`  | ✅ Yes    | Field used as card title.                                                       |
| └ `descs`        | `string`  | ❌ No     | Field used as description/subtext.                                              |
| └ `category`     | `string`  | ❌ No     | Field used as category/tag.                                                     |
| └ `due_date`     | `string`  | ❌ No     | Field for due date or timestamp.                                                |
| └ `avatar`       | `string`  | ❌ No     | Field for avatar/profile image.                                                 |
| └ `color`        | `string`  | ❌ No     | Field used to color cards.                                                      |
| `colormap`       | `object`  | ❌ No     | Maps field values to CSS classes/colors. Example: `{ "active": "card_green" }`. |
| `default_avatar` | `boolean` | ❌ No     | If `true`, shows a fallback avatar when missing.                                |


```js
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
    "default_avatar": true
  }

```

---

## Kanban

| Key            | Type     | Required | Description                                          |
| -------------- | -------- | -------- | ---------------------------------------------------- |
| `colkeys`      | `object` | ✅ Yes    | Defines available columns with labels.               |
| `colmap`       | `object` | ✅ Yes    | Maps dataset fields to Kanban card elements.         |
| └ `title`      | `string` | ✅ Yes    | Field used as card title.                            |
| └ `descs`      | `string` | ❌ No     | Field used as description.                           |
| └ `department` | `string` | ❌ No     | Custom field mapping (example: department).          |
| └ `category`   | `string` | ❌ No     | Field used as category.                              |
| └ `due_date`   | `string` | ❌ No     | Due date field.                                      |
| └ `avatar`     | `string` | ❌ No     | Avatar/image field.                                  |
| └ `color`      | `string` | ❌ No     | Field used to assign card colors.                    |
| └ `tags`       | `string` | ❌ No     | Field used as tags.                                  |
| └ `counter`    | `string` | ❌ No     | Field used for numeric badges (e.g., rating, count). |

```js
 "kanban": {
    "colkeys": {
      "persona_group": {
        "label": "persona group",
      },
      "created_by": {
        "label": "created by",
      },
       "editable": {
        "label": "editable",
      },
       "status": {
        "label": "status",
      },
       "visibility": {
        "label": "visibility",
      }
    },
    "colmap": {
      "title": "persona_name",
      "department": "created_by",
      "descs": "persona_descs",
      "category": "gender",
      "due_date": "dtoe",
      "avatar": "persona_avatar",
      "color": "type",
      "tags": "role",
      "counter": "rating"
    },
  }

```

---

## Gallery

| Key          | Type     | Required | Description                                  |
| ------------ | -------- | -------- | -------------------------------------------- |
| `colmap`     | `object` | ✅ Yes    | Maps dataset fields to gallery cards.        |
| └ `avatar`   | `string` | ❌ No     | Field for image/thumbnail.                   |
| └ `title`    | `string` | ✅ Yes    | Field for gallery item title.                |
| └ `descs`    | `string` | ❌ No     | Field for description.                       |
| └ `due_date` | `string` | ❌ No     | Field for timestamp/date.                    |
| `unilink`    | `string` | ❌ No     | Route/link key when clicking a gallery item. |

```js
"gallery":{
		"colmap":{
		    "avatar": "persona_avatar",
			"title":"persona_name",
			"descs":"persona_desc",
			"due_date":"persona_code"
		},
},

```

---

## Calendar

| Key          | Type     | Required | Description                                                                                     |
| ------------ | -------- | -------- | ----------------------------------------------------------------------------------------------- |
| `colmap`     | `object` | ✅ Yes    | Maps dataset fields to calendar event.                                                          |
| └ `title`    | `string` | ✅ Yes    | Event title field.                                                                              |
| └ `descs`    | `string` | ❌ No     | Event description field.                                                                        |
| `date_col`   | `object` | ✅ Yes    | Maps dataset date fields to colors. Example: `{ "created_on": "#333", "edited_on": "orange" }`. |
| `notes_user` | `string` | ❌ No     | Custom legend/HTML snippet to show meaning of colors.                                           |

```js

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

```

---

## Gantt

| Key              | Type     | Required | Description                                    |
| ---------------- | -------- | -------- | ---------------------------------------------- |
| `colmap`         | `object` | ✅ Yes    | Maps dataset fields to Gantt chart attributes. |
| └ `id`           | `string` | ✅ Yes    | Unique task identifier.                        |
| └ `name`         | `string` | ✅ Yes    | Task name field.                               |
| └ `start`        | `string` | ✅ Yes    | Start date field.                              |
| └ `end`          | `string` | ✅ Yes    | End date field.                                |
| └ `progress`     | `string` | ❌ No     | Task completion percentage.                    |
| └ `owner`        | `string` | ❌ No     | Assigned person/owner field.                   |
| └ `milestone`    | `string` | ❌ No     | Boolean-like field for milestones.             |
| └ `parent`       | `string` | ❌ No     | Parent task ID (for hierarchy).                |
| └ `dependencies` | `string` | ❌ No     | Dependent task IDs.                            |

```js

  "gantt":{
    "colmap": {
        "id": "id",
        "name": "persona_name",
        "start": "created_on",
        "end": "end_date",
        "progress": "completion",
        "owner": "assigned_to",
        "milestone": "is_milestone",
        "parent": "parent_id",
        "dependencies": "depends_on"
      }
  }
```


---

## Gmap

| Key             | Type     | Required | Description                                                                                  |
| --------------- | -------- | -------- | -------------------------------------------------------------------------------------------- |
| `zoom`          | `number` | ❌ No     | Initial zoom level (default: `4`).                                                           |
| `mapid`         | `string` | ❌ No     | Map style ID (e.g., `"terrain"`, `"satellite"`).                                             |
| `colmap`        | `object` | ✅ Yes    | Maps dataset fields to map markers.                                                          |
| └ `title`       | `string` | ✅ Yes    | Marker title field.                                                                          |
| └ `descs`       | `string` | ❌ No     | Marker description.                                                                          |
| └ `geolocation` | `string` | ✅ Yes    | Field containing geolocation (lat/lng).                                                      |
| `template`      | `string` | ❌ No     | Custom HTML template for marker popups. Supports variable substitution (`$title`, `$descs`). |

```js
  "gmap": {
    "zoom": 4,
    "mapid": "terrain",
    "colmap": {
      "title": "name",
      "descs": "info",
      "geolocation": "geo",
    },
    "template": `<div>
        <h2>$title</h2>
        <p>$descs</p>
      </div>`,
  }
```
---

