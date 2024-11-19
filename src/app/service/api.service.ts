import { HttpClient,HttpParams } from '@angular/common/http';
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
  return this.http.get<DPDMISSupemdSummary[]>(`http://140.238.246.250:8080/api/EMD/DPDMISSupemdSummary`)
 }
 //emd status datails
 getEmdStatus(){
  return this.http.get<EmdStatusDetail[]>(`http://140.238.246.250:8080/api/EMD/DPDMISEMDDetails`)
 }
 getDPDMISEMDTenderwisePendin(){
  return this.http.get<DPDMISEMDTenderwisePending[]>(`http://140.238.246.250:8080/api/EMD/DPDMISEMDTenderwisePending`)

 }
//  getemdDashboerd
DPDMISEMDDashboardSummary(){
  return this.http.get<DPDMISEMDDashboard[]>(`http://140.238.246.250:8080/api/EMD/DPDMISEMDDashboard`)
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

  return this.http.get<any>(`http://140.238.246.250:8080/api/HO/CGMSCStockValueData`, { params });
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

  return this.http.get<CGMSCStockDetails[]>(`http://140.238.246.250:8080/api/HO/CGMSCItemStock`, { params });
}

//indent pending at Warehouse  api
getIndentPendingAtWHData(per: string = 'All', clause: number = 1): Observable<any> {

  return this.http.get<any>(`http://140.238.246.250:8080/api/Warehouse/IndentPending?per=${per}&clause=${clause}`);
}
getIndentPendingAtWHDetails(whid: number, clause: number, factype: number): Observable<any> {
  const params = new HttpParams()
    .set('whid', whid.toString())
    .set('clause', clause.toString())
    .set('factype', factype.toString());

  return this.http.get<IndentPendingWH>(`http://140.238.246.250:8080/api/Warehouse/IndentPendingDetails`, { params });
}


 // Method for ReagIndentPending with mmid
 getReagIndentPending(mmid: any){
  ;
  return this.http.get<ReagIndentPending[]>(`http://140.238.246.250:8080/api/Warehouse/ReagIndentPending?mmid=${mmid}`);
}


// Method for ReagIndentPendingEQ
getReagIndentPendingEQ(){
  
  return this.http.get<ReagIndentPendingEQSummary[]>(`http://140.238.246.250:8080/api/Warehouse/ReagIndentPendingEQ`);
}





//this is for popuo WarehouseWiseStock
getWarehouseWiseStock(mitemid:number,whid:number): Observable<any> {

  const params = new HttpParams()
  .set('mitemid',mitemid.toString())
    .set('whid', whid.toString());
     
  return this.http.get<WarehouseWiseStock>(`http://140.238.246.250:8080/api/HO/WarehouseWiseStock`, { params });

}
// NearExpReport
getNearExpReport(mcid:number,nexppara:number): Observable<any> {

  const params = new HttpParams()
  .set('mcid',mcid.toString())
    .set('nexppara', nexppara.toString());
     
  return this.http.get<NearExpReport>(`http://140.238.246.250:8080/api/HO/NearExpReport`, { params });

}
NearExpReportbatch(mcid:number,nexppara:number,expmonth:string): Observable<any> {

  const params = new HttpParams()
  .set('mcid',mcid.toString())
    .set('nexppara', nexppara.toString())
    .set('expmonth', expmonth.toString());
     
  return this.http.get<NearExpReportbatch>(`http://140.238.246.250:8080/api/HO/NearExpReportbatch`, { params });

}

//reagIndentIssue

getReagIndentIssueMMID(){
return this.http.get<ReagIndentIssueMMID[]>(`http://140.238.246.250:8080/api/Warehouse/ReagIndentIssueMMID`);
}

getReagIndentIssueDetails(mmid:any){

return this.http.get<ReagIndentIssueDetails[]>(`http://140.238.246.250:8080/api/Warehouse/ReagIndentIssueDetails?mmid=${mmid}`)

}

//getPipelineDetails
getPipelineDetails(ponoid: number, itemid: number, mcid: number, whid: number, userid: number): Observable<any> {
  

  return this.http.get<PipelineDetails[]>(`http://140.238.246.250:8080/api/HO/getPipelineDetails?ponoid=${ponoid}&itemid=${itemid}&mcid=${mcid}&whid=${whid}&userid=${userid}`);
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

  return this.http.get<ItemDetailsPopup[]>(`http://140.238.246.250:8080/api/HO/getItemDetailsWithHOD`, { params });
}

//GetRaisedPicks
GetRaisedPicks(){
  return this.http.get<GetRaisedPicks[]>(`http://140.238.246.250:8080/api/Courier/GetRaisedPicks`)
}
GetPendingToPick(warehouseid:number){
  return this.http.get<GetPendingToPick[]>(`http://140.238.246.250:8080/api/Courier/GetPendingToPick?warehouseid=${warehouseid}`);
}

