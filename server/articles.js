const ARTICLES = require("./mock-articles");

module.exports = async (app)=>{
    app.get("/articles", async(req,res)=>{
        res.send(ARTICLES);
    })
}