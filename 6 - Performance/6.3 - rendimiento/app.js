console.time('revisión 1')
console.time('revisión 2')
var animales = ["perro", "gato", "pez"];
var l = animales.length;
console.timeEnd('revisión 2')
for (var i = 0; i < 10000; i++) {
    animales[i] = i;
}

console.timeEnd('revisión 1')