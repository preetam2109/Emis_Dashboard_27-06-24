import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Districts } from '../Model/Districts';
import {  Complaints } from '../Model/Complaints';
import { DistrictWiseComplaints } from '../Model/DistrictWiseComplaints';
import { TotalNoRc } from '../Model/Totalnorc';
import { dispatchPendingSummary } from '../Model/DispatchPendingSummary';
import { dispatchPending } from '../Model/dispatchPending';
import { ReceiptPendingSummary } from '../Model/ReceiptPendingSummary';
import { ReceiptPending } from '../Model/ReceiptPending';
import { Observable } from 'rxjs';
import { DhsSummary } from '../Model/DhsSummary';
import { DHSDetailsItemWise } from '../Model/DHSDetailsItemWise';
import { DPDMISSupemdSummary } from '../Model/DPDMISSupemdSummary';
import { EmdStatusDetail } from '../Model/EmdStatusDetail';
import { DPDMISEMDTenderwisePending } from '../Model/DPDMISEMDTenderwisePending';
import { DPDMISEMDDashboard } from '../Model/DPDMISEMDDashboard';
import { IndentPendingWH} from '../Model/IndentPendingWH';
import { CGMSCStockDetails } from '../Model/CGMSCStockDetails';
import { WarehouseWiseStock } from '../Model/WarehouseWiseStock';
import { NearExpReport } from '../Model/NearExpReport';
import { NearExpReportbatch } from '../Model/NearExpReportbatch';
import { ReagIndentPending } from '../Model/ReagIndentPending';
import { ReagIndentPendingEQSummary } from '../Model/ReagIndentPendingEQSummary';
import { ReagIndentIssueMMID } from '../Model/ReagIndentIssueMMID';
import { ReagIndentIssueDetails } from '../Model/ReagIndentIssueDetails';
import { PipelineDetails } from '../Model/PipelineDetails';
import { ItemDetailsPopup } from '../Model/ItemDetailsPopup';
import { GetRaisedPicks } from '../Model/GetRaisedPicks';
import { GetPendingToPick } from '../Model/GetPendingToPick';
import { NOCApprovedSummary } from '../Model/NOCApprovedSummary';
import { UndroppedDocket } from '../Model/UndroppedDocket';
import { PendingToDrop } from '../Model/PendingToDrop';
import { InitiatedNotIssueSummary } from '../Model/InitiatedNotIssueSummary';
import { IWHPiplineSummary } from '../Model/IWHPiplineSummary';
import { InitiatedNotIssueDetaqils } from '../Model/InitiatedNotIssueDetaqils';
import { IWHPiplineDetails } from '../Model/IWHPiplineDetails';
import { CGMSCNOCPendingSummary } from '../Model/CGMSCNOCPendingSummary';
import { CGMSCNOCPendingDetails } from '../Model/CGMSCNOCPendingDetails';
import { LabIssuePendingSummary } from '../Model/LabIssuePendingSummary';
import { LabIssuePendingDetails } from '../Model/LabIssuePendingDetails';
import { HODYearWiseIssuanceSummary } from '../Model/HODYearWiseIssuanceSummary';
import { InTransitHOtoLab } from '../Model/InTransitHOtoLab';
import { VehicleInfo } from '../Model/VehicleInfo';
import { PipelineDDLTransit } from '../Model/PipelineDDLTransit';
import { MasRecRemarks } from '../Model/MasRecRemarks';
import { PipelineDetailsGrid } from '../Model/PipelineDetailsGrid';
import { GetVehicleEntriesExits } from '../Model/GetVehicleEntriesExits';
import { EdlNonEdlIssuePercentSummary } from '../Model/EdlNonEdlIssuePercentSummary';
import { IssuePerWisePerClick } from '../Model/IssuePerWisePerClick';
import { IssuedPerWise } from '../Model/IssuedPerWise';
import { DistrictWiseStock } from '../Model/DistrictWiseStock';
import { DdlItemWiseInHandQty } from '../Model/DdlItemWiseInHandQty';
import { MasDistrict } from '../Model/MasDistrict';
import { DistFACwiseStockPostionNew } from '../Model/DistFACwiseStockPostionNew';
import { SeasonDrugs } from '../Model/SeasonDrugs';
import { WarehouseInfo } from '../Model/WarehouseInfo';
import { FacCoverage } from '../Model/FacCoverage';
import { StockSummaryBalanceIndent } from '../Model/StockSummaryBalanceIndent';
import { StockSummaryBalanceIndentDetails } from '../Model/StockSummaryBalanceIndentDetails';
import { NearExpRCDetails } from '../Model/NearExpRCDetails';
import { SupplyDuration } from '../Model/SupplyDuration';
import { POSuppyTimeTakenYear } from '../Model/POSuppyTimeTakenYear';
import { PaidTimeTaken } from '../Model/PaidTimeTaken';
import { QCTimeTakenYearwise } from '../Model/QCTimeTakenYearwise';
import { QCLabYearAvgTime } from '../Model/QCLabYearAvgTime';
import { StockoutSummary } from '../Model/StockoutSummary';
import { HODYearWiseIssuance } from '../Model/HODYearWiseIssuance';
import { DistDrugCount } from '../Model/DistDrugCount';
import { WHDrugCount } from '../Model/WHDrugCount';
import { HODPOYear_AgAI } from '../Model/HODPOYear_AgAI';
import { DirectorateAIDetails } from '../Model/DirectorateAIDetails';
import { GroupWiseAI_PODetails } from '../Model/GroupWiseAI_PODetails';
import { Monthwise_Issuance } from '../Model/GroupItemtypeRCStock';
import { Diswise_Issuance } from '../Model/Diswise_Issuance';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // retrieveAllDistricts(){
  //    
  //   return this.http.get<Districts[]>(`https://localhost:7288/api/District`)
  // }
  retrieveAllRC(){
   return this.http.get<Districts[]>(`https://cgmsc.gov.in/EMIS_API/getAllRCReport`)
 }
 
