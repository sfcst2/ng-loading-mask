import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loading-mask',
  templateUrl: './loading-mask.component.html',
  styleUrls: ['./loading-mask.component.css']
})
export class LoadingMaskComponent implements OnInit, AfterViewInit {

  @Input("loadingMessage")
  loadingMessage: string;

  @Input('appendTo')
  appendTo: string;

  container: any;

  loadingClass:string = 'element-loading-mask';

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.container = this.el.nativeElement.children[0];
    if (this.appendTo) {
      if (this.appendTo === 'body'){
        this.loadingClass = 'body-loading-mask';
        document.body.appendChild(this.container);
      }else{
        this.appendChild(this.container, this.appendTo);
      }      
    }
  }

  appendChild(element: any, target: any) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else
      throw 'Cannot append ' + target + ' to ' + element;
  }

  isElement(obj: any) {
    return (typeof HTMLElement === "object" ? obj instanceof HTMLElement :
      obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string"
    );
  }
}
