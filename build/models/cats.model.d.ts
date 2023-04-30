import mongoose from "mongoose";
declare const _default: mongoose.Model<{
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
    timestamps: true;
    autoIndex: true;
}, {
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
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
}>> & Omit<mongoose.FlatRecord<{
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
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default _default;
