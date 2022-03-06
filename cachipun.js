var coins = parseInt(prompt("Ingrese cantidad de jugadas"));
var userChoice = "";
var wins = 0;
var loses = 0;

for (i = 1; i <= coins; i++) {
  var cpuChoice = Math.floor(Math.random() * 3);
  console.log('math random',cpuChoice);
  if (cpuChoice === 0) {
    cpuChoice = "piedra";
  } else if (cpuChoice === 1){
    cpuChoice = "papel";
  } else if (cpuChoice === 2) {
    cpuChoice = "tijera";
  }
  console.log('asignacion string', cpuChoice);

  userChoice = prompt("piedra, papel o tijeras???")
  if (userChoice === "tijera") {
    if (cpuChoice === "piedra") {
      alert(`perdiste`);
      loses++;
    } else if (cpuChoice === "papel") {
      alert(`ganaste`);
      wins++;
    } else {
      alert(`empate`);
    }
  } else if (userChoice === "papel") {
    if (cpuChoice === "piedra") {
      alert(`ganaste`);
      wins++;
    } else if (cpuChoice === "tijera") {
      alert(`perdiste`);
      loses++;
    } else {
      alert(`empate`);
    }
  } else if (userChoice === "piedra") {
    if (cpuChoice === "tijera") {
      alert(`perdiste`);
      loses++;
    } else if (cpuChoice === "papel") {
      alert(`ganaste`);
      wins++;
    } else {
      alert(`empate`);
    }
  } else {
    alert(`Jugada no es valida`);
  }  
}

if (wins > loses) {
  alert(`Ganaste!! :) el marcador fue P:${wins}||CPU:${loses}`);
} else if (winds < loses) {
  alert(`Perdiste :'( el marcador fue P:${wins}||CPU:${loses})`);
} else {
  alert(`EMPATE!!:O P:${wins}||CPU:${loses}`);
}