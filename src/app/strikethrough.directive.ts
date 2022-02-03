import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostBinding('class.larger') isLarger = false

  @HostListener('click') toggleStrikethrough() {
    // using native element.
    const buttonEl = this.elRef.nativeElement
    const isStruck = buttonEl.classList.contains('struck')
    buttonEl.classList.toggle('struck', !isStruck)

    // using renderer
    const isNavy = buttonEl.classList.contains('navy')
    buttonEl.classList.toggle('navy', !isNavy)

    this.isLarger = !this.isLarger
  }
}
