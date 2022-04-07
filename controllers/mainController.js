
const { urlencoded } = require("express");
const mainController = {
    home: (req, res) => {
        res.render("home")
    },
};

module.exports=mainController;