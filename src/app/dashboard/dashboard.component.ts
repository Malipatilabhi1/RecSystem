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
    "RFM Analysis":{
       "Active Customers":7.4,
       "At Risk":18.2,
       "Emerging Customers":14.6,
       "Inactive Customers":1.7,
       "Lost":18.3,
       "Potentially lost":10.8,
       "Top Customers":17.6,
       "Unsteady Customers":11.4
    },
    "Revenue by Country":{
       "United Kingdom":8.19,
       "Netherlands":0.28,
       "EIRE":0.26,
       "Germany":0.22,
       "France":0.2,
       "Australia":0.14,
       "Switzerland":0.06,
       "Spain":0.05,
       "Belgium":0.04,
       "Sweden":0.04,
       "Japan":0.04,
       "Norway":0.04,
       "Portugal":0.03,
       "Finland":0.02,
       "Channel Islands":0.02,
       "Denmark":0.02,
       "Italy":0.02,
       "Cyprus":0.01,
       "Austria":0.01,
       "Hong Kong":0.01,
       "Singapore":0.01,
       "Israel":0.01,
       "Poland":0.01,
       "Unspecified":0.0,
       "Greece":0.0,
       "Iceland":0.0,
       "Canada":0.0,
       "Malta":0.0,
       "United Arab Emirates":0.0,
       "USA":0.0,
       "Lebanon":0.0,
       "Lithuania":0.0,
       "European Community":0.0,
       "Brazil":0.0,
       "RSA":0.0,
       "Czech Republic":0.0,
       "Bahrain":0.0,
       "Saudi Arabia":0.0
    },
    "Monthly Revenue Trend":{
       "index":[
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12
       ],
       "columns":[
          "MonthYear",
          "TotalSales"
       ],
       "data":[
          [
             "2010-12",
             748957.0199999774
          ],
          [
             "2011-01",
             560000.2600000234
          ],
          [
             "2011-02",
             498062.6500000268
          ],
          [
             "2011-03",
             683267.0800000189
          ],
          [
             "2011-04",
             493207.1210000249
          ],
          [
             "2011-05",
             723333.51000001
          ],
          [
             "2011-06",
             691123.1200000228
          ],
          [
             "2011-07",
             681300.1110000301
          ],
          [
             "2011-08",
             682680.5100000176
          ],
          [
             "2011-09",
             1019687.622000011
          ],
          [
             "2011-10",
             1070704.669999975
          ],
          [
             "2011-11",
             1461756.2499997574
          ],
          [
             "2011-12",
             433668.0100000171
          ]
       ]
    },
    "Total Revenue of Type":{
       "Type":{
          "0":"T-LIGHT HOLDER",
          "1":"METAL SIGN",
          "2":"RED RETROSPOT",
          "3":"3 TIER",
          "4":"WATER BOTTLE",
          "5":"CAKE CASES",
          "6":"WHITE FINISH",
          "7":"PARTY BUNTING",
          "8":"50'S CHRISTMAS",
          "9":"NIGHT LIGHT"
       },
       "Revenue":{
          "0":213835.37000000008,
          "1":178001.68000000145,
          "2":161061.26000000106,
          "3":143840.8199999991,
          "4":129329.51999999913,
          "5":80566.17999999857,
          "6":78321.47999999976,
          "7":74439.83000000037,
          "8":74187.07999999993,
          "9":72412.31000000064
       }
    },
    "Sales by Quantity (Top 10)":{
       "WORLD WAR 2 GLIDERS ASSTD DESIGNS":53847,
       "JUMBO BAG RED RETROSPOT":47363,
       "ASSORTED COLOUR BIRD ORNAMENT":36381,
       "POPCORN HOLDER":36334,
       "PACK OF 72 RETROSPOT CAKE CASES":36039,
       "WHITE HANGING HEART T-LIGHT HOLDER":35317,
       "RABBIT NIGHT LIGHT":30680,
       "MINI PAINT SET VINTAGE ":26437,
       "PACK OF 12 LONDON TISSUES ":26315,
       "PACK OF 60 PINK PAISLEY CAKE CASES":24753
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
  keysMonthlyRevenue: string[] = [];
  valuesMonthlyRevenue: number[] = [];
  keysTopsales: string[] = [];
  valuesTopsales: number[] = [];

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
    for (const RFM in this.data['RFM Analysis']) {
      if (this.data['RFM Analysis'].hasOwnProperty(RFM)) {
        this.keysRFM.push(RFM);
        this.valuesRFM.push(this.data['RFM Analysis'][RFM]);
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
    for (const monthlyRevenue in this.data['Monthly Revenue Trend']) {
      if (this.data['Monthly Revenue Trend'].hasOwnProperty(monthlyRevenue)) {
        this.keysMonthlyRevenue.push(monthlyRevenue);
        this.valuesMonthlyRevenue.push(this.data['Monthly Revenue Trend'][monthlyRevenue]);
      }
    }
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
  typeArray: string[] = [];
  revenueArray: number[] = [];
  product1(){
    for (const key in this.data['Total Revenue of Type'].Type) {
      if (this.data['Total Revenue of Type'].Type.hasOwnProperty(key)) {
        this.typeArray.push(this.data['Total Revenue of Type'].Type[key]);
        this.revenueArray.push(this.data['Total Revenue of Type'].Revenue[key]);
      }
    }
        this.chartOptionsProduct1 = {
          series: [
            {
              name: "Average Spend",
              data: this.revenueArray
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
              this.typeArray
            ,
            labels:{
            style: {
             fontSize:'8px',
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
                return "$ " + val + "";
              }
            }
          }
        };
      
 }
    product2(){
      for (const Topsales in this.data['Sales by Quantity (Top 10)']) {
        if (this.data['Sales by Quantity (Top 10)'].hasOwnProperty(Topsales)) {
          this.keysTopsales.push(Topsales);
          this.valuesTopsales.push(this.data['Sales by Quantity (Top 10)'][Topsales]);
        }
      }
        this.chartOptionsProduct2 = {
          
          series: [
            {
              name: "Average Spend",
              data: this.valuesTopsales
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
              this.keysTopsales
            ,
            labels:{
            style: {
             fontSize:'8px',
             fontFamily:'Outfit',
             fontWeight:400}},
            title:{
              text: "Product Name",
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

