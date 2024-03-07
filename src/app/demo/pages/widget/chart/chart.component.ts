// angular import
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { ChartDB } from 'src/app/fake-data/chartDB';
import { ThemeLayoutService } from 'src/app/@theme/services/theme-layout.service';

// third party
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexStroke,
  ApexGrid,
  ApexLegend,
  ApexResponsive
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart | undefined;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  colors: string[];
  stroke: ApexStroke;
  grid: ApexGrid;
  labels: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class WidgetChartComponent implements OnInit {
  // public props
  @ViewChild('chart') chart!: ChartComponent;
  earningChart: Partial<ChartOptions>;
  pageViewChart: Partial<ChartOptions>;
  totalTaskChart: Partial<ChartOptions>;
  downloadChart: Partial<ChartOptions>;
  customerRateChart: Partial<ChartOptions>;
  newOrderChart: Partial<ChartOptions>;
  totalTasksChart: Partial<ChartOptions>;
  pendingTasksChart: Partial<ChartOptions>;
  incomeChart: Partial<ChartOptions>;
  totalEarningChart1: Partial<ChartOptions>;
  totalEarningChart2: Partial<ChartOptions>;
  newUserChart: Partial<ChartOptions>;
  VisitorsChart: Partial<ChartOptions>;
  overViewChart: Partial<ChartOptions>;
  totalIncomeChart: Partial<ChartOptions>;
  languagesChart: Partial<ChartOptions>;
  monthlyReportChart: Partial<ChartOptions>;
  salesReportChart: Partial<ChartOptions>;
  acquisitionChart: Partial<ChartOptions>;
  overOptionsChart: Partial<ChartOptions>;
  marketingChart: Partial<ChartOptions>;
  projectChart: Partial<ChartOptions>;
  otherChart: Partial<ChartOptions>;
  // eslint-disable-next-line
  chartDB: any;

  // graph color change with theme color mode change
  preset = ['var(--primary-500)'];
  overOptionsColor = ['var(--primary-500)', 'var(--primary-200)'];
  salesReportColor = ['#E58A00', 'var(--primary-500)'];
  incomeColors = ['var(--primary-500)', '#E58A00', '#2CA87F', 'var(--primary-200)'];
  overViewColor = ['var(--primary-500)', 'var(--primary-200)', '#212529', '#212529', '#212529', '#212529'];

  // constructor
  constructor(private theme: ThemeLayoutService) {
    this.chartDB = ChartDB;
    const {
      earningChart,
      totalTaskChart,
      downloadChart,
      pageViewChart,
      customerRateChart,
      newOrderChart,
      totalTasksChart,
      pendingTasksChart,
      incomeChart,
      totalEarningChart1,
      totalEarningChart2,
      newUserChart,
      VisitorsChart,
      overViewChart,
      totalIncomeChart,
      languagesChart,
      monthlyReportChart,
      salesReportChart,
      acquisitionChart,
      projectChart,
      overOptionsChart,
      marketingChart,
      otherChart
    } = this.chartDB;
    this.earningChart = earningChart;
    this.pageViewChart = pageViewChart;
    this.totalTaskChart = totalTaskChart;
    this.downloadChart = downloadChart;
    this.customerRateChart = customerRateChart;
    this.newOrderChart = newOrderChart;
    this.totalTasksChart = totalTasksChart;
    this.pendingTasksChart = pendingTasksChart;
    this.incomeChart = incomeChart;
    this.totalEarningChart1 = totalEarningChart1;
    this.totalEarningChart2 = totalEarningChart2;
    this.newUserChart = newUserChart;
    this.VisitorsChart = VisitorsChart;
    this.overViewChart = overViewChart;
    this.totalIncomeChart = totalIncomeChart;
    this.languagesChart = languagesChart;
    this.monthlyReportChart = monthlyReportChart;
    this.salesReportChart = salesReportChart;
    this.acquisitionChart = acquisitionChart;
    this.overOptionsChart = overOptionsChart;
    this.marketingChart = marketingChart;
    this.otherChart = otherChart;
    this.projectChart = projectChart;
  }

  // life cycle event
  ngOnInit() {
    this.theme.color.subscribe(() => {
      (this.preset = ['var(--primary-500)']), (this.overOptionsColor = ['var(--primary-500)', 'var(--primary-200)']);
      this.salesReportColor = ['#E58A00', 'var(--primary-500)'];
      this.incomeColors = ['var(--primary-500)', '#E58A00', '#2CA87F', 'var(--primary-200)'];
      this.overViewColor = ['var(--primary-500)', 'var(--primary-200)', '#212529', '#212529', '#212529', '#212529'];
    });
  }

  // public method
  project_report = [
    {
      icon: 'ti ti-chart-bar',
      title: 'Total Sales',
      amount: '1,800',
      number: '- 245',
      percentage: '30.6%',
      color: 'text-warn-500',
      icon_2: 'ti ti-arrow-down-left'
    },
    {
      icon: 'ti ti-chart-arrows-vertical',
      title: 'Revenue',
      amount: '$5667',
      number: '+ $2100',
      percentage: '30.6%',
      color: 'text-success-500',
      icon_2: 'ti ti-arrow-up-right'
    },
    {
      icon: 'ti ti-shopping-cart',
      title: 'Abandon Cart',
      amount: '128',
      number: '- 26',
      percentage: '5%',
      color: 'text-warning-500',
      icon_2: 'ti ti-arrows-left-right'
    },
    {
      icon: 'ti ti-ad',
      title: 'Ads Spent',
      amount: '$2500',
      number: '$200',
      percentage: '10.6%',
      color: 'text-success-500',
      icon_2: 'ti ti-arrow-up-right'
    }
  ];

  overView_product = [
    {
      name: 'Apps',
      value: '10+'
    },
    {
      name: 'Other',
      value: '5+'
    },
    {
      name: 'Widgets',
      value: '150+'
    },
    {
      name: 'Forms',
      value: '50+'
    },
    {
      name: 'Components',
      value: '200+'
    },
    {
      name: 'Pages',
      value: '150+'
    }
  ];

  income_card = [
    {
      background: 'bg-primary-500',
      item: 'Income',
      value: '$23,876',
      number: '+$763,43'
    },
    {
      background: 'bg-warning-500',
      item: 'Rent',
      value: '$23,876',
      number: '+$763,43'
    },
    {
      background: 'bg-success-500',
      item: 'Download',
      value: '$23,876',
      number: '+$763,43'
    },
    {
      background: 'bg-primary-200',
      item: 'Views',
      value: '$23,876',
      number: '+$763,43'
    }
  ];

  languages = [
    {
      name: 'React'
    },
    {
      name: 'Angular'
    },
    {
      name: 'Bootstrap'
    },
    {
      name: 'MUI'
    }
  ];

  acquisition = [
    {
      title: 'Top Channels',
      icon: 'ti ti-device-analytics',
      time: 'Today, 2:00 AM',
      background: 'bg-accent-200'
    },
    {
      title: 'Top pages',
      icon: 'ti ti-file-text',
      time: 'Today 6:00 AM',
      background: 'bg-primary-50 text-primary-500'
    }
  ];
}
