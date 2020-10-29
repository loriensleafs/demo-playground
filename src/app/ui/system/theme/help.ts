import { breakpoints } from './breakpoints';

export const intro = `

INTRO TO DESIGN SYSTEMS AND THE SX DIRECTIVE
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

The sx directive is for creating themeable user interfaces
based on constraint-based design principles.

The sx directive at it's core is a low level design system.
There is a theme object that is composed of scales (colors,
space, sizes, radii, shadows, font families, font sizes, etc)
that help enforce constraint-based design principles.  These
scales are design APIs that make it easy to create consistent
UI by limiting the available style values.

`;

export const responsiveStyles = `

RESPONSIVE STYLES
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

The sx directive supports responsive styles out of the box.
Instead of manually adding @media queries and adding nested
styles throughout your code, the sx directive allows you
to provide object and array values to add mobile-first
responsive styles.

Object responsive values map to the theme.breakpoint keys: ${JSON.stringify(breakpoints)},
while array responsive values map to the theme.breakpoint
keys indexes: [ ${Object.keys(breakpoints).join(', ')} ].

The example bellow shows how a component's styles would be compiled.
The compiled styles would then be converted to a style sheet under
a randomly generated class name and added to the DOM.

The randomly generated class name will be added to the div automatically.

ex.
  HTML
    <div sx m="[1, null, 2, 4]" py="2" px="4">...</div>

  Styles
    {
      margin: "0.25rem",
      "@media screen and (min-width: 960px)" : {
        margin: "0.5rem"
      },
      "@media screen and (min-width: 1280px)" : {
        margin: "1rem"
      },
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }

`;

