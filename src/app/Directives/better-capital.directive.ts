import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterCapital]'
})

export class BetterCapitalDirective implements OnInit{
  @Input() defaultTextTransform: string = 'lowercase';
  @Input('appBetterCapital') textTransformData: string = 'uppercase';

  @HostBinding('style.textTransform') changeTextTransform: string = this.defaultTextTransform;
  constructor(private elmRef: ElementRef, private renderer: Renderer2) {
    // Renderer2 => class abstraction
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elmRef.nativeElement, 'textTransform', 'uppercase');
  }

  @HostListener('click') click(eventData: Event) {
    // this.renderer.setStyle(this.elmRef.nativeElement, 'textTransform', 'uppercase');
    this.changeTextTransform = this.textTransformData; // use with HostBinding
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elmRef.nativeElement, 'textTransform', 'lowercase');
    this.changeTextTransform = this.defaultTextTransform; // use with HostBinding
  }
}
