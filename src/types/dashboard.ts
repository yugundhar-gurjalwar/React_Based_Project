export type WidgetType = "text" | "donut" | "progress" | "empty";

export interface DonutSegment {
  name: string;
  value: number;
  color: string;
}

export interface ProgressMetric {
  label: string;
  value: number;
  color: string;
}

export interface Widget {
  id: string;
  title: string;
  type: WidgetType;
  text: string;
  enabled: boolean;
  donutData?: DonutSegment[];
  progressData?: ProgressMetric[];
}

export interface DashboardCategory {
  id: string;
  title: string;
  widgets: Widget[];
}

export interface DashboardData {
  categories: DashboardCategory[];
}

export interface NewWidgetInput {
  categoryId: string;
  title: string;
  text: string;
  type: Exclude<WidgetType, "empty">;
}
