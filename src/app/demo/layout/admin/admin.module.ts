// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './admin.component';
import { NavBarModule } from 'src/app/@theme/layouts/toolbar/toolbar.module';
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { VerticalMenuModule } from 'src/app/@theme/layouts/menu/vertical-menu';
import { HorizontalMenuModule } from 'src/app/@theme/layouts/menu/horizontal-menu';
import { CompactMenuModule } from 'src/app/@theme/layouts/menu/compact-menu';
import { BreadcrumbComponent } from 'src/app/@theme/layouts/breadcrumb/breadcrumb.component';
import { ConfigurationComponent } from 'src/app/@theme/layouts/configuration/configuration.component';
import { FooterComponent } from 'src/app/@theme/layouts/footer/footer.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    NavBarModule,
    SharedModule,
    RouterModule,
    VerticalMenuModule,
    HorizontalMenuModule,
    CompactMenuModule,
    BreadcrumbComponent,
    ConfigurationComponent,
    FooterComponent
  ]
})
export class AdminModule {}