export const styleProps = {
	intro: `

STYLE PROPS
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Style props are a way to alter the style of a component
by simply passing props to it. It helps to save time by
providing helpful shorthand ways to style components.

Some style props have theme scales, which help enforce
constraint-based design principles.  While you are
encouraged to use scale values as much as possible,
there will be times you will need to use custom values
and these custom values can also be passed.

▐ <div sx bg="primary.main" color="#e2e8f0">...</div>

`,
	space: `

──────────────────────────────────────────────────────────
MARGIN, PADDING
──────────────────────────────────────────────────────────

▐ <div sx m="[2, null, 3]" py="3" px="2">...</div>

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ m, margin                 margin                          space
‣ mt, marginTop             margin-top                      space
‣ mr, marginRight           margin-right                    space
‣ mb, marginBottom          margin-bottom                   space
‣ ml, marginLeft            margin-left                     space
‣ mx                        margin-left & margin-right      space
‣ my                        margin-top & margin-bottom      space
‣ p, padding                padding                         space
‣ pt, paddingTop            padding-top                     space
‣ pr, paddingRight          padding-right                   space
‣ pb, paddingBottom         padding-bottom                  space
‣ pl, paddingLeft           padding-left                    space
‣ px                        padding-left, padding-right     space
‣ py                        padding-top, padding-bottom     space

    `,
	color: `

──────────────────────────────────────────────────────────
COLOR, BACKGROUND COLOR
──────────────────────────────────────────────────────────

▐ <div sx bg="primary.main" color="primary.contrast.main">...</div>
▐ <div
    sx
    bg="['blue.900', 'blue.500']"
    color="['blue.contrast.900', 'blue.contrast.500']"
    >
      ...
    </div>

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ color                     color                           colors
‣ bg, background            background                      colors
‣ bgColor,                  background-color                colors
  background-color
‣ opacity                   opacity                         none

  `,
	typography: `

──────────────────────────────────────────────────────────
TYPOGRAPHY
──────────────────────────────────────────────────────────

▐ <div sx fontSize="sm">...</div>
▐ <div sx fontSize="['sm', 'md']">...</div>

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ fontFamily                font-family                     fonts
‣ fontSize                  font-size                       fontSizes
‣ fontWeight                font-weight                     fontWeights
‣ lineHeight                line-height                     lineHeights
‣ letterSpacing             letter-spacing                  letterSpacings
‣ textAlign                 text-align                      none
‣ fontStyle                 font-style                      none
‣ textTransform             text-transform                  none
‣ textDecoration            text-decoration                 none

  `,
	layout: `

──────────────────────────────────────────────────────────
LAYOUT, WIDTH, HEIGHT
──────────────────────────────────────────────────────────

▐ <div sx w="40px">...</div>
▐ <div sx w="100%" h="32">...</div>
▐ <div sx boxSize="['sm', null, 'lg']">...</div>

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ w, width                  width                           sizes
‣ h, height                 height                          sizes
‣ minW, minWidth            min-width                       sizes
‣ maxW, maxWidth            max-width                       sizes
‣ minH, minHeight           min-height                      sizes
‣ maxH, maxHeight           max-height                      sizes
‣ d, display                display                         none
‣ boxSize                   width, height                   sizes
‣ verticalAlign             vertical-align                  none
‣ overflow                  overflow                        none
‣ overflowX                 overflowX                       none
‣ overflowY                 overflowY                       none

  `,
	flex: `

──────────────────────────────────────────────────────────
FLEXBOX
──────────────────────────────────────────────────────────

▐ <div sx d="flex" alignItems="center" justifyContent="center">...</div>
▐ <flex align="center" justify="center">...</flex>
▐ <flex direction="['column', null, 'row']">...</flex>

‣ Note: Props in * will only work if you use the <flex> component.

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ alignItems, *align        align-items                     none
‣ alignContent              align-content                   none
‣ justifyItems              justify-items                   none
‣ justifyContent,           justify-content                 none
  *justify
‣ flexWrap, *wrap           flex-wrap                       none
‣ flexDirection,            flex-direction                  none
  flexDir, *direction
‣ flex                      flex                            none
‣ flexGrow, *grow           flex-grow                       none
‣ flexShrink, *shrink       flex-shrink                     none
‣ flexBasis, *basis         flex-basis                      none
‣ justifySelf               justify-self                    none
‣ alignSelf                 align-self                      none
‣ order                     order                           none

  `,
	grid: `

──────────────────────────────────────────────────────────
GRID LAYOUT
──────────────────────────────────────────────────────────

▐ <div sx d="grid" gridGap="2" gridAutoFlow="row dense">...</div>
▐ <grid gap="2" autoFlow="row dense">...</grid>

‣ Note: Props in * will only work if you use the <grid> component.

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ gridGap, *gap             grid-gap                        none
‣ gridRowGap, *rowGap       grid-row-gap                    none
‣ gridColumnGap,            grid-column-gap                 none
  *columnGap
‣ gridColumn, *column       grid-column                     none
‣ gridRow, *row             grid-row                        none
‣ gridArea, *area           grid-area                       none
‣ gridAutoFlow              grid-auto-flow                  none
  *autoFlow
‣ gridAutoRows,             grid-auto-rows                  none
  *autoRows
‣ gridAutoColumns,          grid-auto-columns               none
  *autoColumns
‣ gridTemplateRows,         grid-template-rows              none
  *templateRows
‣ gridTemplateColumns,      grid-template-columns           none
  *templateColumns
‣ gridTemplateAreas,        grid-template-areas             none
  *templateAreas

  `,
	background: `

──────────────────────────────────────────────────────────
BACKGROUND
──────────────────────────────────────────────────────────

▐ <div sx backgroundImage="url('/images/demo.jpg')">...</div>
▐ <div sx bgImg="url('/images/demo.jpg')">...</div>

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ background                background                      none
‣ bgImg,                    background-image                none
  backgroundImage
‣ bgSize,                   background-size                 none
  backgroundSize
‣ bgPosition,               background-position             none
  backgroundPosition
‣ bgRepeat,                 background-repeat               none
  backgroundRepeat
‣ bgAttachement,            background-attachment           none
  backgroundAttachment

  `,
	border: `

──────────────────────────────────────────────────────────
BORDERS
──────────────────────────────────────────────────────────

▐ <div sx border="1px solid gray.200">...</div>
▐ <div sx border="1px solid" borderColor="gray.200">...</div>

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ border                    border                          borders
‣ borderWidth               border-width                    borderWidths
‣ borderStyle               border-style                    borderStyles
‣ borderColor               border-color                    colors
‣ borderTop                 border-top                      border
‣ borderTopWidth            border-top-width                borderWidths
‣ borderTopStyle            border-top-style                borderStyles
‣ borderTopColor            border-top-color                colors
‣ borderRight               border-right                    border
‣ borderRightWidth          border-right-width              borderWidths
‣ borderRightStyle          border-right-style              borderStyles
‣ borderRightColor          border-right-color              colors
‣ borderBottom              border-bottom                   border
‣ borderBottomWidth         border-bottom-width             borderWidths
‣ borderBottomStyle         border-bottom-style             borderStyles
‣ borderBottomColor         border-bottom-color             colors
‣ borderLeft                border-left                     border
‣ borderLeftWidth           border-left-width               borderWidths
‣ borderLeftStyle           border-left-style               borderStyles
‣ borderLeftColor           border-left-color               colors
‣ borderX                   border-left, border-right       borders
‣ borderY                   border-top, border-bottom       borders

  `,
	borderRadius: `

──────────────────────────────────────────────────────────
BORDER RADIUS
──────────────────────────────────────────────────────────

▐ <div sx borderRightRadius="sm">...</div>
▐ <div sx borderRightRadius="8px">...</div>

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ borderRadius              border-radius                   radii
‣ borderTopLeftRadius       border-top-left-radius          radii
‣ borderTopRightRadius      border-top-right-radius         radii
‣ borderBottomRightRadius   border-bottom-right-radius      radii
‣ borderBottomLeftRadius    border-bottom-left-radius       radii
‣ borderTopRadius           border-top-radius               radii
‣ borderRightRadius         border-right-radius             radii
‣ borderBottomRadius        border-bottom-radius            radii
‣ borderLeftRadius          border-left-radius              radii

  `,
	position: `

──────────────────────────────────────────────────────────
POSITION
──────────────────────────────────────────────────────────

▐ <div sx pos="sticky">...</div>
▐ <div sx pos="absolute">...</div>

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ pos, position             position                        none
‣ zIndex                    z-index                         zIndices
‣ top                       top                             space
‣ right                     right                           space
‣ bottom                    bottom                          space
‣ left                      left                            space

  `,
	shadow: `

──────────────────────────────────────────────────────────
BOX SHADOW
──────────────────────────────────────────────────────────

▐ <div sx boxShadow="sm" textShadow="2px 2px #ff0000">...</div>
▐ <div sx boxShadow="['sm', null, 'md']" textShadow="2px 2px #ff0000">...</div>

Prop                        CSS Property                    Theme Key
----------------------------------------------------------------------
‣ boxShadow                 box-shadow                      shadows
‣ textShadow                text-shadow                     shadows

  `,
};

