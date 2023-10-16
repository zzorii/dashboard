import { extendTheme } from "@chakra-ui/react";
import { containerTheme } from "./components/container";
// import { tabsTheme } from "./components/tabs";
// import { tableTheme } from "./components/table";
// import { buttonTheme } from "./components/button";
// import { textTheme } from "./components/Text";
// import { numberInputTheme } from "./components/number-input";
// import { inputTheme } from "./components/input";
// import { tooltipTheme } from "./components/tooltip";
// import { radioTheme } from "./components/radio";
// import { modalTheme } from "./components/modal";
// import { alertTheme } from "./components/alert";

const theme = extendTheme({
  components: {
    Container: containerTheme,
    // Tabs: tabsTheme,
    // Table: tableTheme,
    // Button: buttonTheme,
    // Text: textTheme,
    // Input: inputTheme,
    // NumberInput: numberInputTheme,
    // Tooltip: tooltipTheme,
    // Radio: radioTheme,
    // Modal: modalTheme,
    // Alert: alertTheme,
  },
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
      },
      body: {
        bg: "white",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: "400",
      },
      // styles for the `a`
      a: {
        color: "#000000",
        _hover: {
          textDecoration: "none !important",
        },
      },
      li: {
        listStyle: "none",
      },
    },
  },
  space: {
    4: "25px",
  },
  colors: {
    text_default: "#3A3A3A",
    black: "#000000",
    text_Gray02: "#000001",
    Secondary_V: "#A796FF",
    primary_V: "#6F36FF",
    primary_b: "#413FA0",
  },
});
export default theme;
