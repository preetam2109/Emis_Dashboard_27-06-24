import { Component, ViewChild, ChangeDetectorRef} from '@angular/core';
import { MatPaginator, MatPaginatorModule,  } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; 
import { ApiService } from 'src/app/service/api.service';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { WarehouseInfo } from 'src/app/Model/WarehouseInfo';
import { FacCoverage } from 'src/app/Model/FacCoverage';


@Component({
  selector: 'app-fac-coverage',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatMenuModule, MatTableExporterModule,MatPaginatorModule, MatTableModule],

  templateUrl: './fac-coverage.component.html',
  styleUrl: './fac-coverage.component.css'
})
export class FacCoverageComponent {
  dataSource!: MatTableDataSource<FacCoverage>;
  facCoverage: FacCoverage[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    
    private spinner: NgxSpinnerService,
    private api: ApiService,
    private cdr: ChangeDetectorRef,
  ) {
    this.dataSource = new MatTableDataSource<FacCoverage>([]);


  }

  ngOnInit() {
    this.spinner.show();
    this.GetWarehouseInfo();
  }

 
  GetWarehouseInfo() {
    this.spinner.show();
    this.api.getFacCoverage().subscribe(
      (res) => {
        // Add serial numbers to the data
        this.facCoverage = res.map((item: any, index: number) => ({
          ...item,
          sno: index + 1
        }));
        
        // console.log('Data with serial numbers:', this.facCoverage); 
// console.log(JSON.stringify(res))
        // this.facCoverage = res;
        this.dataSource.data = this.facCoverage;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.spinner.hide();
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching data', error);
        this.spinner.hide();
      }
    );
  }

  applyTextFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  exportToPDF() {
    const doc = new jsPDF('l', 'mm', 'a4');
    
    // Get current date and time
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();
  
    // Set font size for the title
    doc.setFontSize(18);
  
    // Calculate the position to center the title
    const header=''
    const title = 'Warehouse Info Report';  
      // (sessionStorage.getItem('firstname') || 'Indent Details');
    const pageWidth = doc.internal.pageSize.getWidth();
    const titleWidth = doc.getTextWidth(title);
    const xOffset = (pageWidth - titleWidth) / 2;
    const xOffset1 = (pageWidth - titleWidth) / 2;
  
    // Add centered title with some space above the table
    doc.setFontSize(18);
      doc.text(header, xOffset1, 10);
       // Centered title at position Y=20
    doc.setFontSize(15);
       
      doc.text(title, xOffset, 20);
      doc.setFontSize(15); // Centered title at position Y=20
  
    // Set font size for the date and time
    doc.setFontSize(10);
  
    // Add the date and time to the top-left corner
    doc.text(`Date: ${dateString} Time: ${timeString}`, 10, 10); // Top-left at position X=10, Y=10
    
    const columns = [
      { title: "S.No", dataKey: "sno" },
      { title: "facilitytypecode", dataKey: "facilitytypecode" },
      { title: "nosfac", dataKey: "nosfac" },
      { title: "facilitytypedesc", dataKey: "facilitytypedesc" },

     
    ];
    
    const rows = this.facCoverage.map(row => ({
      sno: row.sno,
      facilitytypecode: row.facilitytypecode,
      nosfac: row.nosfac,
      facilitytypedesc: row.facilitytypedesc,
    
    }));
  
    autoTable(doc, {
      columns: columns,
      body: rows,
      startY: 40, // Start table a little further down to account for the title and date/time
      theme: 'striped',
      headStyles: { fillColor: [22, 160, 133] }
    });
  
    doc.save('facCoverage.pdf');
  }
  
  


}






 