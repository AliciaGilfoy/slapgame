let players = {
  Ninja: {
    name: "Ninja",
    health: 100,
    attack: [
      {
        name: "Chop",
        damage: 5
      },
      {
        name: "Side Kick",
        damage: 13
      },
      {
        name: "Ninja Stars",
        damage: 17
      }
    ]
  },
  Dino: {
    name: "Dinosaur",
    health: 100,
    attack: [
      {
        name: "claws",
        damage: 4
      },
      {
        name: "bites",
        damage: 9
      },
      {
        name: "stomps",
        damage: 16
      }
    ]
  }
}
let ninjaHealth = players.Ninja.health
let dinoHealth = players.Dino.health
// let newDinoHealth = document.getElementById("dino-health").textContent


function attack(indexNum) {
  dinoHealth -= players.Ninja.attack[indexNum].damage
  let pickName = players.Ninja.attack[indexNum].name
  document.getElementById("dino-health").textContent = dinoHealth.toString()
  document.getElementById("ninja-attack-message").textContent = `${pickName}: ${players.Ninja.attack[indexNum].damage} damage`
  dinoKilled()
  if (dinoHealth > 0 && ninjaHealth > 0) {
    setTimeout(dinoAttack, 1000);
    setTimeout(resetMessage, 3000)
  }
}
// started making changes
// drawGame()

function drawGame() {
  // if (dinoHealth > 0 && ninjaHealth > 0) {
  //   setTimeout(dinoAttack, 1000);
  //   setTimeout(resetMessage, 3000)
  if (dinoHealth === 0) {
    document.getElementById("dino-attack-message").className = "attack-message-winner"
    document.getElementById("dino-attack-message").textContent = "You Win!"
    document.getElementById("attack-buttons").style.pointerEvents = "none"
    document.getElementById("ninja-attack-message").textContent = "Dino Killed!"
    playAgain()
  } if (ninjaHealth === 0) {
    document.getElementById("ninja-attack-message").className = "attack-message-winner"
    document.getElementById("ninja-attack-message").textContent = "Dino Wins!"
    document.getElementById("attack-buttons").style.pointerEvents = "none"
    document.getElementById("dino-attack-message").textContent = "Dino Killed you!"
    playAgain()
  }
}

function recordNewHealth() {
  document.getElementById("dino-health").textContent = dinoHealth.toString()
  document.getElementById("ninja-health").textContent = ninjaHealth.toString()
}

function dinoAttack() {
  let pickIndex = Math.floor(Math.random() * players.Dino.attack.length)
  ninjaHealth -= players.Dino.attack[pickIndex].damage
  document.getElementById("ninja-health").textContent = ninjaHealth.toString()
  let pickName = players.Dino.attack[pickIndex].name
  document.getElementById("dino-attack-message").textContent = `Dino ${pickName} back : ${players.Dino.attack[pickIndex].damage} damage`
  document.getElementById(pickName).className = pickName
  setTimeout(function () { document.getElementById(pickName).className = "dino-retaliate"; }, 1000);
  ninjaKilled()
}

function resetMessage() {
  document.getElementById("dino-attack-message").textContent = ""
  document.getElementById("ninja-attack-message").textContent = ""
}

function ninjaKilled() {
  if (ninjaHealth <= 50) {
    document.getElementById("health-alert-ninja").className = "font-weight-bold text-warning"
  }
  if (ninjaHealth <= 20) {
    document.getElementById("health-alert-ninja").className = "font-weight-bold text-danger"
  }
  if (ninjaHealth <= 0) {
    // document.getElementById("dino-attack-message").textContent = "Dino Killed you!"
    ninjaHealth = 0
    document.getElementById("ninja-health").textContent = ninjaHealth.toString()
    drawGame()
    // document.getElementById("ninja-attack-message").className = "attack-message-winner"
    // document.getElementById("ninja-attack-message").textContent = "Dino Wins!"
    // document.getElementById("attack-buttons").style.pointerEvents = "none"
    playAgain()
  }
  // if (ninjaHealth > 0) {
  //   setTimeout(resetMessage, 2000)
  // }
}

function dinoKilled() {
  if (dinoHealth <= 50 && dinoHealth > 0) {
    document.getElementById("health-alert-dino").className = "font-weight-bold text-warning"
    // setTimeout(resetMessage, 2000)
  }
  if (dinoHealth <= 20 && dinoHealth > 0) {
    document.getElementById("health-alert-dino").className = "font-weight-bold text-danger"
    // setTimeout(resetMessage, 2000)
  }
  if (dinoHealth <= 0) {
    // document.getElementById("ninja-attack-message").textContent = "Dino Killed!"
    dinoHealth = 0
    document.getElementById("dino-health").textContent = dinoHealth.toString()
    drawGame()
  }
}

function playAgain() {
  document.getElementById("play-again").textContent = "Play Again"
}

function playReset() {
  location.reload()
}