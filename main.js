
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
 //console.log(answerPTagWithValue.textContent)

 //answerPTagWithValue.textContent * 2
 answerPTagWithValue.textContent *= 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
 var circleBlack = document.querySelector('#circle-bw')
 circleBlack.style.backgroundColor = circleBlack.style.backgroundColor === "black" ? "white" : "black"
})

var adelante = true  
document.querySelector("#blow-up button").addEventListener('click',function(){
  var redCircle = document.querySelector('.circle-red')
  var ancho = redCircle.offsetWidth
  if(ancho >= 320){
    adelante = false
    ancho = ancho /= 2
  } else {
    adelante = ancho === 40 ? true : adelante
    ancho = adelante ? ancho *= 2 : ancho /= 2
  }
  redCircle.style.width = ancho + "px"  
  redCircle.style.height = ancho + "px"
  console.log(ancho)
})

document.querySelector("#remove button").addEventListener('click',function(){
  var userList = document.querySelectorAll('#user-list li')
  var userListArray = [...userList]
  // console.log(userListArray)
  for(let i = 0; i < userListArray.length; i++){
    if(userListArray[i].className === "inactive"){
      userListArray[i].remove()
    }
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
 /*var squares = document.querySelectorAll("#reverse-squares .answer-box span")
 var squaresArray = [...squares]
  squaresArray.reverse()
  document.querySelector("#reverse-squares .answer-box").innerHTML = ""
  for(let i = 0; i < squaresArray.length; i++){
    console.log(squaresArray[i])
    document.querySelector("#reverse-squares .answer-box").innerHTML += squaresArray[i].outerHTML
  }
*/
document.querySelector("#reverse-squares .answer-box").classList.toggle("reverse-squares")

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  let item = document.querySelectorAll("#pig-latin #tasks li")
  const arrayOfElements = [...item]
  for(let i = 0; i < arrayOfElements.length; i++){
    const element = item[i] 
    let text = element.textContent
    let resText = text.split("").reverse().join("")
    element.textContent = resText
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
