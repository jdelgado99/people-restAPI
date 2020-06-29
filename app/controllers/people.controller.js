var peoples = {
        people_1: {
          rut: "123344345-8",
          name: "JADG",
          lastName: "Antonio",
	  age:25,
	  course:"CloudComputing",
          id: 1
        },

        people_2: {
          rut: "11111111-8",
          name: "Juan",
          lastName: "Antonio",
          age:25,
          course:"Docker",
          id: 2
          },

        people_3: {
	  rut: "22222222-8",
          name: "JDG",
          lastName: "Antonio",
          age:25,
          course:"Java",
          id: 3        
          },

        people_4: {
          rut: "33333333-8",
          name: "JD",
          lastName: "Antonio",
          age:25,
          course:"Webservice",
          id: 4

          }
      }
 
exports.create = function(req, res) {
  var newPeople = req.body;
    peoples["people_" + newPeople.id] = newPeople;
  console.log("--->After Post, peoples:\n" + JSON.stringify(peoples, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newPeople, null, 4));
};
 
exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(peoples, null, 4));
    res.end("All peoples: \n" + JSON.stringify(peoples, null, 4));  
};
 
exports.findOne = function(req, res) {
    var people = peoples["people_" + req.params.id];
    console.log("--->Find people: \n" + JSON.stringify(people, null, 4));
    res.end( "Find a people:\n" + JSON.stringify(people, null, 4));
};
 
exports.update = function(req, res) {
  var id = parseInt(req.params.id);
  var updatedPeople = req.body; 
  if(peoples["people_" + id] != null){
    // update data
    peoples["people_" + id] = updatedPeople;
 
    console.log("--->Update Successfully, peoples: \n" + JSON.stringify(peoples, null, 4))
    
    // return
    res.end("Update Successfully! \n" + JSON.stringify(updatedPeople, null, 4));
  }else{
    res.end("Don't Exist people:\n:" + JSON.stringify(updatedPeople, null, 4));
  }
};
 
exports.delete = function(req, res) {
  var deletePeople = peoples["people_" + req.params.id];
    delete peoples["people_" + req.params.id];
    console.log("--->After deletion, people list:\n" + JSON.stringify(peoples, null, 4) );
    res.end( "Deleted people: \n" + JSON.stringify(deletePeople, null, 4));
};

