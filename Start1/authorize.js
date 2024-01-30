const authorize = (req, res,  next) => {
    console.log('authorized');
    const {user} = req.query
    if (user === 'john') {
        req.user = {name: "John", id: 3}
        next();
    } else {
        res.status(401).send("authorized");
    }
    next();
}

module.exports = authorize