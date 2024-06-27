import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { AssociateComponent } from './component/associate/associate.component';
import { ListDistrictsComponent } from './component/list-districts/list-districts.component';
import { RCDetailReportComponent } from './rcdetail-report/rcdetail-report.component';
import { ComplaintsComponent } from './component/complaints/complaints.component';
import { ApexChartComponent } from './component/apex-chart/apex-chart.component';
import { DispatchPendingComponent } from './component/dispatch-pending/dispatch-pending.component';
import { ReceiptPendingComponent } from './component/receipt-pending/receipt-pending.component';
import { InstallationPendingComponent } from './component/installation-pending/installation-pending.component';
import { DHSComponent } from './component/dhs/dhs.component';
import { DispatchPendingOneComponent } from './component/dispatch-pending-one/dispatch-pending-one.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'input',component:InputComponent},
  {path:'card',component:CardComponent},
  {path:'slider',component:SliderComponent},
  {path:'table',component:TableComponent},
  {path:'form',component:FormdesignComponent},
  {path:'associate',component:AssociateComponent},
  {path:'districts',component:ListDistrictsComponent},
  {path:'Rcdetail',component:RCDetailReportComponent},
  {path:'complaints',component:ComplaintsComponent},
  {path:'apex',component:ApexChartComponent},
  {path:'dispatchPending',component:DispatchPendingComponent},
  {path:'receiptPending',component:ReceiptPendingComponent},
  {path:'installationPending',component:InstallationPendingComponent},
  {path:'dhs',component:DHSComponent},
  {path:'dhs-one',component:DispatchPendingOneComponent}




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
