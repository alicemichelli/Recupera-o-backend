DROP DATABASE IF EXISTS Trabalho;
CREATE DATABASE Trabalho CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;
USE Trabalho;

CREATE TABLE Funcionarios(

    id INTEGER PRIMARY KEY auto_increment,
    nome VARCHAR (40) NOT NULL,
    especialidade VARCHAR (40) NOT NULL
);

INSERT INTO Funcionarios VALUES
(DEFAULT, "Ana","Encanadora"),
(DEFAULT, "Juliano","Pedreiro"),
(DEFAULT, "Fabiana","Pintora"),
(DEFAULT, "Ivana","Eletricista");


CREATE TABLE OrdensServicos(

    id INTEGER PRIMARY KEY auto_increment,
    funcionario INTEGER NOT NULL,
    descricao VARCHAR (40) NOT NULL,
    custo DECIMAL NOT NULL,
    CONSTRAINT fk_id_Func FOREIGN KEY (funcionario) REFERENCES Funcionarios(id) on delete cascade on update cascade
);

INSERT INTO OrdensServicos VALUES
(DEFAULT, 1,"Consertar chaveiro", 50),
(DEFAULT, 1,"Torneira pingando", 50),
(DEFAULT, 1,"Vazamento no banheiro", 300),
(DEFAULT, 2,"Trocar porta cozinha", 150),
(DEFAULT, 2,"Instalar piso no banheiro", 600),
(DEFAULT, 3,"Pintar um quarto", 200),
(DEFAULT, 4,"Trocar resistência chuveiro", 50)


create view vw_FuncOrdens as
select f.nome, f.especialidade, o.id, o.funcionario, o.descricao, o.custo as OrdensServicos from Funcionarios f
inner join OrdensServicos o
on f.id = o.funcionario;