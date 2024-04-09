const router = require("express").Router();

// Our artist Schema model
const song = require("../models/song");

// POST
router.post("/save", async (req, res) => {
    const newSong = song(
        {
            name: req.body.name,
            imageURL: req.body.imageURL,
            songURL: req.body.songURL,
            artist: req.body.artist,
            album: req.body.album,
            label: req.body.label,
            category: req.body.category,
        });

    try {
        const savedSong = await newSong.save();
        return res.status(200).send({ succes: true, song: savedSong });
    } catch (error) {
        return res.status(400).send({ succes: false, msg: error });

    }
});

// GET single song info
router.get("/getOne/:id", async (req, res) => {
    const filter = { _id: req.params.id };

    const data = await song.findOne(filter);

    if (data) {
        return res.status(200).send({ succes: true, song: data });
    } else {
        return res.status(400).send({ succes: false, msg: "Data not found." });
    }
});


// GET all de songs info
router.get("/getAll", async (req, res) => {
    

    const data = await song.find().sort({ createdAt: 1 });
    if (data) {
        return res.status(200).send({ succes: true, song: data });
    } else {
        return res.status(400).send({ succes: false, msg: "Data not found." });
    }
});

//UPDATE song info
router.put("/update/:id", async (req, res) => {
    const filter = { _id: req.params._id }

    const options = {
        upsert: true,
        new: true
    };

    try {
        const result = await song.findOneAndUpdate(
            filter,
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                songURL: req.body.songURL,
                artist: req.body.artist,
                album: req.body.album,
                label: req.body.label,
                category: req.body.category,
            },
            options

        );

        return res.status(200).send({ succes: true, data: result });
    } catch (error) {
        return res.status(400).send({ succes: false, msg: error });
    }


});

//DELETE song

router.delete("/delete/:id", async (req, res) => {
    const filter = { _id: req.params.id };

    const result = await song.deleteOne(filter);
    if (result) {
        return res
            .status(200)
            .send({ succes: true, song: "Data deleted succesfully", data: result });
    } else {
        return res.status(400).send({ succes: false, msg: "Data not found." });
    }
});



module.exports = router