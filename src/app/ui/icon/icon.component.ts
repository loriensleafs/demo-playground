import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { proxyAttr } from "./../../utils";

//
// ─────────────────────────────────────────────────────────── ICON COMPONENT ─────
//

@Component({
  exportAs: "Icon",
  selector: "icon",
  template: `
    <i
      class="material-icons"
      sx
      d="flex"
      alignItems="center"
      justifyContent="center"
      h="{{ size }}"
      color="text.secondary"
      fontSize="{{ size }} !important"
      lineHeight="{{ size }} !important"
    >
      {{ icon }}
    </i>
  `
})
export class Icon implements AfterViewInit {
  @Input() icon: string = "info";

  /* ---------------------------------- */

  @Input()
  set size(val: any) {
    this._size = val;
  }
  get size(): any {
    switch (this._size) {
      case "xs":
        return "1rem";
      case "sm":
        return "1.25rem";
      case "md":
        return "1.5rem";
      case "lg":
        return "2rem";
      case "xl":
        return "2.5rem";
    }
  }
  protected _size: "xs" | "sm" | "md" | "lg" | "xl" = "md";

  /* ---------------------------------- */

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className");
  }
}
