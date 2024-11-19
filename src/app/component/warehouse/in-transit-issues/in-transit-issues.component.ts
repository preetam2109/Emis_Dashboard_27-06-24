import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MasRecRemarks } from 'src/app/Model/MasRecRemarks';
import { PipelineDDLTransit } from 'src/app/Model/PipelineDDLTransit';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-in-transit-issues',
  templateUrl: './in-transit-issues.component.html',
  styleUrls: ['./in-transit-issues.component.css']
})
export class InTransitIssuesComponent {
  items: PipelineDDLTransit[] = []; // List of items from the API
  statuses: MasRecRemarks[] = [];
  selectedItem: any = null;
  selectedStatus: string = '';
  remark: string = '';

  // Details for the selected item
  selectedItemCode: string = '';
  purchaseOrder: string = '';
  dated: string = '';
  previousAction: string = '';
  actionDate: string = '';
  daysSincePO: number = 0;
  selectedItemName: string = '';
  strength: string = '';
  sku: string = '';
  nibRequired: boolean = false;
  orderedQty: number = 0;

  constructor(private api: ApiService,private http: HttpClient) {}

  ngOnInit() {
    // this.fetchItems();
    this.onItemChange()
    this.onMasRemarksChange()
  }

  fetchItems() {
    this.http.get<any[]>('API_URL').subscribe((data) => {
      this.items = data;
    });
  }

  onItemChange() {
    this.api.getPipelineDDLTransit(0,2617,3049).subscribe((res:PipelineDDLTransit[])=>{
      this.items=res
    })
    
    // const selectedItem = this.items.find((item) => item.id === this.selectedItem);
    // if (selectedItem) {
      // Populate details for the selected item
      // this.selectedItemCode = selectedItem.code;
      // this.purchaseOrder = selectedItem.po;
      // this.dated = selectedItem.date;
      // this.previousAction = selectedItem.previousAction;
      // this.actionDate = selectedItem.actionDate;
      // this.daysSincePO = selectedItem.daysSincePO;
      // this.selectedItemName = selectedItem.name;
      // this.strength = selectedItem.strength;
      // this.sku = selectedItem.sku;
      // this.nibRequired = selectedItem.nibRequired;
      // this.orderedQty = selectedItem.orderedQty;
    // }
  }

  onMasRemarksChange(){
    this.api.getMasRecRemarks(2617,'WH').subscribe((res:MasRecRemarks[])=>{
      this.statuses=res
    })
  }

  saveData() {
    const payload = {
      itemId: this.selectedItem,
      status: this.selectedStatus,
      remark: this.remark,
    };

    this.http.post('API_URL_TO_SAVE', payload).subscribe((response:any) => {
      console.log('Data saved successfully:', response);
    });
  }

  toggleMenu() {
    console.log('Menu toggled');
  }
}