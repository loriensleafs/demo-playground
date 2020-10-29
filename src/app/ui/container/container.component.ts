import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { proxyAttr } from "./../../utils";

//
// ────────────────────────────────────────────────────── CONTAINER COMPONENT ─────
//

@Component({
  selector: "container",
  template: `
    <div
      sx
      maxW="['700px', null, '1015px']"
      mx="auto"
      py="0"
      px="['0px', '8px', '64px', '0px']"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class Container implements AfterViewInit {
  constructor(protected el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "class", { removeSrcAttr: true });
    proxyAttr(this.el, "style", { removeSrcAttr: true });
  }
}
