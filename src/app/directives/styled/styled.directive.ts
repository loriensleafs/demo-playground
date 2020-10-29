import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";
import { cxs, getProp } from "./../../ui/system";
import { isNotEmptyString, isObj, merge } from "./../../utils";

@Directive({ selector: "[sx]" })
export class StyledDirective implements AfterViewInit {
  @Input() as: string;

  @Input()
  set styles(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._styles = sx;
  }
  protected _styles: object = {};

  @Input()
  set _hover(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._hover = sx;
  }

  @Input()
  set _active(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._active = sx;
  }

  @Input()
  set _focus(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._focus = sx;
  }

  @Input()
  set _focusWithin(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._focusWithin = sx;
  }

  @Input()
  set _focusVisible(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._focusVisible = sx;
  }

  @Input()
  set _disabled(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._disabled = sx;
  }

  @Input()
  set _readOnly(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._readOnly = sx;
  }

  @Input()
  set _before(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._before = sx;
  }

  @Input()
  set _after(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._after = sx;
  }

  @Input()
  set _empty(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._empty = sx;
  }

  @Input()
  set _expanded(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._expanded = sx;
  }

  @Input()
  set _checked(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._checked = sx;
  }

  @Input()
  set _grabbed(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._grabbed = sx;
  }

  @Input()
  set _pressed(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._pressed = sx;
  }

  @Input()
  set _invalid(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._invalid = sx;
  }

  @Input()
  set _valid(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._valid = sx;
  }

  @Input()
  set _loading(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._loading = sx;
  }

  @Input()
  set _selected(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._selected = sx;
  }

  @Input()
  set _hidden(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._hidden = sx;
  }

  @Input()
  set _autofill(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._autofill = sx;
  }

  @Input()
  set _even(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._even = sx;
  }

  @Input()
  set _odd(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._odd = sx;
  }

  @Input()
  set _first(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._first = sx;
  }

  @Input()
  set _last(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._last = sx;
  }

  @Input()
  set _notFirst(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._notFirst = sx;
  }

  @Input()
  set _notLast(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._notLast = sx;
  }

  @Input()
  set _visited(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._visited = sx;
  }

  @Input()
  set _activeLink(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._activeLink = sx;
  }

  @Input()
  set _indeterminate(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._indeterminate = sx;
  }

  @Input()
  set _groupHover(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._groupHover = sx;
  }

  @Input()
  set _groupFocus(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._groupFocus = sx;
  }

  @Input()
  set _groupActive(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._groupActive = sx;
  }

  @Input()
  set _groupDisabled(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._groupDisabled = sx;
  }

  @Input()
  set _groupInvalid(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._groupInvalid = sx;
  }

  @Input()
  set _groupChecked(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._groupChecked = sx;
  }

  @Input()
  set _placeholder(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._placeholder = sx;
  }

  @Input()
  set _fullScreen(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._fullScreen = sx;
  }

  @Input()
  set _selection(val: any) {
    const sx = getProp(val);
    if (isObj(sx)) this._sx._selection = sx;
  }

  @Input()
  set alignContent(val: any) {
    if (val) this._sx.alignContent = getProp(val);
  }

  @Input()
  set alignItems(val: any) {
    if (val) this._sx.alignItems = getProp(val);
  }

  @Input()
  set alignSelf(val: any) {
    if (val) this._sx.alignSelf = getProp(val);
  }

  @Input()
  set animation(val: any) {
    if (val) this._sx.animation = getProp(val);
  }

  @Input()
  set appearance(val: any) {
    if (val) this._sx.appearance = getProp(val);
  }

  @Input()
  set background(val: any) {
    if (val) this._sx.background = getProp(val);
  }

  @Input()
  set backgroundAttachment(val: any) {
    if (val) this._sx.backgroundAttachment = getProp(val);
  }

  @Input()
  set backgroundBlendMode(val: any) {
    if (val) this._sx.backgroundBlendMod = getProp(val);
  }

  @Input()
  set backgroundClip(val: any) {
    if (val) this._sx.backgroundClip = getProp(val);
  }

  @Input()
  set backgroundColor(val: any) {
    if (val) this._sx.backgroundColor = getProp(val);
  }

  @Input()
  set backgroundImage(val: any) {
    if (val) this._sx.backgroundImage = getProp(val);
  }

  @Input()
  set backgroundPosition(val: any) {
    if (val) this._sx.backgroundPosition = getProp(val);
  }

