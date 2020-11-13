const Workout = require("../models/workout")

module.exports = function(app){ 
    app.get("/api/workouts",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });


    app.post("/api/workouts",function (req,res){    
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });

    app.get("/api/workouts/range",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });


    app.post("/api/workouts/range",function (req,res){    
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });

    app.put("/api/workouts/:id",({body,params},res)=>{   
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
}

// const db = require("../models");
// const Workout = require("../models/workout");

// app.post("/api/workouts", (req, res) => {
//     db.Workout.create({})
//     .then(data => res.json(data))
//     .catch(err => {
//         res.json(err)
//     })
// });
// module.exports = function(app){
// app.get("/api/workouts",function(req, res){
//     Workout.find()
//     .then(data => {
//         res.json(data)
//     })
//     .catch(err => {
//         res.json(err)
//     })
// });

// app.get("/api/workouts/range",function(req, res){
//     Workout.find()
//     .then(data => {
//         res.json(data)
//     })
//     .catch(err => {
//         res.json(err)
//     })
// })};
// app.post("/api/workouts/range", function (req, res){
//     Workout.create({})
//     .then(data => res.json(data))
//     .catch(err => {
//         res.json(err)
//     })
// });
// app.put("/api/workouts/ :id", ({body,params}, res)=>{
//     Workout.findByIdAndUpdate(
//         params.id,
//         {$push:{excersizes:body}},
//         {new: true, runValidators:true}
//     )
//         .then(data => res.json())
//         .catch(err =>{
//             res.json(err)
//         })
// }
// )
