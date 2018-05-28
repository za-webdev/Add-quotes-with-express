let UserController = require("../controllers/controllers.js");

module.exports =(app)=>{
	app.get("/",function(req,res){res.render ("index")})
	app.post("/users",UserController.create);
	app.get("/result",UserController.all);
	// app.get("/users/:id",UserController.findById);
	// app.post("/users/:id/destroy",UserController.destroy);	
	// app.post("/users/:id/update",UserController.update);	
	
}