  @Input()
  set backgroundRepeat(val: any) {
    if (val) this._sx.backgroundRepeat = getProp(val);
  }

  @Input()
  set backgroundSize(val: any) {
    if (val) this._sx.backgroundSize = getProp(val);
  }

  @Input()
  set bg(val: any) {
    if (val) this._sx.bg = getProp(val);
  }

  @Input()
  set bgAttachment(val: any) {
    if (val) this._sx.bgAttachment = getProp(val);
  }

  @Input()
  set bgBlendMode(val: any) {
    if (val) this._sx.bgBlendMode = getProp(val);
  }

  @Input()
  set bgClip(val: any) {
    if (val) this._sx.bgClip = getProp(val);
  }

  @Input()
  set bgColor(val: any) {
    if (val) this._sx.bgColor = getProp(val);
  }

  @Input()
  set bgImage(val: any) {
    if (val) this._sx.bgImage = getProp(val);
  }

  @Input()
  set bgImg(val: any) {
    if (val) this._sx.bgImg = getProp(val);
  }

  @Input()
  set bgPos(val: any) {
    if (val) this._sx.bg = getProp(val);
  }

  @Input()
  set bgPosition(val: any) {
    if (val) this._sx.bgPos = getProp(val);
  }

  @Input()
  set bgRepeat(val: any) {
    if (val) this._sx.bgRepeat = getProp(val);
  }

  @Input()
  set bgSize(val: any) {
    if (val) this._sx.bgSize = getProp(val);
  }

  @Input()
  set blockSize(val: any) {
    if (val) this._sx.blockSize = getProp(val);
  }

  @Input()
  set border(val: any) {
    if (val) this._sx.border = getProp(val);
  }

  @Input()
  set borderBlock(val: any) {
    if (val) this._sx.borderBlock = getProp(val);
  }

  @Input()
  set borderBlockEnd(val: any) {
    if (val) this._sx.borderBlockEnd = getProp(val);
  }

  @Input()
  set borderBlockEndStyle(val: any) {
    if (val) this._sx.borderBlockEndStyle = getProp(val);
  }

  @Input()
  set borderBlockEndWidth(val: any) {
    if (val) this._sx.borderBlockEndWidth = getProp(val);
  }

  @Input()
  set borderBlockStart(val: any) {
    if (val) this._sx.borderBlockStart = getProp(val);
  }

  @Input()
  set borderBlockStartStyle(val: any) {
    if (val) this._sx.borderBlockStartStyle = getProp(val);
  }

  @Input()
  set borderBlockStartWidth(val: any) {
    if (val) this._sx.borderBlockStartWidth = getProp(val);
  }

  @Input()
  set borderBlockStyle(val: any) {
    if (val) this._sx.borderBlockStyle = getProp(val);
  }

  @Input()
  set borderBlockWidth(val: any) {
    if (val) this._sx.borderBlockWidth = getProp(val);
  }

  @Input()
  set borderBottom(val: any) {
    if (val) this._sx.borderBottom = getProp(val);
  }

  @Input()
  set borderBottomColor(val: any) {
    if (val) this._sx.borderBottomColor = getProp(val);
  }

  @Input()
  set borderBottomLeftRadius(val: any) {
    if (val) this._sx.borderBottomLeftRadius = getProp(val);
  }

  @Input()
  set borderBottomRightRadius(val: any) {
    if (val) this._sx.borderBottomRightRadius = getProp(val);
  }

  @Input()
  set borderBottomStyle(val: any) {
    if (val) this._sx.borderBottomStyle = getProp(val);
  }

  @Input()
  set borderBottomWidth(val: any) {
    if (val) this._sx.borderBottomWidth = getProp(val);
  }

  @Input()
  set borderColor(val: any) {
    if (val) this._sx.borderColor = getProp(val);
  }

  @Input()
  set borderEndEndRadius(val: any) {
    if (val) this._sx.borderEndEndRadius = getProp(val);
  }

  @Input()
  set borderEndStartRadius(val: any) {
    if (val) this._sx.borderEndStartRadius = getProp(val);
  }

  @Input()
  set borderInline(val: any) {
    if (val) this._sx.borderInline = getProp(val);
  }

  @Input()
  set borderInlineEnd(val: any) {
    if (val) this._sx.borderInlineEnd = getProp(val);
  }

