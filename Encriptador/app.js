  // Función para encriptar el texto
  function encrypt() { 
    var inputElement = document.getElementById('textoEntrada');
    if (inputElement) {
        var text = inputElement.value;
        var encryptedText = text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        document.getElementById('textoSalida').value = encryptedText;
    } 
   
    }

// Función para desencriptar el texto
function decrypt() {debugger
    var inputElement = document.getElementById('textoEntrada');
    if (inputElement) {
        let textToDecrypt = inputElement.value;
       let decryptedText= textToDecrypt
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');
        document.getElementById('textoSalida').value = decryptedText;
    }
    
    }