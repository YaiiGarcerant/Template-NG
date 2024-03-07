// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { AcProfileComponent } from './ac-profile/ac-profile.component';
import { AcPersonalComponent } from './ac-personal/ac-personal.component';
import { AcAccountComponent } from './ac-account/ac-account.component';
import { AcRoleComponent } from './ac-role/ac-role.component';
import { AcSettingComponent } from './ac-setting/ac-setting.component';
import { AcPasswordComponent } from './ac-password/ac-password.component';

@Component({
  selector: 'app-account-profile',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    AcProfileComponent,
    AcPasswordComponent,
    AcPersonalComponent,
    AcAccountComponent,
    AcRoleComponent,
    AcSettingComponent
  ],
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent {}
