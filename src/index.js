//Mensagens que serão utilizadas nesse desafio:
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for maior ou igual a 10.001 = Radiante

let nomeHeroi = "Anpanman"
let nivelXP = 1000
let patente = ""

while (true) {
  if (nivelXP < 1000) {
    patente = "Ferro"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + patente)
    break  // O loop será quebrado caso o nivelXP seja válido

  } else if (nivelXP >= 5001 && nivelXP <= 7000) {
    patente = "Ouro"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + patente)
    break // O loop será quebrado caso o nivelXP seja válido

} else if (nivelXP >= 7001 && nivelXP <= 8000) {
    patente = "Platina"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + patente)
    break // O loop será quebrado caso o nivelXP seja válido

  } else if (nivelXP >= 10001) {
    patente = "Radiante"
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + patente)
    break // O loop será quebrado caso o nivelXP seja válido

  } else {
    console.log("XP inválida! Digite novamente o XP de seu herói: ")
    // Caso nenhuma das afirmações anteriores seja FALSE, o loop começará a ser executada no 'else' infinitamente até que o usuário finalize o mesmo. (CTRL + C) ou encerrando o programa hehehhe
  }
}