  @Input()
  set borderInlineEndStyle(val: any) {
    if (val) this._sx.borderInlineEndStyle = getProp(val);
  }

  @Input()
  set borderInlineEndWidth(val: any) {
    if (val) this._sx.borderInlineEndWidth = getProp(val);
  }

  @Input()
  set borderInlineStart(val: any) {
    if (val) this._sx.borderInlineStart = getProp(val);
  }

  @Input()
  set borderInlineStartStyle(val: any) {
    if (val) this._sx.borderInlineStartStyle = getProp(val);
  }

  @Input()
  set borderInlineStartWidth(val: any) {
    if (val) this._sx.borderInlineStartWidth = getProp(val);
  }

  @Input()
  set borderInlineStyle(val: any) {
    if (val) this._sx.borderInlineStyle = getProp(val);
  }

  @Input()
  set borderInlineWidth(val: any) {
    if (val) this._sx.borderInlineWidth = getProp(val);
  }

  @Input()
  set borderLeft(val: any) {
    if (val) this._sx.borderLeft = getProp(val);
  }

  @Input()
  set borderLeftColor(val: any) {
    if (val) this._sx.borderLeftColor = getProp(val);
  }

  @Input()
  set borderLeftStyle(val: any) {
    if (val) this._sx.borderLeftStyle = getProp(val);
  }

  @Input()
  set borderLeftWidth(val: any) {
    if (val) this._sx.borderLeftWidth = getProp(val);
  }

  @Input()
  set borderRadius(val: any) {
    if (val) this._sx.borderRadius = getProp(val);
  }

  @Input()
  set borderRight(val: any) {
    if (val) this._sx.borderRight = getProp(val);
  }

  @Input()
  set borderRightColor(val: any) {
    if (val) this._sx.borderRightColor = getProp(val);
  }

  @Input()
  set borderRightStyle(val: any) {
    if (val) this._sx.borderRightStyle = getProp(val);
  }

  @Input()
  set borderRightWidth(val: any) {
    if (val) this._sx.borderRightWidth = getProp(val);
  }

  @Input()
  set borderStartEndRadius(val: any) {
    if (val) this._sx.borderStartEndRadius = getProp(val);
  }

  @Input()
  set borderStartStartRadius(val: any) {
    if (val) this._sx.borderStartStartRadius = getProp(val);
  }

  @Input()
  set borderStyle(val: any) {
    if (val) this._sx.borderStyle = getProp(val);
  }

  @Input()
  set borderTop(val: any) {
    if (val) this._sx.borderTop = getProp(val);
  }

  @Input()
  set borderTopColor(val: any) {
    if (val) this._sx.borderTopColor = getProp(val);
  }

  @Input()
  set borderTopLeftRadius(val: any) {
    if (val) this._sx.borderTopLeftRadius = getProp(val);
  }

  @Input()
  set borderTopRightRadius(val: any) {
    if (val) this._sx.borderTopRightRadius = getProp(val);
  }

  @Input()
  set borderTopStyle(val: any) {
    if (val) this._sx.borderTopStyle = getProp(val);
  }

  @Input()
  set borderTopWidth(val: any) {
    if (val) this._sx.borderTopWidth = getProp(val);
  }

  @Input()
  set borderWidth(val: any) {
    if (val) this._sx.borderWidth = getProp(val);
  }

  @Input()
  set bottom(val: any) {
    if (val) this._sx.bottom = getProp(val);
  }

  @Input()
  set boxOrient(val: any) {
    if (val) this._sx.boxOrient = getProp(val);
  }

  @Input()
  set boxShadow(val: any) {
    if (val) this._sx.boxShadow = getProp(val);
  }

  @Input()
  set box(val: any) {
    if (val) this._sx.box = getProp(val);
  }

  @Input()
  set boxSize(val: any) {
    if (val) this._sx.boxSize = getProp(val);
  }

  @Input()
  set boxSizing(val: any) {
    if (val) this._sx.boxSizing = getProp(val);
  }

  @Input()
  set caretColor(val: any) {
    if (val) this._sx.caretColor = getProp(val);
  }

  @Input()
  set clip(val: any) {
    if (val) this._sx.clip = getProp(val);
  }

  @Input()
  set color(val: any) {
    if (val) this._sx.color = getProp(val);
  }

  @Input()
  set columnGap(val: any) {
    if (val) this._sx.columnGap = getProp(val);
  }

