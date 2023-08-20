import { List } from "../../interfaces/list"
import ListModel from "../../models/listOfTaskModel"
import TaskModel from "../../models/taskModel"

const createNewList = async(body: List) => {
    const list = await ListModel.findOne({
        projectId: body.projectId,
        name: body.name
    })
    
    if(list?.name === body.name) return {message: 'esta lista ya existe'}
    const newList = await ListModel.create(body)

    const listForFront = {
        _id: newList._id,
        projectId: newList.projectId,
        name: newList.name
    }

    return listForFront
}

const getAllLists = async(projectId: string) => {
    const allLists = await ListModel.find({
        projectId: projectId
    }).exec()

    const lists = allLists.map(list => {
        return {
            _id: list._id,
            projectId: list.projectId,
            name: list.name,
        }
    })

    return lists
}

const updateList = async(body: List, listId: string) => {
    await ListModel.updateOne({_id: listId}, {name: body.name})
    const tasksUpdated = await TaskModel.updateMany({listId: listId}, {state: body.name})
    return tasksUpdated
}

const deleteListController = async(listId: string) => {
    const deleted = await ListModel.deleteOne({_id: listId})
    return deleted
}

export {
    createNewList,
    getAllLists,
    updateList,
    deleteListController
}