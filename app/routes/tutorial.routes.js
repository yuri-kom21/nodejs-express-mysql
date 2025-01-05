module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    // Create a new tutorial
    router.post("/", tutorials.create);

    //Retrieve all tutorials
    router.get("/", tutorials.findAll);

    //Retrieve a single tutorial with id
    router.get("/:id", tutorials.findOne);

    //Update a single tutorial with id
    router.put("/:id", tutorials.update);

    //Delete a single tutorial with id
    router.delete("/:id", tutorials.delete);

    //Delete all tutorials
    router.delete("/", tutorials.deleteAll);
    
    app.use("/tutorials", router);
}