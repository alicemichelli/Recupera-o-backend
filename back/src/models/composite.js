const Funcionario = require('./funcionario');

const funcionario = (lista) => {
    let ordemServicos = [];
    let i =0
    let id = lista[i].id;
    ordemServicos.push(new Funcionario(lista[i]));
    lista.forEach(e=>{
        if(id != e.id){
            ordemServico.id = e.id;
            ordemServicos.push(new Funcionario(e));
            i++;
            ordemServicos[i].addfuncionario(new Funcionario(e));
        }else{
            ordemServicos[i].addfuncionario(new Funcionario(e));
        }

    });
    const func = lista[i];
    func.ordemServicos = ordemServicos;
    return new funcionario(func);

}
    module.exports = {
        Funcionario
};