export const report = {
  endPoints: {
saveQuery: "http://192.168.0.20:9999/api/query/save",
    runQuery: "/api/query/run",
    baseURL: "http://192.168.0.20:9999",
    debuggUrl: `http://192.168.0.20:9999/api/query/view`,
    preview: `http://192.168.0.20:9999/api/files/preview`,
    printRequest: `/api/services/printRequest/print_request`,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IkY2N05KbWFnTHBSSisxZDZ6dFBUZm83OFZVYStNdTNHU25kU0xmOEJBVHRIc0dSaC9ReURBTnBCRzVQWmhBVjJmem12YWZnMGllZ3BIcXZwSzdOWHlSMlMvNW5rNllyWnJEallpWTZOdTViQy84Ull3Mm9HQ1hBZzltTzIxMFVOL1NUSVg0M2lhbEd6ekVWZVFGSDV5dEl4WTBwZktlR1dVSmZQSGJRcVU3ci9kSjgwOUNqRFliNXFuZXU4Yk9LZjhYZUplQllBUEd6TE5jbElQYnFXNW1qR1NrUmptTEZXRWNtUGdYMVhaNnlUcEk3R21ESHBiYklUbUN1K1F2aHFxZEQyajV5MEp2eFNxN0VWcHJrRTZhSWptZ3dNeWUvSWxwVU1qNEJVNlRXeVVHVG1rYmtmd1pTQ3pWUE85OHcwd1N2N0gzU08vbUZ2T1FMMHRUSTNpekxhZGg1cVYrcndEOVZxZWtWeHp3QjJnZERjbEMzaW1VQkZhL2tKK2c4QkxHVERSeWRvdjlRVmFlVzd4TE1YWEZlc0sraGI4QjRVdnBrSDBlejFodzloT2g2ZFVwa1VSRkFiMXVoQnpCbFdpaXRmNktRMk9iQk9wc2ZqazdjNlhKV0s3OSt2eXdnN0xvRDQiLCJpYXQiOjE3Nzg4MjgwODgsImV4cCI6MTc3ODgzMTY4OCwianRpIjoiYWNjOjE6MTc3ODgyODA4ODU0Mzp3ZWIifQ.Lw92t17LjypSCWFg9y4N4mf6Rc7v5QG2KhyWXMzYTdY",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IkY2N05KbWFnTHBSSisxZDZ6dFBUZm83OFZVYStNdTNHU25kU0xmOEJBVHRIc0dSaC9ReURBTnBCRzVQWmhBVjJmem12YWZnMGllZ3BIcXZwSzdOWHlSMlMvNW5rNllyWnJEallpWTZOdTViQy84Ull3Mm9HQ1hBZzltTzIxMFVOL1NUSVg0M2lhbEd6ekVWZVFGSDV5dEl4WTBwZktlR1dVSmZQSGJRcVU3ci9kSjgwOUNqRFliNXFuZXU4Yk9LZjhYZUplQllBUEd6TE5jbElQYnFXNW1qR1NrUmptTEZXRWNtUGdYMVhaNnlUcEk3R21ESHBiYklUbUN1K1F2aHFxZEQyajV5MEp2eFNxN0VWcHJrRTZhSWptZ3dNeWUvSWxwVU1qNEJVNlRXeVVHVG1rYmtmd1pTQ3pWUE85OHcwd1N2N0gzU08vbUZ2T1FMMHRUSTNpekxhZGg1cVYrcndEOVZxZWtWeHp3QjJnZERjbEMzaW1VQkZhL2tKK2c4QkxHVERSeWRvdjlRVmFlVzd4TE1YWEZlc0sraGI4QjRVdnBrSDBlejFodzloT2g2ZFVwa1VSRkFiMXVoQnpCbFdpaXRmNktRMk9iQk9wc2ZqazdjNlhKV0s3OSt2eXdnN0xvRDQiLCJpYXQiOjE3Nzg4MjgwODgsImV4cCI6MTc3ODgzMTY4OCwianRpIjoiYWNjOjE6MTc3ODgyODA4ODU0Mzp3ZWIifQ.Lw92t17LjypSCWFg9y4N4mf6Rc7v5QG2KhyWXMzYTdY`,
      "Content-Type": "application/json",
    },
  }, 
 "schema": "1.0",
        "title": "Master Report",
        "category": "Ticket",
        "privilege": "*",
        "blocked": false,
        "rowlink": false,
        "rowsPerPage": 20,
        "showExtraColumn": false,
        "custombar": false,
        "DEBUG": false,
        "slotBindings": {
            "app-toolbar.toolbar": ""
        },
        "source": {
            "type": "sql",
            "queryid": "reports%40samadhan.master_report%40source"
        },
        "buttons": {
            "infoview@samadhan.infoview/{id}": {
                "label": "View Ticket",
                "icon": "fa fa-eye"
            },
            "popup@activity_logs.popup_activity_logs/{id}": {
                "label": "History",
                "params": {
                    "ref_src": "forms@samadhan.main",
                    "columns": [
                        "created_on",
                        "subject",
                        "ticket_geolocation",
                        "edited_on",
                        "status"
                    ]
                },
                "icon": "fa-solid fa-clock-rotate-left"
            }
        },
        "toolbar": {
            "search": true,
            "print": false,
            "export": true,
            "email": false
        },
        "datagrid": {
            "id": {
                "label": "ID",
                "hidden": true,
                "searchable": true,
                "sortable": true
            },
            "ticket_no": {
                "label": "Subject",
                "hidden": false,
                "searchable": true,
                "sortable": true,
                "style": "min-width:300px;max-width:300px;overflow-x:hidden"
            },
            "status": {
                "label": "Request Status",
                "hidden": false,
                "searchable": true,
                "formatter": "pretty"
            },
            "last_comment": {
                "label": "Last Comment",
                "hidden": false,
                "searchable": true,
                "style": "min-width:300px;max-width:300px;overflow-x:hidden"
            },
            "comment_count": {
                "label": "Comments Count",
                "hidden": false,
                "formatter": "ticketcnt",
                "searchable": true
            },
            "level": {
                "label": "Level",
                "hidden": false,
                "searchable": true
            },
            "assigned_to": {
                "label": "Assigned To",
                "hidden": false,
                "formatter": "ticketcnt",
                "searchable": true,
                "style": "min-width:300px;max-width:300px;overflow-x:hidden"
            },
            "email": {
                "label": "Email",
                "hidden": true,
                "searchable": true
            },
            "mobile": {
                "label": "Mobile",
                "hidden": true,
                "searchable": true
            },
            "attachment": {
                "label": "Attachment",
                "sortable": true,
                "formatter": "attachment",
                "searchable": true
            },
            "priority": {
                "label": "Priority",
                "hidden": false,
                "searchable": true,
                "formatter": "pretty"
            },
            "created_by": {
                "label": "Created By",
                "hidden": false,
                "searchable": true
            },
            "raised_by": {
                "label": "Raised By",
                "hidden": false,
                "searchable": true
            },
            "tickets_tbl.edited_on": {
                "label": "Last Update",
                "searchable": true,
                "sortable": true,
                "hidden": false,
                "formatter": "edge",
                "filter": {
                    "type": "date"
                }
            },
            "created_on": {
                "label": "Age",
                "hidden": false,
                "searchable": true,
                "sortable": true,
                "formatter": "edge"
            }
        },
        "script": "ZnVuY3Rpb24gdGlja2V0Y250KGNvbF92YWx1ZSwgcm93X2RhdGEsIGNvbHVtbl9kYXRhLCBqc29uX2RhdGEpIHsKICAgIHJldHVybiAnPHNwYW4gY2xhc3M9ImNvbW1lbnRCb3giIHN0eWxlPSJiYWNrZ3JvdW5kOiAjNmY3NGMxO3BhZGRpbmc6IDJweCAxMHB4O2JvcmRlci1yYWRpdXM6IDIwcHg7Zm9udC1zaXplOiAxMnB4O2ZvbnQtd2VpZ2h0OiA2MDA7bWFyZ2luLWxlZnQ6IDE0cHg7Ij4nICsgY29sX3ZhbHVlICsgJzwvc3Bhbj4nOwp9CgovLyBmdW5jdGlvbiBzaG93VGlja2V0RGV0YWlscyhjb2xfdmFsdWUsIHJvd19kYXRhLCBjb2x1bW5fZGF0YSwganNvbl9kYXRhKSB7Ci8vICAgICBsZXQgc3ViamVjdCA9IHJvd19kYXRhWyJ0aWNrZXRzX3RibC5zdWJqZWN0Il0gfHwgIiI7Ci8vICAgICBsZXQgcmFpc2VkX2J5ID0gcm93X2RhdGFbInRpY2tldHNfdGJsLm5hbWUiXSB8fCAiIjsKLy8gICAgIGxldCB0aWNrZXRfbm8gPSByb3dfZGF0YVsidGlja2V0c190YmwudGlja2V0X25vIl0gfHwgIiI7Ci8vICAgICBsZXQgYWRkZWRfZGF0ZSA9IHJvd19kYXRhWyJ0aWNrZXRzX3RibC5jcmVhdGVkX29uIl07Ci8vICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGFkZGVkX2RhdGUpOwoKLy8gICAgIGxldCBmb3JtYXR0ZWRfZGF0ZSA9Ci8vICAgICAgICAgU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpICsgJy8nICsKLy8gICAgICAgICBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKSArICcvJyArCi8vICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpOwoKLy8gICAgIGxldCBzaG9ydFN1YmplY3QgPSBzdWJqZWN0Lmxlbmd0aCA+IDQwCi8vICAgICAgICAgPyBzdWJqZWN0LnNsaWNlKDAsIDQwKSArICIuLi4iCi8vICAgICAgICAgOiBzdWJqZWN0OwoKLy8gICAgIGxldCBtb2RhbElkID0gInRpY2tldF9tb2RhbF8iICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDEwKTsKCi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHsKLy8gICAgICAgICB3aW5kb3cub3BlblRpY2tldERldGFpbHNNb2RhbCA9IGZ1bmN0aW9uIChpZCkgewovLyAgICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7Ci8vICAgICAgICAgICAgIGlmIChtb2RhbCkgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICJmbGV4IjsKLy8gICAgICAgICB9OwoKLy8gICAgICAgICB3aW5kb3cuY2xvc2VUaWNrZXREZXRhaWxzTW9kYWwgPSBmdW5jdGlvbiAoaWQpIHsKLy8gICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpOwovLyAgICAgICAgICAgICBpZiAobW9kYWwpIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAibm9uZSI7Ci8vICAgICAgICAgfTsKLy8gICAgIH0sIDApOwoKLy8gICAgIHJldHVybiBgCi8vICAgICAgICAgPGRpdiBjbGFzcz0idXNlckRldGFpbHMiIAovLyAgICAgICAgIG9uY2xpY2s9Im9wZW5UaWNrZXREZXRhaWxzTW9kYWwoJyR7bW9kYWxJZH0nKSIKLy8gICAgICAgICBzdHlsZT0iCi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlOwovLyAgICAgICAgICAgICBtaW4td2lkdGg6IDA7Ci8vICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7Ci8vICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47Ci8vICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKLy8gICAgICAgICAiPgovLyAgICAgICAgICAgICA8aDIgc3R5bGU9IgovLyAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsKLy8gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47Ci8vICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsKLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOwovLyAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwOwovLyAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7Ci8vICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7Ci8vICAgICAgICAgICAgICIgdGl0bGU9IiR7c3ViamVjdH0iIG9uY2xpY2s9Im9wZW5UaWNrZXREZXRhaWxzTW9kYWwoJyR7bW9kYWxJZH0nKSI+Ci8vICAgICAgICAgICAgICAgICAke3Nob3J0U3ViamVjdH0KLy8gICAgICAgICAgICAgPC9oMj4KCi8vICAgICAgICAgICAgIDxwIHN0eWxlPSIKLy8gICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7Ci8vICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwovLyAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7Ci8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKLy8gICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDsKLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMDsKLy8gICAgICAgICAgICAgIj4KLy8gICAgICAgICAgICAgICAgIEZyb206IDxzcGFuIHN0eWxlPSJjb2xvcjogIzI0MmRiMzsiPiR7cmFpc2VkX2J5fTwvc3Bhbj4KLy8gICAgICAgICAgICAgICAgICZuYnNwOwovLyAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InRpY2tldG5vIiBzdHlsZT0iY29sb3I6ICMyNDJkYjM7Ij4jJHt0aWNrZXRfbm99PC9zcGFuPiwKLy8gICAgICAgICAgICAgICAgIFNpbmNlOiA8c3BhbiBjbGFzcz0iZGF0ZWQiIHN0eWxlPSJjb2xvcjogIzI0MmRiMzsiPiR7Zm9ybWF0dGVkX2RhdGV9PC9zcGFuPgovLyAgICAgICAgICAgICA8L3A+Ci8vICAgICAgICAgPC9kaXY+CgovLyAgICAgICAgIDxkaXYgaWQ9IiR7bW9kYWxJZH0iIHN0eWxlPSIKLy8gICAgICAgICAgICAgZGlzcGxheTogbm9uZTsKLy8gICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOwovLyAgICAgICAgICAgICBpbnNldDogMDsKLy8gICAgICAgICAgICAgei1pbmRleDogOTk5OTsKLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKLy8gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ci8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC40KTsKLy8gICAgICAgICAiPgovLyAgICAgICAgICAgICA8ZGl2IHN0eWxlPSIKLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlOwovLyAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2NzJweDsKLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOwovLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwovLyAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLDAsMCwwLjIpOwovLyAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDsKLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKLy8gICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwdmg7Ci8vICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvOwovLyAgICAgICAgICAgICAiPgovLyAgICAgICAgICAgICAgICAgPGJ1dHRvbgovLyAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9ImNsb3NlVGlja2V0RGV0YWlsc01vZGFsKCcke21vZGFsSWR9JykiCi8vICAgICAgICAgICAgICAgICAgICAgc3R5bGU9IgovLyAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7Ci8vICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTJweDsKLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEycHg7Ci8vICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2YjcyODA7Ci8vICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWU3ZWI7Ci8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7Ci8vICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTsKLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OwovLyAgICAgICAgICAgICAgICAgICAgICIKLy8gICAgICAgICAgICAgICAgID4KLy8gICAgICAgICAgICAgICAgICAgICDinJUKLy8gICAgICAgICAgICAgICAgIDwvYnV0dG9uPgoKLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InVzZXJEZXRhaWxzIiBzdHlsZT0iCi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7Ci8vICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwOwovLyAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTsKLy8gICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTsKLy8gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjhweDsKLy8gICAgICAgICAgICAgICAgICI+Ci8vICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPSIKLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsKLy8gICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7Ci8vICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0OwovLyAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7Ci8vICAgICAgICAgICAgICAgICAgICAgIj4KLy8gICAgICAgICAgICAgICAgICAgICAgICAgJHtzdWJqZWN0fQovLyAgICAgICAgICAgICAgICAgICAgIDwvaDI+CgovLyAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPSIKLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsKLy8gICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7Ci8vICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0OwovLyAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOwovLyAgICAgICAgICAgICAgICAgICAgICI+Ci8vICAgICAgICAgICAgICAgICAgICAgICAgIEZyb206IDxzcGFuIHN0eWxlPSJjb2xvcjogIzI0MmRiMzsiPiR7cmFpc2VkX2J5fTwvc3Bhbj4KLy8gICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Ci8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJ0aWNrZXRubyIgc3R5bGU9ImNvbG9yOiAjMjQyZGIzOyI+IyR7dGlja2V0X25vfTwvc3Bhbj4sCi8vICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmNlOiA8c3BhbiBjbGFzcz0iZGF0ZWQiIHN0eWxlPSJjb2xvcjogIzI0MmRiMzsiPiR7Zm9ybWF0dGVkX2RhdGV9PC9zcGFuPgovLyAgICAgICAgICAgICAgICAgICAgIDwvcD4KLy8gICAgICAgICAgICAgICAgIDwvZGl2PgovLyAgICAgICAgICAgICA8L2Rpdj4KLy8gICAgICAgICA8L2Rpdj4KLy8gICAgIGA7Ci8vIH0KCmZ1bmN0aW9uIHNob3dUaWNrZXREZXRhaWxzKGNvbF92YWx1ZSwgcm93X2RhdGEsIGNvbHVtbl9kYXRhLCBqc29uX2RhdGEpIHsKICAgIGNvbnNvbGUubG9nKCJkYXRhaWxzOiIsIHJvd19kYXRhKTsKICAgIGxldCBzdWJqZWN0ID0gcm93X2RhdGFbInRpY2tldHNfdGJsLnN1YmplY3QiXTsKICAgIGxldCByYWlzZWRfYnkgPSByb3dfZGF0YVsidGlja2V0c190YmwubmFtZSJdOwogICAgbGV0IHRpY2tldF9ubyA9IHJvd19kYXRhWyJ0aWNrZXRzX3RibC50aWNrZXRfbm8iXTsKICAgIGxldCBhZGRlZF9kYXRlID0gcm93X2RhdGFbInRpY2tldHNfdGJsLmNyZWF0ZWRfb24iXTsKICAgIGxldCBkYXRlID0gbmV3IERhdGUoYWRkZWRfZGF0ZSk7CgogICAgbGV0IGZvcm1hdHRlZF9kYXRlID0KICAgICAgICBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJykgKyAnLycgKwogICAgICAgIFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpICsgJy8nICsKICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCk7CiAgICByZXR1cm4gJzxkaXYgY2xhc3M9InVzZXJEZXRhaWxzIj48aDI+JyArIHN1YmplY3QgKyAnPC9oMj48aDI+PHA+RnJvbTogPHNwYW4gc3R5bGU9ImNvbG9yOiAjMjQyZGIzOyI+JyArIHJhaXNlZF9ieSArICc8L3NwYW4+IDwvcD48cD48c3BhbiBjbGFzcz0idGlja2V0bm8iIHN0eWxlPSJjb2xvcjogIzI0MmRiMzsiPiMnICsgdGlja2V0X25vICsgJzwvc3Bhbj4sIFNpbmNlOiA8c3BhbiBjbGFzcz0iZGF0ZWQiIHN0eWxlPSJjb2xvcjogIzI0MmRiMzsiPicgKyBmb3JtYXR0ZWRfZGF0ZSArICc8L3NwYW4+PC9wPjxicj48L2gyPjwvZGl2Pic7Cn0=",
        "module_refid": "samadhan.master_report",
        "module_type": "reports"
    }
