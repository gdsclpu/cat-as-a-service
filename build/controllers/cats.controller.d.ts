import CatSerice from "../services/cats.service";
import { NextFunction, Request, Response } from "express";
export default class CatController extends CatSerice {
    getAllCats(req: Request, res: Response, next: NextFunction): Promise<void>;
    getCatById(req: Request, res: Response, next: NextFunction): Promise<void>;
    getRandomCat(req: Request, res: Response, next: NextFunction): Promise<void>;
    getRandomCatByBreed(req: Request, res: Response, next: NextFunction): Promise<void>;
    getRandomCatByAge(req: Request, res: Response, next: NextFunction): Promise<void>;
    getRandomCatBySize(req: Request, res: Response, next: NextFunction): Promise<void>;
    getAllCatBreeds(req: Request, res: Response, next: NextFunction): Promise<void>;
    getAllCatSizes(req: Request, res: Response, next: NextFunction): Promise<void>;
    getAllCatAges(req: Request, res: Response, next: NextFunction): Promise<void>;
}
