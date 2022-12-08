const Funcionarios = require("../models/funcionario");
const con = require("../dao/connection");

const readAll = (req, res) => {
    con.query(Funcionarios.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const readOrdensF = (req, res) => {
    con.query(Funcionarios.readOrdens(req.params.id), (err, result) => {
        if (err == null)
            res.json(Composite.funcionario(result)).end();
        else
            res.json(err).end();
    });
}



const create = (req, res) => {
    con.query(Funcionarios.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const update = (req, res)=> { 

    con.query(Funcionarios.update(req.body),(err, result) => {
        if(err == null)
            if(result.affectedRows> 0)
                res.status(200).end();
            else
                res.status(404).end();
    });

}

const del = (req, res) => {
    con.query(Funcionarios.delete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}



module.exports ={
    readAll,
    create,
    update,
    del,
    readOrdensF
}