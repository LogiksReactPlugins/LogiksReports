---
id: calendar
title: Calendar View
---

# Calendar View

Calendar view displays your data as events based on date fields.

It is useful when your dataset contains time-based information such as:

- Created date
- Due date
- Updated date

---

# 🧩 1. Basic Example

```json
"template": "calendar",
"calendar": {
  "colmap": {
    "title": "name",
    "descs": "description"
  },
  "date_col": {
    "created_on": "#333"
  }
}
```

---

# 🧠 2. Core Concepts

## colmap (Event Mapping)

Maps data fields to calendar event content.

```json id="cal1"
"colmap": {
  "title": "name",
  "descs": "description"
}
```

### Properties

#### title (Required)

- Main event title

#### descs

- Additional description shown in event

---

## date_col (IMPORTANT)

```json id="cal2"
"date_col": {
  "created_on": "#333",
  "edited_on": "orange"
}
```

### What it does

- Maps date fields to event colors
- Each date field creates events on calendar

---

# 🎯 3. How It Works

If your data contains:

```json id="cal3"
{
  "name": "Task A",
  "created_on": "2026-04-01",
  "edited_on": "2026-04-03"
}
```

👉 It will create:

- Event on April 1 (created_on)
- Event on April 3 (edited_on)

---

# 🎨 4. Multiple Date Fields

You can track multiple events per record:

```json id="cal4"
"date_col": {
  "created_on": "#333",
  "due_date": "red",
  "completed_on": "green"
}
```

---

# 🧪 5. Full Example (From Your Config)

```json id="cal5"
"template": "calendar",
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
  "notes_user": "<div>Legend here</div>"
}
```

---

# 🔗 6. unilink

```json id="cal6"
"unilink": "staff.main"
```

### What it does

- Defines navigation when clicking event

---

# 📝 7. notes_user (Legend / Custom UI)

```json id="cal7"
"notes_user": "<div>Legend here</div>"
```

### What it does

- Allows custom HTML (e.g., legend)
- Useful to explain colors

---

# 🎯 8. When to Use Calendar

Use Calendar when:

- Data is date-driven
- You need timeline visualization
- Tracking events over time

### Examples

- Task deadlines
- Activity logs
- Event scheduling

---

# ⚠️ 9. Important Notes

## date_col is required

Without it:
👉 No events will appear

---

## Date format must be valid

Ensure:

```json id="cal8"
"created_on": "2026-04-01"
```

---

## Multiple date fields = multiple events

Each field creates separate event

---

# 🧠 10. Best Practices

- Use clear color coding
- Limit number of date fields (2–3)
- Provide legend using `notes_user`
- Use meaningful titles

---

# ⚠️ 11. Common Mistakes

### ❌ Missing date_col

No events rendered

### ❌ Invalid date format

Events may not appear

### ❌ Too many date fields

Calendar becomes cluttered

---

🔍 (To Be Verified from Source Code)

Later we will confirm:

- Supported date formats
- Click behavior
- Event styling options

---
