import Products from "./components/Products/Products";
import About   from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Sidebar from "./components/Sidebar/Sidebar";

const routes =[
  {
    path:"/",
    component:Sidebar
  },
  {
    path:"/About",
    component:About
  },
  {
    path:"/Products",
    component:Products
  },
  {
    component:NotFound
  }
]