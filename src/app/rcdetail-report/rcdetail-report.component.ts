import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DistrictService } from '../service/district.service';
import { RcDetail } from '../Model/RcDetail';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TotalNoRc } from '../Model/Totalnorc';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-rcdetail-report',
  templateUrl: './rcdetail-report.component.html',
  styleUrls: ['./rcdetail-report.component.css']
})
export class RCDetailReportComponent implements OnInit {
  totalnosrc: TotalNoRc | null = null;
  displayedColumns: string[] = [
      'item_codeE','item_nameE' ,'tender_no', 'make', 'model', 
     'contract_date',  'contract_end_date','single_unit_price', 'basic_rate', 'gst'
    
  ];

  columnNames: { [key: string]: string } = {
    'item_codeE': 'Equipment Code',
    'item_nameE': 'Equipment Name',
    'tender_no': 'Tender No',
    'make': 'Make',
    'model': 'Model',
    'contract_date': 'Rc Start Date',
    'contract_end_date': 'Rc End Date',
    'single_unit_price': 'Single Unit Price',
    'basic_rate': 'Basic Rate',
    'gst': 'GST',
  };
  dataSource: MatTableDataSource<RcDetail>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cdr: ChangeDetectorRef,public spinner: NgxSpinnerService,private route: Router, private rcapi: DistrictService) {
    this.dataSource = new MatTableDataSource<RcDetail>([]);


  }
  ngOnInit() {
    this.spinner.show();
    this.getAllRC();
  this.getTotalNoRc()
  
  }

  getAllRC() {
    this.rcapi.retrieveAllRC().subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.spinner.hide();
      this.cdr.detectChanges();

    });
  }

  getTotalNoRc() {
    this.rcapi.totalNoRc().subscribe((res: TotalNoRc) => {
      this.totalnosrc = res;
    }, (error) => {
      console.error('Error fetching data', error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

//   rcDetail!:RcDetail[]

//  constructor(private route:Router,private rcapi:DistrictService){

//   }

//   ngOnInit(){
//     this.getAllRC()
//   }

//   getAllRC(){
//     this.rcapi.retrieveAllRC().subscribe(res=>{
//       this.rcDetail=res
//       console.log(JSON.stringify(res))
//     })
//   }
}
