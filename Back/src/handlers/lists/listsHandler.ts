import { Request, Response } from "express";
import { createNewList, deleteListController, getAllLists, updateList } from "../../controllers/lists/listsController";

const postList = async(req: Request, res: Response) => {
    try {
        const {body} = req
        const newList = await createNewList(body)
        res.status(200).json(newList)
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const getLists = async(req: Request, res: Response) => {
    try {
        const {projectId} = req.params
        const allLists = await getAllLists(projectId)
        res.status(200).json(allLists)
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const putList = async(req: Request, res: Response) => {
    try {
        const {listId} = req.params
        const {body} = req
        const updatedList = await updateList(body, listId)
        res.status(200).json(updatedList)
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

const deleteList = async(req: Request, res: Response) => {
    try {
        const {listId} = req.params
        const listDeleted = await deleteListController(listId)
        res.status(200).json(listDeleted)
    } catch (error) {
        res.status(400).json({ error: (error as Error).message }) 
    }
}

export {
    postList, 
    getLists,
    putList,
    deleteList
}