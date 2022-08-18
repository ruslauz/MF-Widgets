/* Тип используется для отображения соответствующего
  скелетона, по умолчанию выбирается Default
  При появлении очередного типа виджета, 
  необходимо создать под него скелетон на на стороне конструктора
*/

function calcH(width: number): number {
  return Math.ceil((width + 10) / 42);
}

export enum WidgetType {
  Default = "Default",
  AreaChart = "AreaChart",
  BarChart = "BarChart",
  PieChart = "PieChart",
  HistogramChart = "HistogramChart",
  LineChart = "LineChart",
  VennChart = "VennChart",
  BubbleChart = "BubbleChart",
  Table = "Table",
  Old = "Old",
}

// Название должно строго соответствовать названию папки с виджетом и быть уникальным
export enum WidgetModuleName {
  AreaChart = "AreaChart",
  Stacked = "Stacked",
  BarChart = "BarChart",
  ToolTipBarChart = "ToolTipBarChart",
  NegativeBarChart = "NegativeBarChart",
  GroupBarChart = "GroupBarChart",
  TrendLine = "TrendLine",
  StackedBarChart = "StackedBarChart",
  HorizontalBarChart = "HorizontalBarChart",
  HorizontalGroupBarChart = "HorizontalGroupBarChart",
  HorizontalStackedBarChart = "HorizontalStackedBarChart",
  BubbleChart = "BubbleChart",
  DonutChart = "DonutChart",
  LineChart = "LineChart",
  TooltipLineChart = "TooltipLineChart",
  CurveLineChart = "CurveLineChart",
  VennChart = "VennChart",
  VennChartConfigurable = "VennChartConfigurable",
  TableWidget = "TableWidget",
  AreaChartStringified = "AreaChartStringified",

  OrganicSearchSummary = "OrganicSearchSummary",
  OrganicSearchKeywordsByCountry = "OrganicSearchKeywordsByCountry",
  OrganicSearchTopKeywords = "OrganicSearchTopKeywords",
  OrganicSearchBrandedVsNonBranded = "OrganicSearchBrandedVsNonBranded",
  PaidSearchSampleAds = "PaidSearchSampleAds",
  BacklinksFollowVsNoFollow = "BacklinksFollowVsNoFollow",
  OrganicPositionChangesNewVsLostKeywords = "OrganicPositionChangesNewVsLostKeywords",
  BacklinksNewAndLostBacklinks = "BacklinksNewAndLostBacklinks",
  BacklinksAuthorityScoreTrend = "BacklinksAuthorityScoreTrend",
  BacklinksTypes = "BacklinksTypes",
  PaidSearchPositions = "PaidSearchPositions",
}

export type WidgetInfo = {
  moduleName: WidgetModuleName;
  widgetName: string;
  w: number;
  h: number;
  type: WidgetType;
  isStringified?: boolean;
};

