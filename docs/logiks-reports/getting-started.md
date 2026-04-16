---
id: getting-started
title: Getting Started
---

# Logiks Reports

Logiks Reports is a React library to generate dynamic reports using JSON configuration.

## Installation

```bash
npm install logiks-reports
```

## Basic Usage

```js
import { Reports } from "logiks-reports";
import "logiks-reports/index.css";

const reportJson = {
  title: "Users",
  datagrid: {
    name: { label: "Name" },
    email: { label: "Email" },
  },
};

export default function App() {
  return <Reports report={reportJson} data={[]} />;
}
```
