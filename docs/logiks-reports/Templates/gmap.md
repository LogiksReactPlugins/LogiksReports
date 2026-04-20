---
id: gmap
title: Map View (GMap)
---

# Map View (GMap)

GMap view displays data on a geographical map using latitude and longitude.

It is useful for:

- Location-based data
- Tracking assets/users
- Visualizing geographic distribution

---

# 🧩 1. Basic Example

```json
"template": "gmap",
"gmap": {
  "zoom": 4,
  "mapid": "terrain",
  "colmap": {
    "title": "name",
    "descs": "description",
    "geolocation": "location"
  }
}
```

---

# 🧠 2. Core Concepts

## colmap (Required)

Maps dataset fields to map markers.

```json id="gm1"
"colmap": {
  "title": "name",
  "descs": "description",
  "geolocation": "location"
}
```

---

# 🎯 3. colmap Properties

## title (Required)

```json id="gm2"
"title": "name"
```

- Marker title

---

## descs

```json id="gm3"
"descs": "description"
```

- Marker description

---

## geolocation (Required)

```json id="gm4"
"geolocation": "location"
```

- Field containing latitude & longitude

---

# 🌍 4. Geolocation Format

Your data should contain:

```json id="gm5"
"location": {
  "lat": 19.0760,
  "lng": 72.8777
}
```

👉 or string format (if supported):

```json
"location": "19.0760,72.8777"
```

---

# 🎨 5. Map Configuration

## zoom

```json id="gm6"
"zoom": 4
```

- Controls initial zoom level

---

## mapid

```json id="gm7"
"mapid": "terrain"
```

### Common values:

- terrain
- satellite
- roadmap (if supported)

---

# 🧩 6. template (Popup UI)

```json id="gm8"
"template": "<div><h2>$title</h2><p>$descs</p></div>"
```

### What it does

- Custom HTML for marker popup
- Supports variables:
  - `$title`
  - `$descs`

---

# 🔗 7. unilink

```json id="gm9"
"unilink": "page@location.details"
```

### What it does

- Navigate when marker is clicked

---

# 🧪 8. Full Example (From Your Config)

👉 Based on your PDF

```json id="gm10"
"template": "gmap",
"gmap": {
  "zoom": 4,
  "mapid": "terrain",
  "colmap": {
    "title": "name",
    "descs": "info",
    "geolocation": "geo"
  },
  "template": "<div><h2>$title</h2><p>$descs</p></div>"
}
```

---

# 🎯 9. When to Use GMap

Use Map when:

- You have location data
- You want spatial visualization
- Tracking movement or distribution

### Examples

- Delivery tracking
- Store locations
- Field workforce tracking

---

# ⚠️ 10. Important Notes

## geolocation is required

Without it → no markers

---

## Coordinates must be valid

Invalid lat/lng → marker won’t render

---

## Too many markers

Large datasets may impact performance

---

# 🧠 11. Best Practices

- Cluster markers for large data (if supported)
- Use meaningful titles
- Keep popup content minimal
- Set appropriate zoom level

---

# ⚠️ 12. Common Mistakes

### ❌ Missing geolocation

Nothing appears on map

### ❌ Wrong coordinate format

Markers not displayed

### ❌ Overloading map

Too many markers → slow UI

---

# 🔍 Notes

- Requires valid geolocation data
- Popup supports HTML templates
- Works best with clean, structured location data

---

```

```
