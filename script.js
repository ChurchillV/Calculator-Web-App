const currentDisplay = document.querySelector('#current-operand-display')
const previousDisplay = document.querySelector('#previous-operand-display')
const buttons = document.querySelectorAll('button')

function clearAll() {
   currentDisplay.innerText = ''
   previousDisplay.innerText = ''
}

function deleteOp() {
   let string = currentDisplay.innerText.toString()
   currentDisplay.innerText = string.substr(0, string.length - 1)
}

function evaluateExp() {
   if(previousDisplay.innerText != '') {
      previousDisplay.innerText += currentDisplay.innerText
      const result = eval(previousDisplay.innerText)
      currentDisplay.innerText = result
   }
}

function updateDisplay(number) {
   if (number === '.' && currentDisplay.innerText.includes('.')) return
   currentDisplay.innerText += number;
}

function selectOperation(operation) {
   if (currentDisplay.innerText === '') return
   if (previousDisplay.innerText !== ''){
      evaluateExp()
   }
   previousDisplay.innerText = currentDisplay.innerText + operation
   currentDisplay.innerText = ''
}




buttons.forEach((item) => {
   item.onclick = () => {
      if (item.id == 'all-clear') {
         clearAll()
      }
      else if (item.classList == 'number') {
         updateDisplay(item.id)
      }
      else if (item.id == 'delete') {
         deleteOp()
      }
      else if (item.classList == 'operation') {
         selectOperation(item.id)
      }
      else if (item.id == 'equals') {
         evaluateExp()
      }
   }
})
