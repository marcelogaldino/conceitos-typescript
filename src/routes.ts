import { response } from "express";

import { Request, Response } from 'express'

import createUser from './services/User'

export function HelloTypescript(request: Request, response: Response) {
    const user = createUser({
        name: 'Marcelo',
        age: 28,
        techs: [
            'NodeJS', 
            'ReactJS',
            { title: 'React Native', experience: 100 }
        ]
    })
    return response.json({ message: user })
}