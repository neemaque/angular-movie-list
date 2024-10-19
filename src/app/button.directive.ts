import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appButton]',
  standalone: true
})
export class ButtonDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('slateblue');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