  @Input()
  set columnRuleColor(val: any) {
    if (val) this._sx.columnRuleColor = getProp(val);
  }

  @Input()
  set cursor(val: any) {
    if (val) this._sx.cursor = getProp(val);
  }

  @Input()
  set d(val: any) {
    if (val) this._sx.d = getProp(val);
  }

  @Input()
  set direction(val: any) {
    if (val) this._sx.direction = getProp(val);
  }

  @Input()
  set display(val: any) {
    if (val) this._sx.display = getProp(val);
  }

  @Input()
  set fill(val: any) {
    if (val) this._sx.fill = getProp(val);
  }

  @Input()
  set flex(val: any) {
    if (val) this._sx.flex = getProp(val);
  }

  @Input()
  set flexBasis(val: any) {
    if (val) this._sx.flexBasis = getProp(val);
  }

  @Input()
  set flexDirection(val: any) {
    if (val) this._sx.flexDirection = getProp(val);
  }

  @Input()
  set flexGrow(val: any) {
    if (val) this._sx.flexGrow = getProp(val);
  }

  @Input()
  set flexShrink(val: any) {
    if (val) this._sx.flexShrink = getProp(val);
  }

  @Input()
  set flexWrap(val: any) {
    if (val) this._sx.flexWrap = getProp(val);
  }

  @Input()
  set float(val: any) {
    if (val) this._sx.float = getProp(val);
  }

  @Input()
  set fontFamily(val: any) {
    if (val) this._sx.fontFamily = getProp(val);
  }

  @Input()
  set fontSize(val: any) {
    if (val) this._sx.fontSize = getProp(val);
  }

  @Input()
  set fontStyle(val: any) {
    if (val) this._sx.fontStyle = getProp(val);
  }

  @Input()
  set fontWeight(val: any) {
    if (val) this._sx.fontWeight = getProp(val);
  }

  @Input()
  set gridArea(val: any) {
    if (val) this._sx.gridArea = getProp(val);
  }

  @Input()
  set gridAutoColumns(val: any) {
    if (val) this._sx.gridAutoColumns = getProp(val);
  }

  @Input()
  set gridAutoFlow(val: any) {
    if (val) this._sx.gridAutoFlow = getProp(val);
  }

  @Input()
  set gridAutoRows(val: any) {
    if (val) this._sx.gridAutoRows = getProp(val);
  }

  @Input()
  set gridColumn(val: any) {
    if (val) this._sx.gridColumn = getProp(val);
  }

  @Input()
  set gridColumnEnd(val: any) {
    if (val) this._sx.gridColumnEnd = getProp(val);
  }

  @Input()
  set gridColumnGap(val: any) {
    if (val) this._sx.gridColumnGap = getProp(val);
  }

  @Input()
  set gridColumnStart(val: any) {
    if (val) this._sx.gridColumnStart = getProp(val);
  }

  @Input()
  set gridGap(val: any) {
    if (val) this._sx.gridGap = getProp(val);
  }

  @Input()
  set gridRow(val: any) {
    if (val) this._sx.gridRow = getProp(val);
  }

  @Input()
  set gridRowGap(val: any) {
    if (val) this._sx.gridRowGap = getProp(val);
  }

  @Input()
  set gridTemplateAreas(val: any) {
    if (val) this._sx.gridTemplateAreas = getProp(val);
  }

  @Input()
  set gridTemplateColumns(val: any) {
    if (val) this._sx.gridTemplateColumns = getProp(val);
  }

  @Input()
  set gridTemplateRows(val: any) {
    if (val) this._sx.gridTemplateRows = getProp(val);
  }

  @Input()
  set h(val: any) {
    if (val) this._sx.h = getProp(val);
  }

  @Input()
  set height(val: any) {
    if (val) this._sx.height = getProp(val);
  }

  @Input()
  set inlineSize(val: any) {
    if (val) this._sx.inlineSize = getProp(val);
  }

  @Input()
  set inset(val: any) {
    if (val) this._sx.inset = getProp(val);
  }

  @Input()
  set insetBlock(val: any) {
    if (val) this._sx.insetBlock = getProp(val);
  }

  @Input()
  set insetBlockEnd(val: any) {
    if (val) this._sx.insetBlockEnd = getProp(val);
  }

  @Input()
  set insetBlockStart(val: any) {
    if (val) this._sx.insetBlockStart = getProp(val);
  }

