/**
 * Array
 */

const languages = ["Pyton", "C", "Java"];

/**
* PUSH: Adiciona um elemento no final 
*/

languages.push("Ruby");
languages.push("Go");
console.log(languages);

/**
  * POP: Remove um elemento do Final
  */

languages.pop();
languages.pop();
console.log(languages);

/**
 * Array pt.2
 */
const languages2 = ["Pyton", "C", "Java"];
console.log(languages2);

/**
 * UNSHIFT: Adiciona um elemento no início
 */

languages2.unshift("Ruby");
languages2.unshift("GO");
console.log(languages2);

/**
 * SHIFT: Remove no inicio do array
 */

languages2.shift();
languages2.shift();
console.log(languages2);


/**
* SPLICE: Remove, substitui ou adiciona um ou mais elementos em um determinada posiçõ de ordenação
*/
console.log("======= SPLICE ============");
const languages3 = ["Pyton", "C", "Java"];
console.log(languages3);
console.log(languages3.splice(1, 1)); // Remove um item na posicao 1
console.log(languages3);
console.log(languages3.splice(1, 1)); // Remove um item na posicao 1 do novo array
console.log(languages3);
console.log();
console.log(languages3.splice(1, 0, "C++", "C#", "Delphi")); //Adiciona na posicao 1, 2 arg. 0 para na remover item
console.log(languages3);
console.log(languages3.splice(1, 1, "C")); // Troca item na posicao 1
console.log(languages3);
console.log()

/**
 * SORT: Ordena os elementos de acordo com uma função de ordenação
 */

const lang = [
    {
        name: "Pyton",
        year: 1991
    },
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];

lang.sort((a, b) => { return a.year - b.year }); // Ordenacao por ano menor => maior
console.log(lang);

console.log();

lang.sort((a, b) => { return b.year - a.year }); // Ordenacao por ano maior pro menor.
console.log(lang);

console.log();

lang.sort((a, b) => {return (a.name <= b.name) ? -1 : 1}); //Ordenacao por name
console.log(lang);

console.log();

lang.sort((a, b) => {return (a.name >= b.name) ? -1 : 1}); //Ordem inversa
console.log(lang);

console.log()

lang.sort((a,b) => { return a.name.localeCompare(b.name) });//Equivalente //Ordenacao por name
console.log(lang);

console.log

lang.sort((a, b) => { return a.name.localeCompare(b.name) * -1 }); //Equivalente // Ordem inversa
console.log(lang);
console.log();
/**
 * REVERSE: Inverte a ordem dos elementos
 */
const languages4 = ["Pyton", "C", "Java"];
languages4.reverse();
console.log(languages4);
console.log();
/**
 * FILL: Preemche os elementos de acordo com a posição de início e fim
 */
const languages5 = ["Pyton", "C", "Java"];
languages5.fill("Javascritp", 0 , 3);
console.log(languages5);