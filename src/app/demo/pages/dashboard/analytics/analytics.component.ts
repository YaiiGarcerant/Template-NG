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
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['../dashboard.scss', './analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  // public props
  selected = '1';
  @ViewChild('chart') chart!: ChartComponent;
  newOrderChart: Partial<ChartOptions>;
  newUserChart: Partial<ChartOptions>;
  VisitorsChart: Partial<ChartOptions>;
  overOptionsChart: Partial<ChartOptions>;
  marketingChart: Partial<ChartOptions>;
  projectChart: Partial<ChartOptions>;
  otherChart: Partial<ChartOptions>;
  incomeChart: Partial<ChartOptions>;
  languagesChart: Partial<ChartOptions>;
  overViewChart: Partial<ChartOptions>;
  totalEarningChart2: Partial<ChartOptions>;
  totalEarningChart1: Partial<ChartOptions>;

  // eslint-disable-next-line
  chartDB: any;

  // graph color change with theme color mode change
  preset = ['var(--primary-500)'];
  overOptionsColor = ['var(--primary-500)', 'var(--primary-200)'];
  overViewColor = ['var(--primary-500)', 'var(--primary-200)', '#212529', '#212529', '#212529', '#212529'];

  // constructor
  constructor(private theme: ThemeLayoutService) {
    this.chartDB = ChartDB;
    const {
      newOrderChart,
      newUserChart,
      overViewChart,
      VisitorsChart,
      overOptionsChart,
      totalEarningChart1,
      marketingChart,
      projectChart,
      otherChart,
      incomeChart,
      languagesChart,
      totalEarningChart2
    } = this.chartDB;

    this.newOrderChart = newOrderChart;
    this.newUserChart = newUserChart;
    this.VisitorsChart = VisitorsChart;
    this.overOptionsChart = overOptionsChart;
    this.marketingChart = marketingChart;
    this.projectChart = projectChart;
    this.otherChart = otherChart;
    this.incomeChart = incomeChart;
    this.languagesChart = languagesChart;
    this.overViewChart = overViewChart;
    this.totalEarningChart2 = totalEarningChart2;
    this.totalEarningChart1 = totalEarningChart1;
  }

  // life cycle event
  ngOnInit(): void {
    this.theme.color.subscribe(() => {
      this.preset = ['var(--primary-500)'];
      this.overOptionsColor = ['var(--primary-500)', 'var(--primary-200)'];
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

  payment = [
    {
      img: 'assets/images/widget/img-paypal.png',
      payment_name: 'Paypal',
      amount: '+210,000',
      color: 'text-success-500',
      percentage: '+ 30.6%'
    },
    {
      img: 'assets/images/widget/img-gpay.png',
      payment_name: 'Gpay',
      amount: '-$2,000',
      color: 'text-warn-500',
      percentage: '- 30.6%'
    },
    {
      img: 'assets/images/widget/img-phonepay.png',
      payment_name: 'Phone Pay',
      amount: '-$2,000',
      color: 'text-warn-500',
      percentage: '- 30.6%'
    }
  ];
}
