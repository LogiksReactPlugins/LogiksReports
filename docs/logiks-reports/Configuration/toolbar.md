---
id: toolbar
title: Toolbar
---

# Toolbar

The toolbar provides quick access to common actions like:

- Search
- Print
- Export
- Email

You can enable or disable these features using the `toolbar` configuration.

---

# 🧩 1. Basic Example

```json
"toolbar": {
  "search": true,
  "print": true,
  "email": false,
  "export": []
}
```

---

# ⚙️ 2. Available Options

## 🔍 search

```json
"search": true
```

### What it does

Adds a search input to filter report data.

### When to use

- When users need quick filtering
- Works best with `datagrid.searchable`

### Example

```json
"datagrid": {
  "name": {
    "label": "Name",
    "searchable": true
  }
}
```

---

## 🖨 print

```json
"print": true
```

### What it does

Allows users to print the report.

### When to use

- Reports shared offline
- Admin dashboards

---

## 📧 email

```json
"email": true
```

### What it does

Provides option to email report data.

### When to use

- Reporting workflows
- Sharing reports with stakeholders

---

## 📤 export

```json
"export": ["csv", "excel"]
```

### What it does

Allows exporting report data.

### Supported formats (example)

- csv
- excel
- pdf (if supported)

---

### export vs exportAll

- export → exports current view
- exportAll → exports full dataset

## (⚠️ mark as “verify if needed”)

---

### When to use

- Data analysis
- Reporting
- External usage

---

# 🎯 3. Real Example

## Example

```json
"toolbar": {
  "search": true,
  "print": true,
  "email": false,
  "export": []
}
```

### Behavior

- Search enabled
- Print enabled
- Email disabled
- Export disabled

---

# ⚠️ 4. Important Notes

## Important Notes

### 🔍 Search requires searchable fields

If no columns are marked as searchable:

```json
"searchable": false
```

👉 Search will not be effective

---

### 📤 Export depends on data

- Ensure data is available
- API should return proper structure

---

### 🖨 Print formatting

- Large tables may not print cleanly
- Consider limiting columns

---

# 🧠 5. Best Practices

## Best Practices

- Enable only required options
- Avoid cluttering toolbar
- Use search + filter together
- Enable export for reports, not dashboards

---

# ⚠️ 6. Common Mistakes

## Common Mistakes

### ❌ Enabling search without searchable fields

Search bar appears but does nothing

### ❌ Enabling all options unnecessarily

Leads to cluttered UI

### ❌ Empty export array

```json
"export": []
```

---
