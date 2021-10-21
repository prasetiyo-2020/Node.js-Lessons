app.get('/list', (req, res) => {
    connection.query(
        "SELECT * FROM lists",
        (error, results) => {
            res.render("list.ejs", {
                lists: results
            });
        }
    );
});
