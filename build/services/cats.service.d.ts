/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export default class CatSerice {
    getAllCatsS(): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        type: string;
        url: string;
        size: string;
        age: string;
        sno: string;
        catid: string;
        gender: string;
        breed: string;
        photos: {
            small: string;
            medium: string;
            full: string;
            large: string;
        }[];
    }> & Omit<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        type: string;
        url: string;
        size: string;
        age: string;
        sno: string;
        catid: string;
        gender: string;
        breed: string;
        photos: {
            small: string;
            medium: string;
            full: string;
            large: string;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    getCatByIdS(id: string): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        type: string;
        url: string;
        size: string;
        age: string;
        sno: string;
        catid: string;
        gender: string;
        breed: string;
        photos: {
            small: string;
            medium: string;
            full: string;
            large: string;
        }[];
    }> & Omit<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        type: string;
        url: string;
        size: string;
        age: string;
        sno: string;
        catid: string;
        gender: string;
        breed: string;
        photos: {
            small: string;
            medium: string;
            full: string;
            large: string;
        }[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | null>;
    getRandomCatS(): Promise<any>;
    getRandomCatByBreedS(breed: string): Promise<any>;
    getRandomCatByAgeS(age: string): Promise<any>;
    getRandomCatBySizeS(size: string): Promise<any>;
    getAllCatBreedsS(): Promise<any[]>;
    getAllCatAgesS(): Promise<any[]>;
    getAllCatSizesS(): Promise<any[]>;
    getAllCatGendersS(): Promise<any[]>;
}
