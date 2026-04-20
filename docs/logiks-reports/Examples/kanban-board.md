---
id: kanban-workflow
title: Kanban Workflow (CRM / Task Board)
---

# Kanban Workflow (CRM / Task Board)

This example shows how to create a Kanban board for managing tasks or leads.

Use this when:

- You have status-based data
- You want visual workflow tracking

---

# 🧩 Example

```js
import { Reports } from "logiks-reports";
import "logiks-reports/index.css";

const data = [
  {
    id: 1,
    name: "Lead 1",
    description: "Initial contact",
    status: "new",
    owner: "John",
    rating: 3,
  },
  {
    id: 2,
    name: "Lead 2",
    description: "Follow-up pending",
    status: "in_progress",
    owner: "Jane",
    rating: 5,
  },
  {
    id: 3,
    name: "Lead 3",
    description: "Closed deal",
    status: "completed",
    owner: "Mike",
    rating: 4,
  },
];

const reportJson = {
  title: "CRM Pipeline",
  template: "kanban",

  kanban: {
    colkeys: {
      status: { label: "Status" },
    },

    colmap: {
      title: "name",
      descs: "description",
      category: "status",
      tags: "owner",
      counter: "rating",
    },
  },

  buttons: {
    "forms@leads.edit/{id}": {
      label: "Edit",
      icon: "fa fa-pen",
    },
    "infoview@leads.view/{id}": {
      label: "View",
      icon: "fa fa-eye",
    },
  },
};

export default function App() {
  return (
    <Reports
      report={reportJson}
      data={data}
      onButtonClick={(key, row) => {
        console.log("Action:", key, row);
      }}
    />
  );
}
```

---

# 🎯 What This Example Shows

- Kanban board setup
- Status-based grouping
- Row-level actions (Edit/View)
- Tag & counter usage

---

# 🧠 How It Works

- `status` → creates columns
- Each record → card
- Buttons → actions per card

---

# 🎨 Visual Structure

```text id="kanex02"
New          In Progress       Completed
-----------------------------------------
Lead 1       Lead 2           Lead 3
```

---

# 🎯 When to Use

- CRM pipelines
- Task tracking
- Approval workflows

---

# ⚙️ Optional Enhancements

## Add Colors

```json id="kanex03"
"color": "status"
```

---

## Add Avatar

```json id="kanex04"
"avatar": "profile_image"
```

---

## Add Actions (Top-level)

```json id="kanex05"
"actions": {
  "forms@leads.new": {
    "label": "Add Lead",
    "icon": "fa fa-plus"
  }
}
```

---

# ⚠️ Common Issues

### ❌ Cards not appearing

Ensure `category` matches `colkeys`

### ❌ Empty columns

Data must contain matching values

### ❌ Buttons not working

Ensure `onButtonClick` is implemented

---

# 🧠 Best Practices

- Keep 3–5 columns
- Use meaningful status values
- Avoid too many fields on cards
- Use color for quick identification

---

```

```
