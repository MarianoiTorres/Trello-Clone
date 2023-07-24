import { List } from "../../interfaces/list"
import ListModel from "../../models/listOfTaskModel"
import TaskModel from "../../models/taskModel"

const createNewList = async(body: List) => {
    const list = await ListModel.findOne({
        projectId: body.projectId,
        name: body.name
    })
    console.log(list?.name);
    console.log(body.name);
    
    console.log(list?.name === body.name);
    
    if(list?.name === body.name) return {message: 'esta lista ya existe'}
    const newList = await ListModel.create(body)
    return newList
}

const getAllLists = async(projectId: string) => {
    const allLists = await ListModel.find({
        projectId: projectId
    }).exec()

    return allLists
}

const updateList = async(body: List, listId: string) => {
    await ListModel.updateOne({_id: listId}, {name: body.name})
    const tasksUpdated = await TaskModel.updateMany({listId: listId}, {state: body.name})
    return tasksUpdated
}

export {
    createNewList,
    getAllLists,
    updateList
}