//  totalNoRc(){
// 
//   return this.http.get<TotalNoRc[]>(`https://cgmsc.gov.in/EMIS_API/getTotalNoRC`)
//  }

 totalNoRc(): Observable<TotalNoRc> {
  return this.http.get<TotalNoRc>(`https://cgmsc.gov.in/EMIS_API/getTotalNoRC`);
}

 overAllComplaints(){
  return this.http.get<Complaints[]>(`https://cgmsc.gov.in/EMIS_API/getAllComplaints`)
 }
 overAllComplaintsSolved(district: string){
  
  return this.http.get<Complaints[]>(` https://cgmsc.gov.in/EMIS_API/getAllComplaintsSolved?district=${district}`)
 }
 overAllComplaintsSolvedorUnsolved(district: string){
  
  // https://cgmsc.gov.in/EMIS_API/getTotalSolvedOrUnsolved?district=jashpur
  return this.http.get<Complaints[]>(`https://cgmsc.gov.in/EMIS_API/getTotalSolvedOrUnsolved?district=${district}`)
 }

 districtWiseComplaints(){
  return this.http.get<DistrictWiseComplaints[]>(`https://cgmsc.gov.in/EMIS_API/getDistrictWiseComplaints`)
 }
 getDispatchPendingSummary(){
  return this.http.get<dispatchPendingSummary[]>(`https://cgmsc.gov.in/EMIS_API/api/DispatchPendingSummary/getDispatchPendingSummary`)

 }
 //emd status summary
 getEmdStatusSummary(){
  return this.http.get<DPDMISSupemdSummary[]>(`https://dpdmis.in/CGMSCHO_API2/api/EMD/DPDMISSupemdSummary`)
 }
 //emd status datails
 getEmdStatus(){
  return this.http.get<EmdStatusDetail[]>(`https://dpdmis.in/CGMSCHO_API2/api/EMD/DPDMISEMDDetails`)
 }
 getDPDMISEMDTenderwisePendin(){
  return this.http.get<DPDMISEMDTenderwisePending[]>(`https://dpdmis.in/CGMSCHO_API2/api/EMD/DPDMISEMDTenderwisePending`)

 }
