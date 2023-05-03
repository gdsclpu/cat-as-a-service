import { CustomError, makeResponse } from "../libs";
import CatSerice from "../services/cats.service";
import { NextFunction, Request, Response } from "express";

const catService: CatSerice = new CatSerice();

export default class CatController extends CatSerice {
  public async getAllCats(req: Request, res: Response, next: NextFunction) {
    try {
      const cats = await catService.getAllCatsS();
      res.status(200).send(makeResponse({ data: cats }));
    } catch (error: any) {
      next(
        new CustomError({
          message: error.message,
          statusCode: 500,
        })
      );
    }
  }

  public async getCatById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const cat = await catService.getCatByIdS(id);
      res.status(200).send(makeResponse({ data: cat }));
    } catch (error: any) {
      next(
        new CustomError({
          message: error.message,
          statusCode: 500,
        })
      );
    }
  }

  public async getRandomCat(req: Request, res: Response, next: NextFunction) {
    try {
      let data = await catService.getRandomCatS();
      delete data._id;
      data.photos = data.photos.replace(/'/g, '"');
      data = {
        ...data,
        photos: JSON.parse(data.photos),
      };
      res.status(200).send(makeResponse({ data }));
    } catch (error: any) {
      next(
        new CustomError({
          message: error.message,
          statusCode: 500,
        })
      );
    }
  }

  public async getRandomCatByBreed(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const breed = req.params.breed;
      let cat = await catService.getRandomCatByBreedS(breed);
      delete cat._id;
      cat.photos = cat.photos.replace(/'/g, '"');
      cat = {
        ...cat,
        photos: JSON.parse(cat.photos),
      };
      res.status(200).send(makeResponse({ data: cat }));
    } catch (error: any) {
      next(
        new CustomError({
          message: error.message,
          statusCode: 500,
        })
      );
    }
  }

  public async getRandomCatByAge(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const age = req.params.age;
      let cat = await catService.getRandomCatByAgeS(age);
      delete cat._id;
      cat.photos = cat.photos.replace(/'/g, '"');
      cat = {
        ...cat,
        photos: JSON.parse(cat.photos),
      };
      res.status(200).send(makeResponse({ data: cat }));
    } catch (error: any) {
      next(
        new CustomError({
          message: error.message,
          statusCode: 500,
        })
      );
    }
  }

  public async getRandomCatBySize(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const size = req.params.size;
      let cat = await catService.getRandomCatBySizeS(size);
      delete cat._id;
      cat.photos = cat.photos.replace(/'/g, '"');
      cat = {
        ...cat,
        photos: JSON.parse(cat.photos),
      };
      res.status(200).send(makeResponse({ data: cat }));
    } catch (error: any) {
      next(
        new CustomError({
          message: error.message,
          statusCode: 500,
        })
      );
    }
  }

  public async getAllCatBreeds(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const breeds = await catService.getAllCatBreedsS();
      res.status(200).send(makeResponse({ data: breeds }));
    } catch (error: any) {
      next(
        new CustomError({
          message: error.message,
          statusCode: 500,
        })
      );
    }
  }

  public async getAllCatSizes(req: Request, res: Response, next: NextFunction) {
    try {
      const sizes = await catService.getAllCatSizesS();
      res.status(200).send(makeResponse({ data: sizes }));
    } catch (error: any) {
      next(
        new CustomError({
          message: error.message,
          statusCode: 500,
        })
      );
    }
  }

  public async getAllCatAges(req: Request, res: Response, next: NextFunction) {
    try {
      const ages = await catService.getAllCatAgesS();
      res.status(200).send(makeResponse({ data: ages }));
    } catch (error: any) {
      next(
        new CustomError({
          message: error.message,
          statusCode: 500,
        })
      );
    }
  }
}
