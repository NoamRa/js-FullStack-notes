import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mul-table',
  templateUrl: './mul-table.component.html',
  styleUrls: ['./mul-table.component.css']
})
export class MulTableComponent{
  

  gSize = 10;

  generateGrid(gSize:number):number[][] {
    let grid: number[][];
    grid = new Array<Array<number>>(gSize);
    for (let i=0 ; i < gSize; i++) {
      grid[i] = new Array<number>(gSize);
      for (let j = 0; j < gSize; j++) {
        grid[i][j] = (i*10) + (j+1);
      }
    }
    return grid;
  }

  grid = this.generateGrid(this.gSize);


}
