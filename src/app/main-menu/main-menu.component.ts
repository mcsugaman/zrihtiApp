import { Component, OnInit } from '@angular/core';

import {MainMenuItemModel} from '../models/MainMenuItemModel';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  mainMenuJson:any;

  mainMenuItemsList: Array<Array<MainMenuItemModel>>;

  constructor() {
    this.mainMenuItemsList = new Array<Array<MainMenuItemModel>>();
    
    this.generateMainMenu();
  }
    

  ngOnInit() {
  }

  generateMainMenu (){
    this.mainMenuJson = {
	"Areas":[
		{
			"ID_AreaCOD":"7",
			"Name": "Zdravje in lepota",
			"Categories": [
				{
					"ID_CategoryCOD":"1",
					"Name": "Fitnes"
				},
				{
					"ID_CategoryCOD":"2",
					"Name": "Telovadba"
				}
			]
		},
		{
			"ID_AreaCOD":"8",
			"Name": "Prosti čas in zabava",
			"Categories": [
				{
					"ID_CategoryCOD":"1",
					"Name": "Fitnes"
				},
				{
					"ID_CategoryCOD":"2",
					"Name": "Telovadba"
				}
			]
		},
		{
			"ID_AreaCOD":"9",
			"Name": "Mobilnost",
			"Categories": [
				{
					"ID_CategoryCOD":"1",
					"Name": "Fitnes"
				},
				{
					"ID_CategoryCOD":"2",
					"Name": "Telovadba"
				}
			]
		},
		{
			"ID_AreaCOD":"10",
			"Name": "Paketi in naročnine",
			"Categories": [
				{
					"ID_CategoryCOD":"1",
					"Name": "Fitnes"
				},
				{
					"ID_CategoryCOD":"2",
					"Name": "Telovadba"
				}
			]
		},
		{
			"ID_AreaCOD":"11",
			"Name": "Šport",
			"Categories": [
				{
					"ID_CategoryCOD":"1",
					"Name": "Fitnes"
				},
				{
					"ID_CategoryCOD":"2",
					"Name": "Telovadba"
				}
			]
		}
	]
};

let indexOfMainItem = 0;
for(let mainItem of this.mainMenuJson["Areas"]){
  this.mainMenuItemsList.push(new Array<MainMenuItemModel>());
  let main: MainMenuItemModel = new MainMenuItemModel();//top element pushamo na prvo mesto v listo
  main.Id = mainItem.ID_AreaCOD;
  main.Name = mainItem.Name;
  this.mainMenuItemsList[indexOfMainItem].push(main);
  //nato se sprehodimo se skozi njegove childe in jih dodamo v 2D listo na Index, kjer je njihov parent
  for(let subItem of mainItem.Categories){
    let sub: MainMenuItemModel = new MainMenuItemModel();
    sub.Id = subItem.ID_CategoryCOD;
    sub.Name = subItem.Name;
    this.mainMenuItemsList[indexOfMainItem].push(sub);
  }
  indexOfMainItem ++;
}
  }

}
