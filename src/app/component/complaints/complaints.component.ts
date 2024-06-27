import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { DistrictService } from 'src/app/service/district.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
import { Complaints } from 'src/app/Model/Complaints';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';

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
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent | undefined;
  public cO: Partial<ChartOptions> | undefined;
  chartOptions: ChartOptions;

  displayedColumns: string[] = [
    'district', 'location_name', 'item_name',
    'serial_no', 'warrantyValidTill', 'complaint_date', 'complaint_details', 'name',
    'email_id', 'mobile_no', 'location_id', 'supplier_id', 'complaints_trouble_id', 'not_function_date',
  ];

  columnNames: { [key: string]: string } = {
    'district': 'District',
    'location_name': 'Location Name',
    'item_name': 'Equipment Name',
    'serial_no': 'Serial No',
    'warrantyValidTill': 'Warranty Up To',
    'complaint_date': 'Complaint Date',
    'complaint_details': 'Complaint Details',
    'name': 'Supplier',
    'email_id': 'Email ID',
    'mobile_no': 'Mobile No',
    'location_id': 'Location ID',
    'supplier_id': 'Supplier ID',
    'complaints_trouble_id': 'Complaints Trouble ID',
    'not_function_date': 'Not Function Date'
  };

  dataSource: MatTableDataSource<Complaints>;
  allComplaints: Complaints[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public spinner: NgxSpinnerService, private cdr: ChangeDetectorRef, private breakpointObserver: BreakpointObserver, private route: Router, private rcapi: DistrictService) {
    this.chartOptions = {
      series: [],
      chart: {
        type: 'bar',
        stacked: true,
        height: 350,
        events: {
          dataPointSelection: (event: any, chartContext: any, config: any) => {
            const selectedDistrict = this.chartOptions.xaxis?.categories[config.dataPointIndex];
            const seriesName =
             config.seriesIndex === 0 ? 'Total' : 
            (config.seriesIndex === 1 ? 'Solved' : 'Unsolved');

            if (seriesName === 'Solved') {
              this.filterSolvedByDistrictWithSpinner(selectedDistrict);
            } else if (seriesName === 'Unsolved') {
              this.filterByDistrictWithSpinner(selectedDistrict);
            } else {
              
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
        text: 'Online Complaint against Warranty Valid Equipment',
        align: 'center'
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
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
    this.dataSource = new MatTableDataSource<Complaints>([]);

    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
          this.displayedColumns = ['district', 'location_name', 'item_name', 'serial_no', 'warrantyValidTill',
            'complaint_date', 'complaint_details', 'name', 'email_id', 'mobile_no',
            'location_id', 'supplier_id', 'complaints_trouble_id', 'not_function_date'];
        } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
          this.displayedColumns = ['district', 'location_name', 'item_name', 'serial_no', 'warrantyValidTill', 'complaint_date'];
        } else {
          this.displayedColumns = [
            'district', 'location_name', 'item_name', 'serial_no', 'warrantyValidTill',
            'complaint_date', 'complaint_details', 'name', 'email_id', 'mobile_no',
            'location_id', 'supplier_id', 'complaints_trouble_id', 'not_function_date'
          ];
        }
      }
    });
  }

  ngOnInit() {
    this.spinner.show();
    this.getAllRC();
    setTimeout(() => this.loadData(), 1000);
    
  }

  getAllRC() {
    debugger
    this.spinner.show();
    this.rcapi.overAllComplaints().subscribe(res => {
      this.allComplaints = res;
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.spinner.hide();
      this.cdr.detectChanges();
    });
  }

  filterByDistrictWithSpinner(selectedDistrict: string) {
    this.spinner.show();
    this.filterByDistrict(selectedDistrict);
  }

  filterByDistrict(selectedDistrict: string) {
    const filteredData = this.allComplaints.filter(complaint => complaint.district === selectedDistrict);
    this.dataSource.data = filteredData;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.cdr.detectChanges();
    this.spinner.hide();
  }
resetPaginator() {
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  filterSolvedByDistrictWithSpinner(selectedDistrict: string) {
    this.spinner.show();
    this.filterSolvedByDistrictWithSpinners(selectedDistrict)
  }


  filterSolvedByDistrictWithSpinners(selectedDistrict: string) {
    debugger
    this.spinner.show();
    this.rcapi.overAllComplaintsSolved(selectedDistrict).subscribe(res => {
      debugger
      this.dataSource.data = res;
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
      this.cdr.detectChanges();
      this.spinner.hide();
    });
  }

  applyTextFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadData() {
    this.spinner.show();
    this.rcapi.districtWiseComplaints().subscribe((data: any) => {
      const categories: string[] = [];
      const total: number[] = [];
      const solved: number[] = [];
      const unsolved: number[] = [];

      data.forEach((item: { district: string; total: number; solved: number; unsolved: number; }) => {
        categories.push(item.district);
        total.push(item.total);
        solved.push(item.solved);
        unsolved.push(item.unsolved);
      });

      this.chartOptions.series = [
        {
          name: 'Total',
          data: total
        },
        {
          name: 'Solved',
          data: solved
        },
        {
          name: 'Unsolved',
          data: unsolved
        }
      ];
      this.chartOptions.xaxis = {
        categories: categories
      };
      this.cdr.detectChanges();
      this.spinner.hide();
    });
  }
}