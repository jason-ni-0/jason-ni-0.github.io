import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./about";
import Posts from "./blog/posts";
import RepositoriesList from "./repositories-list";
import Home from "./home";
import TechStack from "./tech-stack";
import Achievements from "./achievements";
import NotebookPost from "./blog/notebook-app/notebook-post";
import ProjectsPage from "./projectsPage"
// import EducationStory from "./education-story";

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/about", exact: true, name: "About", component: About },
  { path: "/projects", exact: true, name: "projects", component: ProjectsPage },
  // { path: "/blog", exact: true, name: "Blog", component: Posts },
];
const Navigation = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={props => <route.component {...props} />}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
