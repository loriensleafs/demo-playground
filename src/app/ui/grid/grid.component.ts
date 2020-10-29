import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { proxyAttr } from "./../../utils";

//
// ─────────────────────────────────────────────────────────── GRID COMPONENT ─────
//

@Component({
  selector: "grid",
  template: `
    <div
      sx
      d="{{ isInline ? 'inline-grid' : 'grid' }}"
      gridArea="{{ area }}"
      gridAutoColumns="{{ autoColumns }}"
      gridAutoFlow="{{ autoFlow }}"
      gridAutoRows="{{ autoRows }}"
      gridColumn="{{ column }}"
      gridColumnGap="{{ columnGap }}"
      gridGap="{{ gap }}"
      gridRow="{{ row }}"
      gridRowGap="{{ rowGap }}"
      gridTemplateAreas="{{ templateAreas }}"
      gridTemplateColumns="{{ templateColumns }}"
      gridTemplateRows="{{ templateRows }}"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class Grid implements AfterViewInit {
  @Input() public area: any;

  @Input() public autoColumns: any;

  @Input() public autoFlow: any;

  @Input() public autoRows: any;

  @Input() public column: any;

  @Input() public columnGap: any;

  @Input() public gap: any;

  @Input() public isInline: boolean = false;

  @Input() public row: any;

  @Input() public rowGap: any;

  @Input() public templateAreas: any;

  @Input() public templateColumns: any;

  @Input() public templateRows: any;

  /* ---------------------------------- */

  constructor(protected el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className");
    proxyAttr(this.el, "style");
  }
}
