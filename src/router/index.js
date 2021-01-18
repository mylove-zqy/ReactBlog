import React from "react";
import { Redirect } from "react-router-dom";

// const Home = React.lazy(_ => import("../pages/home/home"));
// const Interact = React.lazy(_ => import("../pages/interact/interact"));
// const Battle = React.lazy(_ => import("../pages/battle/battle"));
// const About = React.lazy(_ => import("../pages/about/about"));
// const Life = React.lazy(_ => import("../pages/life/life"));
import Home from '../pages/home/home'
import Interact from '../pages/interact/interact'
import Battle from '../pages/battle/battle'
import About from '../pages/about/about'
import Life from '../pages/life/life'
import ArticleDetail from '../pages/detail/index'
export default [
  {
    path: "/",
    exact: true,
    // 这里做了一个重定向
    render: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/interact", 
    component: Interact,
  },
  {
    path: "/battle",
    component: Battle,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/life",
    component: Life,
  },
  {
    path:'/detail',
    component:ArticleDetail
  }
];

