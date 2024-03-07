// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// project import
import { EmptyComponent } from './empty.component';
import { ConfigurationComponent } from 'src/app/@theme/layouts/configuration/configuration.component';

@NgModule({
  declarations: [EmptyComponent],
  imports: [CommonModule, RouterModule, ConfigurationComponent]
})
export class EmptyModule {}
