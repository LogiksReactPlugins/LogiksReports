export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6InZkalRTZFJ3eUV6NkNrMFNJWFJEdnZzZ1dxRkZlVXZwaVRYTHoxQ2txY3pnbFVVR1R3cWNUdEpRQnByRzBjZ0p1SVNWTEZ4YnlsdThMTWE3clJmd2QzeVNXL21WanBlZmVKdlpyK3duemoweEJnSXlIbDJPeStzWVRIWGp2M0owSlp4a2c3NXpzdklaSThzYVhFQ042YVl0WldMUDFTSEpUZktWWmpnaEcydFdFYjEraW9LZE1wU2VvQ2pPamEydUlFbGNLc2pzTDFsYUhLVCtHN2RsN1VkRnhudEZDRzFmbnJGSEg1NGQ1VTVpUWwxMlFyK21jVFZwUk1aSmYxZnJ6UUpxaFMyci9lN3loMnM5bVBOUTFlVCtxQT09IiwiaWF0IjoxNzc2NjY0NzcxLCJleHAiOjE3NzY2NjgzNzEsImp0aSI6ImFjYzoxOjE3NzY2NjQ3NzE5NDY6d2ViIn0.X9ieXBxRQi4vhRZKbdFSP0b8vwTEvZKXK9Hdc2dx42M",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6InZkalRTZFJ3eUV6NkNrMFNJWFJEdnZzZ1dxRkZlVXZwaVRYTHoxQ2txY3pnbFVVR1R3cWNUdEpRQnByRzBjZ0p1SVNWTEZ4YnlsdThMTWE3clJmd2QzeVNXL21WanBlZmVKdlpyK3duemoweEJnSXlIbDJPeStzWVRIWGp2M0owSlp4a2c3NXpzdklaSThzYVhFQ042YVl0WldMUDFTSEpUZktWWmpnaEcydFdFYjEraW9LZE1wU2VvQ2pPamEydUlFbGNLc2pzTDFsYUhLVCtHN2RsN1VkRnhudEZDRzFmbnJGSEg1NGQ1VTVpUWwxMlFyK21jVFZwUk1aSmYxZnJ6UUpxaFMyci9lN3loMnM5bVBOUTFlVCtxQT09IiwiaWF0IjoxNzc2NjY0NzcxLCJleHAiOjE3NzY2NjgzNzEsImp0aSI6ImFjYzoxOjE3NzY2NjQ3NzE5NDY6d2ViIn0.X9ieXBxRQi4vhRZKbdFSP0b8vwTEvZKXK9Hdc2dx42M`,
      "Content-Type": "application/json",
    },
  }, 
        "schema": "1.0",
        "title": "Logins",
        "category": "CMS",
        "privilege": "*",
        "blocked": false,
        "rowlink": false,
        "rowsPerPage": 20,
        "showExtraColumn": false,
        "custombar": false,
        "DEBUG": false,
        "source": {
            "type": "sql",
            "queryid": "reports%40userManager.logins%40source"
        },
        "toolbar": {
            "search": true,
            "print": true,
            "email": false
        },
        "datagrid": {
            "id": {
                "label": "ID",
                "hidden": true,
                "searchable": false,
                "sortable": true,
                "groupable": false,
                "classes": "",
                "style": "width:50px;",
                "formatter": "text"
            },
            "loginid": {
                "label": "UserID",
                "sortable": true,
                "searchable": true
            },
            "geolocation": {
                "label": "geolocation",
                "sortable": true,
                "searchable": true
            },
            "created_on": {
                "label": "Login",
                "formatter": "datetime",
                "searchable": true,
                "filter": {
                    "type": "date"
                }
            }
        },
        "gmap": {
            "zoom": 4,
            "mapid": "terrain",
            "colmap": {
                "title": "l.loginid",
                "descs": "l.created_on",
                "geolocation": "l.geolocation"
            }
        },
        "module_refid": "userManager.logins",
        "module_type": "reports"
    }
