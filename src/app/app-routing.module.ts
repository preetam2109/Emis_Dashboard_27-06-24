import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
// import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
// import { SliderComponent } from './component/slider/slider.component';
// import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
// import { AssociateComponent } from './component/associate/associate.component';
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
import { EmdComponent } from './component/emd/emd.component';
import { EmdPendingComponent } from './component/emd-pending/emd-pending.component';
import { EmdReleasedComponent } from './component/emd-released/emd-released.component';
import { EmdPendingTenderwiseComponent } from './component/emd-pending-tenderwise/emd-pending-tenderwise.component';
import { EmdDashboardComponent } from './component/emd-dashboard/emd-dashboard.component';
import { WhStockAbstractComponent } from './component/wh-stock-abstract/wh-stock-abstract.component';
import { WhStockDrugsComponent } from './component/wh-stock-drugs/wh-stock-drugs.component';
import { WhStockConsumablesComponent } from './component/wh-stock-consumables/wh-stock-consumables.component';
import { WhStockReagentComponent } from './component/wh-stock-reagent/wh-stock-reagent.component';
import { IndentPendingWHComponent } from './component/indent-pending-wh/indent-pending-wh.component';
import { CGMSCStockDetailsComponent } from './component/cgmscstock-details/cgmscstock-details.component';
import { CgmscstockDrugsComponent } from './component/cgmscstock-drugs/cgmscstock-drugs.component';
import { CgmscstockConsumablesComponent } from './component/cgmscstock-consumables/cgmscstock-consumables.component';
import { CgmscstockAyushComponent } from './component/cgmscstock-ayush/cgmscstock-ayush.component';
import { CgmscstockReagentComponent } from './component/cgmscstock-reagent/cgmscstock-reagent.component';
import { NearExpiryComponent } from './component/near-expiry/near-expiry.component';
import { IndentPendingWhDasComponent } from './component/indent-pending-wh-das/indent-pending-wh-das.component';
import { ReagentIndentPendingWhComponent } from './component/reagent-indent-pending-wh/reagent-indent-pending-wh.component';
import { ReagentIssueComponent } from './component/reagent-issue/reagent-issue.component';
import { QcPendingsComponent } from './component/qc-pendings/qc-pendings.component';
import { NocApprovalComponent } from './component/noc-approval/noc-approval.component';
import { CategorySelectionComponent } from './component/category-selection/category-selection.component';
import { IwhPendingComponent } from './component/iwh-pending/iwh-pending.component';
import { NOCComponent } from './component/noc/noc.component';
import { QCLabSendComponent } from './component/qc-lab-send/qc-lab-send.component';
import { CollectorLoginComponent } from './component/collector-login/collector-login.component';
import { DistributionComponent } from './component/distribution/distribution.component';
import { QcDasboardLabComponent } from './component/qc-dasboard-lab/qc-dasboard-lab.component';
import { VehicleTrackingComponent } from './component/vehicle-tracking/vehicle-tracking.component';
import { InTransitIssuesComponent } from './component/warehouse/in-transit-issues/in-transit-issues.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'collector-login',component:CollectorLoginComponent},

  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  { path: 'home',component: CategorySelectionComponent,canActivate:[RouteGuardService]}, 

// MD routes
{ path: 'welcome', component: HomeComponent, canActivate: [RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  // {path:'autocomplete',component:AutocompleteComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  // {path:'input',component:InputComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'card',component:CardComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['MDCGMSC']} },
  // {path:'slider',component:SliderComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  // {path:'table',component:TableComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'form',component:FormdesignComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  // {path:'associate',component:AssociateComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'Rcdetail',component:RCDetailReportComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'complaints',component:ComplaintsComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'apex',component:ApexChartComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'dispatchPending',component:DispatchPendingComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'receiptPending',component:ReceiptPendingComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'installationPending',component:InstallationPendingComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'dhs',component:DHSComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'dhs-one',component:DispatchPendingOneComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },


  // gm routes
  {path:'emd',component:EmdComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['MDCGMSC']} },
  {path:'emd-pending',component:EmdPendingComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['MDCGMSC']} },
  {path:'emd-released',component:EmdReleasedComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['MDCGMSC']} },
  {path:'emd-pending-tenderwise',component:EmdPendingTenderwiseComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['MDCGMSC']} },
  {path:'emd-dashboard',component:EmdDashboardComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['MDCGMSC']} },
  //whstock abstract
  {path:'whStockAbstract',component:WhStockAbstractComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'drugs',component:WhStockDrugsComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'consumables',component:WhStockConsumablesComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'reagent',component:WhStockReagentComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'stockDetails',component:CGMSCStockDetailsComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC','QC','WH']} },


  // indent pending 
  {path:'IndentPendingWHdash',component:IndentPendingWhDasComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  // {path:'IndentPendingWH',component:IndentPendingWHComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
  {path:'ReagentIndentPendingWH',component:ReagentIndentPendingWhComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },

  //cgmsc stock 
  {path:'stockDetailsDrugs',component:CgmscstockDrugsComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC','QC','WH']} },
  {path:'stockDetailsConsumables',component:CgmscstockConsumablesComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC','QC','WH']} },
  {path:'stockDetailsAyush',component:CgmscstockAyushComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC','QC','WH']} },
  {path:'stockDetailsReagent',component:CgmscstockReagentComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC','QC','WH']} },

// near expiry
{path:'nearExpiry',component:NearExpiryComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },

// reagent issue
{path:'ReagentIssue',component:ReagentIssueComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },

//qc pendings
{path:'QcPendings',component:QcPendingsComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['MDCGMSC']} },
{path:'nocApproval',component:NocApprovalComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
{path:'noc',component:NOCComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
{path:'iwhPending',component:IwhPendingComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
{path:'qc-lab-send',component:QCLabSendComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
{path:'distribution',component:DistributionComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
{path:'qc-dash',component:QcDasboardLabComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC']} },
{path:'vehicleTracking',component:VehicleTrackingComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC','WH']} },
{path:'intransitIssues',component:InTransitIssuesComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['MDCGMSC','WH']} },



  { path: '**', redirectTo: 'login' }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