//  getemdDashboerd
DPDMISEMDDashboardSummary(){
  return this.http.get<DPDMISEMDDashboard[]>(`https://dpdmis.in/CGMSCHO_API2/api/EMD/DPDMISEMDDashboard`)
}

  getDispatchPending(){
  return this.http.get<dispatchPending[]>(`https://cgmsc.gov.in/EMIS_API/api/DispatchPending/getDispatchPending`)
 }

 receiptPendingSummary(){
  return this.http.get<ReceiptPendingSummary[]>(`https://cgmsc.gov.in/EMIS_API/api/ReceiptPending_summary/getReceiptPending_summary`)

 }
 receiptPending(){
  return this.http.get<ReceiptPending[]>(`https://cgmsc.gov.in/EMIS_API/api/ReceiptPending/getReceiptPending`)
 }
 installationPendingSummary(){
  return this.http.get<ReceiptPendingSummary[]>(` https://cgmsc.gov.in/EMIS_API/api/InstallationPending_summary/getInstallationPending_summary`)
}

installationPendingDetails(){
  return this.http.get<ReceiptPending[]>(`https://cgmsc.gov.in/EMIS_API/api/InstallationPending_summary/getInstallation_details`)
 }
 getDHSSummary(){
  return this.http.get<DhsSummary[]>(`https://cgmsc.gov.in/EMIS_API/api/DHS/getDHS_summary`)
 }

 getDHSDetailsItemWise(){
  return this.http.get<DHSDetailsItemWise[]>(`https://cgmsc.gov.in/EMIS_API/api/DHS/getDHS_detailsItemwise`)
 }
getDHSSummaryDateRange(fromDate:string,toDate:string){
  return this.http.get<DhsSummary[]>(`https://cgmsc.gov.in/EMIS_API/api/DHS/getDHS_summary_yearWise?fromDate=${fromDate}&toDate=${toDate}`);
}

//whstock abstracts
getWHStockData(mcatid: number, warehouseId: number): Observable<any> {
  
  const params = new HttpParams()
    .set('mcatid', mcatid.toString())
    .set('warehouseId', warehouseId.toString());

  return this.http.get<any>(`https://dpdmis.in/CGMSCHO_API2/api/HO/CGMSCStockValueData`, { params });
}

CGMSCStockDetails(mcatid: number, EDLNedl: string, mitemid: number, WHID: number, searchP: number, userid: number, coll_cmho: number): Observable<any> {
  
  const params = {
    mcatid: mcatid.toString(),
    EDLNedl: EDLNedl,
    mitemid: mitemid.toString(),
    WHID: WHID,
    // WHID: WHID.toString(),
    searchP: searchP.toString(),
    userid: userid.toString(),
    coll_cmho: coll_cmho.toString(),
  };

  return this.http.get<CGMSCStockDetails[]>(`https://dpdmis.in/CGMSCHO_API2/api/HO/CGMSCItemStock`, { params });
}

//indent pending at Warehouse  api
getIndentPendingAtWHData(per: string = 'All', clause: number = 1): Observable<any> {

  return this.http.get<any>(`https://dpdmis.in/CGMSCHO_API2/api/Warehouse/IndentPending?per=${per}&clause=${clause}`);
}
getIndentPendingAtWHDetails(whid: number, clause: number, factype: number): Observable<any> {
  const params = new HttpParams()
    .set('whid', whid.toString())
    .set('clause', clause.toString())
    .set('factype', factype.toString());

  return this.http.get<IndentPendingWH>(`https://dpdmis.in/CGMSCHO_API2/api/Warehouse/IndentPendingDetails`, { params });
}


 // Method for ReagIndentPending with mmid
 getReagIndentPending(mmid: any){
  ;
  return this.http.get<ReagIndentPending[]>(`https://dpdmis.in/CGMSCHO_API2/api/Warehouse/ReagIndentPending?mmid=${mmid}`);
}


