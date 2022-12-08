class Funcionarios {
    constructor(data) {
       this.id = data.id;
       this.nome = data.nome;
       this.especialidade = data.email;
    }

    static readAll () { //Está OK
        return "SELECT * FROM Funcionarios";
    }

    static readOrdens (id) { //Está OK
        return `SELECT * FROM vw_FuncOrdens WHERE id = ${id}`;
    }



    static create(data) {  //Está OK
        return `INSERT INTO Funcionarios VALUES (default,"${data.nome}","${data.especialidade}")`;
    }

    static update(data) { //Está OK
        return `UPDATE Funcionarios SET nome ="${data.nome}", especialidade = "${data.especialidade}" WHERE id = ${data.id}`;
    }

    static delete(data) {
        return `DELETE FROM Funcionarios WHERE id = ${data.id}`;
    }



}

module.exports = Funcionarios;