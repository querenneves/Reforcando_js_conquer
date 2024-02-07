/*
// Obtém todos os elementos
var paragrafos = document.getElementsByTagName("p");
console.log(paragrafos[1]);

// Obtém o elemento com o id
var pageTitle = document.getElementById("page_title");
console.log(pageTitle);

// Acessa todos os atributos do primeiro elemento
var attributes = paragrafos[0].attributes;
console.log(attributes);

// mão na massa: seleciona todos os elementos
var spans = document.querySelectorAll('.parent span');
console.log(spans);

var spans = document.querySelectorAll('.parent span');
console.log(spans[1]);

var inputs = document.getElementById("username");
console.log(inputs.value);

let titulo = document.getElementById('titulo');
console.log(titulo)

let li = document.getElementsByTagName('li');
console.log(li)

let texto = document.getElementsByClassName('textos');
console.log(texto)

let proj1 = document.querySelector('li');
console.log(proj1)

let projs = document.querySelectorAll('li.projeto');
// Alterando texto: Utilizado em qualquer tipo de node (Preferência)
projs[0].textContent = "Projeto A";
// utilizada apenas com elementos HTML
projs[1].innerText = "Projeto B";

let user = document.getElementById('username').value;
console.log("Usuário:", user);

let password = document.getElementById('userpassword').value;
console.log("Senha:", password);
*/
// mão na massa: capturando e preenchendo
// Capturando cada elemento pelo ID
let zipCode = document.getElementById('zipCode');
let address = document.getElementById('address');
let number = document.getElementById('number');
let complement = document.getElementById('complement');

// Preenchendo cada campo com um valor de exemplo
zipCode.value = "12345-678";
address.value = "Rua Exemplo";
number.value = "100";
complement.value = "Apartamento 101";

// Para verificar se os campos foram realmente preenchidos.
console.log(zipCode.value);
console.log(address.value);
console.log(number.value);
console.log(complement.value);
