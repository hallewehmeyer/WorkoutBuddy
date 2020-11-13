const db = require("../models");
const Workout = require("../models/schema");

app.post("/api/workout", (req, res) => {
    db.Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
});
module.exports = function(app){
app.get("/api/workout",function(req, res){
    Workout.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});

app.get("/api/workout/range",function(req, res){
    Workout.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})};
app.post("/api/workout/range", function (req, res){
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
});
app.put("/api/workout/ :id", ({body,params}, res)=>{
    Workout.findByIdAndUpdate(
        params.id,
        {$push:{excersizes:body}},
        {new: true, runValidators:true}
    )
        .then(data => res.json())
        .catch(err =>{
            res.json(err)
        })
}
)