  @Input()
  set insetInline(val: any) {
    if (val) this._sx.insetInline = getProp(val);
  }

  @Input()
  set insetInlineEnd(val: any) {
    if (val) this._sx.insetInlineEnd = getProp(val);
  }

  @Input()
  set insetInlineStart(val: any) {
    if (val) this._sx.insetInlineStart = getProp(val);
  }

  @Input()
  set justify(val: any) {
    if (val) this._sx.justify = getProp(val);
  }

  @Input()
  set justifyContent(val: any) {
    if (val) this._sx.justifyContent = getProp(val);
  }

  @Input()
  set justifyItems(val: any) {
    if (val) this._sx.justifyItems = getProp(val);
  }

  @Input()
  set justifySelf(val: any) {
    if (val) this._sx.justifySelf = getProp(val);
  }

  @Input()
  set left(val: any) {
    if (val) this._sx.left = getProp(val);
  }

  @Input()
  set letterSpacing(val: any) {
    if (val) this._sx.letterSpacing = getProp(val);
  }

  @Input()
  set lineClamp(val: any) {
    if (val) this._sx.lineClamp = getProp(val);
  }

  @Input()
  set lineHeight(val: any) {
    if (val) this._sx.lineHeight = getProp(val);
  }

  @Input()
  set listStyleImage(val: any) {
    if (val) this._sx.listStyleImage = getProp(val);
  }

  @Input()
  set listStyleImg(val: any) {
    if (val) this._sx.listStyleImg = getProp(val);
  }

  @Input()
  set listStylePos(val: any) {
    if (val) this._sx.listStylePos = getProp(val);
  }

  @Input()
  set listStylePosition(val: any) {
    if (val) this._sx.listStylePosition = getProp(val);
  }

  @Input()
  set listStyleType(val: any) {
    if (val) this._sx.listStyleType = getProp(val);
  }

  @Input()
  set m(val: any) {
    if (val) this._sx.m = getProp(val);
  }

  @Input()
  set margin(val: any) {
    if (val) this._sx.margin = getProp(val);
  }

  @Input()
  set marginBlock(val: any) {
    if (val) this._sx.marginBlock = getProp(val);
  }

  @Input()
  set marginBlockEnd(val: any) {
    if (val) this._sx.marginBlockEnd = getProp(val);
  }

  @Input()
  set marginBlockStart(val: any) {
    if (val) this._sx.marginBlockStart = getProp(val);
  }

  @Input()
  set marginBottom(val: any) {
    if (val) this._sx.marginBottom = getProp(val);
  }

  @Input()
  set marginInline(val: any) {
    if (val) this._sx.marginInline = getProp(val);
  }

  @Input()
  set marginInlineEnd(val: any) {
    if (val) this._sx.marginInlineEnd = getProp(val);
  }

  @Input()
  set marginInlineStart(val: any) {
    if (val) this._sx.marginInlineStart = getProp(val);
  }

  @Input()
  set marginLeft(val: any) {
    if (val) this._sx.marginLeft = getProp(val);
  }

  @Input()
  set marginRight(val: any) {
    if (val) this._sx.marginRight = getProp(val);
  }

  @Input()
  set marginTop(val: any) {
    if (val) this._sx.marginTop = getProp(val);
  }

  @Input()
  set marginX(val: any) {
    if (val) this._sx.marginX = getProp(val);
  }

  @Input()
  set marginY(val: any) {
    if (val) this._sx.marginY = getProp(val);
  }

  @Input()
  set maxBlockSize(val: any) {
    if (val) this._sx.maxBlockSize = getProp(val);
  }

  @Input()
  set maxH(val: any) {
    if (val) this._sx.maxH = getProp(val);
  }

  @Input()
  set maxHeight(val: any) {
    if (val) this._sx.maxHeight = getProp(val);
  }

  @Input()
  set maxInlineSize(val: any) {
    if (val) this._sx.maxInlineSize = getProp(val);
  }

  @Input()
  set maxW(val: any) {
    if (val) this._sx.maxW = getProp(val);
  }

  @Input()
  set maxWidth(val: any) {
    if (val) this._sx.maxWidth = getProp(val);
  }

  @Input()
  set mb(val: any) {
    if (val) this._sx.mb = getProp(val);
  }

  @Input()
  set minBlockSize(val: any) {
    if (val) this._sx.minBlockSize = getProp(val);
  }

