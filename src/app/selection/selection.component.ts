
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  @ViewChild('content', {static:false})el!:ElementRef;
  ItemBased =
  {
      "22242": {
          "Description": "5 HOOK HANGER MAGIC TOADSTOOL"
      },
      "23165": {
          "Description": "LARGE CERAMIC TOP STORAGE JAR"
      },
      "23166": {
          "Description": "MEDIUM CERAMIC TOP STORAGE JAR"
      },  
      "23167": {  
          "Description": "SMALL CERAMIC TOP STORAGE JAR "  
      },  
      "23575": {   
          "Description": "SNACK TRAY PAISLEY PARK"   
      }  
  }
  UserBased=

  [
  
      {
  
          "Description": "WOODLAND CHARLOTTE BAG"
  
      },
  
      {
  
          "Description": "LUNCH BOX WITH CUTLERY RETROSPOT "
  
      },
  
      {
  
          "Description": "ICE CREAM BUBBLES"
  
      },
  
      {
  
          "Description": "GLASS CLOCHE SMALL"
  
      },
  
      {
  
          "Description": "GLASS BELL JAR SMALL"
  
      },
  
      {
  
          "Description": "MINI PLAYING CARDS SPACEBOY "
  
      },
  
      {
  
          "Description": "PANDA AND BUNNIES STICKER SHEET"
  
      },
  
      {
  
          "Description": " SET 2 TEA TOWELS I LOVE LONDON "
  
      },
  
      {
  
          "Description": "SET 2 TEA TOWELS I LOVE LONDON "
  
      },
  
      {
  
          "Description": "SPACEBOY MINI BACKPACK"
  
      },
  
      {
  
          "Description": "SPACEBOY MINI RUCKSACK"
  
      },
  
      {
  
          "Description": "SET/20 RED RETROSPOT PAPER NAPKINS "
  
      },
  
      {
  
          "Description": "WOODLAND PARTY BAG + STICKER SET"
  
      },
  
      {
  
          "Description": "POSTAGE"
  
      },
  
      {
  
          "Description": "STRAWBERRY LUNCH BOX WITH CUTLERY"
  
      },
  
      {
  
          "Description": "ALARM CLOCK BAKELIKE RED "
  
      },
  
      {
  
          "Description": "RED SPOT PAPER GIFT BAG"
  
      },
  
      {
  
          "Description": "WOODLAND  STICKERS"
  
      },
  
      {
  
          "Description": "PENS ASSORTED SPACEBALL"
  
      },
  
      {
  
          "Description": "RETROSPOT PARTY BAG + STICKER SET"
  
      },
  
      {
  
          "Description": "RIBBON REEL POLKADOTS "
  
      },
  
      {
  
          "Description": "60 CAKE CASES DOLLY GIRL DESIGN"
  
      },
  
      {
  
          "Description": "18PC WOODEN CUTLERY SET DISPOSABLE"
  
      },
  
      {
  
          "Description": "PACK OF 6 SKULL PAPER PLATES"
  
      },
  
      {
  
          "Description": "CHARLOTTE BAG PINK POLKADOT"
  
      },
  
      {
  
          "Description": "DOLLY GIRL MINI BACKPACK"
  
      },
  
      {
  
          "Description": "DOLLY GIRL MINI RUCKSACK"
  
      },
  
      {
  
          "Description": "VINTAGE CHRISTMAS PAPER GIFT BAG"
  
      },
  
      {
  
          "Description": "VINTAGE HEADS AND TAILS CARD GAME "
  
      },
  
      {
  
          "Description": "PACK OF 72 RETROSPOT CAKE CASES"
  
      },
  
      {
  
          "Description": "RED RETROSPOT APRON "
  
      },
  
      {
  
          "Description": "ALARM CLOCK BAKELIKE ORANGE"
  
      },
  
      {
  
          "Description": "12 PENCILS TALL TUBE WOODLAND"
  
      },
  
      {
  
          "Description": "RED RETROSPOT OVEN GLOVE "
  
      },
  
      {
  
          "Description": "SET 6 SCHOOL MILK BOTTLES IN CRATE"
  
      },
  
      {
  
          "Description": "PACK OF 20 SPACEBOY NAPKINS"
  
      },
  
      {
  
          "Description": "SET OF 72 RETROSPOT PAPER  DOILIES"
  
      },
  
      {
  
          "Description": "PLASTERS IN TIN WOODLAND ANIMALS"
  
      },
  
      {
  
          "Description": "PAPER BUNTING VINTAGE PARTY"
  
      },
  
      {
  
          "Description": "ALARM CLOCK BAKELIKE PINK"
  
      },
  
      {
  
          "Description": "PACK OF 12 CIRCUS PARADE TISSUES "
  
      },
  
      {
  
          "Description": "RED RETROSPOT PLATE "
  
      },
  
      {
  
          "Description": "MINI JIGSAW CIRCUS PARADE "
  
      },
  
      {
  
          "Description": "BLUE POLKADOT CUP"
  
      },
  
      {
  
          "Description": "MINI PLAYING CARDS FUN FAIR "
  
      },
  
      {
  
          "Description": "RED RETROSPOT CUP"
  
      },
  
      {
  
          "Description": "MINI PAINT SET VINTAGE "
  
      },
  
      {
  
          "Description": "WOODEN SCHOOL COLOURING SET"
  
      },
  
      {
  
          "Description": "SMALL POPCORN HOLDER"
  
      },
  
      {
  
          "Description": "POPCORN HOLDER"
  
      },
  
      {
  
          "Description": "ROUND SNACK BOXES SET OF 4 FRUITS "
  
      },
  
      {
  
          "Description": "FAIRY TALE COTTAGE NIGHTLIGHT"
  
      },
  
      {
  
          "Description": "FAIRY TALE COTTAGE NIGHT LIGHT"
  
      },
  
      {
  
          "Description": "SKULL AND CROSSBONES  GARLAND "
  
      },
  
      {
  
          "Description": "RED RETROSPOT CHARLOTTE BAG"
  
      },
  
      {
  
          "Description": "PACK OF 60 SPACEBOY CAKE CASES"
  
      },
  
      {
  
          "Description": "SET/6 RED SPOTTY PAPER CUPS"
  
      },
  
      {
  
          "Description": "SET 12 COLOUR PENCILS SPACEBOY "
  
      },
  
      {
  
          "Description": "ALARM CLOCK BAKELIKE IVORY"
  
      },
  
      {
  
          "Description": "SET OF 6 RIBBONS PERFECTLY PRETTY  "
  
      },
  
      {
  
          "Description": "PLASTERS IN TIN STRONGMAN"
  
      },
  
      {
  
          "Description": "36 FOIL STAR CAKE CASES "
  
      },
  
      {
  
          "Description": "INFLATABLE POLITICAL GLOBE "
  
      },
  
      {
  
          "Description": "PAPER CHAIN KIT RETROSPOT"
  
      },
  
      {
  
          "Description": "SKULLS PARTY BAG + STICKER SET"
  
      },
  
      {
  
          "Description": "FOLDING BUTTERFLY MIRROR HOT PINK "
  
      },
  
      {
  
          "Description": "FOLDING MIRROR HOT PINK "
  
      },
  
      {
  
          "Description": "SPACEBOY LUNCH BOX "
  
      },
  
      {
  
          "Description": "GIRAFFE WOODEN RULER"
  
      },
  
      {
  
          "Description": "CHILDS BREAKFAST SET CIRCUS PARADE"
  
      },
  
      {
  
          "Description": "STARS GIFT TAPE "
  
      },
  
      {
  
          "Description": "BALLOON PUMP WITH 10 BALLOONS"
  
      },
  
      {
  
          "Description": "GREEN POLKADOT PLATE "
  
      },
  
      {
  
          "Description": "PLASTERS IN TIN SPACEBOY"
  
      },
  
      {
  
          "Description": "CIRCUS PARADE LUNCH BOX "
  
      },
  
      {
  
          "Description": "I LOVE LONDON BABY GIFT SET"
  
      },
  
      {
  
          "Description": "WOODLAND MINI BACKPACK"
  
      },
  
      {
  
          "Description": "WOODLAND MINI RUCKSACK "
  
      },
  
      {
  
          "Description": "RETROSPOT CHILDRENS APRON"
  
      },
  
      {
  
          "Description": "VINTAGE SEASIDE JIGSAW PUZZLES"
  
      },
  
      {
  
          "Description": "MINI JIGSAW SPACEBOY"
  
      },
  
      {
  
          "Description": "FOLDING BUTTERFLY MIRROR RED  "
  
      },
  
      {
  
          "Description": "FOLDING MIRROR RED  "
  
      },
  
      {
  
          "Description": "PAPERWEIGHT CHILDHOOD MEMORIES"
  
      },
  
      {
  
          "Description": "SET OF 3 BUTTERFLY COOKIE CUTTERS"
  
      },
  
      {
  
          "Description": "RIBBON REEL FLORA + FAUNA "
  
      },
  
      {
  
          "Description": "RED RETROSPOT SHOPPING BAG"
  
      },
  
      {
  
          "Description": "12 PENCILS TALL TUBE RED RETROSPOT"
  
      },
  
      {
  
          "Description": "BAKING SET SPACEBOY DESIGN"
  
      },
  
      {
  
          "Description": "PACK OF 20 SKULL PAPER NAPKINS"
  
      },
  
      {
  
          "Description": "TRADITIONAL PICK UP STICKS GAME "
  
      },
  
      {
  
          "Description": "SET OF 20 VINTAGE CHRISTMAS NAPKINS"
  
      },
  
      {
  
          "Description": "EMBROIDERED RIBBON REEL DAISY "
  
      },
  
      {
  
          "Description": "SET 12 COLOUR PENCILS DOLLY GIRL "
  
      },
  
      {
  
          "Description": "PACK OF 12 SPACEBOY TISSUES"
  
      },
  
      {
  
          "Description": "SET/2 RED RETROSPOT TEA TOWELS "
  
      },
  
      {
  
          "Description": " SPACEBOY BABY GIFT SET"
  
      },
  
      {
  
          "Description": "PACK OF 60 MUSHROOM CAKE CASES"
  
      },
  
      {
  
          "Description": "SILVER BELLS TABLE DECORATION"
  
      },
  
      {
  
          "Description": "CHARLOTTE BAG DOLLY GIRL DESIGN"
  
      },
  
      {
  
          "Description": "LUNCH BOX I LOVE LONDON"
  
      },
  
      {
  
          "Description": "ROUND SNACK BOXES SET OF4 WOODLAND "
  
      },
  
      {
  
          "Description": "PLASTERS IN TIN CIRCUS PARADE "
  
      },
  
      {
  
          "Description": "ALARM CLOCK BAKELIKE GREEN"
  
      },
  
      {
  
          "Description": "SET/6 RED SPOTTY PAPER PLATES"
  
      },
  
      {
  
          "Description": "RED TOADSTOOL LED NIGHT LIGHT"
  
      },
  
      {
  
          "Description": "MINI JIGSAW DOLLY GIRL"
  
      },
  
      {
  
          "Description": "PACK OF 12 WOODLAND TISSUES "
  
      },
  
      {
  
          "Description": "SET/10 RED POLKADOT PARTY CANDLES"
  
      },
  
      {
  
          "Description": "PACK OF 6 SKULL PAPER CUPS"
  
      },
  
      {
  
          "Description": "PENS ASSORTED FUNNY FACE"
  
      },
  
      {
  
          "Description": "PACK OF 12 LONDON TISSUES "
  
      },
  
      {
  
          "Description": "SPOTTY BUNTING"
  
      },
  
      {
  
          "Description": "BUNTING , SPOTTY "
  
      },
  
      {
  
          "Description": "BLUE POLKADOT PLATE "
  
      },
  
      {
  
          "Description": "CIRCUS PARADE BABY GIFT SET"
  
      },
  
      {
  
          "Description": "RED RETROSPOT MINI CASES"
  
      },
  
      {
  
          "Description": "MINI LIGHTS WOODLAND MUSHROOMS"
  
      },
  
      {
  
          "Description": "RIBBON REEL STRIPES DESIGN "
  
      },
  
      {
  
          "Description": "CARTOON  PENCIL SHARPENERS"
  
      },
  
      {
  
          "Description": "CLASSIC GLASS SWEET JAR"
  
      },
  
      {
  
          "Description": "CLASSIC GLASS COOKIE JAR"
  
      },
  
      {
  
          "Description": "RABBIT NIGHT LIGHT"
  
      }
  
  ]
  display:boolean = false;
  itemDescriptions: string[] = [];
  userDescriptions: string[] = [];
   constructor(private router: Router) { 
    this.itemDescriptions = Object.values(this.ItemBased).map(item => item.Description);
    for (const item of this.UserBased) {
      this.userDescriptions.push(item.Description);
    }
   }
  
   ngOnInit(): void {
     
  
   }
  
   rowData1: any = {};
   rowData2: any = {}; 
   rowData3: any = {}; 
   isDendrogramVisible = false;
   panelOpenState = false;
   selectedAlgorithm: string = null;
 
   selectedInitMethod: string;
   selectedClusterRange: string;
   selectedIterations: string;
 
   selectedAlgorithm1: string = null;
   selectedClusteringMethod1: string;
   selectedClusterMetric: string;
 
   selectedAlgorithm2: string = null;
   selectedParam: string;
   imageSource: string;
 
   clickbutton:boolean=false;
   clickbuttonDB:boolean=false;
   clickbuttonDendro:boolean=false;
   isOptionSelectedA1 = false;
   isOptionSelectedA11 = false;
   isOptionSelectedA2 = false;
   isOptionSelectedA3 = false;
 
   epsValue: string;
 minSamples: string;
 clusterAg:string;
 clusterKm:string;
   onSelectAlgorithm() {
     if (this.selectedAlgorithm !== '') {
       this.isOptionSelectedA1 = true;
       this.isOptionSelectedA11 = true;
       
     } else {
       this.isOptionSelectedA1 = false;
       this.isOptionSelectedA11 = false;
      
     }
   }
 
   onSelectAlgorithm1(){
     if (this.selectedAlgorithm1 !== '') {
       
       this.isOptionSelectedA2 = true;
       
     } else {
       this.isOptionSelectedA2 = false;
       
     }
    
   }
 
   onSelectAlgorithm2(){
     if (this.selectedAlgorithm2 !== '') {
       
       this.isOptionSelectedA3 = true;
       
     } else {
       this.isOptionSelectedA3 = false;
       
     }
    
   }
   iconClicked(event: Event): void {
     // Code to handle icon click goes here
     // You can choose to close the panel here if needed
   }
 
  
 
   runButtonClicked(event: Event): void {
     event.stopPropagation();
     
     // Code to handle "Run" button click goes here
     // The panel will not close due to event.stopPropagation()
   }
   isLoadingKM = false;
   runButtonClicked1(event: Event): void {
     this.isLoadingKM = true;
     event.stopPropagation();
     this.clickbutton=true;
     setTimeout(() => {
       this.isLoadingKM = false;
     }, 3000); // 3 seconds delay
    
   }
   
   isLoading = false;
   runButtonClickedDB(event: Event): void {
     this. isLoading = true;
     event.stopPropagation();
     this.clickbuttonDB=true;
     setTimeout(() => {
       this.isLoading = false;
     }, 3000); // 3 seconds delay
     // Code to handle "Run" button click goes here
     // The panel will not close due to event.stopPropagation()
   }
 
  isLoading1 = false;
  showContent() 
  { 
    this.display= true
   
    console.log('K Means:', this.rowData1); 
    console.log('Agglomerative Hierarchical:', this.rowData2); 
    console.log('DB Scan:', this.rowData3);
  } 
  gotoAnalysis(){
   
    this.isLoading1 = true;
    setTimeout(() => {
      this.router.navigate(['./analysis']).then(() => {
        this.isLoading1 = false;
      });
    }, 3000); // Delay of 3 seconds
   
  }

  
  isLoadingDendro = false;
  runButtonClickedDendro(event: Event): void {
    this.isLoadingDendro = true;
    event.stopPropagation();
    this.clickbuttonDendro=true;
    setTimeout(() => {
      this.isLoadingDendro = false;
    }, 3000); // 3 seconds delay
   
    
  }
  slidedValue: number = 0.5;
  slidedValue1: number = 0.7;
  displaySliderValue(): string {
    return (this.slidedValue * 100).toFixed(0) + '%';
  }
  
}
