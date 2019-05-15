import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateInstanceComponent} from './create-instance/create-instance.component';
import { InstanceListComponent } from './instance-list/instance-list.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesComponent } from './services.component';

const routers: Routes = [
    {
        path: '',
        component: ServicesListComponent
    },
    {
        path: 'createInstance/:action',
        component: CreateInstanceComponent,
    },
    {
        path: 'instanceList/:id',
        component: InstanceListComponent,
    },
    ];
  
@NgModule({
    imports: [
      RouterModule.forChild(routers)
    ],
    exports: [
      RouterModule
    ]
  })
  export class ServicesRoutingModule {}