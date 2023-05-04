import type { Request, Response } from "express";

export default class ViewsController {
  public index = (req: Request, res: Response) => {
    res.render("index", { title: "Cat as a Service" });
  };

  public about = (req: Request, res: Response) => {
    res.render("pages/about", { title: "About" });
  };

  public contact = (req: Request, res: Response) => {
    res.render("pages/contact", { title: "Contact" });
  };

  public cats = (req: Request, res: Response) => {
    res.render("pages/cats", { title: "Cats" });
  };

  public docs = (req: Request, res: Response) => {
    res.render("partials/coming_soon", { title: "Docs" });
  };
}
