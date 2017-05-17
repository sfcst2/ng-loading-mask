import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  @ViewChild('loadingDiv')
  appendToNode:ElementRef;

  ngOnInit():void{
    console.log("In ng on init");

  }
}
/*
.loading-mask{
    width: 100%;
    height: 100%;
    background-color: rgba(255, 0, 0, .5);
    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;        
    
}

.loading-mask > * { 
    flex: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;  
}
*/