const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.direct = isDirect
  }

  encrypt(msg, key) {
    if (msg === undefined || key === undefined) {
      throw new Error('THROWN')
    }
 
    msg = msg.toUpperCase()
    key = key.toUpperCase()
	
    const endIndex = this.getEndIndex(msg)

    const toEnc = msg.slice(0, endIndex)
    const keyWord = this.repeatKey(key, toEnc)

    const encMsg = []
    
 
    for (let i = 0; i < toEnc.length; i += 1) {
       if (toEnc[i] === ' ') {
        encMsg.push(' ')
      } else {
       const code = toEnc.charCodeAt(i) + keyWord.charCodeAt(i) - 65
       encMsg.push(String.fromCharCode(code > 90 ? code - 90 + 64 : code))
      }
      
    }
    
    const result = `${encMsg.join('')}${msg.slice(endIndex)}`
    return this.direct ? result : result.split("").reverse().join("")
    // новая буква = буква[код буквы ключа + код сообщения - 65]
   }

  // 65 - 90
 
   
  decrypt(encMsg, key) {
    if (encMsg === undefined || key === undefined) {
      throw new Error('THROWN')
    }

    key = key.toUpperCase()
	
    const endIndex = this.getEndIndex(encMsg)
    
    const toDec = encMsg.slice(0, endIndex)
    const keyWord = this.repeatKey(key, toDec)

    const decMsg = []

    for (let i = 0; i < toDec.length; i += 1) {
      if (toDec[i] === ' ') {
       decMsg.push(' ')
     } else {
      const code = toDec.charCodeAt(i) - keyWord.charCodeAt(i)
      decMsg.push(String.fromCharCode(code < 0 ? 90 + code + 1: code + 65))
     }
     
   }

   const result = `${decMsg.join('')}${encMsg.slice(endIndex)}`
   return this.direct ? result : result.split("").reverse().join("")
  }
  
  getEndIndex(msg) {
    const findIndex = msg.split("").findIndex(ch => (ch.charCodeAt(0) < 65 || ch.charCodeAt(0) > 90) && (ch !== ' '))
    return findIndex !== -1 ? findIndex : msg.length
  }

  repeatKey(key, msg) {
    let keyWord = ''
    let count = 1
    let countSpaces = 0
   	let j = 0
    
   	for (let i = 0; i < msg.length; i += 1) {
    
      	if (i === count * key.length + countSpaces) {
      		j = 0
        	count += 1
      	}
      
      	if (msg[i] === ' ') {
          keyWord += ' '
          countSpaces += 1
      	} else {
      		keyWord += key[j]
          j += 1
      	}
      
    }
    
    return keyWord
  }

}

module.exports = VigenereCipheringMachine;
