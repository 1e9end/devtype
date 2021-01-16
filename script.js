/**
 * @ML Framework
 */
// Sigmoid & Sigmoid'
function sigmoid(var x){
    return 1/(1 + Math.exp(-x));
}
function sigmoidDerivative(var x){
    return sigmoid(x) * (1 - sigmoid(x));
}

var letters = "abcdefghijklmnopqrstuvwxyz".split("");
/**
function createArr(x, result){
    arr = nj.zeros((1, 27))
    arr[27] = int(result)
    al = "abcdefghijklmnopqrstuvwxyz"
    for i in range(len(x)):
        ind = al.find(x[i])
        if ind > -1:
            arr[al.find(x[i])] += 1
    return arr
}
**/

// Neural Net Initialization
var training_inputs = nj.array([[0, 0, 1],
                           [1, 1, 1],
                           [1, 0, 1],
                           [0, 1, 1]]);

var training_outputs = nj.array([]).T;
training_outputs = nj.append(training_outputs, [0, 1, 1, 0]);
training_outputs = nj.array([training_outputs]).T;
nj.random.seed(1);

var synaptic_weights = 2 * nj.random.random((3, 1)) - 1;
console.log("Random starting synaptic weights: " + synaptic_weights);

// Backpropagation
for (var i = 0; i < 200; ++i){
    var input_layer = training_inputs;
    var outputs = sigmoid(nj.dot(input_layer, synaptic_weights));
    error = training_outputs - outputs;
    adjustments = error * sigDiv(outputs);
    synaptic_weights += nj.dot(input_layer.T, adjustments);
}
console.log(synaptic_weights);
console.log(outputs);

/** 
 * @Typing framework
**/
// https://www.khanacademy.org/cs/i/6108671343558656

function isCharacter(text) {
  var characters = /^[0-9a-zA-Z]+$/ + "~#%*()-=+{}[]:;'<>./?";
  if (text.value.match(characters))
}
var typedString = ""
window.keyPressed = function(event){
  var key = event.charCode || event.keyCode;
  if (key == 8) {
    typedString = typedString.substring(0,typedString.length - 1)
  } else if (/** Check keycode is alphanumeric and syntax **/){
    // Just compare keycodes https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    typedString += key;
  }
  console.log(key);
}

var templates = [];
/** 
 *DEPLOY IN BROWSER:

  https://test.1egend.repl.co/
  That will be what everyone sees of the webpage
  Once we're done coding I will port this webpage to
  https://1e9end.github.io/devtype at the end
**/