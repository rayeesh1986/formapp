import Home from "./home";
import Product from "./product";
import Contact from "./contact";
import Notfound from "./notfound";
import Productdetail from "./productdetail";
import Productlisting from "./productlisting";

export const routes = [
  {
    id: 1,
    path: "/",
    component: Home,
    exact: true
  },
  {
    id: 2,
    path: "/products",
    component: Product,
    exact: false
  },
  {
    id: 3,
    path: "/contact",
    component: Contact
  },
  {
    id: 4,
    path: "/not-found",
    component: Notfound
  }
];
export const productRoutes = [
  {
    path: "/products/detail",
    component: Productdetail,
    exact: false
  },
  {
    path: "/products/listing",
    component: Productlisting,
    exact: false
  }
];
