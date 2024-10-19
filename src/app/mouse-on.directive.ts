import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMouseOn]',
  standalone: true
})
export class MouseOnDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('aliceblue');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
