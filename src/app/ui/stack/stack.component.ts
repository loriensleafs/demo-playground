import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { getProp } from "./../system";
import { proxyAttr, toArray } from "./../../utils";

/* ---------------------------------- */

type Direction = "row" | "column" | "row-reverse" | "column-reverse";

type Directions = Direction | Direction[];

/* ---------------------------------- */

const isDir = (dir: Direction) =>
  ["row", "column", "row-reverse", "column-reverse", null].includes(dir);

const mapSpace = (spacing: any, isLast: boolean = false) => (
  dir: Direction
) => {
  switch (dir) {
    case "column":
      return { mb: isLast ? 0 : spacing };
    case "row":
      return { mr: isLast ? 0 : spacing };
    case "column-reverse":
      return { mt: isLast ? 0 : spacing };
    case "row-reverse":
      return { ml: isLast ? 0 : spacing };
    default:
      return null;
  }
};

/* ---------------------------------- */

const template = `
  <div
    sx
    d="{{ isInline ? 'inline-flex' : 'flex' }}"
    alignItems="{{ align }}"
    flexDirection="{{ direction }}"
    flexWrap="{{ wrap }}"
    justifyContent="{{ justify }}"
    styles="{{ styles }}"
  >
    <ng-content></ng-content>
  </div>
`;

//
// ────────────────────────────────────────────────────────── STACK COMPONENT ─────
//

@Component({ selector: "stack", template })
export class Stack implements AfterViewInit {
  @Input() public align: any;

  @Input() public isInline: boolean = false;

  @Input() public justify: any;

  @Input() public wrap: any;

  @Input()
  public get direction(): Directions {
    return this._direction;
  }
  public set direction(val: Directions) {
    if (toArray(getProp(val)).every(isDir)) this._direction = val;
  }
  private _direction: Directions = "column";

  @Input()
  public get spacing() {
    return this._spacing ? this._spacing : 2;
  }
  public set spacing(val: any) {
    this._spacing = val;
  }
  private _spacing: any;

  /* ---------------------------------- */

  public get styles() {
    return JSON.stringify({
      "& > *:not(:last-child)": toArray(getProp(this.direction)).map(
        mapSpace(getProp(this.spacing))
      )
    });
  }

  /* ---------------------------------- */

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    proxyAttr(this.el, "className");
    proxyAttr(this.el, "style");
  }
}

//
// ───────────────────────────────────────────────────────── HSTACK COMPONENT ─────
//

@Component({ selector: "h-stack", template })
export class HStack extends Stack {
  public get direction(): Directions {
    return "row";
  }
}

//
// ───────────────────────────────────────────────────────── VSTACK COMPONENT ─────
//

@Component({ selector: "v-stack", template })
export class VStack extends Stack {
  public get direction(): Directions {
    return "column";
  }
}
