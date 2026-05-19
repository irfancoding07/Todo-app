const { Router } = require("express");

const router = Router();

const {
    getToDo,
    saveToDO,
    deleteToDo,
    updateToDo
} = require("../controllers/TodoControllers");

router.get("/get-todo", getToDo);

// POST
router.post("/save-todo", saveToDO);

// DELETE
router.delete("/delete-todo", deleteToDo);

// UPDATE
router.put("/update-todo", updateToDo);

module.exports = router;