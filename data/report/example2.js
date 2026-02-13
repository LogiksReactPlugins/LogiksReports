const baseRows = [
  {
    id: 1,
    attachment: "https://example.com/files/report.pdf",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user001",
    name: "Alice",
    gender: "female",
    blocked: false,
    dtoc: "2023-01-01sss",
    dtoe: "2023-01-01T10:30:00",
  },
  {
    id: 2,
    attachment:
      "https://example.com/files/report.pdf, https://example.com/files/invoice.pdf, https://example.com/files/summary.docx",

    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user002",
    name: "Bob",
    gender: "male",
    blocked: true,
    dtoc: "2023-01-15",
    dtoe: "2023-01-15T14:45:00",
  },
  {
    id: 3,
    attachment:
      "https://docs.google.com/document/d/e/2PACX-1vSuOyPd3M3eqF3bUvnZs8-mVMR4ZKl-7F_oY9bLEVogdtL0SMr__VmSDstMU5Uz1x1TLbGcvZf6oLg8/pub",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user003",
    name: "Charlie",
    gender: "male",
    blocked: false,
    dtoc: "2023-02-01",
    dtoe: "2023-02-01T09:15:00",
  },
  {
    id: 4,
    attachment:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRKqbAY227DY33bzSq6VUafKo0I8UdlOrQALFFdwITo2hkwhfHI1x_thO5oicTJpGSK7KFEj2J3AFHz/pub?gid=0&single=true&output=pdf",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user004",
    name: "Diana",
    gender: "female",
    blocked: true,
    dtoc: "2023-02-10",
    dtoe: "2023-02-10T16:20:00",
  },
  {
    id: 5,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user005",
    name: "Eve",
    gender: "female",
    blocked: false,
    dtoc: "2023-02-15",
    dtoe: "2023-02-15T11:30:00",
  },
  {
    id: 6,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user006",
    name: "Frank",
    gender: "male",
    blocked: false,
    dtoc: "2023-02-20",
    dtoe: "2023-02-20T13:45:00",
  },
  {
    id: 7,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user007",
    name: "Grace",
    gender: "female",
    blocked: true,
    dtoc: "2023-02-25",
    dtoe: "2023-02-25T08:30:00",
  },
  {
    id: 8,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user008",
    name: "Henry",
    gender: "male",
    blocked: false,
    dtoc: "2023-03-01",
    dtoe: "2023-03-01T15:10:00",
  },
  {
    id: 9,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user009",
    name: "Ivy",
    gender: "female",
    blocked: false,
    dtoc: "2023-03-05",
    dtoe: "2023-03-05T12:20:00",
  },
  {
    id: 10,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user010",
    name: "Jack",
    gender: "male",
    blocked: true,
    dtoc: "2023-03-10",
    dtoe: "2023-03-10T17:30:00",
  },
  {
    id: 11,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user011",
    name: "Kate",
    gender: "female",
    blocked: false,
    dtoc: "2023-03-15",
    dtoe: "2023-03-15T10:45:00",
  },
  {
    id: 12,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user012",
    name: "Leo",
    gender: "male",
    blocked: false,
    dtoc: "2023-03-20",
    dtoe: "2023-03-20T14:15:00",
  },
  {
    id: 13,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user013",
    name: "Mia",
    gender: "female",
    blocked: true,
    dtoc: "2023-03-25",
    dtoe: "2023-03-25T09:50:00",
  },
  {
    id: 14,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user014",
    name: "Noah",
    gender: "male",
    blocked: false,
    dtoc: "2023-03-30",
    dtoe: "2023-03-30T16:25:00",
  },
  {
    id: 15,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto",
    userid: "user015",
    name: "Olivia",
    gender: "female",
    blocked: false,
    dtoc: "2023-04-01",
    dtoe: "2023-04-01T11:40:00",
  },
];

export const report = {
  schema: "1.0",
  title: "Test Report",
  category: "CMS",
  privilege: "*",
  blocked: false,
  rowlink: false,
  rowsPerPage: 20,
  showExtraColumn: "checkbox",
  custombar: false,
  DEBUG: false,
  source: {
    type: "php",
    file: "plugins/modules/test/test.php",
  },
  buttons: {
    "form@demo": {
      label: "a {userid}",
      icon: "fa fa-plus",
    },
  },
  aggregatePosition: "both",
  toolbar: {
    search: true,
    print: false,
    export: false,
    email: false,
  },
  datagrid: {
    id: {
      label: "ID",
      hidden: false,
      searchable: false,
      sortable: true,
      formatter: "text",
      aggregate: {
        type: "COUNT",
        label: "Total Records",
      },
    },

    desc: {
      label: "CONTENT At",
      formatter: "content",
      filter: { type: "text" },
    },

    attachment: {
      label: "Attachment",
      formatter: "attachment",
    },

    userid: {
      label: "UserID",
      sortable: true,
      searchable: true,
      aggregate: {
        type: "COUNT",
        label: "User Count",
      },
    },

    gender: {
      label: "Gender",
      searchable: true,
      filter: {
        type: "select",
        options: {
          male: "Male",
          female: "Female",
        },
      },
      aggregate: {
        type: "count",
      },
    },

    name: {
      label: "User Name",
      hidden: true,
    },

    blocked: {
      label: "Blocked",
      formatter: "checkbox",
      searchable: true,
      filter: {
        type: "select",
        nofilter: "--",
        options: {
          true: "Blocked",
          false: "Not Blocked",
        },
      },
      aggregate: {
        type: "SUM",
        label: "Total Blocked",
      },
    },

    dtoc: {
      label: "Created At",
      formatter: "date",
      filter: { type: "date" },
    },

    dtoe: {
      label: "Updated At",
      formatter: "time",
    },
    score: {
      label: "Score",
      aggregate: {
        type: "SUM",
        label: "Total Score",
      },
    },

    rating: {
      label: "Rating",
      aggregate: {
        type: "AVG",
        label: "Average Rating",
      },
    },

    salary: {
      label: "Salary",
      aggregate: {
        type: "MAX",
        label: "Max Salary",
      },
    },

    min_salary: {
      label: "Min Salary",
      aggregate: {
        type: "MIN",
        label: "Min Salary",
      },
    },

    performance_index: {
      label: "Performance Index",
      aggregate: {
        type: "sum(score)/avg(rating)*2+1",
      },
    },
  },
  rows: baseRows.map((row, index) => ({
    ...row,
    score: 10 + index,
    rating: 3 + (index % 5),
    salary: 3000 + index * 500,
    min_salary: 1000 + index * 100,
  })),
};
