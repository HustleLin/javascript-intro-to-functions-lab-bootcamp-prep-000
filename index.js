function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase
var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

function sayHiToGrandma(string) {
  if (`${string} === lowercase`)
  { return "I can't hear you!" }

  elseif (`${string} === uppercase`)
  { return "YES INDEED!" }

  elseif (`${string} === "I love you, Grandma."`)
  { return "I love you, too." }
}
