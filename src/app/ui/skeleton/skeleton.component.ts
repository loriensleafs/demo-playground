import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { cxs } from "./../system";
import { proxyAttr } from "./../../utils";
import { keyframes } from "emotion";

const baseStyle = (colorStart: string, colorEnd: string) => ({
  color: "transparent",
  cursor: "default",
  bgClip: "padding-box",
  boxShadow: "none",
  borderRadius: "sm",
  userSelect: "none",
  overflow: "hidden",
  animation:
    "0.9s linear infinite alternate" +
    " " +
    keyframes({
      from: { backgroundColor: colorStart },
      to: { backgroundColor: colorEnd }
    })
});

//
// ─────────────────────────────────────────────────────── SKELETON COMPONENT ─────
//

@Component({
  selector: "skeleton",
  template: `
    <div [ngClass]="_class" sx h="6" w="100%"></div>
  `
})
export class Skeleton implements AfterViewInit {
  @Input()
  get _class(): string {
    return cxs(baseStyle(this.colorStart, this.colorEnd));
  }

  /* ---------------------------------- */

  /**
   * The color of the start of the animation.
   */
  @Input() colorStart: string = "#f5f5f5";

  /**
   * The color of the end of the animation.
   */
  @Input() colorEnd: string = "#dedede";

  /* ---------------------------------- */

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className");
    proxyAttr(this.el, "style");
  }
}

//
// ──────────────────────────────────────────────── SKELETON CIRCLE COMPONENT ─────
//

@Component({
  selector: "skeleton-circle",
  template: `
    <div [ngClass]="_class" sx h="10" w="10" borderRadius="50%"></div>
  `
})
export class SkeletonCircle implements AfterViewInit {
  @Input()
  get _class(): string {
    return cxs(baseStyle(this.colorStart, this.colorEnd));
  }

  /* ---------------------------------- */

  /**
   * The color of the start of the animation.
   */
  @Input() colorStart: string = "#f5f5f5";

  /**
   * The color of the end of the animation.
   */
  @Input() colorEnd: string = "#dedede";

  /* ---------------------------------- */

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className");
    proxyAttr(this.el, "style");
  }
}

//
// ────────────────────────────────────────────────── SKELETON TEXT COMPONENT ─────
//

@Component({
  selector: "skeleton-text",
  template: `
    <div
      ngFor="let line of Array.from(noOfLines).fill(0)"
      [ngClass]="_class"
      sx
      h="2"
      w="100%"
      my="spacing"
    ></div>
  `
})
export class SkeletonText implements AfterViewInit {
  @Input()
  get _class(): string {
    return cxs(baseStyle(this.colorStart, this.colorEnd));
  }

  /* ---------------------------------- */

  /**
   * The color of the start of the animation.
   */
  @Input() colorStart: string = "#f5f5f5";

  /**
   * The color of the end of the animation.
   */
  @Input() colorEnd: string = "#dedede";

  /**
   * The number of lines in the skeleton.
   */
  @Input() noOfLines: number = 3;

  /**
   * The space between each line.
   */
  @Input() spacing: number | string = 2;

  /* ---------------------------------- */

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className");
    proxyAttr(this.el, "style");
  }
}
