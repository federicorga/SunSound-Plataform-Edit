const router = require("express").Router();

const album = require("../models/album");


// POST
router.post("/save", async (req, res) => {
    const newAlbum = album(
        {
            name: req.body.name,
            imageURL: req.body.imageURL,
            label: req.body.label,
        });

    try {
        const savedAlbum = await newAlbum.save();
        return res.status(200).send({ succes: true, album: savedAlbum });
    } catch (error) {
        return res.status(400).send({ succes: false, msg: error });

    }
});

// GET single album info
router.get("/getOne/:id", async (req, res) => {
    const filter = { _id: req.params.id };

    const data = await album.findOne(filter);

    if (data) {
        return res.status(200).send({ succes: true, album: data });
    } else {
        return res.status(400).send({ succes: false, msg: "Data not found." });
    }
});

// GET all de albums info
router.get("/getAll", async (req, res) => {
    const options = {
        sort: {
            createdAt: 1,
        },
    };

    const data = await album.find(options);
    if (data) {
        return res.status(200).send({ succes: true, album: data });
    } else {
        return res.status(400).send({ succes: false, msg: "Data not found." });
    }
});

//UPDATE album info
router.put("/update/:id", async (req, res) => {
    const filter = { _id: req.params._id }

    const options = {
        upsert: true,
        new: true
    };

    try {
        const result = await album.findOneAndUpdate(
            filter,
            {
                name: req.body.name,
                imageURL: req.body.imageURL,
                label: req.body.label,
            },
            options

        );

        return res.status(200).send({ succes: true, data: result });
    } catch (error) {
        return res.status(400).send({ succes: false, msg: error });
    }


});

//DELETE album

router.delete("/delete/:id", async (req, res) => {
    const filter = { _id: req.params.id };

    const result = await album.deleteOne(filter);
    if (result) {
        return res
            .status(200)
            .send({ succes: true, album: "Data deleted succesfully", data: result });
    } else {
        return res.status(400).send({ succes: false, msg: "Data not found." });
    }
});



module.exports = router;