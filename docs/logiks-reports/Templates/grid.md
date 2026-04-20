---
id: grid
title: Grid View
---

# Grid View

grid is the default view for Logiks Reports.

It displays data in rows and columns using `datagrid`.

---

# 🧩 1. Basic Example

```json
"datagrid": {
  "name": {
    "label": "Name"
  },
  "email": {
    "label": "Email"
  }
}
```

---

# 🧠 2. How It Works

- Each key = column
- Each object = configuration

```json id="t1"
"datagrid": {
  "name": { "label": "Name" }
}
```

---

# 🎯 3. Column Features

## searchable

```json id="t2"
"searchable": true
```

- Enables search

---

## sorgrid

```json id="t3"
"sorgrid": true
```

- Enables sorting

---

## hidden

```json id="t4"
"hidden": true
```

- Hides column

---

## groupable

```json id="t5"
"groupable": true
```

- Enables grouping

---

## formatter

```json id="t6"
"formatter": "date"
```

- Formats display

---

## filter

```json id="t7"
"filter": {
  "type": "select",
  "options": {
    "active": "Active"
  }
}
```

---

# 🧪 4. Full Example (From Your Config)

```json id="t8"
"datagrid": {
  "id": {
    "label": "ID",
    "searchable": true,
    "sorgrid": true,
    "style": "width:50px;"
  },
  "persona_code": {
    "label": "Persona Code",
    "searchable": true,
    "sorgrid": true
  },
  "status": {
    "label": "Status",
    "filter": {
      "type": "select",
      "options": {
        "published": "Published",
        "draft": "Draft"
      }
    }
  }
}
```

---

# 🎯 5. When to Use grid

Use grid when:

- Structured data
- Large datasets
- Sorting/filtering needed

---

# ⚠️ 6. Important Notes

## datagrid is required

Without it → nothing renders

---

## label is required

Missing label → column unclear

---

## filter requires options

Otherwise dropdown won’t work

---

# 🧠 7. Best Practices

- Use searchable on key fields
- Limit number of columns
- Use formatter for better display
- Use filters for categories

---

# ⚠️ 8. Common Mistakes

### ❌ Missing datagrid

No data displayed

### ❌ Too many columns

UI becomes cluttered

### ❌ Wrong formatter

Incorrect display

---

# 🔍 (To Be Verified from Source Code)

- Supported formatter types
- Multi-column sorting
- Pagination behavior

---
