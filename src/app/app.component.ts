import { Component, VERSION, OnInit, AfterViewInit } from "@angular/core";
import { globalCss, theme, css, cxs, cx } from "./ui/system";
import * as utils from "./utils";
import { get, __DEV__ } from "./utils";

@Component({
  selector: "app-root",
  template: `
    <flex
      sx
      boxSizing="border-box"
      zIndex="1"
      pos="sticky"
      top="0px"
      h="12"
      w="100%"
      px="2"
      bg="bg.paper"
      align="center"
      borderBottom="1px solid divider.light"
    >
      <h3 sx color="text.secondary" my="0" mr="auto">Logo</h3>
    </flex>

    <container sx flex="1">
      <card sx my="12" mx="auto" maxW="96">
        <card-content>
          <h3 sx m="0">Composed Card Title</h3>
          <p sx m="0" color="text.secondary">Card subtitle</p>
          <p sx color="text.primary">
            Let's display a slider component in your app and verify that
            everything works. You need to import the MatSliderModule that you
            want to display by adding the following lines to your app.module.ts
            file.
          </p>
        </card-content>
        <card-actions hasDivider="true">
          <h-stack sx flex="1" justify="flex-end">
            <button mat-button>action</button>
            <button mat-flat-button>
              action
            </button>
          </h-stack>
        </card-actions>
      </card>
    </container>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  ngOnInit() {
    globalCss({
      html: {
        boxSizing: "border-box",
        fontSize: "16px"
      },
      body: {
        boxSizing: "border-box",
        bg: get(theme, "bg.level1"),
        color: get(theme, "colors.text.primary"),
        fontFamily: get(theme, "fonts.body"),
        fontSize: get(theme, "fontSizes.1"),
        lineHeight: get(theme, "lineHeights.2"),
        fontWeight: get(theme, "fontWeights.normal"),
        letterSpacing: "0.01071em",
        "-webkit-font-smoothing": "subpixel-antialiased"
      },
      ["app-root"]: {
        w: "100%",
        minH: "100vh",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box"
      }
    });
  }

  ngAfterViewInit() {
    // If dev env, make new tools globally available
    // so they're always ready for playtime.
    if (__DEV__) {
      window["utils"] = utils;
      window["theme"] = theme;
      window["ui"] = {
        globalCss,
        css,
        cxs,
        cx
      };
    }
  }
}
