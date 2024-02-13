function encrypyter(message) {
    if( typeof(message) !== "string" ) {
        console.error("Debes ingresar un string");
        return;
    }

   let str = message.toLocaleLowerCase().split("")
   let resultMessage = [];

   for (let char of str) {

    switch(char) {
        case "e":
            resultMessage.push("enter");
          break;

        case "i":
            resultMessage.push("imes");
          break;

        case "a":
            resultMessage.push("ai");
          break;

        case "o": 
            resultMessage.push("ober");
          break;

        case "u": 
        resultMessage.push("ufat");
          break;
          
        default:
            resultMessage.push(char);
          break;
    }
   }

   return resultMessage.join("");

};

const result = encrypyter("Gato");
console.log(result);

