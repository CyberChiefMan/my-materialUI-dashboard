import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from "@material-ui/core/styles";
import CustomTheme from "./assets/customTheme/CustomTheme";
import Sidebar from "./components/Sidebar/Sidebar";
import "./assets/css/style.css";
import "./assets/fonts/css/font-face.css"
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
// 

// 


export default function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
          <div>
           <Sidebar/>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
};