import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMovie]',
  standalone: true
})
export class MovieDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.move();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.unMove();
  }
  private move() {
    this.el.nativeElement.style.marginBottom = "60px";
  }
  
  private unMove(){
    this.el.nativeElement.style.marginBottom = "30px";
  }
}
