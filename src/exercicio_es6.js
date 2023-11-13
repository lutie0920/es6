// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

const alunos = [ {nome: "João", nota: 6},
 {nome: "Pedro", nota: 8},
 {nome: "Maria", nota: 3}, 
{nome: "José", nota: 5},];

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
const alunosNotaMaior = alunos.filter(function(item){
    return item.nota >= 6;
})

console.log(alunosNotaMaior);