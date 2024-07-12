import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from 'ng-apexcharts';
import { dispatchPending } from 'src/app/Model/dispatchPending';
import { DistrictService } from 'src/app/service/district.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReceiptPending } from 'src/app/Model/ReceiptPending';
import { ApiService } from 'src/app/service/api.service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};
@Component({
  selector: 'app-installation-pending',
  templateUrl: './installation-pending.component.html',
  styleUrls: ['./installation-pending.component.css']
})
export class InstallationPendingComponent {
  @ViewChild('chart') chart: ChartComponent | undefined
  public cO: Partial<ChartOptions> | undefined 
  chartOptions:ChartOptions;

  displayedColumns: string[] = [
    'po_id','poNo' ,'podate', 'facility_aut_name','item_code_as_per_tender', 'item_name', 
   'supplier',  'poqty','supplyqty', 'receiptQTY', 'lastRDate','insqty','balanceQty'
   ,'dAYSSINCEPO','supplier_id','povalue'
  
];
columnNames: { [key: string]: string } = {
  'po_id': 'po_id',
  'poNo': 'poNo',
  'podate': 'podate',
  'facility_aut_name':'facility_aut_name',
  'item_code_as_per_tender': 'item_code_as_per_tender',
  'item_name': 'item_name',
  'supplier': 'supplier',
  'poqty': 'poqty',
  'supplyqty': 'supplyqty',
  'receiptQTY': 'receiptQTY',
  'lastRDate': 'lastRDate',
  'insqty': 'insqty',
  'balanceQty': 'balanceQty ',
  'dAYSSINCEPO': 'daysince',
  'supplier_id': 'supplier_id ',
  'povalue':'povalue'
};

dataSource!: MatTableDataSource<ReceiptPending>;
dispatchPendings: ReceiptPending[]=[]
// selectedTabIndex: number = 0;
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor(private spinner: NgxSpinnerService,private api: ApiService, private http: HttpClient,private breakpointObserver:BreakpointObserver,private cdr:ChangeDetectorRef) {
  this.chartOptions ={
   series: [],
   chart: {
     type: 'bar',
     stacked: true,
     height: 550,
     events: {
      dataPointSelection: (event, chartContext, { dataPointIndex, seriesIndex }) => {
        const selectedCategory = this.chartOptions?.xaxis?.categories?.[dataPointIndex];
        const selectedSeries = this.chartOptions?.series?.[seriesIndex]?.name;
        if (selectedCategory && selectedSeries) {
          this.fetchDataBasedOnChartSelection(selectedCategory, selectedSeries);
        }
      }
    }
  },
   plotOptions: {
     bar: {
       horizontal: true,
     },
   },
   xaxis: {
     categories: []
   },
   yaxis: {
     title: {
       text: undefined
     },
   },
   dataLabels: {
     enabled: false
   },
   stroke: {
     width: 1,
     colors: ['#fff']
   },
   title: {
     text: 'Online Installation Pending Summary Report',
     align:'center'
   },
   tooltip: {
     y: {
       formatter: function(val: any) {
         return val.toString();
       }
     }
   },
   fill: {
     opacity: 1
   },
   legend: {
     position: 'top',
     horizontalAlign: 'center',
     offsetX: 40
   }
 };
 this.loadData();
 this.dataSource = new MatTableDataSource<ReceiptPending>([]);

 this.breakpointObserver.observe([
   Breakpoints.Handset,
   Breakpoints.Tablet,
   Breakpoints.Web
 ]).subscribe(result => {
   if (result.matches) {
     if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
       this.displayedColumns = ['po_id','poNo' ,'podate','facility_aut_name', 'item_code_as_per_tender', 'item_name', 
       'supplier',  'poqty','supplyqty', 'receiptQTY', 'lastRDate','insqty','balanceQty'
       ,'dAYSSINCEPO','supplier_id','povalue'];
     } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
       this.displayedColumns = [ 'po_id','poNo' ,'podate','facility_aut_name', 'item_code_as_per_tender', 'item_name', 
       'supplier',  'poqty','supplyqty', 'receiptQTY', 'lastRDate','insqty','balanceQty'
       ,'dAYSSINCEPO','supplier_id','povalue'];
     } else {
       this.displayedColumns = [
         'po_id','poNo' ,'podate', 'facility_aut_name','item_code_as_per_tender', 'item_name', 
         'supplier',  'poqty','supplyqty', 'receiptQTY', 'lastRDate','insqty','balanceQty'
         ,'dAYSSINCEPO','supplier_id','povalue'
       ];
     }
   }
 });
}
ngOnInit(): void {
  
  this.spinner.show();
  this.getALLinstallationPending()
  // setTimeout(() => this.loadData(), 10000); 
  this.loadData()
}

getALLinstallationPending() {
  this.spinner.show();

  this.api.installationPendingDetails().subscribe(res => {
    this.dispatchPendings = res;
     this.dataSource.data = res;
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
     this.spinner.hide();
     this.cdr.detectChanges();

  });
}

applyTextFilter(event: Event) {
  
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

loadData(): void {
  this.spinner.show();
  this.api.installationPendingSummary().subscribe(
    (data: any) => {
      const supplier: string[] = [];
      const nositems: number[] = [];
      const nospo: number[] = [];
      const pvalue: number[] = [];

      data.forEach((item: { supplier: string; nositems: number; nospo: number; pvalue: number; }) => {
        supplier.push(item.supplier);
        nositems.push(item.nositems);
        nospo.push(item.nospo);
        pvalue.push(item.pvalue);
      });

      this.chartOptions.series = [
        {
          name: 'nositems',
          data: nositems,
          color: '#FF0000'
        },
        {
          name: 'nospo',
          data: nospo,
          color: '#0000FF'
        },
        {
          name: 'pvalue',
          data: pvalue,
          color: '#00FF00'
        }
      ];
      this.chartOptions.xaxis = {
        categories: supplier
      };
      this.cdr.detectChanges();
    this.spinner.hide();
    },
    (error: any) => {
      console.error('Error fetching data', error);
      this.spinner.hide();

    }
  );
}
fetchDataBasedOnChartSelection(supplier: string, seriesName: string): void {
  this.spinner.show();
  this.api.installationPendingDetails().subscribe(res => {
    let filteredData: ReceiptPending[] = [];
    if (seriesName === 'nositems') {
      filteredData = res.filter(item => item.supplier === supplier);
    } else if (seriesName === 'nospo') {
      filteredData = res.filter(item => item.supplier === supplier);
    }
    this.dataSource.data = filteredData;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.cdr.detectChanges();  // Ensure that the changes are detected and applied
    this.spinner.hide();
  }, error => {
    console.error('Error fetching data', error);
    this.spinner.hide();
  });
}

}
