import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
  private selectedCategory: 'DrugsConsumables' | 'EquipmentReagent' | 'Infrastructure' | undefined;
  private menu: {
    [role: string]: {
      categories?: {
        [category: string]: { label: string; route: string; submenu?: { label: string; route: string }[] }[];
      };
      items?: { label: string; route: string; submenu?: { label: string; route: string }[] }[];
    };
  } = {
    SEC1: {
      categories: {
        DrugsConsumables: [
          { label: 'Home', route: 'home' },
          // {
          //   label: 'Health Facilities Coverage',
          //   route: 'FacCoverage',
          //   submenu: [
          //     { label: 'District Details', route: 'districtDetails' },
          //     { label: 'Facility Details', route: 'facilityDetails' }
          //   ]
          // },
          { label: 'EMD Drugs/Consumables', route: '/emd' },
          { label: 'Health Facilities Coverage', route: 'FacCoverage' },
          { label: 'Warehouse Information', route: 'WarehouseInfo' },
          { label: 'Stock Abstract', route: 'whStockAbstract' },
          { label: 'Stock Details', route: 'stockDetails' },
          { label: 'Growth in Distribution', route: 'distribution' },
          { label: 'WH Indent Pending', route: 'IndentPendingWHdash' },
          { label: 'Near Expiry', route: 'nearExpiry' },
          { label: 'QC Courier', route: 'QcPendings' },
          { label: 'QC-Lab Issues', route: 'qc-dash' },
          { label: 'IWH Pendings', route: 'iwhPending' },
          { label: 'NOC', route: 'noc' },
          { label: 'Vehicle Tracking', route: 'vehicleTracking' },
          { label: 'DHS Seasonal Drugs', route: 'SeasonDrugs' },
          { label: 'DropApp Warehouse Performance', route: 'DropAppWarehousePerformance' },


          // { label: 'In-Transit Issues', route: 'intransitIssues' },
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
    },
    DHS: {
      categories: {
        DrugsConsumables: [
          { label: 'Home', route: 'home' },
          { label: 'Health Facilities Coverage', route: 'FacCoverage' },
          { label: 'Warehouse Information', route: 'WarehouseInfo' },
          { label: 'Stock Abstract', route: 'whStockAbstract' },
          { label: 'DHS Seasonal Drugs', route: 'SeasonDrugs' },
          { label: 'Growth In Procurment', route: 'GrowthInProcurment' },
          { label: 'Growth in Distribution',route: 'distribution'},
          { label: 'Demand vs Supply', route: 'EdlNonEdlIssuePercentSummary' },
          // { label: 'Issue Per Wise Per Click', route: 'IssuePerWisePerClick' },
          { label: 'DHS Supplied %', route: 'IssuedPerWise' },
          { label: 'DHS Stock Availablity %', route: 'StockSummaryBalanceIndent' },
          { label: 'WH Indent Pending', route: 'IndentPendingWHdash' },
          { label: 'Warehouse Stock-out %', route: 'StockoutSummary' },

          { label: 'Near Expiry', route: 'nearExpiry' },
          { label: 'NOC', route: 'noc' },
          { label: 'District EDL Counts', route: 'DistrictWiseStk' },
          { label: 'DdlItemWiseInHandQty', route: 'DdlItemWiseInHandQty' },
          { label: 'Stock Position', route: 'DistFACwiseStockPostionNew' },
            {
              label: 'Time-Based Analysis',

              submenu: [
                { label: 'Time Taken By Supplier', route: 'timetakenBySupplier' },
                { label: 'Paid Time Taken', route: 'PaidTimeTaken' },
                { label: 'QC Time Taken', route: 'QcTimeTaken' },
                // { label: 'Facility Details', route: 'facilityDetails' }

              ],
              route: ''
            },
          

          



        ],
        EquipmentReagent: [
          { label: 'Home', route: 'home' },
        ],
        Infrastructure: [
          { label: 'Home', route: 'home' },

        ],
      },
    },
    CME: {
      categories: {
        DrugsConsumables: [
          { label: 'Home', route: 'home' },
          { label: 'Stock Abstract', route: 'whStockAbstract' },
          { label: 'Growth in Distribution', route: 'distribution' },
        ],
        EquipmentReagent: [
          { label: 'Home', route: 'home' },

        ],
        Infrastructure: [
          { label: 'Home', route: 'home' },

        ],
      },
    },
    
    QC: {
      items: [
        { label: 'Home', route: 'home' },
        { label: 'Stock Details', route: 'stockDetails' },
        { label: 'QC Courier', route: 'QcPendings' },
        { label: 'QC-Lab Issues', route: 'qc-dash' },
      ],
    },
    Warehouse: {
      items: [
        { label: 'Home', route: 'home' },
        { label: 'Health Facilities Coverage', route: 'FacCoverage' },
        { label: 'Warehouse Information', route: 'WarehouseInfo' },

        { label: 'Stock Details', route: 'stockDetails' },
        { label: 'Vehicle Tracking', route: 'vehicleTracking' },
        { label: 'In-Transit Issues', route: 'intransitIssues' },
        { label: 'DHS Seasonal Drugs', route: 'SeasonDrugs' },


      ],
    },
    Collector: {
      items: [
        { label: 'Home', route: 'home' },
        { label: 'Dashboard', route: 'card' },
        { label: 'Health Facilities Coverage', route: 'FacCoverage' },
          { label: 'Warehouse Information', route: 'WarehouseInfo' },
        { label: 'Growth in Distribution', route: 'distribution' },
        { label: 'HODYearWiseIssuance', route: 'HODYearWiseIssuance' },



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

  getMenuItems(role: string): { label: string; route: string; submenu?: { label: string; route: string }[] }[] {
    const roleMenu = this.menu[role];
    
    if (!roleMenu) {
      return [];
    }
  
    const rolesUsingCategories = ['SEC1', 'DHS', 'CME'];
  
    if (rolesUsingCategories.includes(role) && roleMenu.categories) {
      const selectedCategory = this.getSelectedCategory();
      if (selectedCategory && roleMenu.categories[selectedCategory]) {
        return roleMenu.categories[selectedCategory].map(item => ({
          ...item,
          submenu: this.getSubmenu(item.label) // Add submenu dynamically if needed
        }));
      }
      return [];
    }
  
    return roleMenu.items || [];
  }

  // Example submenu provider (optional)
getSubmenu(label: string): { label: string; route: string }[] | undefined {
  
  const submenus:any = {
    'Time-Based Analysis': [
      { label: 'Time Taken By Supplier', route: 'timetakenBySupplier' },
      { label: 'Payement Time Taken', route: 'PaidTimeTaken' },
      { label: 'QC Time Taken', route: 'QcTimeTaken' },

    ],
  };
  return submenus[label];
}

  
}
