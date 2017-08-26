import { Component, OnInit } from '@angular/core';

import {SelectDropDownItem} from '../models/SelectDropDownItem';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  array=[];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction= '';

  OrderByOptionsList: Array<SelectDropDownItem>;
  selectedOrderByOption: SelectDropDownItem;


  constructor() {
    this.OrderByOptionsList = new Array<SelectDropDownItem>();
    this.fillOrderByOptionsList();
    this.selectedOrderByOption = this.OrderByOptionsList[0];
    

    this.appendItems(0, this.sum);

   }

  ngOnInit() {
  }

  fillOrderByOptionsList(){
    let item: SelectDropDownItem = new SelectDropDownItem();
    item.value = 1; item.name = "po ceni: padajoče"; this.OrderByOptionsList.push(item);
    item = new SelectDropDownItem; item.value = 2; item.name = "po ceni: naraščajoče"; this.OrderByOptionsList.push(item);
    item = new SelectDropDownItem; item.value = 3; item.name = "po datumu: padajoče"; this.OrderByOptionsList.push(item);
    item = new SelectDropDownItem; item.value = 4; item.name = "po datumu: naraščajoče"; this.OrderByOptionsList.push(item);
  }

  addItems(startIndex, endIndex, _method){
    for(let i = startIndex ; i < this.sum; i++){
      this.array[_method]([i,' ', this.generateWord()].join(''));
    }
  }

  appendItems(startIndex, endIndex){
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex){
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown(){
    //dodaj naslednjih 20 itemov
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = 'down';
  }

  generateWord(){
    return "Lol";
  }

}
