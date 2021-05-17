import { NgModule, APP_INITIALIZER } from '@angular/core';
import { VolumeGroupComponent } from './volumeGroup.component';
import { ButtonModule, DataTableModule, InputTextModule, DialogModule,FormModule,MultiSelectModule ,DropdownModule,InputTextareaModule, GrowlModule} from '../../components/common/api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpService } from './../../shared/service/Http.service';
import { VolumeService ,VolumeGroupService} from './volume.service';
import { AvailabilityZonesService } from '../infrastructure/infrastructure.service';
import { ConfirmationService,ConfirmDialogModule} from '../../components/common/api';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ VolumeGroupComponent ],
  imports: [ 
    ButtonModule, 
    DataTableModule, 
    InputTextModule, 
    DialogModule,
    FormModule,
    MultiSelectModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmDialogModule,
    InputTextareaModule,
    GrowlModule,
    RouterModule
  ],
  exports: [ VolumeGroupComponent ],
  providers: [
    HttpService,
    VolumeService,
    VolumeGroupService,
    ConfirmationService,
    AvailabilityZonesService
  ]
})
export class VolumeGroupModule { }
