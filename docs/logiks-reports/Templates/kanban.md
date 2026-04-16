---
id: kanban
title: Kanban View
---

# Kanban View

Kanban view displays data in columns (like a task board), grouped by a specific field.

Each column represents a category (e.g., status, stage, department).

---

# 🧩 1. Basic Example

```json
"template": "kanban",
"kanban": {
  "colkeys": {
    "status": {
      "label": "Status"
    }
  },
  "colmap": {
    "title": "name",
    "descs": "description",
    "category": "status"
  }
}
```

---

# 🧠 2. Core Concepts

## colkeys (Columns)

Defines **which fields create columns**.

```json
"colkeys": {
  "status": {
    "label": "Status"
  }
}
```

### What it does

- Creates columns like:
  - Pending
  - In Progress
  - Completed

### When to use

- Workflow tracking
- Task management
- CRM pipelines

---

## colmap (Card Mapping)

Maps your data fields to the Kanban card UI.

```json
"colmap": {
  "title": "name",
  "descs": "description",
  "category": "status"
}
```

---

# 🎯 3. colmap Properties

## title (Required)

```json
"title": "name"
```

- Main heading of the card

---

## descs

```json
"descs": "description"
```

- Secondary text

---

## category

```json
"category": "status"
```

- Determines which column the card goes into

---

## avatar

```json
"avatar": "user_image"
```

- Displays profile image

---

## color

```json
"color": "status"
```

- Assigns color based on value

---

## tags

```json
"tags": "role"
```

- Used for labels/tags

---

## counter

```json
"counter": "rating"
```

- Shows numeric indicator (e.g., priority, score)

---

# 🧪 4. Full Example (Based on Your Config)

```json
"template": "kanban",
"kanban": {
  "colkeys": {
    "persona_group": { "label": "Persona Group" },
    "status": { "label": "Status" }
  },
  "colmap": {
    "title": "persona_name",
    "descs": "persona_descs",
    "category": "status",
    "avatar": "persona_avatar",
    "tags": "role",
    "counter": "rating"
  }
}
```

---

# 🎯 5. When to Use Kanban

Use Kanban when:

- You need workflow tracking
- Data has stages/status
- Visual grouping is required

### Examples

- Task management board
- Lead pipeline (New → Contacted → Closed)
- Approval workflows

---

# ⚠️ 6. Important Notes

## category must match colkeys

```json
"category": "status"
```

👉 Must exist inside `colkeys`

---

## Missing title breaks UI

```json
"title": "name"
```

👉 Required field

---

## Data must contain mapped fields

If your data doesn't include:

- `status`
- `name`

👉 Cards will not render properly

---

# 🧠 7. Best Practices

- Keep columns limited (3–6)
- Use clear labels
- Avoid too many fields on cards
- Use `color` for status highlighting

---

# ⚠️ 8. Common Mistakes

### ❌ Missing colkeys

No columns will be rendered

### ❌ Wrong category mapping

Cards will not appear in correct columns

### ❌ Too many fields

Cards become cluttered

---

# 🔍 (To Be Verified from Source Code)

Later we will confirm:

- Drag & drop support (if available)
- Column sorting behavior
- Default grouping logic

---
