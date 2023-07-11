import { Schema, model, Model, Types} from "mongoose";

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    userCreator: {
        type: Schema.Types.ObjectId,
        required: true
    },
    member: [{
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    }]
},
{
    timestamps: true,
    versionKey: false
})

const ProjectModel = model("project", projectSchema)

export default ProjectModel