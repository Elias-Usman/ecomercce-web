const cloudinary = require("cloudinary");
const router = require("express").Router();

cloudinary.config({
  cloud_name: "di7wf4dlv",
  api_key: "921236483675741",
  api_secret: "ScjU3Eajk5nyFajvhei3D9jaZ2k"
});

router.delete("/:public_id", async (req, res) => {
  const { public_id } = req.params;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});


module.exports = router;
