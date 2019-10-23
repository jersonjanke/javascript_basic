let languages = ["Pyton", "C", "Java"];
console.log(languages.indexOf("Pyton")); // Retorna a posicao do primeiro elemento encontrado
console.log(languages.lastIndexOf("C")); //Retorna a posicao do ultimo elemento encontrado
console.log(languages.includes("Java")); //Retorna true se o elemento existir

const ooLang = ["Smalltalk", "C++", "Simula"];
const funcLang = ["Haskell", "Scheme"];
const allLang = ooLang.concat(funcLang);
console.log(allLang) // retorna um novo array resultant da concatenacao de um ou mais arrays

const langSlice = ["Smalltalk", "C++", "Simula", "Haskell", "Scheme"];
console.log(langSlice.slice(0,2)); // Retorna partes de um determinado array de acordo com sua posicao
console.log(langSlice.slice(2,4));
console.log(langSlice.slice(1)); // retorna todo array

// JOIN Converte a array para uma String, juntamente os elementos com base de um separador
console.log(langSlice.join(";"));