export const conversions = `

SPACING CONVERSIONS
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
The values are proportional, so 1 spacing unit is equal to
0.25rem, which translates to 4px by default in common
browsers.

‣ Mental model: If you need a spacing of 40px,
divide it by 4  →  10.

Theme spacing can be used with the following sx props:
  • top
  • right
  • bottom
  • left
  • margin (m, my, mx, mt, mr, mb, ml)
  • padding (p, py, px, pt, pr, pb, pl)

----------------------------------
Name      Space       Pixels
----------------------------------
0     →   0        →  0px
px    →   1px      →  1px
1     →   0.25rem  →  4px     ▬
2     →   0.5rem   →  8px     ▬▬
3     →   0.75rem  →  12px    ▬▬▬
4     →   1rem     →  16px    ▬▬▬▬
5     →   1.25rem  →  20px    ▬▬▬▬▬
6     →   1.5rem   →  24px    ▬▬▬▬▬▬
8     →   2rem     →  32px    ▬▬▬▬▬▬▬▬
10    →   2.5rem   →  40px    ▬▬▬▬▬▬▬▬▬▬
12    →   3rem     →  48px    ▬▬▬▬▬▬▬▬▬▬▬▬
16    →   4rem     →  64px    ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
20    →   5rem     →  80px    ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
24    →   6rem     →  96px    ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
32    →   8rem     →  128px   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
40    →   10rem    →  160px   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
48    →   12rem    →  192px   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
56    →   14rem    →  224px   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
64    →   16rem    →  256px   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
72    →   18rem    →  288px   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
80    →   20rem    →  320px   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
96    →   24rem    →  384px   ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬




SIZE CONVERSIONS
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

The theme size scale includes the values from the
theme space scale.

Theme sizes can be used with the following sx props:
  • w
  • width
  • minWidth
  • minW
  • h
  • height
  • minHeight
  • minH

----------------------------------
Name        VAL         Pixels
----------------------------------
full   →    100%
3xs    →    14rem    →  256px
2xs    →    16rem    →  288px
xs     →    20rem    →  320px
sm     →    24rem    →  344px
md     →    28rem    →  448px
lg     →    32rem    →  512px
xl     →    36rem    →  576px
2xl    →    42rem    →  672px
3xl    →    48rem    →  768px
4xl    →    56rem    →  896px
5xl    →    64rem    →  1024px
6xl    →    72rem    →  1152px
7xl    →    80rem    →  1280px

----------------------------------

container.sm  →  640px
container.md  →  768px
container.lg  →  1024px
container.xl  →  1280px

----------------------------------

`;

export const logSpacer = `


`;

export const help = {
	get intro() {
		return console.log(intro);
	},
	get conversions() {
		return console.log(conversions);
	},
	get responsiveStyles() {
		return console.log(responsiveStyles);
	},
	styleProps: {
		get intro() {
			return console.log(styleProps.intro);
		},
		get all() {
			return console.log(
				styleProps.space,
				logSpacer,
				styleProps.color,
				logSpacer,
				styleProps.typography,
				logSpacer,
				styleProps.layout,
				logSpacer,
				styleProps.flex,
				logSpacer,
				styleProps.grid,
				logSpacer,
				styleProps.background,
				logSpacer,
				styleProps.border,
				logSpacer,
				styleProps.borderRadius,
				logSpacer,
				styleProps.position,
				logSpacer,
				styleProps.shadow,
			);
		},
		get background() {
			return console.log(styleProps.background);
		},
		get border() {
			return console.log(styleProps.border);
		},
		get borderRadius() {
			return console.log(styleProps.borderRadius);
		},
		get color() {
			return console.log(styleProps.color);
		},
		get flex() {
			return console.log(styleProps.flex);
		},
		get grid() {
			return console.log(styleProps.grid);
		},
		get layout() {
			return console.log(styleProps.layout);
		},
		get position() {
			return console.log(styleProps.position);
		},
		get shadow() {
			return console.log(styleProps.shadow);
		},
		get space() {
			return console.log(styleProps.space);
		},
		get typography() {
			return console.log(styleProps.typography);
		},
	},
};
