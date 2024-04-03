const router = require("express").Router();

// Our artist Schema model
const artist = require("../models/artist");



// GET
//router.get("/getAll", async (req, res) => {
//    return res.json("Getting all artists")
//});



// POST
router.post("/save", async (req, res) => {
    const newArtist = artist(
        {
            name: req.body.name,
            imageURL: req.body.imageURL,
            label: req.body.label,
            X: req.body.X,
            instagram: req.body.instagram,
        });

    try {
        const savedArtist = await newArtist.save();
        return res.status(200).send({ succes: true, artist: savedArtist });
    } catch (error) {
        return res.status(400).send({ succes: false, msg: error });

    }
});


// GET single artist info
router.get("/getOne/:id", async (req, res) => {
    const filter = { _id: req.params.id };

    const data = await artist.findOne(filter);

    if (data) {
        return res.status(200).send({ succes: true, artist: data });
    } else {
        return res.status(400).send({ succes: false, msg: "Data not found." });
    }
});



// GET all de artists info
router.get("/getAll", async (req, res) => {

    const data = await artist.find().sort({ createdAt: 1 });
    if (data) {
        return res.status(200).send({ succes: true, artist: data });
    } else {
        return res.status(400).send({ succes: false, msg: "Data not found." });
    }
});


//UPDATE artist info
router.put("/update/:id", async (req, res) => {
    const filter = { _id: req.params._id }

    const options = {
        upsert: true,
        new: true
    };

    try {
        const result = await artist.findOneAndUpdate(
            filter,
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                label: req.body.label,
                X: req.body.X,
                instagram: req.body.instagram,
            },
            options

        );

        return res.status(200).send({ succes: true, data: result });
    } catch (error) {
        return res.status(400).send({ succes: false, msg: "Data not found." });
    }


});



//DELETE artis

router.delete("/delete/:id", async (req, res) => {
    const filter = { _id: req.params.id };

    const result = await artist.deleteOne(filter);
    if (result) {
        return res
            .status(200)
            .send({ succes: true, artist: "Data deleted succesfully", data: result });
    } else {
        return res.status(400).send({ succes: false, msg: "Data not found." });
    }
});




module.exports = router;