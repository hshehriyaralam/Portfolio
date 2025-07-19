import mongoose,{Schema, model,models,Document} from "mongoose";


export interface IProject extends Document {
    title : string,
    description : string,
    githubLink : string,
    LiveDemo  : string,
    readmeLink : string,
    bgImage : string
}


const projectShema = new Schema<IProject>({
    title : {
        type : String,
        required : true,
        unique : true
    },
    description: {
        type : String,
        required : true,
    },
    githubLink: {
        type : String,
        required : true,
    },
    LiveDemo: {
        type : String,
        required : true,
    },
    readmeLink: {
        type : String,
        required : true,
    },
    bgImage : {
        type : String,
        default : ''
    }
})


const Project =  models.Project ||  model<IProject>('Project',projectShema )


export {Project}