  @Input()
  set minH(val: any) {
    if (val) this._sx.minH = getProp(val);
  }

  @Input()
  set minHeight(val: any) {
    if (val) this._sx.minHeight = getProp(val);
  }

  @Input()
  set minInlineSize(val: any) {
    if (val) this._sx.minInlineSize = getProp(val);
  }

  @Input()
  set minW(val: any) {
    if (val) this._sx.minW = getProp(val);
  }

  @Input()
  set minWidth(val: any) {
    if (val) this._sx.minWidth = getProp(val);
  }

  @Input()
  set ml(val: any) {
    if (val) this._sx.ml = getProp(val);
  }

  @Input()
  set mr(val: any) {
    if (val) this._sx.mr = getProp(val);
  }

  @Input()
  set mt(val: any) {
    if (val) this._sx.mt = getProp(val);
  }

  @Input()
  set mx(val: any) {
    if (val) this._sx.mx = getProp(val);
  }

  @Input()
  set my(val: any) {
    if (val) this._sx.my = getProp(val);
  }

  @Input()
  set objectFit(val: any) {
    if (val) this._sx.objectFit = getProp(val);
  }

  @Input()
  set objectPosition(val: any) {
    if (val) this._sx.objectPosition = getProp(val);
  }

  @Input()
  set opacity(val: any) {
    if (val) this._sx.opacity = getProp(val);
  }

  @Input()
  set order(val: any) {
    if (val) this._sx.order = getProp(val);
  }

  @Input()
  set outline(val: any) {
    if (val) this._sx.outline = getProp(val);
  }

  @Input()
  set outlineColor(val: any) {
    if (val) this._sx.outlineColor = getProp(val);
  }

  @Input()
  set overflow(val: any) {
    if (val) this._sx.overflow = getProp(val);
  }

  @Input()
  set overflowWrap(val: any) {
    if (val) this._sx.overflowWrap = getProp(val);
  }

  @Input()
  set overflowX(val: any) {
    if (val) this._sx.overflowX = getProp(val);
  }

  @Input()
  set overflowY(val: any) {
    if (val) this._sx.overflowY = getProp(val);
  }

  @Input()
  set p(val: any) {
    if (val) this._sx.p = getProp(val);
  }

  @Input()
  set padding(val: any) {
    if (val) this._sx.padding = getProp(val);
  }

  @Input()
  set paddingBlock(val: any) {
    if (val) this._sx.paddingBlock = getProp(val);
  }

  @Input()
  set paddingBlockEnd(val: any) {
    if (val) this._sx.paddingBlockEnd = getProp(val);
  }

  @Input()
  set paddingBlockStart(val: any) {
    if (val) this._sx.paddingBlockStart = getProp(val);
  }

  @Input()
  set paddingBottom(val: any) {
    if (val) this._sx.paddingBottom = getProp(val);
  }

  @Input()
  set paddingInline(val: any) {
    if (val) this._sx.paddingInline = getProp(val);
  }

  @Input()
  set paddingInlineEnd(val: any) {
    if (val) this._sx.paddingInlineEnd = getProp(val);
  }

  @Input()
  set paddingInlineStart(val: any) {
    if (val) this._sx.paddingInlineStart = getProp(val);
  }

  @Input()
  set paddingLeft(val: any) {
    if (val) this._sx.paddingLeft = getProp(val);
  }

  @Input()
  set paddingRight(val: any) {
    if (val) this._sx.paddingRight = getProp(val);
  }

  @Input()
  set paddingTop(val: any) {
    if (val) this._sx.paddingTop = getProp(val);
  }

  @Input()
  set paddingX(val: any) {
    if (val) this._sx.paddingX = getProp(val);
  }

  @Input()
  set paddingY(val: any) {
    if (val) this._sx.paddingY = getProp(val);
  }

  @Input()
  set pb(val: any) {
    if (val) this._sx.pb = getProp(val);
  }

  @Input()
  set pl(val: any) {
    if (val) this._sx.pl = getProp(val);
  }

  @Input()
  set placeItems(val: any) {
    if (val) this._sx.placeItems = getProp(val);
  }

  @Input()
  set pointerEvents(val: any) {
    if (val) this._sx.pointerEvents = getProp(val);
  }

  @Input()
  set pos(val: any) {
    if (val) this._sx.pos = getProp(val);
  }

