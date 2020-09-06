import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appCapital]' // name using in any DOM element <div appCapital></div>
})

export class CapitalDirective implements OnInit{
  constructor(private elmRef: ElementRef) {
  }

  ngOnInit() {
      this.elmRef.nativeElement.style.textTransform = 'uppercase';
  }
}
