---
id: gantt
title: Gantt View
---

# Gantt View

Gantt view displays data as a timeline of tasks.

It is useful for:

- Project planning
- Task tracking
- Timeline visualization

---

# 🧩 1. Basic Example

```json
"template": "gantt",
"gantt": {
  "colmap": {
    "id": "id",
    "name": "task_name",
    "start": "start_date",
    "end": "end_date"
  }
}
```

---

# 🧠 2. Core Concepts

## colmap (Required)

Maps your dataset fields to Gantt chart structure.

```json id="gnt1"
"colmap": {
  "id": "id",
  "name": "task_name",
  "start": "start_date",
  "end": "end_date"
}
```

---

# 🎯 3. Required Fields

## id (Required)

```json id="gnt2"
"id": "id"
```

- Unique identifier for each task

---

## name (Required)

```json id="gnt3"
"name": "task_name"
```

- Task title

---

## start (Required)

```json id="gnt4"
"start": "start_date"
```

- Start date of task

---

## end (Required)

```json id="gnt5"
"end": "end_date"
```

- End date of task

---

# 🧩 4. Optional Fields

## progress

```json id="gnt6"
"progress": "completion"
```

- Task completion percentage

---

## owner

```json id="gnt7"
"owner": "assigned_to"
```

- Assigned user

---

## milestone

```json id="gnt8"
"milestone": "is_milestone"
```

- Marks task as milestone

---

## parent

```json id="gnt9"
"parent": "parent_id"
```

- Defines task hierarchy

---

## dependencies

```json id="gnt10"
"dependencies": "depends_on"
```

- Defines task dependencies

---

# 🧪 5. Full Example (From Your Config)

```json id="gnt11"
"template": "gantt",
"gantt": {
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

# 🎯 6. How It Works

Each record becomes a task on timeline.

Example data:

```json id="gnt12"
{
  "id": 1,
  "task_name": "Design Phase",
  "start_date": "2026-04-01",
  "end_date": "2026-04-10",
  "completion": 50
}
```

👉 Displays:

- Task bar from Apr 1 → Apr 10
- 50% progress

---

# 🎯 7. When to Use Gantt

Use Gantt when:

- You have start & end dates
- Tasks are time-bound
- Dependencies matter

### Examples

- Project timelines
- Sprint planning
- Resource scheduling

---

# ⚠️ 8. Important Notes

## All required fields must exist

Missing:

- id
- start
- end

👉 Chart may break or not render

---

## Date format must be valid

```json id="gnt13"
"start_date": "2026-04-01"
```

---

## Dependencies must match IDs

Invalid references → broken links

---

# 🧠 9. Best Practices

- Keep task hierarchy clean
- Use progress for tracking
- Avoid too many nested levels
- Use meaningful task names

---

# ⚠️ 10. Common Mistakes

### ❌ Missing required fields

Chart will not render

### ❌ Invalid date format

Timeline incorrect

### ❌ Incorrect dependencies

Links not shown properly

### ❌ Too many tasks

UI becomes cluttered

---

# 🔍 Notes

- Gantt is stricter than other templates
- Requires structured data
- Works best with backend-prepared data

---
