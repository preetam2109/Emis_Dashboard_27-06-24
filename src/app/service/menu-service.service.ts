import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
  private selectedCategory: 'DrugsConsumables' | 'EquipmentReagent' | 'Infrastructure' | undefined;
  private menu: {
    [role: string]: {
      DrugsConsumables: { label: string; route: string }[];
      EquipmentReagent: { label: string; route: string }[];
      Infrastructure: { label: string; route: string }[];
    };
  } = {
      MDCGMSC: {
      DrugsConsumables: [
        { label: 'Home', route: 'home' },
        { label: 'EMD Drugs/Consumables', route: '/emd' },
        { label: 'Stock Abstract', route: 'whStockAbstract' },
        { label: 'Stock Details', route: 'stockDetails' },
        { label: 'Distribution', route: 'distribution' },
        { label: 'WH Indent Pending', route: 'IndentPendingWHdash' },
        { label: 'Near Expiry', route: 'nearExpiry' },
        { label: 'QC Courier', route: 'QcPendings' },
        { label: 'QC-Lab Issues', route: 'qc-dash' },
        { label: 'IWH Pendings', route: 'iwhPending' },
        { label: 'NOC', route: 'noc' },
        { label: 'Vehicle Tracking', route: 'vehicleTracking' },

      ],
      EquipmentReagent: [
        { label: 'Home', route: 'home' },
        { label: 'RCDetail', route: 'Rcdetail' },
        { label: 'Complaints', route: 'complaints' },
        { label: 'Supply/Installation Status', route: 'dispatchPending' },
        { label: 'Orders', route: 'dhs' },
        { label: 'Reagent Issue', route: 'ReagentIssue' },
      ],
      Infrastructure: [
        { label: 'RCDetail', route: 'Rcdetail' },
        { label: 'Complaints', route: 'complaints' },
        { label: 'Pending', route: 'dispatchPending' },
        { label: 'Orders', route: 'dhs' },
        { label: 'Reagent Issue', route: 'ReagentIssue' },
      ],
    },
      QC: {
      DrugsConsumables: [
        { label: 'Home', route: 'home' },
        { label: 'Stock Details', route: 'stockDetails' },
        { label: 'QC Courier', route: 'QcPendings' },
        { label: 'QC-Lab Issues', route: 'qc-dash' },
      ],
      EquipmentReagent: [
      ],
      Infrastructure: [
      ],
    },
      WH: {
      DrugsConsumables: [
        { label: 'Home', route: 'home' },
        { label: 'Stock Details', route: 'stockDetails' },
        { label: 'Vehicle Tracking', route: 'vehicleTracking' },
        { label: 'In-Transit Issues', route: 'intransitIssues' },
      ],
      EquipmentReagent: [
        { label: 'Home', route: 'home' },
      ],
      Infrastructure: [
      ],
    },
    
    
  };

  // Store selected category in localStorage to persist across page refreshes
  setSelectedCategory(category: 'DrugsConsumables' | 'EquipmentReagent' | 'Infrastructure') {
    this.selectedCategory = category;
    localStorage.setItem('selectedCategory', category); // Save category to localStorage
  }

  // Get the stored category from localStorage or memory
  getSelectedCategory(): 'DrugsConsumables' | 'EquipmentReagent' | 'Infrastructure' | undefined {
    if (!this.selectedCategory) {
      // If category is not set in memory, retrieve it from localStorage
      this.selectedCategory = localStorage.getItem('selectedCategory') as 'DrugsConsumables' | 'EquipmentReagent' | 'Infrastructure' | undefined;
    }
    return this.selectedCategory;
  }

  // Retrieve the menu items based on role and selected category
  getMenuItems(role: string): { label: string; route: string }[] {
    this.selectedCategory = this.getSelectedCategory(); // Ensure category is retrieved from memory/localStorage
    if (!this.selectedCategory || !this.menu[role]) {
      return [];
    }
    return this.menu[role][this.selectedCategory];
  }
}
