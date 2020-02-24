import { Component, Directive, ContentChildren, QueryList, AfterViewInit, ViewChildren, ElementRef, ViewChild, Input } from '@angular/core';
import { CarouselItemDirective } from 'src/app/directives/carousel-item.directive';
import { AnimationPlayer, AnimationBuilder, AnimationFactory, animate, style } from '@angular/animations';

@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {
}

@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  template: './carousel.component.html',
  styles: ['./carousel.component.sass']
})
export class CarouselComponent implements AfterViewInit {

  carouselWrapperStyle = {};
  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel', {static: false}) private carousel: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;

  constructor( private builder: AnimationBuilder ) {
  }

  next() {
    if ( this.currentSlide + 1 === this.items.length ) {
      return;
    }

    this.currentSlide = (this.currentSlide + 1) % this.items.length;

    const offset = this.currentSlide * this.itemWidth;

    const myAnimation: AnimationFactory = this.builder.build([
       animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  prev() {
    if ( this.currentSlide === 0 ) {
      return;
    }

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation : AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
   }

  ngAfterViewInit() {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth}px`
    };
  }
}
