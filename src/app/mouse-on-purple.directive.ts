import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMouseOnPurple]',
  standalone: true
})
export class MouseOnPurpleDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('slateblue');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
