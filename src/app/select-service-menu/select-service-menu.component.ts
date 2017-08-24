import { Component, OnInit } from '@angular/core';

import {SelectServiceItemModel} from '../models/SelectServiceItemModel';


@Component({
  selector: 'app-select-service-menu',
  templateUrl: './select-service-menu.component.html',
  styleUrls: ['./select-service-menu.component.scss']
})
export class SelectServiceMenuComponent implements OnInit {
  selectedCategoryId:number;//to kategorijo mors dobit kot input
  selectedServiceId: number;//to se pa seta ob izbiri service-a iz menija service-ov



  indexToItemsColumnOne: number;//stevilo elementov prvi stolpec
  indexToItemsColumnTwo: number;//stevilo elementov drugi stolpec
  indexToItemsColumnThree: number;//stevilo elementov tretji stolpec

  selectServiceJson:any;

  selectServiceItemsList: Array<SelectServiceItemModel>;

  constructor() {
    this.selectServiceItemsList = new Array<SelectServiceItemModel>();
   }

  ngOnInit() {
    this.selectedCategoryId = 1;
    this.generateSelectServiceMenu();
  }

  generateSelectServiceMenu(){
    this.selectServiceJson = 
    {
      "Categories": 
      [
          {
            "ID_CategoryCOD":"1",
            "Name": "Fitness",
            "Services":
            [
              {
                "ID_ServiceCOD":"1",
                "Name":"Fitnes1"
              },
              {
                "ID_ServiceCOD":"2",
                "Name":"Savna2"
              },
              {
                "ID_ServiceCOD":"3",
                "Name":"Vodena vadba3"
              },
              {
                "ID_ServiceCOD":"1",
                "Name":"Fitnes4"
              },
              {
                "ID_ServiceCOD":"2",
                "Name":"Savna5"
              },
              {
                "ID_ServiceCOD":"3",
                "Name":"Vodena vadba6"
              },
              {
                "ID_ServiceCOD":"1",
                "Name":"Fitnes7"
              },
              {
                "ID_ServiceCOD":"2",
                "Name":"Savna8"
              },
              {
                "ID_ServiceCOD":"3",
                "Name":"Vodena vadba9"
              },
              {
                "ID_ServiceCOD":"1",
                "Name":"Fitnes10"
              },
              {
                "ID_ServiceCOD":"2",
                "Name":"Savna11"
              },
              {
                "ID_ServiceCOD":"3",
                "Name":"Vodena vadba12"
              },
              {
                "ID_ServiceCOD":"1",
                "Name":"Fitnes13"
              },
              {
                "ID_ServiceCOD":"2",
                "Name":"Savna14"
              },
              {
                "ID_ServiceCOD":"3",
                "Name":"Vodena vadba15"
              },
              {
                "ID_ServiceCOD":"1",
                "Name":"Fitnes16"
              }/*,
              {
                "ID_ServiceCOD":"2",
                "Name":"Savna17"
              } ,
              {
                "ID_ServiceCOD":"3",
                "Name":"Vodena vadba18"
              } */
            ]
          },
          {
            "ID_CategoryCOD":"2",
            "Name": "Telovadba",
            "Services":
            [
              {
                "ID_ServiceCOD":"1",
                "Name":"Baba sada "
              },
              {
                "ID_ServiceCOD":"2",
                "Name":"Sava  asd sa da "
              },
              {
                "ID_ServiceCOD":"3",
                "Name":"Caca adcas s"
              }
            ]
          }
      ]
    };
    //Napolnimo listo z Service-i, ki so v tej kategoriji
    for(let categoryItem of this.selectServiceJson["Categories"]){
      if(categoryItem.ID_CategoryCOD == this.selectedCategoryId.toString()){
        for(let serviceItem of categoryItem.Services){
          let servItem: SelectServiceItemModel = new SelectServiceItemModel();
          servItem.Id = serviceItem.ID_ServiceCOD;
          servItem.Name = serviceItem.Name;
          this.selectServiceItemsList.push(servItem);
        }
      }
    }
    this.calculateColumnItemsDistribution();
    
  }
  //razporeditev elementov po stolpcih
  calculateColumnItemsDistribution(){
    let numberOfItemsPerColumn = Math.floor(this.selectServiceItemsList.length / 3);
    let remindPart = this.selectServiceItemsList.length % 3;alert("Remind je: " + remindPart);
    if(remindPart == 0){
      this.indexToItemsColumnOne = numberOfItemsPerColumn;
      this.indexToItemsColumnTwo = this.indexToItemsColumnOne + numberOfItemsPerColumn;
      this.indexToItemsColumnThree = this.indexToItemsColumnTwo + numberOfItemsPerColumn;
    }else if(remindPart == 1){
      this.indexToItemsColumnOne = numberOfItemsPerColumn + 1;
      this.indexToItemsColumnTwo = this.indexToItemsColumnOne + numberOfItemsPerColumn;
      this.indexToItemsColumnThree = this.indexToItemsColumnTwo + numberOfItemsPerColumn;
    }else if(remindPart == 2){
      this.indexToItemsColumnOne = numberOfItemsPerColumn + 1;
      this.indexToItemsColumnTwo = this.indexToItemsColumnOne + numberOfItemsPerColumn + 1;
      this.indexToItemsColumnThree = this.indexToItemsColumnTwo + numberOfItemsPerColumn;
    }
  }

  refreshSelectedService(id:number){
    //alert("selectedService je : " + id);
    this.selectedServiceId = id;
  }

}
