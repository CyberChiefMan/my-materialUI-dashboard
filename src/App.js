import React from "react";
import { createBrowserHistory } from "history";
import { Router,
   Route, 
   Switch,
    // Redirect 
  } from "react-router-dom";
import './index.css';
// 
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from "@material-ui/core/styles";
import CustomTheme from "./assets/customTheme/CustomTheme";
import Sidebar from "./components/Sidebar/Sidebar";
// Pages and components
import About from "./pages/About/About";
import Products from "./components/Products/Products";
import NotFount from "./pages/NotFound/NotFound";
// 
import "./assets/css/style.css";
import "./assets/fonts/css/font-face.css"
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const hist = createBrowserHistory();


export default function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
    <StylesProvider jss={jss}>  
    <Router history={hist}>
    <Switch>
      <Route exact path="/" component={Sidebar} />
      {/* <Redirect from="/" to="/Sidebar" /> */}
      <Route  path="/About" component={About} />
      <Route  path="/Products" component={Products} />
      <Route  component={NotFount} />
    </Switch>
  </Router>
  </StylesProvider>
      </ThemeProvider>
  );
};