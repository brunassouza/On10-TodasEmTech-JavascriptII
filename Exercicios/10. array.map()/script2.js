const winners = [
    {
        nome: 'Equipe Maravilinda',
        pais: 'Canadá',
    },
    {
        nome: 'Liga da Justiça',
        pais:'EUA',
    },
    {
        nome:'Mega Grupo',
        pais: 'Brasil',
    },
];

/*const vencedores = winners.map((equipe) => {
return equipe.nome;
}); */ //isso é o callback
// pode usar => ou não, não é obrigatório
const paises = winners.map(function(local){
    return local.pais;
})

console.log(paises);