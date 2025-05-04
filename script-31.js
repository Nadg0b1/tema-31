// folosind un for loop sa se afiseze in consola toate numerele de la 10 la 20
// folosind un for loop sa se afiseze in consola toate numerele multiplii de 3 de la 10 la 30
// folosind un for loop sa se afisze in consola toate numerele de la 1 la 10 ca mai jos:
// "1 - impar"
// "2 - par"
// "3 - impar"
// ...
// "10 - par"
// Practic trebuie afisat numarul, apoi, tot in acelasi string, daca este par sau nu.
// 4.sa se creeze un array cu numere. folosind un for loop sa se calculeze suma numerelor impare
// 5.sa se creeze un array cu numere. folosind un for loop sa se calculeze suma numerelor pare pozitive

// 1.
console.log("--- Numere de la 10 la 20 ---");
for (let i = 10; i <= 20; i++) {
  console.log(i);
}

// 2.
console.log("--- Multipli de 3 de la 10 la 30 ---");
for (let i = 10; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 3.
console.log("--- Numere de la 1 la 10 (par/impar) ---");
for (let i = 1; i <= 10; i++) {
  let tipNumar = "";
  if (i % 2 === 0) {
    tipNumar = "par";
  } else {
    tipNumar = "impar";
  }
  console.log(`${i} - ${tipNumar}`);
}
