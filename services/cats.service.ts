import Cats from "../models/cats.model";

export default class CatSerice {
    public async getAllCatsS() {
        try {
            const cats = await Cats.find({});
            return cats;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async getCatByIdS(id: string) {
        try {
            const cat = await Cats.findById(id);
            return cat;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async getRandomCatS() {
        try {
            const cat = await Cats.aggregate([{ $sample: { size: 1 } }]);
            return cat[0];
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async getRandomCatByBreedS(breed: string) {
        try {
            const cat = await Cats.aggregate([{ $match: { breed: breed } }, { $sample: { size: 1 } }]);
            return cat[0];
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async getRandomCatByAgeS(age: string) {
        try {
            const cat = await Cats.aggregate([{ $match: { age: age } }, { $sample: { size: 1 } }]);
            return cat[0];
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async getRandomCatBySizeS(size: string) {
        try {
            const cat = await Cats.aggregate([{ $match: { size: size } }, { $sample: { size: 1 } }]);
            return cat[0];
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async getAllCatBreedsS() {
        try {
            const breeds = await Cats.distinct("breed");
            return breeds;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async getAllCatAgesS() {
        try {
            const ages = await Cats.distinct("age");
            return ages;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async getAllCatSizesS() {
        try {
            const sizes = await Cats.distinct("size");
            return sizes;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async getAllCatGendersS() {
        try {
            const sizes = await Cats.distinct("gender");
            return sizes;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}