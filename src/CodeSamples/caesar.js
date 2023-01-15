//shift the given message letters by the number passed in
const caesarCipherWKey = (str, key ,num) => {
  
  let dictionary = key.toLowerCase().split(""); 
  num = num % dictionary.length;
  let message = str.toLowerCase().split("");
  let newMessage = ''; 
  
  for (let i = 0; i < message.length; i++) {
    let currentChar = message[i]; 
    let charIndex = dictionary.indexOf(currentChar); 

    if(currentChar === " " || charIndex === -1) {
      newMessage += currentChar; 
      continue; 
    }; 

    let newIndex = charIndex + num

    if(newIndex > dictionary.length -1) {
      newIndex = newIndex - (dictionary.length -1) -1; 
    };

    if (str[i] === str[i].toUpperCase()) {
      newMessage += dictionary[newIndex].toUpperCase(); 
    } else {
      newMessage += dictionary[newIndex]; 
    }
  };

  console.log(newMessage); 

  return newMessage; 
};

caesarCipherWKey(`BigCar`, 'abcdefghijklmnopqrstuvwxyz', 2);

export default caesarCipherWKey; 