import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { proxyAttr } from "./../../utils";

//
// ─────────────────────────────────────────────────────────── FLEX COMPONENT ─────
//

@Component({
  selector: "flex",
  template: `
    <div
      sx
      d="{{ isInline ? 'inline-flex' : 'flex' }}"
      alignItems="{{ align }}"
      flexBasis="{{ basis }}"
      flexDirection="{{ direction }}"
      flexGrow="{{ grow }}"
      flexWrap="{{ wrap }}"
      justifyContent="{{ justify }}"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class Flex implements AfterViewInit {
  @Input() public align?: any;

  @Input() public basis?: any;

  @Input() public direction?: any;

  @Input() public grow?: any;

  @Input() public isInline: boolean = false;

  @Input() public justify?: any;

  @Input() public shrink?: any;

  @Input() public wrap?: any;

  /* ---------------------------------- */

  constructor(protected el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className");
    proxyAttr(this.el, "style");
  }
}