  @Input()
  set position(val: any) {
    if (val) this._sx.position = getProp(val);
  }

  @Input()
  set pr(val: any) {
    if (val) this._sx.pr = getProp(val);
  }

  @Input()
  set pt(val: any) {
    if (val) this._sx.pt = getProp(val);
  }

  @Input()
  set px(val: any) {
    if (val) this._sx.px = getProp(val);
  }

  @Input()
  set py(val: any) {
    if (val) this._sx.py = getProp(val);
  }

  @Input()
  set resize(val: any) {
    if (val) this._sx.resize = getProp(val);
  }

  @Input()
  set right(val: any) {
    if (val) this._sx.right = getProp(val);
  }

  @Input()
  set rowGap(val: any) {
    if (val) this._sx.rowGap = getProp(val);
  }

  @Input()
  set stroke(val: any) {
    if (val) this._sx.stroke = getProp(val);
  }

  @Input()
  set textAlign(val: any) {
    if (val) this._sx.textAlign = getProp(val);
  }

  @Input()
  set textDecor(val: any) {
    if (val) this._sx.textDecor = getProp(val);
  }

  @Input()
  set textDecoration(val: any) {
    if (val) this._sx.textDecoration = getProp(val);
  }

  @Input()
  set textIndent(val: any) {
    if (val) this._sx.textIndent = getProp(val);
  }

  @Input()
  set textOverflow(val: any) {
    if (val) this._sx.textOverflow = getProp(val);
  }

  @Input()
  set textShadow(val: any) {
    if (val) this._sx.textShadow = getProp(val);
  }

  @Input()
  set textTransform(val: any) {
    if (val) this._sx.textTransform = getProp(val);
  }

  @Input()
  set top(val: any) {
    if (val) this._sx.top = getProp(val);
  }

  @Input()
  set transform(val: any) {
    if (val) this._sx.transform = getProp(val);
  }

  @Input()
  set transformOrigin(val: any) {
    if (val) this._sx.transformOrigin = getProp(val);
  }

  @Input()
  set transition(val: any) {
    if (val) this._sx.transition = getProp(val);
  }

  @Input()
  set transitionDuration(val: any) {
    if (val) this._sx.transitionDuration = getProp(val);
  }

  @Input()
  set transitionProperty(val: any) {
    if (val) this._sx.transitionProperty = getProp(val);
  }

  @Input()
  set transitionTimingFunction(val: any) {
    if (val) this._sx.transitionTimingFunction = getProp(val);
  }

  @Input()
  set userSelect(val: any) {
    if (val) this._sx.userSelect = getProp(val);
  }

  @Input()
  set verticalAlign(val: any) {
    if (val) this._sx.verticalAlign = getProp(val);
  }

  @Input()
  set visibility(val: any) {
    if (val) this._sx.visibility = getProp(val);
  }

  @Input()
  set w(val: any) {
    if (val) this._sx.w = getProp(val);
  }

  @Input()
  set whiteSpace(val: any) {
    if (val) this._sx.whiteSpace = getProp(val);
  }

  @Input()
  set width(val: any) {
    if (val) this._sx.width = getProp(val);
  }

  @Input()
  set willChange(val: any) {
    if (val) this._sx.willChange = getProp(val);
  }

  @Input()
  set wordBreak(val: any) {
    if (val) this._sx.wordBreak = getProp(val);
  }

  @Input()
  set zIndex(val: any) {
    if (val) this._sx.zIndex = getProp(val);
  }

  /* ---------------------------------- */

  public get sx(): any {
    return isObj(this._styles)
      ? merge({}, this._sx, this._styles)
      : isObj(this._sx)
      ? this._sx
      : {};
  }
  protected _sx: any = {};

  /* ---------------------------------- */

  constructor(protected el: ElementRef) {}

  ngAfterViewInit() {
    const cx = cxs(this.sx);

    if (this.el.nativeElement) {
      const root = this.el.nativeElement;
      let el = root;

      if (this.as) {
        const child = root.firstElementChild;
        const attrs = [...child.attributes];
        el = document.createElement(this.as);
        el.innerHTML = child.innerHTML;

        if (isNotEmptyString(el.className)) el.classList.add(root.className);

        attrs.forEach(attr => {
          el[attr] = child[attr];
        });

        root.replaceWith(el);
      }

      if (isNotEmptyString(cx)) el.classList.add(cx);
    }
  }
}
