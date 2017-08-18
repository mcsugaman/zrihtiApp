import { Component, OnInit } from '@angular/core';

import {CheckboxModel} from '../models/CheckboxModel';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {

  public regionIsCollapsed = true;
  public priceSetterIsCollapsed = true;

  placesJson: any;
  priceSetterJson: any;

  placesList: Array<Array<CheckboxModel>>;
  priceSetterList: Array<Array<CheckboxModel>>;

  priceSetterCollapsed: Array<boolean>;
  placesCollapsed: Array<boolean>;

  selectedPriceSettersList: Array<string>; //lista ID-jev (COD-ov), ki pove, kateri PriceSetterji so selektani
  selectedPlacesList: Array<string>;

  priceFrom: number;
  priceTo: number;

  constructor() {
    this.priceFrom = 0;
    this.priceTo = 9999;

    this.priceSetterList = new Array<Array<CheckboxModel>>();//new Array<CheckboxModel>();
    this.selectedPriceSettersList = new Array<string>();
    this.priceSetterCollapsed = new Array<boolean>();

    this.placesList = new Array<Array<CheckboxModel>>();
    this.selectedPlacesList = new Array<string>();
    this.placesCollapsed = new Array<boolean>();


   }
  

  ngOnInit() {
    this.createSidebarMenu();
  }

  createSidebarMenu () {
    this.priceSetterJson = {
      "PriceSetterTypes": [
        {
          "ID_PriceSetterTypeCOD": "1",
          "Name": "Omejitev v dnevu",
          "PriceSetters": [
            {
               "ID_Price_SetterCOD": "1",
               "Name": "Dopoldanska karta"
            }
          ]
        },
        {
          "ID_PriceSetterTypeCOD": "2",
          "Name": "Statusna omejitev",
          "PriceSetters": [
            {
               "ID_Price_SetterCOD": "2",
               "Name": "Študent"
            },
            {
               "ID_Price_SetterCOD": "3",
               "Name": "Upokojenec"
            }
          ]
        }
      ]
    };

    let indexOfPriceSetterType = 0;
    for (let priceSetterTypeItem of this.priceSetterJson["PriceSetterTypes"]){
      this.priceSetterCollapsed.push(true);//to uporabljamo zato, da vemo katere DIV-e collapsat
      this.priceSetterList.push(new Array<CheckboxModel>());
      let priceSetterItem: CheckboxModel = new CheckboxModel();//Element priceSetterTypeItem pushamo na prvo mesto v listo in je nekaksen PARENT ITEM !!!
        priceSetterItem.Id = priceSetterTypeItem.ID_Price_SetterCOD;
        priceSetterItem.Name = priceSetterTypeItem.Name;
        this.priceSetterList[indexOfPriceSetterType].push(priceSetterItem);
        //nato se sprehhodimo se skozi elemente, ki so CHILD-i od tega parenta in jih dodamo na naslednja prosta mesta v 2D Array
      for(let priceSetter of priceSetterTypeItem.PriceSetters){
        let priceSetterItem: CheckboxModel = new CheckboxModel();
        priceSetterItem.Id = priceSetter.ID_Price_SetterCOD;
        priceSetterItem.Name = priceSetter.Name;
        priceSetterItem.Checked = false;
        
        this.priceSetterList[indexOfPriceSetterType].push(priceSetterItem);
      }
      indexOfPriceSetterType++;
    }



     this.placesJson = {
        "Provinces":[ 
  {
    "Name": "Ljubljana",
    "ID_ProvinceCOD": "1",
    "Places": [
      {
        "Name" : "Ljubljana-Vič",
        "ID_PlaceCOD" : "1"
      },
      {
        "Name" : "Ljubljana-Šiška",
        "ID_PlaceCOD" : "2"
      },
      {
        "Name" : "Ljubljana-Center",
        "ID_PlaceCOD" : "3"
      }
      
    ]
  },
  {
    "Name": "Maribor",
    "ID_ProvinceCOD": "2",
    "Places": [
      {
        "Name": "Maribor-Center",
        "ID_PlaceCOD": "4"
      },
      {
        "Name": "Maribor-Vzhod",
        "ID_PlaceCOD": "5"
      },
      {
        "Name": "Maribor-Zahod",
        "ID_PlaceCOD": "6"
      }
    ]
  }
  ]
};

  let indexOfProvince = 0;
    for (let provinceItem of this.placesJson["Provinces"]){
      this.placesCollapsed.push(true);//to uporabljamo zato, da vemo katere DIV-e collapsat
      this.placesList.push(new Array<CheckboxModel>());
      let place: CheckboxModel = new CheckboxModel();//Element provice pushamo na prvo mesto v listo in je nekaksen PARENT ITEM !!!
        place.Id = provinceItem.ID_ProvinceCOD;
        place.Name = provinceItem.Name;
        this.placesList[indexOfProvince].push(place);
        //nato se sprehhodimo se skozi elemente, ki so CHILD-i od tega parenta in jih dodamo na naslednja prosta mesta v 2D Array
      for(let placeItem of provinceItem.Places){
        let place: CheckboxModel = new CheckboxModel();
        place.Id = placeItem.ID_PlaceCOD;
        place.Name = placeItem.Name;
        place.Checked = false;
        
        this.placesList[indexOfProvince].push(place);
      }
      indexOfProvince++;
    }

  }//createSidebarMenu


  checkboxChangedRegionParent(id: string, event){
    if(event.target.checked){//dodamo na listo
      this.selectedPlacesList.push(id);
    }else if (!event.target.checked){//odstranimo iz liste
      let index = this.selectedPlacesList.indexOf(id);
      if(index !== -1){
        this.selectedPlacesList.splice(index,1);alert("lol");
      }
    }
    //this.refreshSearchList();//OSVEZIMO search listo z novimi filtri
  }//end checkboxChangedRegionParent


  priceSetterCheckboxChanged(id: string, event){alert("Id je : " + id);
    if(event.target.checked){//dodamo na listo
      this.selectedPriceSettersList.push(id);
    }else if (!event.target.checked){//odstranimo iz liste
      let index = this.selectedPriceSettersList.indexOf(id);
      if(index !== -1){
        this.selectedPriceSettersList.splice(index,1);
      }
    }
    //this.refreshSearchList();//OSVEZIMO search listo z novimi filtri
  }//priceSetterCheckboxChanged


  refreshSearchList(){
    alert("priceFrom: " + this.priceFrom + "priceTo:" + this.priceTo);
    //tukaj posljemo vse liste izbranih price setterjev in krajev in ostalih filtrou, da lahko porefresamo listo serviceov,
    //ce v listi izbranih za določen filter ni nobenega izbranega filtra, moramo prikazati vse rezultate
  }//end refreshSearchList
}
