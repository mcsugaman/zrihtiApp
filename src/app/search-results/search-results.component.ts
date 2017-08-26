import { Component, OnInit } from '@angular/core';

import {SelectServiceItemModel} from '../models/SelectServiceItemModel';

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

  OrderByOptionsList: Array<SelectServiceItemModel>;
  selectedOrderByOption: SelectServiceItemModel;


  constructor() {
    this.OrderByOptionsList = new Array<SelectServiceItemModel>();
    this.selectedOrderByOption = new SelectServiceItemModel();
    this.fillOrderByOptionsList();

    this.appendItems(0, this.sum);

   }

  ngOnInit() {
  }

  fillOrderByOptionsList(){
    let item: SelectServiceItemModel = new SelectServiceItemModel();
    item.Id = "1"; item.Name = "po ceni: padajoče"; this.OrderByOptionsList.push(item);
    item = new SelectServiceItemModel; item.Id = "2"; item.Name = "po ceni: naraščajoče"; this.OrderByOptionsList.push(item);
    item = new SelectServiceItemModel; item.Id = "3"; item.Name = "po datumu: padajoče"; this.OrderByOptionsList.push(item);
    item = new SelectServiceItemModel; item.Id = "4"; item.Name = "po datumu: naraščajoče"; this.OrderByOptionsList.push(item);
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
