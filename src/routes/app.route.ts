import { Application, NextFunction, Request, Response } from "express";

import HealthCheckRoute from '../module/health/health.route';
import PostRoute from '../module/post/post.route';

const appModuleRoute = (app: Application) => {
  const moduleRoute = () => [
    new HealthCheckRoute(),
    new PostRoute()
  ];

  moduleRoute().forEach((appRoute) => {
    app.use("/api", appRoute.router);
  });
}

const appDefaultRoute = (app: Application) => {
  app.use("*", (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
      'errorName': 'NOT FOUND',
      'errorMessage': 'The requested resource not found.'
    })
  });
}

const AppRoute = (app: Application) => {
  appModuleRoute(app);
  appDefaultRoute(app);
}

export default AppRoute;
