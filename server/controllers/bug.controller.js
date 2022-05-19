const { Bug } = require('../models/bug.model')

module.exports.createBug = (req, res) => {
    const {title, squashed, description} = req.body;
    Bug.create({
        title,
        squashed,
        description
    })
        .then(bug => res.json(bug))
        .catch(err => res.status(400).json(err))
}
module.exports.getAllBugs = (req, res) => {
    Bug.find({})
        .then(bugs => res.json(bugs))
        .catch(err=> res.json(err))
}
module.exports.getBug = (req,res) =>{
    Bug.findOne({_id:req.params.id})
        .then(bug => res.json(bug))
        .catch(err => res.json(err))
}
module.exports.updateBug = (req,res) =>{
    Bug.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedBug => res.json(updatedBug))
        .catch(err => res.status(400).json(err))
}
module.exports.deleteBug = (req, res) =>{
    Bug.deleteOne({_id:req.params.id})
        .then(conf => res.json(conf))
        .catch(err => res.json(err))
}