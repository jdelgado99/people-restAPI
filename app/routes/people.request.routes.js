module.exports = function(app) {
    var peoples = require('../controllers/people.controller.js');
  // Create a new people
    app.post('/api/peoples', peoples.create);
  // Retrieve all people
    app.get('/api/peoples', peoples.findAll);
 // Retrieve a single people by Id
    app.get('/api/peoples/:id', peoples.findOne);
  // Update a people with Id
    app.put('/api/peoples/:id', peoples.update);
  // Delete a people with Id
    app.delete('/api/peoples/:id', peoples.delete);
}
