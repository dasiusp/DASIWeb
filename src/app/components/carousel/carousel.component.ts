import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-carousel",
  exportAs: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.sass"],
})
export class CarouselComponent implements OnInit {
  carousel;
  container;
  prevBtn;
  nextBtn;
  pagination;
  bullets;
  totalItems;
  percent;
  currentIndex = 0;

  @Input() width = 0;
  @Input() height = 0;

  constructor() {}

  slideTo(index) {
    index =
      index < 0 ? this.totalItems - 1 : index >= this.totalItems ? 0 : index;
    this.container.style.transform = this.container.style.transform =
      "translate(-" + index * this.percent + "%, 0)";
    this.bullets[this.currentIndex].classList.remove("active-bullet");
    this.bullets[index].classList.add("active-bullet");
    this.currentIndex = index;
  }

  next() {
    this.slideTo(this.currentIndex + 1);
  }

  prev() {
    this.slideTo(this.currentIndex - 1);
  }

  ngOnInit() {
    this.carousel = document.querySelector(".carousel");
    this.container = this.carousel.querySelector(
      ".carousel-container"
    ) as HTMLElement;
    this.prevBtn = this.carousel.querySelector(".carousel-prev");
    this.nextBtn = this.carousel.querySelector(".carousel-next");
    this.pagination = this.carousel.querySelector(".carousel-pagination");
    this.bullets = [].slice.call(
      this.carousel.querySelectorAll(".carousel-bullet")
    );
    this.totalItems = this.container.querySelectorAll(".carousel-item").length;
    this.percent = 100 / (this.totalItems + 1);
    this.currentIndex = 0;

    this.bullets[this.currentIndex].classList.add("active-bullet");

    this.pagination.addEventListener(
      "click",
      function (e) {
        const index = this.bullets.indexOf(e.target);
        if (index !== -1 && index !== this.currentIndex) {
          this.slideTo(index);
        }
      },
      false
    );

    if (this.width !== 0) {
      document.getElementById("carousel").style.width = this.width + "vw";
    }
    if (this.height !== 0) {
      document.getElementById("content").style.height = this.height + "vh";
    }
  }
}
