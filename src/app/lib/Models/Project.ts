import mongoose,{Schema, model,models,Document} from "mongoose";


export interface IProject extends Document {
    title : string,
    descrition : string,
    githubLink : string,
    LiveDemo  : string,
    readmeLink : string,
    bgImage : string
}


const projectShema = new Schema<IProject>({
    title : {
        type : String,
        required : true,
        Unique : true
    },
    descrition: {
        type : String,
        required : true,
    },
    githubLink: {
        type : String,
        required : true,
        Unique : true
    },
    LiveDemo: {
        type : String,
        required : true,
        Unique : true
    },
    readmeLink: {
        type : String,
        required : true,
    },
    bgImage: {
        type : String,
        required : true,
    },
    
    
})


const Project =  models.Project ||  model<IProject>('Project',projectShema )


export {Project}


