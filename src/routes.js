import Article from "./views/Article.js";
import DetailArticle from "./views/DetailArticle.js";
import Index from "./views/Index.js";
import Login from "./views/Login.js";
import NewArticle from "./views/NewArticle.js";
import Register from "./views/Register.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "dashboard",
    component: <Index />,
    layout: "/admin",
    brand: "Dashboard"
  },
  {
    path: "/article",
    name: "Article",
    icon: "article",
    component: <Article />,
    layout: "/admin",
    brand: "List Article"
  },
  {
    path: "/new-article",
    name: "Create Article",
    icon: "article",
    component: <NewArticle />,
    layout: "/admin",
    brand: "Create New Article"
  },
  {
    path: "/detail-article/:id",
    name: "Detail Article",
    icon: "article",
    component: <DetailArticle />,
    layout: "/admin",
    brand: "Detail Article"
  },
  {
    path: "/login",
    component: <Login />,
    layout: "/auth"
  },
  {
    path: "/register",
    component: <Register />,
    layout: "/auth"
  }
];
export default routes;
