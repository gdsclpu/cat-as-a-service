import type { Request, Response } from "express";

export default class ViewsController {
  public index = (req: Request, res: Response) => {
    res.render("index", { title: "Cat as a Service" });
  };
}
