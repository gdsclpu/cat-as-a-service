import { CustomError, makeResponse } from "../libs";
import CatSerice from "../services/cats.service";
const catService = new CatSerice();
export default class CatController extends CatSerice {
    async getAllCats(req, res, next) {
        try {
            const cats = await catService.getAllCatsS();
            res.status(200).send(makeResponse({ data: cats }));
        }
        catch (error) {
            next(new CustomError({
                message: error.message,
                statusCode: 500,
            }));
        }
    }
    async getCatById(req, res, next) {
        try {
            const id = req.params.id;
            const cat = await catService.getCatByIdS(id);
            res.status(200).send(makeResponse({ data: cat }));
        }
        catch (error) {
            next(new CustomError({
                message: error.message,
                statusCode: 500,
            }));
        }
    }
    async getRandomCat(req, res, next) {
        try {
            let data = await catService.getRandomCatS();
            delete data._id;
            data.photos = data.photos.replace(/'/g, '"');
            data = Object.assign(Object.assign({}, data), { photos: JSON.parse(data.photos) });
            res.status(200).send(makeResponse({ data }));
        }
        catch (error) {
            next(new CustomError({
                message: error.message,
                statusCode: 500,
            }));
        }
    }
    async getRandomCatByBreed(req, res, next) {
        try {
            const breed = req.params.breed;
            let cat = await catService.getRandomCatByBreedS(breed);
            delete cat._id;
            cat.photos = cat.photos.replace(/'/g, '"');
            cat = Object.assign(Object.assign({}, cat), { photos: JSON.parse(cat.photos) });
            res.status(200).send(makeResponse({ data: cat }));
        }
        catch (error) {
            next(new CustomError({
                message: error.message,
                statusCode: 500,
            }));
        }
    }
    async getRandomCatByAge(req, res, next) {
        try {
            const age = req.params.age;
            let cat = await catService.getRandomCatByAgeS(age);
            delete cat._id;
            cat.photos = cat.photos.replace(/'/g, '"');
            cat = Object.assign(Object.assign({}, cat), { photos: JSON.parse(cat.photos) });
            res.status(200).send(makeResponse({ data: cat }));
        }
        catch (error) {
            next(new CustomError({
                message: error.message,
                statusCode: 500,
            }));
        }
    }
    async getRandomCatBySize(req, res, next) {
        try {
            const size = req.params.size;
            let cat = await catService.getRandomCatBySizeS(size);
            delete cat._id;
            cat.photos = cat.photos.replace(/'/g, '"');
            cat = Object.assign(Object.assign({}, cat), { photos: JSON.parse(cat.photos) });
            res.status(200).send(makeResponse({ data: cat }));
        }
        catch (error) {
            next(new CustomError({
                message: error.message,
                statusCode: 500,
            }));
        }
    }
    async getAllCatBreeds(req, res, next) {
        try {
            const breeds = await catService.getAllCatBreedsS();
            res.status(200).send(makeResponse({ data: breeds }));
        }
        catch (error) {
            next(new CustomError({
                message: error.message,
                statusCode: 500,
            }));
        }
    }
    async getAllCatSizes(req, res, next) {
        try {
            const sizes = await catService.getAllCatSizesS();
            res.status(200).send(makeResponse({ data: sizes }));
        }
        catch (error) {
            next(new CustomError({
                message: error.message,
                statusCode: 500,
            }));
        }
    }
    async getAllCatAges(req, res, next) {
        try {
            const ages = await catService.getAllCatAgesS();
            res.status(200).send(makeResponse({ data: ages }));
        }
        catch (error) {
            next(new CustomError({
                message: error.message,
                statusCode: 500,
            }));
        }
    }
}
