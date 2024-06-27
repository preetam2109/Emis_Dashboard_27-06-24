import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Districts } from 'src/app/Model/Districts';
import { DistrictService } from 'src/app/service/district.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-list-districts',
  templateUrl: './list-districts.component.html',
  styleUrls: ['./list-districts.component.css']
})
export class ListDistrictsComponent {
applyFilter(arg0: any) {
throw new Error('Method not implemented.');
}
Filterchange($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
detailcustomer(arg0: any) {
throw new Error('Method not implemented.');
}
editcustomer(arg0: any) {
throw new Error('Method not implemented.');
}
addcustomer() {
throw new Error('Method not implemented.');
}
  message: string = ''; 
  districts!: Districts[]
  displayedColumns: string[] = ['district_Name', 'district_ID', 'dbStart_Name_En', 'backward_NonBackward', 'div_Id', 'password', 'dtDist', 'dist2012', 'newDistYear', 'urban', 'dP_DistrictID', 'createdOn'];
  dataSource: MatTableDataSource<Districts> | undefined;
  constructor(private route:Router,private district:DistrictService){

  }

  ngOnInit(){
    this.getAllDistricts()
  }

  getAllDistricts(){
    debugger
    this.district.retrieveAllDistricts().subscribe(res=>{
      this.districts=res
      console.log((JSON.stringify(res)))
    })
  }
  // Filterchange(data: Event) {
  //   const value = (data.target as HTMLInputElement).value;
  //   this.districts.filter = value;
  // }
  // public doFilter = (value: string) => {
  //   this.dataSource.filter = value.trim().toLocaleLowerCase();
  // }


}
