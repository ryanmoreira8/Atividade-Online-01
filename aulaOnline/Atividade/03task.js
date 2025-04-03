let nota = ''

if (nota >= 90 && nota <=100) {
    console.log('Classificação A', nota);
}
else if (nota >= 80 && nota <=89) {
    console.log('Classificação B', nota);
}
else if (nota >= 70 && nota <=79) {
    console.log('Classificação C', nota);
}
else if (nota >= 60 && nota <=69) {
    console.log('Classificação D', nota);
}
else if (nota != 60) {
    console.log('Classificação F', nota);
} else {

    console.log(nota <= 59, 'Sua nota é Invalida abaixo de 50');
}