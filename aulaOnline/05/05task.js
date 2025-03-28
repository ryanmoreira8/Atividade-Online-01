// Nota das provas
let N1 = (10);
let N2 = (9);

// Calcula a média das notas (Condição maior que 6 APROVADO menor que 6 REPROVADO)
let media = (N1 + N2) / 2;

//Operador ternario (serve para cccompatar e deixr mais limpo o codigo If, Else If e Else)
let reprovadoOuAprovado = media >= 6 ? 'Aprovado' : 'Reprovado'
 
reprovadoOuAprovado = reprovadoOuAprovado.toUpperCase()

// Exibe a média no console
console.log(`A média das notas é:`, media, reprovadoOuAprovado);