// Method for ReagIndentPendingEQ
getReagIndentPendingEQ(){
  
  return this.http.get<ReagIndentPendingEQSummary[]>(`https://dpdmis.in/CGMSCHO_API2/api/Warehouse/ReagIndentPendingEQ`);
}





//this is for popuo WarehouseWiseStock
getWarehouseWiseStock(mitemid:number,whid:number): Observable<any> {

  const params = new HttpParams()
  .set('mitemid',mitemid.toString())
    .set('whid', whid.toString());
     
  return this.http.get<WarehouseWiseStock>(`https://dpdmis.in/CGMSCHO_API2/api/HO/WarehouseWiseStock`, { params });

}
// NearExpReport
getNearExpReport(mcid:number,nexppara:number): Observable<any> {

  const params = new HttpParams()
  .set('mcid',mcid.toString())
    .set('nexppara', nexppara.toString());
     
  return this.http.get<NearExpReport>(`https://dpdmis.in/CGMSCHO_API2/api/HO/NearExpReport`, { params });

}
NearExpReportbatch(mcid:number,nexppara:number,expmonth:string): Observable<any> {

  const params = new HttpParams()
  .set('mcid',mcid.toString())
    .set('nexppara', nexppara.toString())
    .set('expmonth', expmonth.toString());
     
  return this.http.get<NearExpReportbatch>(`https://dpdmis.in/CGMSCHO_API2/api/HO/NearExpReportbatch`, { params });

}

//reagIndentIssue

getReagIndentIssueMMID(){
return this.http.get<ReagIndentIssueMMID[]>(`https://dpdmis.in/CGMSCHO_API2/api/Warehouse/ReagIndentIssueMMID`);
}

getReagIndentIssueDetails(mmid:any){

return this.http.get<ReagIndentIssueDetails[]>(`https://dpdmis.in/CGMSCHO_API2/api/Warehouse/ReagIndentIssueDetails?mmid=${mmid}`)

}

//getPipelineDetails
getPipelineDetails(ponoid: number, itemid: number, mcid: number, whid: number, userid: number): Observable<any> {
  

  return this.http.get<PipelineDetails[]>(`https://dpdmis.in/CGMSCHO_API2/api/HO/getPipelineDetails?ponoid=${ponoid}&itemid=${itemid}&mcid=${mcid}&whid=${whid}&userid=${userid}`);
}

// getgetItemDetails 
getItemDetails(mcid: number, itemid: number, groupid: number, itemtypeid: number, edltype: number, edlcat: number, yearid: number, dhsai: number, dmai: number, totalai: number, redycnt: number, uqccnt: number, pipelinecnt: number, rccnt: number, whid: number): Observable<any> {
  const params = {
    mcid: mcid.toString(),
    itemid: itemid.toString(),
    groupid: groupid.toString(),
    itemtypeid: itemtypeid.toString(),
    edltype: edltype.toString(),
    edlcat: edlcat.toString(),
    yearid: yearid.toString(),
    dhsai: dhsai.toString(),
    dmai: dmai.toString(),
    totalai: totalai.toString(),
    redycnt: redycnt.toString(),
    uqccnt: uqccnt.toString(),
    pipelinecnt: pipelinecnt.toString(),
    rccnt: rccnt.toString(),
    whid: whid.toString()
  };

  return this.http.get<ItemDetailsPopup[]>(`https://dpdmis.in/CGMSCHO_API2/api/HO/getItemDetailsWithHOD`, { params });
}

