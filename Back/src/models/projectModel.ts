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
    }],
    background: {
        type: String,
        default: 'linear-gradient(to bottom right, rgb(236, 242, 245), rgb(236, 242, 245))'
    }
},
{
    timestamps: true,
    versionKey: false
})

const ProjectModel = model("project", projectSchema)

export default ProjectModel