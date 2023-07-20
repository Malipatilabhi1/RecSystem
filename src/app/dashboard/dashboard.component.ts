import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexGrid,
} from "ng-apexcharts";

import {
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  colors:any;
  tooltip:any;
  dataLabels:any
  legend: ApexLegend;
};
export type ChartOptionsSales = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors:any;
};
export type ChartOptionsRevenueByCountry = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors:any;
};
export type ChartOptionsMonthlyRevenueTrend = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors:any;
};
export type ChartOptionsProduct1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors:any;
};
export type ChartOptionsProduct2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors:any;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fileInput: HTMLInputElement | null = null;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @ViewChild("chart3") chart3: ChartComponent;
  public chartOptionsSales: Partial<ChartOptionsSales>;

  @ViewChild("chart4") chart4: ChartComponent;
  public chartOptionsRevenueByCountry: Partial<ChartOptionsRevenueByCountry>;

  @ViewChild("chart5") chart5: ChartComponent;
  public chartOptionsMonthlyRevenueTrend: Partial<ChartOptionsMonthlyRevenueTrend>;

  @ViewChild("chart6") chart6: ChartComponent;
  public chartOptionsProduct1: Partial<ChartOptionsProduct1>;

  @ViewChild("chart7") chart7: ChartComponent;
  public chartOptionsProduct2: Partial<ChartOptionsProduct2>;


  constructor() { }

  ngOnInit(): void {
    this.salesQuantity()
    this.RFM()
    this.revenueByCountry()
    this.revenueByTrend()
    this.product1()
    this.product2()
  }
  data={
    "NoOfCustomer":4372,
    "NoOfItems":4223,
    "TotalRevenue":"€9.75 M",
    "Sales by Countries":{
    "United Kingdom":4263829,
    "Netherlands":200128,
    "EIRE":142637,
    "Germany":117448,
    "France":110480,
    "Australia":83653,
    "Sweden":35637,
    "Switzerland":30325,
    "Spain":26824,
    "Japan":25218,
    "Belgium":23152,
    "Norway":19247,
   "Portugal":16180,
   "Finland":10666,
   "Channel Islands":9479,
   "Denmark":8188,
   "Italy":7999,
  "Cyprus":6317,
   "Singapore":5234,
   "Austria":4827,
   "Hong Kong":4769,
   "Israel":4353,
   "Poland":3653,
   "Unspecified":3300,
   "Canada":2763,
    "Iceland":2458,
       "Greece":1556,
       "USA":1034,
       "United Arab Emirates":982,
       "Malta":944,
       "Lithuania":652,
       "Czech Republic":592,
       "European Community":497,
       "Lebanon":386,
       "Brazil":356,
       "RSA":352,
       "Bahrain":260,
       "Saudi Arabia":75
    },
 
    "RFM":{
 
       "Active Customers":294,
 
       "At Risk":720,
 
       "Emerging Customers":575,
 
       "Inactive Customers":67,
 
       "Lost":722,
 
       "Potentially lost":428,
 
       "Top Customers":695,
 
       "Unsteady Customers":449
 
    },
 
    "Revenue by Country":{
 
       "United Kingdom":8187806.364001113,
 
       "Netherlands":284661.54000000015,
 
       "EIRE":263276.81999999826,
 
       "Germany":221698.20999999862,
 
       "France":197403.90000000002,
 
       "Australia":137077.26999999973,
 
       "Switzerland":56385.35000000009,
 
       "Spain":54774.57999999997,
 
       "Belgium":40910.95999999998,
 
       "Sweden":36595.91,
 
       "Japan":35340.62,
 
       "Norway":35163.46000000004,
 
       "Portugal":29367.019999999993,
 
       "Finland":22326.73999999997,
 
       "Channel Islands":20086.289999999957,
 
       "Denmark":18768.140000000003,
 
       "Italy":16890.510000000002,
 
       "Cyprus":12946.289999999999,
 
       "Austria":10154.319999999996,
 
       "Hong Kong":10117.040000000003,
 
       "Singapore":9120.39,
 
       "Israel":7907.819999999995,
 
       "Poland":7213.139999999997,
 
       "Unspecified":4749.789999999996,
 
       "Greece":4710.5199999999995,
 
       "Iceland":4309.999999999997,
 
       "Canada":3666.380000000001,
 
       "Malta":2505.4700000000003,
 
       "United Arab Emirates":1902.2800000000007,
 
       "USA":1730.9200000000005,
 
       "Lebanon":1693.8800000000003,
 
       "Lithuania":1661.06,
 
       "European Community":1291.75,
 
       "Brazil":1143.6000000000001,
 
       "RSA":1002.3099999999998,
 
       "Czech Republic":707.72,
       "Bahrain":548.4,
       "Saudi Arabia":131.17
    }
 }
  uploadButtonClicked() {
    // Create a hidden file input element dynamically
    this.fileInput = document.createElement('input');
    this.fileInput.type = 'file';
    this.fileInput.style.display = 'none';
    this.fileInput.accept = '.txt';
    // Trigger the file input click event
    this.fileInput.click();
  }

  keysCountry: string[] = [];
  valuesCountry: number[] = [];
  keysRFM: string[] = [];
  valuesRFM: number[] = [];
  keysRevenue: string[] = [];
  valuesRevenue: number[] = [];

  salesQuantity(){
    for (const country in this.data['Sales by Countries']) {
      if (this.data['Sales by Countries'].hasOwnProperty(country)) {
        this.keysCountry.push(country);
        this.valuesCountry.push(this.data['Sales by Countries'][country]);
      }
    }
    this.chartOptionsSales = {
      series: [
        {
          name: "Average Spend",
          data: this.valuesCountry
        }
      ],
      chart: {
        type: "bar",
        height: 200
      },
      colors:["#9692F1"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: 
          this.keysCountry
        ,
        labels:{
        style: {
         fontSize:'10px',
         fontFamily:'Outfit',
         fontWeight:400}},
        title:{
          text: "Country",
          style: {
            color: '#666',
           fontSize:'10px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        }
      },
      yaxis: {
        title: {
          text: "Sales Quantity",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        }
      },
     
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  
  }
  RFM(){  
    for (const RFM in this.data.RFM) {
      if (this.data.RFM.hasOwnProperty(RFM)) {
        this.keysRFM.push(RFM);
        this.valuesRFM.push(this.data.RFM[RFM]);
      }
    }
    this.chartOptions = {
      series: this.valuesRFM,
      chart: {
        width: 430,
        type: "pie"
      },
      tooltip:{
        enabled:true
      },
      dataLabels:{
        enabled:false
      },
      legend: {
        show:true,
        formatter: function (val, opts) {
          const seriesIndex = opts.seriesIndex;
          const percentage = (opts.w.globals.series[seriesIndex] / opts.w.globals.seriesTotals.reduce((a, b) => a + b, 0)) * 100;
          return '<span style="font-size: 13px; font-family: Outfit; font-style: bold;">' + val + ': ' +  percentage.toFixed(1) + '%';
        }
      },
      colors:["#3AA0FF","#36CBCB","#FAD337"],
      labels: this.keysRFM,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 320
            },
            
          }
        }
      ]
    };
   
  }

  revenueByCountry(){
    for (const Revenue in this.data['Revenue by Country']) {
      if (this.data['Revenue by Country'].hasOwnProperty(Revenue)) {
        this.keysRevenue.push(Revenue);
        this.valuesRevenue.push(this.data['Revenue by Country'][Revenue]);
      }
    }
      this.chartOptionsRevenueByCountry = {
        series: [
          {
            name: "Average Spend",
            data: this.valuesRevenue
          }
        ],
        chart: {
          type: "bar",
          height: 200
        },
        colors:["#9692F1"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: 
            this.keysRevenue
          ,
          labels:{
          style: {
           fontSize:'10px',
           fontFamily:'Outfit',
           fontWeight:400}},
          title:{
            text: "Country",
            style: {
              color: '#666',
             fontSize:'10px',
             fontFamily:'Outfit',
             fontWeight:400
            }
          }
        },
        yaxis: {
          title: {
            text: "Total Revenue",
            style: {
              color: '#666',
             fontSize:'14px',
             fontFamily:'Outfit',
             fontWeight:400
            }
          }
        },
       
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        }
      };
    
  }
  revenueByTrend(){
      this.chartOptionsMonthlyRevenueTrend = {
        series: [
          {
            name: "Average Spend",
            data: [12, 16, 18, 20]
          }
        ],
        chart: {
          type: "bar",
          height: 200
        },
        colors:["#9692F1"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            "<10k",
            "10k-30k",
            "30k-50k",
            "50k+"
          ],
          title:{
            text: "Country",
            style: {
              color: '#666',
             fontSize:'14px',
             fontFamily:'Outfit',
             fontWeight:400
            }
          }
        },
        yaxis: {
          title: {
            text: "Total Quantity",
            style: {
              color: '#666',
             fontSize:'14px',
             fontFamily:'Outfit',
             fontWeight:400
            }
          }
        },
       
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        }
      };
    
  }

  product1(){
      for (const Revenue in this.data['Revenue by Country']) {
        if (this.data['Revenue by Country'].hasOwnProperty(Revenue)) {
          this.keysRevenue.push(Revenue);
          this.valuesRevenue.push(this.data['Revenue by Country'][Revenue]);
        }
      }
        this.chartOptionsProduct1 = {
          series: [
            {
              name: "Average Spend",
              data: this.valuesRevenue
            }
          ],
          chart: {
            type: "bar",
            height: 200
          },
          colors:["#9692F1"],
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "35%"
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
          },
          xaxis: {
            categories: 
              this.keysRevenue
            ,
            labels:{
            style: {
             fontSize:'10px',
             fontFamily:'Outfit',
             fontWeight:400}},
            title:{
              text: "Product Names",
              style: {
                color: '#666',
               fontSize:'10px',
               fontFamily:'Outfit',
               fontWeight:400
              }
            }
          },
          yaxis: {
            title: {
              text: "Sales Quantity",
              style: {
                color: '#666',
               fontSize:'14px',
               fontFamily:'Outfit',
               fontWeight:400
              }
            }
          },
         
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return "$ " + val + " thousands";
              }
            }
          }
        };
      
 }
    product2(){
        this.chartOptionsProduct2 = {
          series: [
            {
              name: "Average Spend",
              data: [12, 16, 18, 20]
            }
          ],
          chart: {
            type: "bar",
            height: 200
          },
          colors:["#9692F1"],
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "35%"
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
          },
          xaxis: {
            categories: [
              "<10k",
              "10k-30k",
              "30k-50k",
              "50k+"
            ],
            title:{
              text: "Product Name",
              style: {
                color: '#666',
               fontSize:'14px',
               fontFamily:'Outfit',
               fontWeight:400
              }
            }
          },
          yaxis: {
            title: {
              text: "Total Sales",
              style: {
                color: '#666',
               fontSize:'14px',
               fontFamily:'Outfit',
               fontWeight:400
              }
            }
          },
         
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return "$ " + val + " thousands";
              }
            }
          }
        };
      
    }
  }

