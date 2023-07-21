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
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
  
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
       "Norway":19247
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
      //  "United Kingdom":8.19,
       "Netherlands":0.28,
       "EIRE":0.26,
       "Germany":0.22,
       "France":0.20,
       "Australia":0.14,
       "Switzerland":0.06,
       "Spain":0.05,
       "Belgium":0.04,
       "Sweden":0.04,
       "Japan":0.04,
       "Norway":0.04
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
             0.75
          ],
          [
             "2011-01",
             0.56
          ],
          [
             "2011-02",
             0.5
          ],
          [
             "2011-03",
             0.68
          ],
          [
             "2011-04",
             0.49
          ],
          [
             "2011-05",
             0.72
          ],
          [
             "2011-06",
             0.69
          ],
          [
             "2011-07",
             0.68
          ],
          [
             "2011-08",
             0.68
          ],
          [
             "2011-09",
             1.02
          ],
          [
             "2011-10",
             1.07
          ],
          [
             "2011-11",
             1.46
          ],
          [
             "2011-12",
             0.43
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
        "0":0.21,
        "1":0.18,
        "2":0.16,
        "3":0.14,
        "4":0.13,
        "5":0.08,
        "6":0.08,
        "7":0.07,
        "8":0.07,
        "9":0.07
     },
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
          name: "Sales by Countries",
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
            return "$ " + val + " ";
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
      // colors:["#3AA0FF","#36CBCB","#FAD337"],
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
            name: "Revenue by Country",
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
              return "$ " + val + " ";
            }
          }
        }
      };
    
  }

  revenueByTrend() {
  const data = this.data['Monthly Revenue Trend']['data'];

  this.keysMonthlyRevenue = data.map((item) => item[0].toString()); // X-axis labels
  this.valuesMonthlyRevenue = data.map((item) => Number(item[1])); // Data points

  this.chartOptionsMonthlyRevenueTrend = {
    series: [
      {
        name: "Monthly Revenue Trend",
        data: this.valuesMonthlyRevenue
      }
    ],
    chart: {
      height: 150,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      }
    },
    yaxis: {
      title: {
        text: "Total Sales",
        style: {
          color: '#666',
          fontSize: '14px',
          fontFamily: 'Outfit',
          fontWeight: 400
        }
      },
     
    },
    xaxis: {
      categories: this.keysMonthlyRevenue
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
              name: "Total Revenue of Type",
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
              name: "Sales by Quantity",
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
                return "$ " + val + " ";
              }
            }
          }
        };
      
    }
  }

