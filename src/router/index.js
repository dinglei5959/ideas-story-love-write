import Home from '@pages/home';
import Article from '@pages/article';
//const Article = ()=> import('@pages/article');
 const routes = [
  {
    path: "/",
    component: Home,
    exact:true
  },
  {
    path: "/article/:index",
    component: Article
  },
];

export default function getRoutes() {
  return routes;
}