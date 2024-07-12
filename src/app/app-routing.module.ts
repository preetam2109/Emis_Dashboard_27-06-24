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
import { RCDetailReportComponent } from './rcdetail-report/rcdetail-report.component';
import { ComplaintsComponent } from './component/complaints/complaints.component';
import { ApexChartComponent } from './component/apex-chart/apex-chart.component';
import { DispatchPendingComponent } from './component/dispatch-pending/dispatch-pending.component';
import { ReceiptPendingComponent } from './component/receipt-pending/receipt-pending.component';
import { InstallationPendingComponent } from './component/installation-pending/installation-pending.component';
import { DHSComponent } from './component/dhs/dhs.component';
import { DispatchPendingOneComponent } from './component/dispatch-pending-one/dispatch-pending-one.component';
import { LoginComponent } from './component/auth/login/login.component';
import { LogoutComponent } from './component/auth/logout/logout.component';
import { RouteGuardService } from './service/authentication/route-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'home',component:HomeComponent,canActivate:[RouteGuardService]},
  {path:'autocomplete',component:AutocompleteComponent,canActivate:[RouteGuardService]},
  {path:'input',component:InputComponent,canActivate:[RouteGuardService]},
  {path:'card',component:CardComponent,canActivate:[RouteGuardService]},
  {path:'slider',component:SliderComponent,canActivate:[RouteGuardService]},
  {path:'table',component:TableComponent,canActivate:[RouteGuardService]},
  {path:'form',component:FormdesignComponent,canActivate:[RouteGuardService]},
  {path:'associate',component:AssociateComponent,canActivate:[RouteGuardService]},
  {path:'Rcdetail',component:RCDetailReportComponent,canActivate:[RouteGuardService]},
  {path:'complaints',component:ComplaintsComponent,canActivate:[RouteGuardService]},
  {path:'apex',component:ApexChartComponent,canActivate:[RouteGuardService]},
  {path:'dispatchPending',component:DispatchPendingComponent,canActivate:[RouteGuardService]},
  {path:'receiptPending',component:ReceiptPendingComponent,canActivate:[RouteGuardService]},
  {path:'installationPending',component:InstallationPendingComponent,canActivate:[RouteGuardService]},
  {path:'dhs',component:DHSComponent,canActivate:[RouteGuardService]},
  {path:'dhs-one',component:DispatchPendingOneComponent,canActivate:[RouteGuardService]},
  { path: '**', redirectTo: 'login' }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
