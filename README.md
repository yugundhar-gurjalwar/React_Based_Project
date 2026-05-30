# Cloud Risk Dashboard

A production-ready React 18 + TypeScript dashboard built with Vite, Tailwind CSS, Zustand, Recharts, and Lucide React.

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Folder Structure

```text
src/
|-- components/
|   |-- Navbar.tsx
|   |-- Dashboard.tsx
|   |-- CategorySection.tsx
|   |-- WidgetCard.tsx
|   |-- AddWidgetDrawer.tsx
|   |-- SearchBar.tsx
|   `-- charts/
|       |-- DonutChart.tsx
|       `-- ProgressChart.tsx
|-- data/
|   `-- dashboardData.ts
|-- store/
|   `-- dashboardStore.ts
|-- types/
|   `-- dashboard.ts
|-- App.tsx
|-- main.tsx
`-- index.css
```

## Architecture

Dashboard content is driven by `src/data/dashboardData.ts`. Categories and widgets are typed in `src/types/dashboard.ts` and loaded into a Zustand store in `src/store/dashboardStore.ts`.

The store owns all dashboard mutations:

- `addWidget()` adds a widget to any category.
- `removeWidget()` permanently removes a widget.
- `toggleWidget()` hides or shows a widget through the drawer checklist.
- `searchWidgets()` updates the global filter used by category sections.

The UI is split into focused components. `Navbar` manages search and drawer entry points, `Dashboard` renders all categories, `CategorySection` applies responsive grid behavior, `WidgetCard` delegates chart rendering by widget type, and `AddWidgetDrawer` handles creation plus checkbox-based visibility toggling.
