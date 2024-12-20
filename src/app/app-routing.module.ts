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
// import { CollectorLoginComponent } from './component/collector-login/collector-login.component';
import { DistributionComponent } from './component/distribution/distribution.component';
import { QcDasboardLabComponent } from './component/qc-dasboard-lab/qc-dasboard-lab.component';
import { VehicleTrackingComponent } from './component/vehicle-tracking/vehicle-tracking.component';
import { InTransitIssuesComponent } from './component/warehouse/in-transit-issues/in-transit-issues.component';
import { EdlNonEdlIssuePercentSummary } from './Model/EdlNonEdlIssuePercentSummary';
import { EdlNonEdlIssuePercentSummaryComponent } from './component/DHS-Components/edl-non-edl-issue-percent-summary/edl-non-edl-issue-percent-summary.component';
import { IssuePerWisePerClickComponent } from './component/DHS-Components/issue-per-wise-per-click/issue-per-wise-per-click.component';
import { IssuedPerWiseComponent } from './component/DHS-Components/issued-per-wise/issued-per-wise.component';
import { DistrictWiseStockComponent } from './component/district-wise-stock/district-wise-stock.component';
import { DdlItemWiseInHandQty } from './Model/DdlItemWiseInHandQty';
import { DdlItemWiseInHandQtyComponent } from './component/ddl-item-wise-in-hand-qty/ddl-item-wise-in-hand-qty.component';
import { DistFACwiseStockPostionNewComponent } from './component/dist-facwise-stock-postion-new/dist-facwise-stock-postion-new.component';
import { SeasonDrugsComponent } from './component/season-drugs/season-drugs.component';
import { WarehouseInfoComponent } from './component/DHS-Components/warehouse-info/warehouse-info.component';
import { FacCoverageComponent } from './component/DHS-Components/fac-coverage/fac-coverage.component';
import { StockSummaryBalanceIndentComponent } from './component/DHS-Components/stock-summary-balance-indent/stock-summary-balance-indent.component';
import { TimeTakenBySupplierComponent } from './component/DHS-Components/time-taken-by-supplier/time-taken-by-supplier.component';
import { PaidTimeTakenComponent } from './component/DHS-Components/paid-time-taken/paid-time-taken.component';
import { QCTimeTakenYearwiseComponent } from './component/DHS-Components/qctime-taken-yearwise/qctime-taken-yearwise.component';
import { QCTimeTabComponent } from './component/DHS-Components/qctime-tab/qctime-tab.component';
import { StockoutSummaryComponent } from './component/DHS-Components/stockout-summary/stockout-summary.component';
import { CollectorLoginComponent } from './component/auth/collector-login/collector-login.component';
import { HODYearWiseIssuanceComponent } from './component/Collector-Components/hodyear-wise-issuance/hodyear-wise-issuance.component';
import { GrowthInProcurmentComponent } from './component/DHS-Components/growth-in-procurment/growth-in-procurment.component';
import { GrowthInProcurmentTabComponent } from './component/DHS-Components/growth-in-procurment-tab/growth-in-procurment-tab.component';
import { DirectorateAIDetailsComponent } from './component/DHS-Components/directorate-aidetails/directorate-aidetails.component';
import { DistributionTabComponent } from './component/DHS-Components/distribution-tab/distribution-tab.component';
import { DropAppWarehousePerformanceComponent } from './component/warehouse/drop-app-warehouse-performance/drop-app-warehouse-performance.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'collector-login',component:CollectorLoginComponent},

  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  { path: 'home',component: CategorySelectionComponent,canActivate:[RouteGuardService]}, 