const WidgetsMap: Record<WidgetModuleName, WidgetInfo> = {
  OrganicSearchSummary: {
    moduleName: WidgetModuleName.OrganicSearchSummary,
    widgetName: "Organic Search: Summary",
    w: 5, // needs to be calculated
    h: calcH(151),
    type: WidgetType.Old,
  },
  OrganicSearchKeywordsByCountry: {
    moduleName: WidgetModuleName.OrganicSearchKeywordsByCountry,
    widgetName: "Organic Search: Keywords By Country",
    w: 6, // needs to be calculated
    h: calcH(326),
    type: WidgetType.Old,
  },
  OrganicSearchTopKeywords: {
    moduleName: WidgetModuleName.OrganicSearchTopKeywords,
    widgetName: "Organic Search: Top Keywords",
    w: 5, // needs to be calculated
    h: calcH(274),
    type: WidgetType.Old,
  },
  OrganicSearchBrandedVsNonBranded: {
    moduleName: WidgetModuleName.OrganicSearchBrandedVsNonBranded,
    widgetName: "Organic Search Branded Vs Non-Branded",
    w: 6, // needs to be calculated
    h: calcH(310),
    type: WidgetType.Old,
  },
  PaidSearchSampleAds: {
    moduleName: WidgetModuleName.PaidSearchSampleAds,
    widgetName: "Paid Search: Sample Ads",
    w: 5, // needs to be calculated
    h: calcH(310),
    type: WidgetType.Old,
  },
  BacklinksFollowVsNoFollow: {
    moduleName: WidgetModuleName.BacklinksFollowVsNoFollow,
    widgetName: "Backlinks: Follow Vs No-Follow",
    w: 6, // needs to be calculated
    h: calcH(230),
    type: WidgetType.Old,
  },
  OrganicPositionChangesNewVsLostKeywords: {
    moduleName: WidgetModuleName.OrganicPositionChangesNewVsLostKeywords,
    widgetName: "Organic Position: Changes New Vs Lost Keywords",
    w: 5, // needs to be calculated
    h: calcH(266),
    type: WidgetType.Old,
  },
  BacklinksNewAndLostBacklinks: {
    moduleName: WidgetModuleName.BacklinksNewAndLostBacklinks,
    widgetName: "Backlinks: New And Lost Backlinks",
    w: 5, // needs to be calculated
    h: calcH(266),
    type: WidgetType.Old,
  },
  BacklinksAuthorityScoreTrend: {
    moduleName: WidgetModuleName.BacklinksAuthorityScoreTrend,
    widgetName: "Backlinks: Authority Score Trend",
    w: 5, // needs to be calculated
    h: calcH(305),
    type: WidgetType.Old,
  },
  BacklinksTypes: {
    moduleName: WidgetModuleName.BacklinksTypes,
    widgetName: "Backlinks: Types",
    w: 4, // needs to be calculated
    h: calcH(217),
    type: WidgetType.Old,
  },
  PaidSearchPositions: {
    moduleName: WidgetModuleName.PaidSearchPositions,
    widgetName: "Backlinks: Referring Domains By Authority Score",
    w: 4, // needs to be calculated
    h: calcH(294),
    type: WidgetType.Old,
  },
  AreaChart: {
    moduleName: WidgetModuleName.AreaChart,
    widgetName: "Area Chart",
    w: 6,
    h: 6,
    type: WidgetType.AreaChart,
  },
  Stacked: {
    moduleName: WidgetModuleName.Stacked,
    widgetName: "Stacked Area",
    w: 4,
    h: 5,
    type: WidgetType.AreaChart,
  },
  BarChart: {
    moduleName: WidgetModuleName.BarChart,
    widgetName: "Bar Chart",
    w: 5,
    h: 6,
    type: WidgetType.BarChart,
  },
  ToolTipBarChart: {
    moduleName: WidgetModuleName.ToolTipBarChart,
    widgetName: "Bar Chart with Tooltip",
    w: 5,
    h: 6,
    type: WidgetType.BarChart,
  },
  NegativeBarChart: {
    moduleName: WidgetModuleName.NegativeBarChart,
    widgetName: "Negative Bar Chart",
    w: 5,
    h: 6,
    type: WidgetType.BarChart,
  },
  GroupBarChart: {
    moduleName: WidgetModuleName.GroupBarChart,
    widgetName: "Group Bar Chart",
    w: 5,
    h: 6,
    type: WidgetType.BarChart,
  },
  TrendLine: {
    moduleName: WidgetModuleName.TrendLine,
    widgetName: "Trend Line",
    w: 4,
    h: 8,
    type: WidgetType.BarChart,
  },
  StackedBarChart: {
    moduleName: WidgetModuleName.StackedBarChart,
    widgetName: "Stacked Bar Chart",
    w: 5,
    h: 6,
    type: WidgetType.BarChart,
  },
  HorizontalBarChart: {
    moduleName: WidgetModuleName.HorizontalBarChart,
    widgetName: "Horizontal Bar Chart",
    w: 5,
    h: 6,
    type: WidgetType.HistogramChart,
  },
  HorizontalGroupBarChart: {
    moduleName: WidgetModuleName.HorizontalGroupBarChart,
    widgetName: "Horizontal Group Bar Chart",
    w: 5,
    h: 6,
    type: WidgetType.BarChart,
  },
  HorizontalStackedBarChart: {
    moduleName: WidgetModuleName.HorizontalStackedBarChart,
    widgetName: "Horizontal Stacked Bar Chart",
    w: 5,
    h: 6,
    type: WidgetType.HistogramChart,
  },
  BubbleChart: {
    moduleName: WidgetModuleName.BubbleChart,
    widgetName: "Bubble Chart",
    w: 4,
    h: 8,
    type: WidgetType.BubbleChart,
  },
  DonutChart: {
    moduleName: WidgetModuleName.DonutChart,
    widgetName: "Donut Chart",
    w: 3,
    h: 6,
    type: WidgetType.Default,
  },
  LineChart: {
    moduleName: WidgetModuleName.LineChart,
    widgetName: "Line Chart",
    w: 4,
    h: 6,
    type: WidgetType.LineChart,
  },
  TooltipLineChart: {
    moduleName: WidgetModuleName.TooltipLineChart,
    widgetName: "Tooltip Line Chart",
    w: 4,
    h: 6,
    type: WidgetType.LineChart,
  },
  CurveLineChart: {
    moduleName: WidgetModuleName.CurveLineChart,
    widgetName: "Curve Line Chart",
    w: 4,
    h: 6,
    type: WidgetType.LineChart,
  },
  VennChart: {
    moduleName: WidgetModuleName.VennChart,
    widgetName: "Venn Chart",
    w: 3,
    h: 4,
    type: WidgetType.VennChart,
  },
  VennChartConfigurable: {
    moduleName: WidgetModuleName.VennChartConfigurable,
    widgetName: "Venn Chart Configurable",
    w: 4,
    h: 5,
    type: WidgetType.VennChart,
  },
  TableWidget: {
    moduleName: WidgetModuleName.TableWidget,
    widgetName: "Table Widget",
    w: 12,
    h: 8,
    type: WidgetType.Table,
  },
  AreaChartStringified: {
    moduleName: WidgetModuleName.AreaChartStringified,
    widgetName: "Area Chart Stringified",
    w: 12,
    h: 8,
    type: WidgetType.Default,
    isStringified: true,
  },
};

export default WidgetsMap;
