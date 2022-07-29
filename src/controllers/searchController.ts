import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import {Pet} from '../models/pet'

export const search = (Req:Request, Res:Response) =>{
    let query: string = Req.query.q as string
    let list = Pet.getFromName(query)
    Res.render('pages/pages',{
        menu:createMenuObject(''),
        list
    })
}