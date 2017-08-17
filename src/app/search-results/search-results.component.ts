import { Component, OnInit } from '@angular/core';

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


  constructor() {
    this.appendItems(0, this.sum);
   }

  ngOnInit() {
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

  onScrollDown(ev){
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
