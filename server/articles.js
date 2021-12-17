const ARTICLES = require("./mock-articles");

module.exports = async (app)=>{
    app.get("/articles", async(req,res)=>{
        res.send(ARTICLES);
    });

    app.get("/articles/key", async(req, res)=>{
      res.send(ARTICLES.filter(article => article.key === req.params.key)[0])
    });
}