import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { theme } from "./../system";
import { proxyAttr } from "./../../utils";

//
// ─────────────────────────────────────────────────────────── CARD COMPONENT ─────
//

@Component({
  selector: "card",
  template: `
    <div
      sx
      pos="relative"
      bg="bg.paper"
      borderRadius="md"
      border="1px solid divider.light"
      boxShadow="{{ variant }}"
      transition="{{ transition }}"
      styles="{
        '& > [card-content]': { 'borderRadius': 'md' }
      }"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class Card implements AfterViewInit {
  public transition: string = theme.transition("box-shadow");

  @Input()
  get variant(): any {
    return this._variant === "outlined" ? "none" : "xs";
  }
  set variant(val: any) {
    this._variant = val;
  }
  protected _variant: string = "xs";

  /* ---------------------------------- */

  constructor(protected el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className");
    proxyAttr(this.el, "style");
  }
}

//
// ──────────────────────────────────────────────────── CARD HEADER COMPONENT ─────
//

@Component({
  selector: "card-header",
  template: `
    <div
      sx
      py="6"
      px="12"
      borderRadiusTopLeft="md"
      borderRadiusTopRight="md"
      borderBottom="{{ borderBottom }}"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardHeader implements AfterViewInit {
  @Input()
  public set hasDivider(val: boolean) {
    this.borderBottom = val ? "1px solid divider.main" : "0px solid";
  }

  public borderBottom: string = "0px solid";

  /* ---------------------------------- */

  constructor(protected el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className");
    proxyAttr(this.el, "style");
  }
}

//
// ─────────────────────────────────────────────────── CARD CONTENT COMPONENT ─────
//

@Component({
  selector: "card-content",
  template: `
    <div sx py="6" px="12">
      <ng-content></ng-content>
    </div>
  `
})
export class CardContent implements AfterViewInit {
  constructor(protected el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className", { removeSrcAttr: true });
    proxyAttr(this.el, "style");
  }
}

//
// ─────────────────────────────────────────────────── CARD ACTIONS COMPONENT ─────
//

@Component({
  selector: "card-actions",
  template: `
    <div
      sx
      w="100%"
      py="4"
      px="8"
      d="flex"
      alignItems="{{ align }}"
      justifyContent="{{ justify }}"
      bg="bg.paper"
      borderRadiusBottomLeft="md"
      borderRadiusBottomRight="md"
      borderTop="{{ borderTop }}"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardActions implements AfterViewInit {
  @Input()
  public set hasDivider(val: boolean) {
    this.borderTop = val ? "1px solid divider.main" : "0px solid";
  }
  public borderTop: string = "0px solid";

  @Input() public align: string = "center";

  @Input() public justify: string;

  /* ---------------------------------- */

  constructor(protected el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className");
    proxyAttr(this.el, "style");
  }
}
