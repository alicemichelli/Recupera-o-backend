const express = require('express');
const router = express.Router();

const Funcionarios = require("../controllers/funcionarios")

router.get("/read",Funcionarios.readAll);
router.get("/profissional/:id",Funcionarios.readOrdensF);
router.post("/create",Funcionarios.create);
router.put("/update",Funcionarios.update);
router.delete("/delete/:id",Funcionarios.del);


module.exports = router;