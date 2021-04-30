/*const countryList = [ "Argentina","Armenia","Australia","Azerbaijan","Bahamas","Brazil","Burkina Faso", "Costa Rica","Mauritania","St Vincent","Uganda","United Arab Emirates","Uruguay","Uzbekistan","Venezuela"];

//countryList.splice(0, 1); // removeu argentina
countryList.splice(0,3, "Japão", "Grecia", "Turquia", "Italia");
console.log(countryList); 
*/



const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

usuarios.splice(0,1, {user:240, name: 'Bruna', idade:23}); //remove  apartitr o indice 0, o primeiro item

console.log(usuarios);