// Angular import
import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';

// Project import
import { AbleProConfig } from 'src/app/app-config';
import { menus } from 'src/app/demo/data/menu';
import { ThemeLayoutService } from 'src/app/@theme/services/theme-layout.service';
import { environment } from 'src/environments/environment';
import { MIN_WIDTH_1025PX, MAX_WIDTH_1024PX, VERTICAL, HORIZONTAL, COMPACT, RTL, LTR } from 'src/app/@theme/const';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // public props
  @ViewChild('sidebar') sidebar: MatDrawer;
  menus = menus;
  modeValue: MatDrawerMode = 'side';
  direction: string;
  currentApplicationVersion = environment.appVersion;
  currentLayout: string;
  rtlMode: boolean;
  windowWidth: number;

  // Constructor
  constructor(
    private breakpointObserver: BreakpointObserver,
    private layoutService: ThemeLayoutService
  ) {
    this.currentLayout = AbleProConfig.layout;
    this.rtlMode = AbleProConfig.isRtlLayout;
    this.windowWidth = window.innerWidth;
  }

  // life cycle event
  ngOnInit() {
    this.breakpointObserver.observe([MIN_WIDTH_1025PX, MAX_WIDTH_1024PX]).subscribe((result) => {
      if (result.breakpoints[MAX_WIDTH_1024PX]) {
        this.modeValue = 'over';
      } else if (result.breakpoints[MIN_WIDTH_1025PX]) {
        this.modeValue = 'side';
      }
    });

    /**
     * Dashboard menu sidebar toggle listener
     */
    this.layoutService.dashBoardMenuState.subscribe(() => {
      this.sidebar.toggle();
    });

    this.manageLayout(this.currentLayout);

    /**
     * Listen to Theme direction change. RTL/LTR
     */
    this.layoutService.directionChange.subscribe((direction: string) => {
      // here direction layout subscribing according on click event in configuration
      this.rtlMode = direction === RTL ? true : false;
      this.manageLayout(this.currentLayout);
    });

    /**
     * Listen to theme layout changes
     */
    this.layoutService.layout.subscribe((layout: string) => {
      // here direction layout subscribing according on click event in configuration
      this.currentLayout = layout;
      this.manageLayout(layout);
    });
  }

  /**
   * Manage layout of theme
   */
  private manageLayout(layout: string) {
    const drawerContent = document.querySelector('.mat-drawer-content') as HTMLElement;
    if (drawerContent) {
      if (layout === VERTICAL) {
        if (this.windowWidth > 1025) {
          drawerContent.style.marginLeft = this.rtlMode === true ? '0px' : '280px';
          drawerContent.style.marginRight = this.rtlMode === true ? '280px' : '0px';
        }
        this.direction = this.rtlMode === true ? RTL : LTR;
      } else if (layout === COMPACT) {
        if (this.windowWidth > 1025) {
          drawerContent.style.marginLeft = this.rtlMode == true ? '0px' : '90px';
          drawerContent.style.marginRight = this.rtlMode == true ? '90px' : '0px';
        }
        this.direction = this.rtlMode == true ? RTL : LTR;
      } else if (layout == HORIZONTAL) {
        drawerContent.style.marginLeft = '0px';
      }
    }
  }
}
