module.exports = app => {
    app.get('/chat', (req, res) => {
        res.send("aqui vai estar o chat")
    })
}