// const ToDoModel = require("../models/TodoModel");

// // GET TODO
// module.exports.getToDO = async (req, res) => {
//     const todo = await ToDoModel.find();
//     res.send(todo);
// };

// // SAVE TODO
// module.exports.saveToDO = async (req, res) => {
//     const { text } = req.body;

//     ToDoModel.create({ text })
//         .then(() => res.status(201).send("Added Successfully..."))
//         .catch((err) => console.log(err));
// };

// // DELETE TODO
// module.exports.deleteToDo = async (req, res) => {
//     const { _id } = req.body;

//     try {
//         await ToDoModel.findByIdAndDelete(_id);

//         res.status(200).send("Deleted Successfully...");
//     } catch (error) {
//         console.log(error);

//         res.status(500).send("Error deleting todo");
//     }
// };

// // UPDATE TODO
// module.exports.updateToDo = async (req, res) => {
//     const { _id, text } = req.body;

//     try {
//         await ToDoModel.findByIdAndUpdate(
//             _id,
//             { text },
//             { new: true }
//         );

//         res.status(200).send("Updated Successfully...");
//     } catch (error) {
//         console.log(error);

//         res.status(500).send("Error updating todo");
//     }
// };





const ToDoModel = require("../models/TodoModel");

// GET TODO
module.exports.getToDo = async (req, res) => {
    try {
        const todo = await ToDoModel.find();
        res.send(todo);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching todo");
    }
};

// SAVE TODO
module.exports.saveToDO = async (req, res) => {
    const { text } = req.body;

    try {
        await ToDoModel.create({ text });

        res.status(201).send("Added Successfully...");
    } catch (error) {
        console.log(error);
    }
};

// DELETE TODO
module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;

    try {
        await ToDoModel.findByIdAndDelete(_id);

        res.status(200).send("Deleted Successfully...");
    } catch (error) {
        console.log(error);

        res.status(500).send("Error deleting todo");
    }
};

// UPDATE TODO
module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;

    try {
        await ToDoModel.findByIdAndUpdate(
            _id,
            { text },
            { new: true }
        );

        res.status(200).send("Updated Successfully...");
    } catch (error) {
        console.log(error);

        res.status(500).send("Error updating todo");
    }
};