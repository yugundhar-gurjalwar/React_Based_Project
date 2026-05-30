import type { DashboardData } from "../types/dashboard";

export const dashboardData: DashboardData = {
  categories: [
    {
      id: "cspm",
      title: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cloud-accounts",
          title: "Cloud Accounts",
          type: "donut",
          text: "Cloud account status across connected providers.",
          enabled: true,
          donutData: [
            { name: "Connected", value: 2, color: "#2563eb" },
            { name: "Not Connected", value: 2, color: "#dbeafe" },
          ],
        },
        {
          id: "cloud-risk",
          title: "Cloud Account Risk Assessment",
          type: "donut",
          text: "Risk distribution for production cloud accounts.",
          enabled: true,
          donutData: [
            { name: "Failed", value: 1689, color: "#ef4444" },
            { name: "Warning", value: 681, color: "#f59e0b" },
            { name: "Passed", value: 7253, color: "#22c55e" },
            { name: "Not Available", value: 36, color: "#94a3b8" },
          ],
        },
        {
          id: "cspm-empty",
          title: "Add Widget",
          type: "empty",
          text: "Create another CSPM insight from the widget drawer.",
          enabled: true,
        },
      ],
    },
    {
      id: "cwpp",
      title: "CWPP Dashboard",
      widgets: [
        {
          id: "namespace-alerts",
          title: "Top Namespace Specific Alerts",
          type: "text",
          text: "No graph data available for this widget.",
          enabled: true,
        },
        {
          id: "workload-alerts",
          title: "Workload Alerts",
          type: "progress",
          text: "Container workload alert severity for the last 48 hours.",
          enabled: true,
          progressData: [
            { label: "Critical", value: 18, color: "#ef4444" },
            { label: "High", value: 28, color: "#f97316" },
            { label: "Medium", value: 34, color: "#f59e0b" },
            { label: "Low", value: 20, color: "#22c55e" },
          ],
        },
        {
          id: "cwpp-empty",
          title: "Add Widget",
          type: "empty",
          text: "Add runtime protection metrics to this category.",
          enabled: true,
        },
      ],
    },
    {
      id: "registry",
      title: "Registry Scan",
      widgets: [
        {
          id: "image-risk",
          title: "Image Risk Assessment",
          type: "progress",
          text: "Vulnerabilities discovered across scanned container images.",
          enabled: true,
          progressData: [
            { label: "Critical", value: 9, color: "#7f1d1d" },
            { label: "High", value: 24, color: "#ef4444" },
            { label: "Medium", value: 39, color: "#f59e0b" },
            { label: "Low", value: 28, color: "#0ea5e9" },
          ],
        },
        {
          id: "security-issues",
          title: "Image Security Issues",
          type: "donut",
          text: "Open image security issues by remediation status.",
          enabled: true,
          donutData: [
            { name: "Open", value: 422, color: "#2563eb" },
            { name: "Accepted", value: 76, color: "#14b8a6" },
            { name: "Fixed", value: 237, color: "#84cc16" },
          ],
        },
        {
          id: "registry-empty",
          title: "Add Widget",
          type: "empty",
          text: "Track registry scan health with a custom widget.",
          enabled: true,
        },
      ],
    },
  ],
};
