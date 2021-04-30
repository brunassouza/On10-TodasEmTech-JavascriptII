function exibirDados (event) {
    event.preventDefault();

    let pegaAutor = document.getElementById('autor').value;
    let pegaTítulo = document.querySelector('#titulo').value;
    let pegaISBN = document.querySelector('#isbn').value;
    let pegaPaginas = document.querySelector('#paginas').value;
    let pegaDataPublicacao = new Date().toLocaleDateString('pt-br');
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');
    
    document.getElementById('resposta').innerHTML += `
    <tr id="tabelaDeLivro">
        <td>${pegaTítulo}</td>
        <td>${pegaAutor}</td>
        <td>${pegaISBN}</td>
        <td>${pegaDataPublicacao}</td>
        <td>${pegaPaginas}</td>
        <td>${dataInsercao}, ${horarioInsercao}</td>
    </tr>
    `
    limpardados()
}

let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
        pages: "N/A",
        dateCadastro: "N/A",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
        pages: "N/A",
        dateCadastro: "N/A",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
        pages: "N/A",
        dateCadastro: "N/A",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
        pages: "N/A",
        dateCadastro: "N/A",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
        pages: "N/A",
        dateCadastro: "N/A",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
        pages: "N/A",
        dateCadastro: "N/A",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
        pages: "N/A",
        dateCadastro: "N/A",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
        pages: "N/A",
        dateCadastro: "N/A",
    }
]


let book = books.forEach((books) => {

    const parseDate = new Date(books.published);
    const getData = parseDate.toLocaleDateString('pt-br');
    books.published = getData;
})

let selectionBooks = books.map(function(books){
    return `<tr>
    <td>${books.title}</td>
    <td>${books.author}</td>
    <td>${books.isbn}</td>
    <td>${books.published}</td>
    <td>${books.pages}</td>
    <td>${books.dateCadastro}</td>
    </tr>`
});

document.querySelector("#resposta tbody").innerHTML = selectionBooks.join("");


function limpardados () {
    document.getElementById('titulo').value="";
    document.getElementById('autor').value="";
    document.getElementById('isbn').value="";
    document.getElementById('dataPublicacao').value="";
    document.getElementById('paginas').value="";

}

document.querySelector("#botaoDelete").addEventListener('click', function exluirLivro (event) {
    event.preventDefault();

    document.getElementById('tabelaDeLivro').remove();
})


