import Cats from "../models/cats.model";
export default class CatSerice {
    async getAllCatsS() {
        try {
            const cats = await Cats.find({});
            return cats;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getCatByIdS(id) {
        try {
            const cat = await Cats.findById(id);
            return cat;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getRandomCatS() {
        try {
            const cat = await Cats.aggregate([{ $sample: { size: 1 } }]);
            return cat[0];
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getRandomCatByBreedS(breed) {
        try {
            const cat = await Cats.aggregate([{ $match: { breed: breed } }, { $sample: { size: 1 } }]);
            return cat[0];
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getRandomCatByAgeS(age) {
        try {
            const cat = await Cats.aggregate([{ $match: { age: age } }, { $sample: { size: 1 } }]);
            return cat[0];
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getRandomCatBySizeS(size) {
        try {
            const cat = await Cats.aggregate([{ $match: { size: size } }, { $sample: { size: 1 } }]);
            return cat[0];
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getAllCatBreedsS() {
        try {
            const breeds = await Cats.distinct("breed");
            return breeds;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getAllCatAgesS() {
        try {
            const ages = await Cats.distinct("age");
            return ages;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getAllCatSizesS() {
        try {
            const sizes = await Cats.distinct("size");
            return sizes;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getAllCatGendersS() {
        try {
            const sizes = await Cats.distinct("gender");
            return sizes;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
