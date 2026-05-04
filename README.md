# 📎 Due Flow (Chrome Extension)

A lightweight Chrome extension that lets users highlight text on any webpage, extract potential dates, and quickly take action using copy or Google Calendar integration.

---

## 🚀 Features

* ✨ Highlight text on any webpage to extract date-like information
* 📅 Displays extracted date in a clean format
* 📋 One-click copy of extracted result
* 📅 Add event to Google Calendar using a pre-filled event link
* ⚡ Runs entirely in the browser (no backend or APIs)

---

## 🧠 How It Works

1. User highlights text on a webpage
2. Extension attempts to extract a date from the selected text(look for "Extract Deadline")
3. The extracted date is displayed in a simplified format
4. User can:

   * Copy the result
   * Create a Google Calendar event via a generated link

---

## 🛠️ Built With

* HTML
* CSS
* JavaScript (Vanilla)
* Chrome Extensions API

---

## 📅 Google Calendar Integration

The extension generates a Google Calendar event using a URL template:

```text id="gc2"
https://calendar.google.com/calendar/render?action=TEMPLATE&text=TITLE&dates=START/END
```

This allows quick event creation without using any external APIs.

---

## 📌 Limitations

* Does not fully understand natural language dates (e.g. “next Friday” may not always work)
* Relies on browser date parsing and basic string cleanup
* No backend or external API integration

---

## 💡 Purpose

This project demonstrates:

* DOM text selection handling
* JavaScript date manipulation
* Chrome extension development basics
* Simple UI interaction workflows

