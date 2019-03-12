let players = ['playerOne', 'playerTwo', 'playerThree', 'playerFour']
let defenders = ['defenderOne', 'defenderTwo', 'defenderThree', 'defenderFour']

const init = _ => {
  for (let i = 0; i < players.length; i += 1) {
    let div = document.createElement('div')
    let chars = document.getElementById('characters')
    chars.appendChild(div).className = 'player' + (parseInt([i]) + 1)
  }
  for (let i = 0; i < defenders.length; i += 1) {
    let div = document.createElement('div')
    let defs = document.getElementById('defenders')
    defs.appendChild(div).className = 'defender' + (parseInt([i]) + 1)
  }
}

document.addEventListener('click', e => {
  for (let i = 0; i < players.length; i += 1) {
    if (e.target.className === 'player' + (parseInt([i]) + 1)) {
      let div = document.createElement('div')
      document.getElementById('character').appendChild(div).className = e.target.className + 'p'
      document.getElementById('character').appendChild(div).id = 'player'
      document.getElementById('character').appendChild(div).setAttribute('data-dmg', Math.floor(Math.random() * 200))
      let chars = document.getElementById('characters')
      document.body.removeChild(chars)
    }
  }
})
document.addEventListener('click', e => {
  for (let i = 0; i < players.length; i += 1) {
    if (e.target.className === 'defender' + (parseInt([i]) + 1)) {
      let div = document.createElement('div')
      document.getElementById('defender').appendChild(div).className = e.target.className + 'd'
      document.getElementById('defender').appendChild(div).id = 'challenger'
      document.getElementById('defender').appendChild(div).setAttribute('data-dmg', Math.floor(Math.random() * 200))
      let defs = document.getElementById('defenders')
      document.body.removeChild(defs)
    }
  }
})

document.querySelector('#fight').addEventListener('click', function () {
  let playa = document.querySelector('#player')
  let p = playa.getAttribute('data-dmg')
  let pneg = Math.floor(Math.random() * 10)
  let php = p - pneg
  let defender = document.getElementById('challenger')
  let d = defender.getAttribute('data-dmg')
  let dneg = Math.floor(Math.random() * 10)
  let dhp = d - dneg
  document.getElementById('player').setAttribute('data-dmg', php)
  document.getElementById('challenger').setAttribute('data-dmg', dhp)
  console.log(php)
  console.log(dhp)
  if (php < 0 && dhp > 0) {
    console.log('you lose')
    document.getElementById('player').setAttribute('data-dmg', 'Loser')
    document.getElementById('challenger').setAttribute('data-dmg', 'Winner')
    let fightsect = document.querySelector('#fightsect')
    document.body.removeChild(fightsect)
  } else if (php > 0 && dhp < 0) {
    console.log('you win')
    document.getElementById('player').setAttribute('data-dmg', 'Winner')
    document.getElementById('challenger').setAttribute('data-dmg', 'Loser')
    let fightsect = document.querySelector('#fightsect')
    document.body.removeChild(fightsect)
  } else if (php < 0 && dhp < 0) {
    document.getElementById('player').setAttribute('data-dmg', 'No Survivors')
    document.getElementById('challenger').setAttribute('data-dmg', 'No Survivors')
    let fightsect = document.querySelector('#fightsect')
    document.body.removeChild(fightsect)
    console.log('no survivors')
  }
}
)

init()
