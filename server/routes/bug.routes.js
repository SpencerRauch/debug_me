const BugController = require('../controllers/bug.controller')

module.exports = app => {
    app.post('/api/bugs', BugController.createBug)
    app.get('/api/bugs', BugController.getAllBugs)
    app.get('/api/bugs/:id',BugController.getBug)
    app.put('/api/bugs/:id', BugController.updateBug)
    app.delete('/api/bugs/:id', BugController.deleteBug)
}