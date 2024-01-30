const people = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success:true, data:people})
}

const postPeople = (req, res) => {
    res.json({success:true, data:req.body})
}

const updatePeople = (req, res) => {
    const {id} = req.params
    const {name} = req.body
    console.log({id: id, name: name});

    let ID = Number(id);

    const person = people.find((item) => item.id === ID);
    if (!person) {
        res.status(404).send({"message": "Person not found"});
    }
    else {
        people.forEach((item) => {
            if (item.id === ID) {
                item.name = name
            }
        })
        res.status(200).json({success: true, data: people});
    }
}

const deletePeople = (req, res) => {
    const ID = Number(req.params.id)

    const person = people.find((item) => item.id === ID);
    if (!person) {
        res.status(404).send({"message": "Person not found"});
    }
        else {
            const newPeople = people.filter((item) => item.id !== ID ) 
            res.status(200).json({success: true, data: newPeople});
        }

        

}

module.exports = {
    getPeople,
    deletePeople,
    updatePeople,
    postPeople
}