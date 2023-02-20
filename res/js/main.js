const čtverec = document.querySelectorAll('.square')
const krtek = document.querySelector('.mole')
const chyceno = document.querySelector('#chyceno')

let boom
let body = 0



function randomSquare() {
  čtverec.forEach(square => {                       
    square.classList.remove('mole')
  })

                    /*krtek v různým čtverci*/
  let randomSquare = čtverec[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')
  boom = randomSquare
}


            /*když kliknu tak se přište score*/
čtverec.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square == boom) {
      body++
      chyceno.textContent = body
      hitPosition = null
    }
  })
})
        /*krtek pujde nikam jinam*/
function moveMole() {
  timerId = setInterval(randomSquare, 700)
}

moveMole()
