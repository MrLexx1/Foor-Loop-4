// TUGAS KEEMPAT

let batas = parseInt(prompt("Masukkan angka:"));

for (let i = 1; i <= batas; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Pondok");
  } else if (i % 5 === 0) {
    console.log("Informatika");
  } else {
    console.log(i);
  }
}