//GetRaisedPicks
GetRaisedPicks(){
  return this.http.get<GetRaisedPicks[]>(`https://dpdmis.in/CGMSCHO_API2/api/Courier/GetRaisedPicks`)
}
GetPendingToPick(warehouseid:number){
  return this.http.get<GetPendingToPick[]>(`https://dpdmis.in/CGMSCHO_API2/api/Courier/GetPendingToPick?warehouseid=${warehouseid}`);
}

getUndroppedDocket(monthFlag:number){
return this.http.get<UndroppedDocket>(`https://dpdmis.in/CGMSCHO_API2/api/Courier/getUndroppedDocket?monthFlag=${monthFlag}`);
}
getPendingToDrop(warehouseid:number){
  return this.http.get<PendingToDrop>(`https://dpdmis.in/CGMSCHO_API2/api/Courier/GetPendingToDrop?warehouseid=${warehouseid}`);
  }

//NOCApprovedSummary
getNOCApprovedSummary(){
  return this.http.get<NOCApprovedSummary[]>(`https://dpdmis.in/CGMSCHO_API2/api/NOC/CGMSCNOCApprovedSummary`)
}
CGMSCNOCPendingSummary(){
  return this.http.get<CGMSCNOCPendingSummary[]>(`https://dpdmis.in/CGMSCHO_API2/api/NOC/CGMSCNOCPendingSummary`)
}
CGMSCNOCPendingDetails(nocid:number){
  return this.http.get<CGMSCNOCPendingDetails[]>(`https://dpdmis.in/CGMSCHO_API2/api/NOC/CGMSCNOCPendingDetails?nocid=${nocid}`)
}

getNOCApprovedDetails(facilityid:number){
  return this.http.get(`https://dpdmis.in/CGMSCHO_API2/api/NOC/CGMSCNOCApprovedDetails?facilityid=${facilityid}`);
}
getNOCApprovedDetailsYN(facilityid:number,YN:any){
  return this.http.get(`https://dpdmis.in/CGMSCHO_API2/api/NOC/CGMSCNOCApprovedDetails?facilityid=${facilityid}&YN=${YN}`);
}
getInitiatedNotIssueSummary(dcflag:any,mcid:any){
  return this.http.get<InitiatedNotIssueSummary>(`https://dpdmis.in/CGMSCHO_API2/api/IWH/InitiatedNotIssueSummary?dcflag=${dcflag}&mcid=${mcid}`);
}
getIInitiatedNotIssueDetaqils(whid: number, stkout: number, dcflag: string, mcid: number){
  
  return this.http.get<InitiatedNotIssueDetaqils>(`https://dpdmis.in/CGMSCHO_API2/api/IWH/InitiatedNotIssueDetaqils?whid=${whid}&stkout=${stkout}&dcflag=${dcflag}&mcid=${mcid}`);
}
getIWHPiplineSummary(dcflag:any,mcid:any){
  return this.http.get<IWHPiplineSummary>(`https://dpdmis.in/CGMSCHO_API2/api/IWH/IWHPiplineSummary?dcflag=${dcflag}&mcid=${mcid}`);
}
getIWHPiplineDetails(towhid: number, stkout: number, dcflag: string, mcid: number){
  return this.http.get<IWHPiplineDetails>(`https://dpdmis.in/CGMSCHO_API2/api/IWH/IWHPiplineDetails?towhid=${towhid}&stkout=${stkout}&dcflag=${dcflag}&mcid=${mcid}`);
}


getLabIssuePendingSummary(mcid: number){
  return this.http.get<LabIssuePendingSummary[]>(`https://dpdmis.in/CGMSCHO_API2/api/QC/LabIssuePendingSummary?mcid=${mcid}`);
}

