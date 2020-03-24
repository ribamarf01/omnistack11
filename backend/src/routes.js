const express = require('express')

const ongController = require('./controllers/ong.controller')
const incidentController = require('./controllers/incident.controller')
const profileController = require('./controllers/profile.controller')
const sessionController = require('./controllers/session.controller')

const routes = express.Router()

routes.post('/sessions', sessionController.create)

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/profile', profileController.index)

routes.post('/incidents', incidentController.create)
routes.get('/incidents', incidentController.index)
routes.delete('/incidents/:id', incidentController.delete)

module.exports = routes