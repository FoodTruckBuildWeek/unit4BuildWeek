// const Operators = require('../operators/operator-model');
// // const Projects = require('../projects/projects-model')


// // const validateActionId = async (req, res, next) => {
// //     try {
// //         const id = await Actions.get(req.params.id)
// //         if(!id) {
// //             res.status(404).json({message: "action not found"})
// //         } else {
// //             req.id = id
// //             next()
// //         }
// //     }
// //     catch(err){
// //         next(err)
// //     }
// // }

// // const validateActionPost = (req, res, next) => {
// //     if(!req.body){
// //         res.status(400)
// //     } else {
// //         next()
// //     }
// // }

// const validateTruckId = async (req, res, next) => {
//     try {
//         const id = await Projects.get(req.params.id)
//         if(!id) {
//             res.status(404).json({message: "action not found"})
//         } else {
//             req.id = id
//             next()
//         }
//     }
//     catch(err){
//         next(err)
//     }
    
// }

// const validateTruckPost = (req, res, next) => {
//     if(!req.body){
//         res.status(400)
//     } else {
//         next()
//     }
// }


// module.exports = {
//     validateTruckId, validateTruckPost
// }