getLabIssuePendingDetails(mcid: number,delaypara1: any): Observable<any>{
  
  return this.http.get<LabIssuePendingDetails[]>(`https://dpdmis.in/CGMSCHO_API2/api/QC/LabIssuePendingDetails?mcid=${mcid}&delaypara1=${delaypara1}`);
}
getHODYearWiseIssuanceSummary(mcatid:any,hodid:any){
  return this.http.get<HODYearWiseIssuanceSummary>(`https://dpdmis.in/CGMSCHO_API2/api/HO/HODYearWiseIssuanceSummary?mcatid=${mcatid}&hodid=${hodid}`);
}
getHODYearWiseIssuance(yearid:any,mcatid:any,hodid:any,itemid:any,disid:any){
  return this.http.get<HODYearWiseIssuance[]>(`https://dpdmis.in/CGMSCHO_API2/api/HO/HODYearWiseIssuance?yearid=${yearid}&mcatid=${mcatid}&hodid=${hodid}&itemid=${itemid}&disid=${disid}`);
}
getnTransitHOtoLab(mcid:any,instorPickPending:any){
  return this.http.get<InTransitHOtoLab[]>(`https://dpdmis.in/CGMSCHO_API2/api/QC/InTransitHOtoLab?instorPickPending=${instorPickPending}&mcid=${mcid}`);
}
getInTransitHOtoLabDetails(instorPickPending:any,mcid:any,delaypara1:any,isdrop:any,labid:any){
return this.http.get<InTransitHOtoLab[]>(`https://dpdmis.in/CGMSCHO_API2/api/QC/InTransitHOtoLabDetails?instorPickPending=${instorPickPending}&mcid=${mcid}&delaypara1=${delaypara1}&isdrop=${isdrop}&labid=${labid}`);
}
getVehicleInfoReport(IsStopped:any,isWarehouseVhicle:any,fromDate:any,toDate:any){
return this.http.get<VehicleInfo[]>(`https://dpdmis.in/CGMSCHO_API2/api/ANPR/VhicleInfo?IsStopped=${IsStopped}&isWarehouseVhicle=${isWarehouseVhicle}&fromDate=${fromDate}&toDate=${toDate}`);
}

getPipelineDDLTransit(mcid:any,whid:any,userid:any){
return this.http.get<PipelineDDLTransit[]>(`https://dpdmis.in/CGMSCHO_API2/api/HO/getPipelineDDLTransit?mcid=${mcid}&whid=${whid}&userid=${userid}`);
}

getMasRecRemarks(whid:any,whsup:any){
return this.http.get<MasRecRemarks[]>(`https://dpdmis.in/CGMSCHO_API2/api/Master/MasRecRemarks?whid=${whid}&whsup=${whsup}`);
}

getPipelineDetailsGrid(ponoid: any, itemid: number, mcid: number, whid: any, userid: any): Observable<any> {
  // Construct the query parameters
  const params = new HttpParams()
    .set('ponoid', ponoid.toString())
    .set('itemid', itemid.toString())
    .set('mcid', mcid.toString())
    .set('whid', whid.toString())
    .set('userid', userid.toString());

  // Make the HTTP GET request
  return this.http.get<PipelineDetailsGrid[]>(`https://dpdmis.in/CGMSCHO_API2/api/HO/getPipelineDetails`, { params });
}

GetWarehouseInfo(whid:any){
  return this.http.get(`https://dpdmis.in/CGMSCHO_API2/api/Warehouse/GetWarehouseInfo?whid=${whid}`)
}

getVehicleEntriesExits(whid:any,previousNDays:any,tranId:any,plateNo:any){
  return this.http.get<GetVehicleEntriesExits[]>(`https://dpdmis.in/CGMSCHO_API2/api/Warehouse/GetVehicleEntriesExits?whid=${whid}&previousNDays=${previousNDays}&tranId=${tranId}&plateNo=${plateNo}`)
}

insertTblRecvProgress_WithVhicle(remid:any,remarks:any,ponoid:any,whid:any,tranId:any,plateNo:any){
  
  return this.http.post(`https://dpdmis.in/CGMSCHO_API2/api/HO/insertTblRecvProgress_WithVhicle?remid=${remid}&remarks=${remarks}&ponoid=${ponoid}&whid=${whid}&tranId=${tranId}&plateNo=${plateNo}`,{}, {responseType: 'text'})

}

