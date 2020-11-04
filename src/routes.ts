import { response } from "express";

import { Request, Response } from 'express'

import createUser from './services/User'

export function HelloTypescript(request: Request, response: Response) {
    const user = createUser('Marcelo', 28, ['Node','React'])
    return response.json({ message: user })
}