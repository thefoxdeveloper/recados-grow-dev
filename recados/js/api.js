const api = axios.create({
  baseURL: "http://localhost:3000",
});
console.log("Made by ");
const nome = "Douglas Santos";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