getEdlNonEdlIssuePercentSummary(yearid:any){
  return this.http.get<EdlNonEdlIssuePercentSummary[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/EdlNonEdlIssuePercentSummary?yearid=${yearid}`);

}

getIssuePerWisePerClick(yearid:any,orderdp:any){
  
  return this.http.get<IssuePerWisePerClick[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/IssuePerWisePerClick?yearid=${yearid}&orderdp=${orderdp}`);

}
getIssuedPerWise(yearid:any){
  return this.http.get<IssuedPerWise[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/IssuedPerWise?yearid=${yearid}`);

}
getDistrictWiseStock(mcid:any){
  return this.http.get<DistrictWiseStock[]>(`https://dpdmis.in/CGMSCHO_API2/api/District/DistrictWiseStock?mcid=${mcid}`);

}
getMasDistrict(allDist:any,whid:any,distid:any,userid:any,coll_cmho:any){
  return this.http.get<MasDistrict[]>(`https://dpdmis.in/CGMSCHO_API2/api/Master/MasDistrict?allDist=${allDist}&whid=${whid}&distid=${distid}&userid=${userid}&coll_cmho=${coll_cmho}`);

}

getDdlItemWiseInHandQty(distId:any){
  return this.http.get<DdlItemWiseInHandQty[]>(`https://dpdmis.in/CGMSCHO_API2/api/District/DdlItemWiseInHandQty?distId=${distId}`);

}
getDistFACwiseStockPostionNew(disid:any,coll_cmho:any,mcatid:any,EDLNedl:any,mitemid:any,userid:any){
  return this.http.get<DistFACwiseStockPostionNew[]>(`https://dpdmis.in/CGMSCHO_API2/api/District/DistFACwiseStockPostionNew?disid=${disid}&coll_cmho=${coll_cmho}&mcatid=${mcatid}&EDLNedl=${EDLNedl}&mitemid=${mitemid}&userid=${userid}`);

}

getSeasonDrugs(seasonname: string, groupid: number, itemtypeid: number, storeType: string): Observable<any> {
  const apiUrl = `https://dpdmis.in/CGMSCHO_API2/api/HOD/SeasonDrugs`;
  const params = new HttpParams()
    .set('seasonname', seasonname)
    .set('groupid', groupid.toString())
    .set('itemtypeid', itemtypeid.toString())
    .set('storeType', storeType);

  return this.http.get<SeasonDrugs[]>(apiUrl, { params });
}


getWarehouseInfo(distid:any): Observable<any> {
  return this.http.get<WarehouseInfo[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/WarehouseInfo?distid=${distid}`);
}


getFacCoverage(distid:any): Observable<any> {
  return this.http.get<FacCoverage[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/FacCoverage?distid=${distid}`);
}

getStockSummaryBalanceIndent(yearid:any,mcid:any): Observable<any> {
  return this.http.get<StockSummaryBalanceIndent[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/StockSummaryBalanceIndent?yearid=${yearid}&mcid=${mcid}`);
}

getStockSummaryBalanceIndentDetails(yearid:any,mcid:any,orderid:any): Observable<any> {
  return this.http.get<StockSummaryBalanceIndentDetails[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/StockSummaryBalanceIndentDetails?yearid=${yearid}&mcid=${mcid}&orderid=${orderid}`);
}
getNearExpRCDetails(mcid:any,mmpara:any): Observable<any> {
  return this.http.get<NearExpRCDetails[]>(`https://dpdmis.in/CGMSCHO_API2/api/TimeTaken/NearExpRCDetails?mcid=${mcid}&mmpara=${mmpara}`);
}

getPOSuppyTimeTakenYear(mcid:any,duration:any,supplierid:any): Observable<any> {
  
  return this.http.get<POSuppyTimeTakenYear[]>(`https://dpdmis.in/CGMSCHO_API2/api/TimeTaken/POSuppyTimeTakenYear?mcid=${mcid}&duration=${duration}&supplierid=${supplierid}`);
}

SupplyDuration(): Observable<any> {
  return this.http.get<SupplyDuration[]>(`https://dpdmis.in/CGMSCHO_API2/api/TimeTaken/SupplyDuration`);
}


getPaidTimeTaken(mcid:any,HODID:any,QCRequired:any): Observable<any> {
  
  return this.http.get<PaidTimeTaken[]>(`https://dpdmis.in/CGMSCHO_API2/api/TimeTaken/PaidTimeTaken?mcid=${mcid}&HODID=${HODID}&QCRequired=${QCRequired}`);
}

getQCTimeTakenYearwise(mcid:any): Observable<any> {
  
  return this.http.get<QCTimeTakenYearwise[]>(`https://dpdmis.in/CGMSCHO_API2/api/TimeTaken/QCTimeTakenYearwise?mcid=${mcid}`);
}
getQCLabYearAvgTime(yrid:any): Observable<any> {
  
  return this.http.get<QCLabYearAvgTime[]>(`https://dpdmis.in/CGMSCHO_API2/api/TimeTaken/QCLabYearAvgTime?yrid=${yrid}`);
}
getStockoutSummary(yrid:any,isedl:any,mcid:any): Observable<any> {
  
  return this.http.get<StockoutSummary[]>(`https://dpdmis.in/CGMSCHO_API2/api/TimeTaken/StockoutSummary?yrid=${yrid}&isedl=${isedl}&mcid=${mcid}`);
}

getDistDrugCount(districtId:any,mcid:any,hodid:any): Observable<any> {
  
  return this.http.get<DistDrugCount[]>(`https://dpdmis.in/CGMSCHO_API2/api/District/DistDrugCount?districtId=${districtId}&mcid=${mcid}&hodid=${hodid}`);
}
WHDrugCount(districtId:any,mcid:any,whid:any): Observable<any> {
  
  return this.http.get<WHDrugCount[]>(`https://dpdmis.in/CGMSCHO_API2/api/District/WHDrugCount?districtId=${districtId}&mcid=${mcid}&whid=${whid}`);
}

HODPOYear_AgAI(mcatid:any,hodid:any,Isall:any,IsagainstAI:any): Observable<any> {
  
  return this.http.get<HODPOYear_AgAI[]>(`https://dpdmis.in/CGMSCHO_API2/api/HO/HODPOYear_AgAI?mcatid=${mcatid}&hodid=${hodid}&Isall=${Isall}&IsagainstAI=${IsagainstAI}`);
}

DirectorateAIDetails(yearid:any,mcid:any,hodid:any,groupid:any,itemtypeid:any): Observable<any> {
  
  return this.http.get<DirectorateAIDetails[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/DirectorateAIDetails?yearid=${yearid}&mcid=${mcid}&hodid=${hodid}&groupid=${groupid}&itemtypeid=${itemtypeid}`);
}

GroupWiseAI_PODetails(yearid:any,mcid:any,hodid:any): Observable<any> {
  
  return this.http.get<GroupWiseAI_PODetails[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/GroupWiseAI_PODetails?yearid=${yearid}&mcid=${mcid}&hodid=${hodid}`);
}



Diswise_Issuance(yearid:any,mcid:any,hodid:any): Observable<any> {
  
  return this.http.get<Diswise_Issuance[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/Diswise_Issuance?yearid=${yearid}&mcid=${mcid}&hodid=${hodid}`);

}

Monthwise_Issuance(yearid:any,mcid:any,hodid:any): Observable<any> {
  
  return this.http.get<Monthwise_Issuance[]>(`https://dpdmis.in/CGMSCHO_API2/api/HOD/Monthwise_Issuance?yearid=${yearid}&mcid=${mcid}&hodid=${hodid}`);

}








}
