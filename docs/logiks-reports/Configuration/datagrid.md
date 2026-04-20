---
id: datagrid
title: Datagrid
---

# Datagrid

Defines how data fields are displayed.

## Example

```json
"datagrid": {
  "name": {
    "label": "Name",
    "searchable": true,
    "sortable": true
  }
}
```

## Properties

### label

Column name

### searchable

Enable search

### sortable

Enable sorting

### filter

```json
"filter": {
  "type": "select",
  "options": {
    "active": "Active"
  }
}
```
