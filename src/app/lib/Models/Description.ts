import {Schema, model,models,Document} from "mongoose";


export interface IDescription extends Document {
    section : 'hero' | 'about' | 'workShot' | 'workLong',
    text : string
}

const DescriptionSchema = new Schema<IDescription>({
    
    section : {
        type : String,
        enum : ['hero', 'about', 'workShot', 'workLong'],
        required : true,
        unique : true
    }, 
    text : {
        type : String,
        required : true

    }
    
}, {
    timestamps : true
})


const Description =  models.Description ||  model<IDescription>('Description', DescriptionSchema)
export {Description}