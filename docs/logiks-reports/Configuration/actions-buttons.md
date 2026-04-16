---
id: actions-buttons
title: Actions & Buttons
---

# Actions & Buttons

Logiks Reports allows you to define interactive actions at two levels:

- **Actions** → Global (top-level)
- **Buttons** → Row-level (per record)

These are used to trigger events like:

- Create
- Edit
- View
- Navigate

---

# 🧩 1. Actions (Global Actions)

Actions appear at the top of the report (e.g., "Add New").

## Example

```json
"actions": {
  "forms@new": {
    "label": "Add User",
    "icon": "fa fa-plus"
  }
}
```

---

## How it works

- Key format: `"type@action"`
- Example:
  - `forms@new` → open form for new record
  - `forms@edit` → edit form
  - `page@route` → navigate to page

---

## Supported Action Types

- forms@ → opens form
- infoview@ → opens info view
- page@ → navigates to page
- popup@ → opens popup
- api@ → triggers backend API

---

## When to use

Use `actions` when:

- You want a global button
- Action is NOT tied to a specific row

Examples:

- Add new record
- Bulk operations

---

# 🔘 2. Buttons (Row-Level Actions)

Buttons are displayed for each row in the report.

## Example

```json
"buttons": {
  "infoview@test": {
    "label": "View",
    "icon": "fa fa-eye"
  },
  "forms@edit": {
    "label": "Edit",
    "icon": "fa fa-pen"
  }
}
```

---

## What it does

Each row will show buttons like:

[View] [Edit]

---

## Additional Button Options

### lgksConfirm

Shows confirmation dialog before action

### lgksPrompt

Prompts user for input

### payload

Used for API calls

### params

Additional configuration for popup/forms

---

## When to use

Use `buttons` when:

- Action depends on row data
- You need row-specific operations

Examples:

- View details
- Edit record
- Delete record

---

# ⚙️ 3. Handling Actions (VERY IMPORTANT)

All actions and buttons are handled using `onButtonClick`.

## Example

```js
<Reports
  report={reportJson}
  onButtonClick={(actionKey, rowData) => {
    console.log(actionKey, rowData);
  }}
/>
```

---

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| actionKey | The key defined in JSON (e.g., `forms@edit`) |
| rowData   | Data of the clicked row                      |

---

## Example Logic

```js
onButtonClick={(key, data) => {
  if (key === "forms@edit") {
    openEditForm(data);
  }

  if (key === "infoview@test") {
    openDetails(data);
  }
}}
```

---

## Best Practice

Always handle actions centrally using this function.

---

# 🎨 4. Icons

You can use any icon class (e.g., FontAwesome).

## Example

```json
"icon": "fa fa-eye"
```

---

## Tips

- Keep icons consistent across app
- Use recognizable icons:
  - 👁 View → `fa-eye`
  - ✏️ Edit → `fa-pen`
  - ➕ Add → `fa-plus`

---

# ⚠️ 5. Common Mistakes

## Common Mistakes

### ❌ Missing onButtonClick

Buttons will render but do nothing

### ❌ Wrong action key handling

If key doesn't match → action won't trigger

### ❌ Using actions instead of buttons

| Use Case | Correct |
| -------- | ------- |
| Add new  | actions |
| Edit row | buttons |

---

# 💡 6. Real Example (From Your Existing Config)

## Full Example

```json
"actions": {
  "forms@new": {
    "label": "Persona",
    "icon": "fa fa-plus"
  }
},
"buttons": {
  "infoview@test": {
    "label": "View Info",
    "icon": "fa fa-eye"
  },
  "forms@edit": {
    "label": "Edit Info",
    "icon": "fa fa-pen"
  }
}
```

---

## Behavior

- Top button → "Persona" (Add New)
- Row buttons → View + Edit

---

# 🎯 What This Solves

This section now answers:

✔ What are actions vs buttons
✔ When to use each
✔ How to handle clicks
✔ Real examples
✔ Common mistakes

---
