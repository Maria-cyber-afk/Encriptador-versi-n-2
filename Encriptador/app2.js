// encripta el texto de la textarea y lo muestra en pantalla
function encrypt() {
    var x = document.getElementById('inputText');
    
    
    
    let input = document.getElementById('inputText');
    let encryptedText = input
        .replace(/e/g, 'enter')      
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
    //document.ElementByID(´activarDesencripador)
}
//Desencripta el texto de la textarea y lo muestras en pantalla
function decrypt() {
    var x = document.getElementById('inputText');
      
    let input = document.getElementById('inputText');
    let decryptedText = input
       .replace(/enter/gi, 'e')                   
       .replace(/imes/gi, 'i')
       .replace(/ai/gi, 'a')
       .replace(/ober/gi, 'o')
       .replace(/ufat/gi, 'u');
    document.getElementById('outputText').value = decryptedText;


} 





