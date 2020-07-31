module.exports = (app) => {
    const newsController = require("../controllers/getNewsData");


    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


    // Get api's
    app.get('/' , newsController.getNewsData);

}