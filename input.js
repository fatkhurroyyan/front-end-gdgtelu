const input = require("prompt-sync")({ sigint: true });

const sapa = "Halo, Dunia!";
const nama = input("Masukkan nama Anda: ");
console.log(sapa + nama);
