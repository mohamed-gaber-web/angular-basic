import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
  AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native, Emulated // Css Encapsulation
})
export class ServerElementComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input('serverElm') server: {type: string, name: string, content: string}
  @Input() username = 'ahmed';
  @Input() age: number;
  @Input() hobbies = [];
  @ViewChild('test') Test: ElementRef;
  @ViewChild('content') testContent: ElementRef; // ngAfterViewInit()

   @ContentChild('textContentParagraph') textContentParagraph: ElementRef; // ngAfterContentInit()

  constructor() { }

  ngOnInit(){

  }

  ngAfterViewInit() {
    console.log('Hay ' + this.Test.nativeElement.className);
    console.log('Hay ' + this.testContent.nativeElement.className);
  }

  ngAfterContentInit() {
    console.log(this.textContentParagraph.nativeElement.textContent);
  }

  getValue() {
    console.log('Hay ' + this.Test.nativeElement.className);
  }

}
/*
* Input
* @input(alias)
* alias
* with component <app-component [elelemnt or alias]=""></app-component>
* @ViewChild('#local') Local: ElementRef; ngAfterViewInit() => Hook
* @ContentChild('#local') local:ElementRef;
* */
