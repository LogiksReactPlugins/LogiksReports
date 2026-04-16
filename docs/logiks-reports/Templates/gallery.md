---
id: gallery
title: Gallery View
---

# Gallery View

Gallery view displays data as a grid of visual items (like images or cards).

It is useful when your data is image-heavy or requires a visual layout.

---

# 🧩 1. Basic Example

```json
"template": "gallery",
"gallery": {
  "colmap": {
    "avatar": "image",
    "title": "name",
    "descs": "description"
  }
}
```

---

# 🧠 2. Core Concepts

## colmap (Required)

Maps your data fields to gallery UI.

```json id="g1"
"colmap": {
  "avatar": "image",
  "title": "name",
  "descs": "description"
}
```

---

# 🎯 3. colmap Properties

## avatar

```json id="g2"
"avatar": "image"
```

- Image or thumbnail to display

---

## title (Required)

```json id="g3"
"title": "name"
```

- Main title of the item

---

## descs

```json id="g4"
"descs": "description"
```

- Additional text

---

## due_date

```json id="g5"
"due_date": "created_on"
```

- Optional date field

---

# 🔗 4. unilink

```json id="g6"
"unilink": "page@product.details"
```

### What it does

- Navigates when item is clicked

---

# 🧪 5. Full Example (From Your Config)

```json id="g7"
"template": "gallery",
"gallery": {
  "colmap": {
    "avatar": "persona_avatar",
    "title": "persona_name",
    "descs": "persona_desc",
    "due_date": "persona_code"
  }
}
```

---

# 🎯 6. When to Use Gallery

Use Gallery when:

- You have images or media
- You want grid-based layout
- Visual browsing is important

### Examples

- Product catalog
- Image gallery
- Media library

---

# ⚠️ 7. Important Notes

## title is required

Missing title → items may not render properly

---

## avatar should be valid

Invalid image → broken UI

---

## Large datasets

Gallery may become slow with large data

---

# 🧠 8. Best Practices

- Use optimized images
- Limit number of items per page
- Keep text minimal
- Use meaningful titles

---

# ⚠️ 9. Common Mistakes

### ❌ Missing colmap

Nothing will render

### ❌ Using large images

Performance issues

### ❌ Too much text

Breaks visual layout

---

# 🧩 10. Comparison with Cards

| Feature  | Gallery     | Cards         |
| -------- | ----------- | ------------- |
| Layout   | Grid        | Flexible      |
| Focus    | Images      | Mixed content |
| Use case | Media-heavy | General UI    |

---

# 🔍 Notes

- Uses similar structure as `cards`
- Simplified layout
- No advanced grouping like kanban

---

# ✅ Progress Update

You now have almost all templates:

✔ Table
✔ Cards
✔ Kanban
✔ Calendar
✔ Gallery

---
