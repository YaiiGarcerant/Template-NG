import { Component, OnInit, ViewChild } from '@angular/core';

// third party
import { ApexNonAxisChartSeries, ApexChart, ChartComponent, ApexPlotOptions, ApexFill, ApexStroke } from 'ng-apexcharts';
import { ChartDB } from 'src/app/fake-data/chartDB';
import { ThemeLayoutService } from 'src/app/@theme/services/theme-layout.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart | undefined;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  stroke: ApexStroke;
};

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit {
  // public props
  @ViewChild('chart') chart!: ChartComponent;
  totalEarningChart1: Partial<ChartOptions>;
  ringColor = ['var(--primary-500)'];

  currentTabs = 'personal';

  // eslint-disable-next-line
  chartDB: any;

  //constructor
  constructor(private theme: ThemeLayoutService) {
    this.chartDB = ChartDB;
    const { totalEarningChart1 } = this.chartDB;
    this.totalEarningChart1 = totalEarningChart1;
  }

  // life cycle event
  ngOnInit(): void {
    this.theme.color.subscribe(() => {
      this.ringColor = ['var(--primary-500)'];
    });
  }
}
