"JavaScript".length;
"PHP".indexOf("P");
"PHP".lastIndexOf("P");
"cobol".toUpperCase();
"ALGOL".toLowerCase();
"JavaScript".charAt(1);
String.fromCharCode(97);

console.log("JavaScript".includes("Java")); // Retorna true se a string com o parametro
console.log("Ruby".startsWith("R")); // Retorna true se a string inicia com o parametro
console.log("Erlang".endsWith("lang")); // reotrna true se a string termina com o parametro

console.log("C++".localeCompare("Ruby")); // -1
console.log("Pyton".localeCompare("Java")); // 1
console.log("JavaScritp".localeCompare("JavaScritp")); // 0

console.log("C++".match(/\+/g)); // ['+', '+']
console.log("Java".search(/a/)); // 1
console.log("Javascript".replace("Java", "Ecma")); //Ecmascript
console.log("Javascript".replace(/a/g, 4)); //J4v4script

"JavaScript".slice(0,4) // "Java"
"JavaScript".slice(4) // "Script"
"JavaScript".slice(0, -6) // "Java"
"JavaScript".slice(-6) // "Script"

"C;Java'JavaScript'Ruby".split(";") // retorna um array 

"Java".concat("Scritp") // JavaScript

"Scritp".padStart(10, "Java"); // Javascript
"C".padEnd(3, "+") //C++

" Self ".trim();
" Self".trimLeft();
"Self ".trimRight();