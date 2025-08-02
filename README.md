
A responsive health tracking web application based on the provided design and requirements. Built with React for UI rendering, chart visualization, and routing.

---

## Problem Statement

The task is to implement the frontend of a healthcare web application based on a given Figma design. The app includes:

- **Top Page** (after login): Shows achievement rates, weight/fat graphs, meal history, and a button to input data.
- **My Record Page**: Displays graph of body fat %, exercise records, diaries, and entry navigation.
- **Column Page**: A public page showing health-related articles.

---

## Solution

This project is implemented using the following stack:

- **React** for UI and routing
- **React Router DOM** for page navigation
- **Recharts** for graph visualization
- **Tailwind CSS** for styling
- **Mocked API services** (static JSON) to simulate backend responses

All components are modular and follow clear separation of concerns between UI and data logic.

---

## Development Setup

### ✅ Requirements
- Node.js `16.13.1`
- npm `^6.14.15`

### 📦 Install Dependencies
```bash
npm install
````

### 🚀 Run the App

```bash
npm start
```

> The app will start at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Operation Verification Procedure

To verify the application works as expected:

1. **Start the app** using `npm start`.
2. Navigate through these pages:

   * `/` → Top Page (mocked post-login)
   * `/my-record` → My Record Page
   * `/column` → Column Page
3. Verify:

   * Layout and styling match the Figma design.
   * Graphs display correctly based on mock data.
   * Buttons navigate to expected sections.
   * Responsive layout works on desktop and mobile.

---

## 📁 Folder Structure (Simplified)

```
public/
├── imgs/              # Static images
├── icons/             # Static icons
src/
├── components/        # Shared UI components
├── pages/             # TopPage, MyRecord, ColumnPage
├── services/          # API mock/fetch logic
├── routes/            # App routing
├── App.js             # App entry point
└── main.js            # ReactDOM render
```

---

## Notes

* `.git` folder is included in the submission as required.
* All development was tracked using Git with atomic commits.
* `node_modules` is excluded from the archive.

```

---