// MD routes
{ path: 'welcome', component: HomeComponent, canActivate: [RouteGuardService],data: { allowedRoles: ['SEC1','DHS','CME','Collector']} },
  // {path:'autocomplete',component:AutocompleteComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  // {path:'input',component:InputComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'card',component:CardComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['SEC1','Collector']} },
  // {path:'slider',component:SliderComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  // {path:'table',component:TableComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'form',component:FormdesignComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  // {path:'associate',component:AssociateComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'Rcdetail',component:RCDetailReportComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'complaints',component:ComplaintsComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'apex',component:ApexChartComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'dispatchPending',component:DispatchPendingComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'receiptPending',component:ReceiptPendingComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'installationPending',component:InstallationPendingComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'dhs',component:DHSComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'dhs-one',component:DispatchPendingOneComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },


  // gm routes
  {path:'emd',component:EmdComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['SEC1']} },
  {path:'emd-pending',component:EmdPendingComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['SEC1']} },
  {path:'emd-released',component:EmdReleasedComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['SEC1']} },
  {path:'emd-pending-tenderwise',component:EmdPendingTenderwiseComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['SEC1']} },
  {path:'emd-dashboard',component:EmdDashboardComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['SEC1']} },
  //whstock abstract
  {path:'whStockAbstract',component:WhStockAbstractComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS','CME']} },
  {path:'drugs',component:WhStockDrugsComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'consumables',component:WhStockConsumablesComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'reagent',component:WhStockReagentComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'stockDetails',component:CGMSCStockDetailsComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','QC','Warehouse']} },


  // indent pending 
  {path:'IndentPendingWHdash',component:IndentPendingWhDasComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS']} },
  // {path:'IndentPendingWH',component:IndentPendingWHComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
  {path:'ReagentIndentPendingWH',component:ReagentIndentPendingWhComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },

  //cgmsc stock 
  {path:'stockDetailsDrugs',component:CgmscstockDrugsComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','QC','Warehouse']} },
  {path:'stockDetailsConsumables',component:CgmscstockConsumablesComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','QC','Warehouse']} },
  {path:'stockDetailsAyush',component:CgmscstockAyushComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','QC','Warehouse']} },
  {path:'stockDetailsReagent',component:CgmscstockReagentComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','QC','Warehouse']} },

// near expiry
{path:'nearExpiry',component:NearExpiryComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS']} },

// reagent issue
{path:'ReagentIssue',component:ReagentIssueComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },

//qc pendings
{path:'QcPendings',component:QcPendingsComponent,canActivate:[RouteGuardService], data: { allowedRoles: ['SEC1']} },
{path:'nocApproval',component:NocApprovalComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
{path:'noc',component:NOCComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS']} },
{path:'iwhPending',component:IwhPendingComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
{path:'qc-lab-send',component:QCLabSendComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
// {path:'distribution',component:DistributionComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS','CME','Collector']} },
{path:'qc-dash',component:QcDasboardLabComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },
{path:'vehicleTracking',component:VehicleTrackingComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','Warehouse']} },
{path:'intransitIssues',component:InTransitIssuesComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['Warehouse']} },
{path:'EdlNonEdlIssuePercentSummary',component:EdlNonEdlIssuePercentSummaryComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS']} },
{path:'IssuePerWisePerClick',component:IssuePerWisePerClickComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS']} },
{path:'IssuedPerWise',component:IssuedPerWiseComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS']} },
{path:'DistrictWiseStk',component:DistrictWiseStockComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS']} },
{path:'DdlItemWiseInHandQty',component:DdlItemWiseInHandQtyComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS']} },
{path:'DistFACwiseStockPostionNew',component:DistFACwiseStockPostionNewComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS']} },
{path:'SeasonDrugs',component:SeasonDrugsComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1','DHS']} },
{path:'WarehouseInfo',component:WarehouseInfoComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS','Collector']} },
{path:'FacCoverage',component:FacCoverageComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS','Collector']} },
{path:'StockSummaryBalanceIndent',component:StockSummaryBalanceIndentComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS']} },
{path:'timetakenBySupplier',component:TimeTakenBySupplierComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS']} },
{path:'PaidTimeTaken',component:PaidTimeTakenComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS']} },
// {path:'QcTimeTaken',component:QCTimeTakenYearwiseComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS']} },
{path:'QcTimeTaken',component:QCTimeTabComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS']} },
{path:'StockoutSummary',component:StockoutSummaryComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS']} },
{path:'HODYearWiseIssuance',component:HODYearWiseIssuanceComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['Collector']} },
// {path:'GrowthInProcurment',component:GrowthInProcurmentComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS']} },
{path:'GrowthInProcurment',component:GrowthInProcurmentTabComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS']} },
// {path:'DirectorateAIDetails',component:DirectorateAIDetailsComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS']} },
{path:'distribution',component:DistributionTabComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['DHS']} },
{path:'DropAppWarehousePerformance',component:DropAppWarehousePerformanceComponent,canActivate:[RouteGuardService],data: { allowedRoles: ['SEC1']} },



  { path: '**', redirectTo: 'login' }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
