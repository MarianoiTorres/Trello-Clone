import {model, Schema} from 'mongoose'

const taskSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId, 
        ref: "ProjectModel",
        required: true,
    },
    listId: {
        type: Schema.Types.ObjectId,
        ref: 'ListModel',
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    state: {
        type: String,
    },
    priority: {
        type: String,
    },
    deadline: {
        type: String,
    },
    member: [{
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    }],
    coments: [{
        type: Schema.Types.ObjectId,
        ref: 'ComentModel'
    }]
},
{
    timestamps: true,
    versionKey: false
})

const TaskModel = model("task",taskSchema)

export default TaskModel