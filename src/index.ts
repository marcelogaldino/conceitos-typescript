import express from 'express'

import { HelloTypescript } from './routes'

const app = express()

app.get('/', HelloTypescript)

app.listen(3333)