getUndroppedDocket(monthFlag:number){
return this.http.get<UndroppedDocket>(`http://140.238.246.250:8080/api/Courier/getUndroppedDocket?monthFlag=${monthFlag}`);
}
getPendingToDrop(warehouseid:number){
  return this.http.get<PendingToDrop>(`http://140.238.246.250:8080/api/Courier/GetPendingToDrop?warehouseid=${warehouseid}`);
  }

//NOCApprovedSummary
getNOCApprovedSummary(){
  return this.http.get<NOCApprovedSummary[]>(`http://140.238.246.250:8080/api/NOC/CGMSCNOCApprovedSummary`)
}
CGMSCNOCPendingSummary(){
  return this.http.get<CGMSCNOCPendingSummary[]>(`http://140.238.246.250:8080/api/NOC/CGMSCNOCPendingSummary`)
}
CGMSCNOCPendingDetails(nocid:number){
  return this.http.get<CGMSCNOCPendingDetails[]>(`http://140.238.246.250:8080/api/NOC/CGMSCNOCPendingDetails?nocid=${nocid}`)
}

getNOCApprovedDetails(facilityid:number){
  return this.http.get(`http://140.238.246.250:8080/api/NOC/CGMSCNOCApprovedDetails?facilityid=${facilityid}`);
}
getNOCApprovedDetailsYN(facilityid:number,YN:any){
  return this.http.get(`http://140.238.246.250:8080/api/NOC/CGMSCNOCApprovedDetails?facilityid=${facilityid}&YN=${YN}`);
}
getInitiatedNotIssueSummary(dcflag:any,mcid:any){
  return this.http.get<InitiatedNotIssueSummary>(`http://140.238.246.250:8080/api/IWH/InitiatedNotIssueSummary?dcflag=${dcflag}&mcid=${mcid}`);
}
getIInitiatedNotIssueDetaqils(whid: number, stkout: number, dcflag: string, mcid: number){
  
  return this.http.get<InitiatedNotIssueDetaqils>(`http://140.238.246.250:8080/api/IWH/InitiatedNotIssueDetaqils?whid=${whid}&stkout=${stkout}&dcflag=${dcflag}&mcid=${mcid}`);
}
getIWHPiplineSummary(dcflag:any,mcid:any){
  return this.http.get<IWHPiplineSummary>(`http://140.238.246.250:8080/api/IWH/IWHPiplineSummary?dcflag=${dcflag}&mcid=${mcid}`);
}
getIWHPiplineDetails(towhid: number, stkout: number, dcflag: string, mcid: number){
  return this.http.get<IWHPiplineDetails>(`http://140.238.246.250:8080/api/IWH/IWHPiplineDetails?towhid=${towhid}&stkout=${stkout}&dcflag=${dcflag}&mcid=${mcid}`);
}


getLabIssuePendingSummary(mcid: number){
  return this.http.get<LabIssuePendingSummary[]>(`http://140.238.246.250:8080/api/QC/LabIssuePendingSummary?mcid=${mcid}`);
}

getLabIssuePendingDetails(mcid: number,delaypara1: any): Observable<any>{
  
  return this.http.get<LabIssuePendingDetails[]>(`http://140.238.246.250:8080/api/QC/LabIssuePendingDetails?mcid=${mcid}&delaypara1=${delaypara1}`);
}
getHODYearWiseIssuanceSummary(mcatid:any,hodid:any){
  return this.http.get<HODYearWiseIssuanceSummary>(`http://140.238.246.250:8080/api/HO/HODYearWiseIssuanceSummary?mcatid=${mcatid}&hodid=${hodid}`);
}
getnTransitHOtoLab(mcid:any,instorPickPending:any){
  return this.http.get<InTransitHOtoLab[]>(`http://140.238.246.250:8080/api/QC/InTransitHOtoLab?instorPickPending=${instorPickPending}&mcid=${mcid}`);
}
getInTransitHOtoLabDetails(instorPickPending:any,mcid:any,delaypara1:any,isdrop:any,labid:any){
return this.http.get<InTransitHOtoLab[]>(`http://140.238.246.250:8080/api/QC/InTransitHOtoLabDetails?instorPickPending=${instorPickPending}&mcid=${mcid}&delaypara1=${delaypara1}&isdrop=${isdrop}&labid=${labid}`);
}
getVehicleInfoReport(IsStopped:any,isWarehouseVhicle:any,fromDate:any,toDate:any){
return this.http.get<VehicleInfo[]>(`http://140.238.246.250:8080/api/ANPR/VhicleInfo?IsStopped=${IsStopped}&isWarehouseVhicle=${isWarehouseVhicle}&fromDate=${fromDate}&toDate=${toDate}`);
}

getPipelineDDLTransit(mcid:any,whid:any,userid:any){
return this.http.get<PipelineDDLTransit[]>(`http://140.238.246.250:8080/api/HO/getPipelineDDLTransit?mcid=${mcid}&whid=${whid}&userid=${userid}`);
}

getMasRecRemarks(whid:any,whsup:any){
return this.http.get<MasRecRemarks[]>(`http://140.238.246.250:8080/api/Master/MasRecRemarks?whid=${whid}&whsup=${whsup}`);
}


}
