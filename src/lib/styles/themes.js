const themes = {
  bg_page1: "#F8F9FA",
  bg_page2: "#FFFFFF",
  bg_element1: "#FFFFFF",
  bg_element2: "#F8F9FA",
  bg_element3: "#E9ECEF",
  bg_element4: "#DEE2E6",
  bg_element5: "#212529",
  bg_element6: "#343A40",
  bg_element7: "#FFFFFF",
  bg_element8: "#FBFDFC",
  bg_invert: "#1E1E1E",
  bg_inline_code: "#E9ECEF",
  bg_tag: "#F8F9FA",

  text1: "#212529",
  text2: "#495057",
  text3: "#868E96",
  text4: "#CED4DA",
  border1: "#343A40",
  border2: "#ADB5BD",
  border3: "#e0e2e7",
  border4: "#F1F3F5",
  primary1: "#12B886",
  primary2: "#20C997",
  destructive1: "#FF6B6B",
  destructive2: "#FF8787",
  button_text: "#FFFFFF",

  slight_layer: "rgba(0,0,0,0.05)",
  opaque_layer: "rgba(249,249,249,0.85)",
  editor_footer: "#FFFFFF",

  prism_bg: "#fbfcfd",
  prism_default_text: "#24292e",
  prism_selection_bg: "rgba(0,0,0,0.15)",
  prism_code_block_bg: "#fbfcfd",
  prism_code_1: "#969896",
  prism_code_2: "#24292e",
  prism_code_3: "#a626a4",
  prism_code_4: "#63a35c",
  prism_code_5: "#0184bc",
  prism_code_6: "#50a14f",
  prism_code_7: "#a626a4",
  prism_code_8: "#005cc5",
  prism_code_9: "#a626a4",
  prism_line_number: "#585c63",
  // dark: {
  //   bg_page1: "#121212",
  //   bg_page2: "#121212",
  //   bg_element1: "#1E1E1E",
  //   bg_element2: "#1E1E1E",
  //   bg_element3: "#252525",
  //   bg_element4: "#2E2E2E",
  //   bg_element5: "#F1F3F5",
  //   bg_element6: "#F8F9FA",
  //   bg_element7: "#252525",
  //   bg_element8: "#0c0c0c",
  //   bg_invert: "#FFFFFF",
  //   bg_inline_code: "#363636",
  //   bg_tag: "#252525",
  //   text1: "#ECECEC",
  //   text2: "#D9D9D9",
  //   text3: "#ACACAC",
  //   text4: "#595959",
  //   border1: "#E0E0E0",
  //   border2: "#A0A0A0",
  //   border3: "#4D4D4D",
  //   border4: "#2A2A2A",
  //   primary1: "#96F2D7",
  //   primary2: "#63E6BE",
  //   destructive1: "#FFC9C9",
  //   destructive2: "#FFA8A8",
  //   button_text: "#121212",

  //   slight_layer: "rgba(255,255,255,0.1)",
  //   opaque_layer: "rgba(0, 0, 0, 0.85)",
  //   editor_footer: "#2E2E2E",

  //   prism_bg: "#1E1E1E",
  //   prism_default_text: "#e0e6f1",
  //   prism_selection_bg: "#383e49",
  //   prism_code_block_bg: "#1e1e1e",
  //   prism_code_1: "#7c858d",
  //   prism_code_2: "#abb2bf",
  //   prism_code_3: "#e06c75",
  //   prism_code_4: "#d19a66",
  //   prism_code_5: "#98c379",
  //   prism_code_6: "#56b6c2",
  //   prism_code_7: "#c678dd",
  //   prism_code_8: "#61afef",
  //   prism_code_9: "#c678dd",
  //   prism_line_number: "#5c6370",
  // },
};

// const buildCssVariables = (variables) => {
//   const keys = Object.keys(variables);
//   return keys.reduce(
//     (acc, key) =>
//       acc.concat(`--${key.replace(/_/g, "-")}: ${variables[key]};`, "\n"),
//     ""
//   );
// };

// export const themes = {
//   light: buildCssVariables(themeVariableSets.light),
//   dark: buildCssVariables(themeVariableSets.dark),
// };

// const cssVar = (name) => `var(--${name.replace(/_/g, "-")})`;

// const variableKeys = Object.keys(themeVariableSets.light);

// export const themedPalette = variableKeys.reduce((acc, current) => {
//   acc[current] = cssVar(current);
//   return acc;
// }, {});

export default themes;
