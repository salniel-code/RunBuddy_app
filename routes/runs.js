const router = require("express").Router();
// För att använda mongoose modellen
var Run = require("../models/running.model");

// Route - GET (hämta)
router.route("/").get(function (req, res){
    Run.find()
    // Hämta det i json-format (löpningar)
    .then(runs => res.json(runs))
    // Om fel hittas
    .catch(err => res.status(400).json('Fel:' + err));
});


// Route - GET en (hämta)
router.route("/:id").get(function(req, res){
    Run.findById(req.params.id)
    // Hämta det i json-format (löpning)
    .then(runs => res.json(runs))
    // Om fel hittas
    .catch(err => res.status(400).json('Fel:' + err));
})


// Route - UPDATE (uppdaterar)
router.route('/update/:id').post(function(req, res){
    Run.findById(req.params.id)
    .then(runs => {
        runs.username = req.body.username;
        runs.runLength = parseFloat(req.body.runLength).toFixed(2);
        runs.date = new Date(req.body.date);
        //Sparar ändring
        runs.save()
        .then(() => res.json('Löpning uppdaterad'))
         // Om fel hittas
        .catch(err => res.status(400).json('Fel: ' + err));
    })
    // Om fel hittas
    .catch(err => res.status(400).json('Fel: ' + err));
})

// Route - POST (lägg till)
router.route("/add").post(function (req, res){
    const username = req.body.username;
    const runLength = parseFloat(req.body.runLength).toFixed(2);
    const date =  new Date(req.body.date);

    // Skapar ny löpning med ovantsående info
    const newRun = new Run({
        username,
        runLength,
        date,
    });

    // Sparar nya löpningen 
    newRun.save()
    .then(() => res.json('Ny löpning tillagd'))
    // Om fel hittas
    .catch(err => res.status(400).json('Fel: ' + err));
});


// Route - DELETE (tar bort)
router.route('/:id').delete(function(req, res){
    Run.findByIdAndDelete(req.params.id)
    .then(() => res.json('Löpning borttagen'))
    // Om fel hittas
    .catch(err => res.status(400).json('Fel: ' + err));
})
// Exporterar routern
module.exports = router;