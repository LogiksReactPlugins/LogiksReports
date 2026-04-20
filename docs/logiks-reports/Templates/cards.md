---
id: cards
title: Cards View
---

# Cards View

Cards view displays data as visually rich blocks instead of rows.

It is useful for:

- Profiles
- Dashboards
- Listings with images

---

# 🧩 1. Basic Example

```json
"template": "cards",
"cards": {
  "colmap": {
    "title": "name",
    "descs": "description",
    "avatar": "image"
  }
}
```

---

# 🧠 2. Core Concepts

## colmap (Required)

Maps data fields to card UI.

```json id="c1"
"colmap": {
  "title": "name",
  "descs": "description",
  "avatar": "image"
}
```

---

# 🎯 3. colmap Properties

## title (Required)

```json id="c2"
"title": "name"
```

- Main heading of card

---

## descs

```json id="c3"
"descs": "description"
```

- Secondary text

---

## category

```json id="c4"
"category": "type"
```

- Used for grouping or tagging

---

## due_date

```json id="c5"
"due_date": "created_on"
```

- Displays date/timestamp

---

## avatar

```json id="c6"
"avatar": "image"
```

- Displays image or profile picture

---

## color

```json id="c7"
"color": "status"
```

- Assigns color based on value

---

# 🎨 4. colormap (Optional Styling)

```json
"colormap": {
  "active": "card_green",
  "inactive": "card_red"
}
```

### What it does

Maps field values → CSS classes

---

# 👤 5. default_avatar

```json id="c8"
"default_avatar": true
```

### What it does

- Shows fallback image if avatar missing

---

# 🔗 6. unilink

```json id="c9"
"unilink": "staff.main"
```

### What it does

- Navigate on card click

---

# 🧪 7. Full Example (From Your Config)

```json id="c10"
"template": "cards",
"cards": {
  "colmap": {
    "title": "persona_name",
    "descs": "persona_descs",
    "category": "type",
    "due_date": "created_on",
    "avatar": "persona_avatar",
    "color": "status"
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

# 🎯 8. When to Use Cards

Use Cards when:

- You need visual layout
- Images are important
- Less tabular data

### Examples

- Employee directory
- Product listing
- CRM profiles

---

# ⚠️ 9. Important Notes

## title is required

Missing title → cards break

---

## avatar should be valid

Invalid URL → broken image

---

## colormap requires matching values

Ensure data matches keys

---

# 🧠 10. Best Practices

- Keep card content minimal
- Use images wisely
- Use color for status only
- Avoid too many fields

---

# ⚠️ 11. Common Mistakes

### ❌ Missing colmap

No cards rendered

### ❌ Too many fields

Cards become cluttered

### ❌ Wrong field mapping

Data not displayed

---

# 🔍 (To Be Verified from Source Code)

- Card click behavior
- Default layout styles
- Responsive behavior

---
