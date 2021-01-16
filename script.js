/**
 * @ML Framework
 */

// Sigmoid & Sigmoid'
function sigmoid(x){
    return 1/(1 + Math.exp(-x));
}
function sigmoidDerivative(x){
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

/** 
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
console.log("hello world");
**/

function isCharacter(keyCode) {
  return keyCode >= 32 && keyCode <= 126;
}

// Typing Templates
var jsTemplates = ["if (x == 1)", "for (var i = 0; i < n; ++i){}", "console.log(\"Hello world!\")", "function myFunction(p1)", "return x", "var x = 1", ];

var pyTemplates = ["print(\"Hello world\")", "for i in range(0,1):", "if x == 1:", "else:", "elif:", "x = 1", "x = input()", "x = string.split()", "list = []", "list.append(x)", "break", "return x", "x += 1", "x -= 1", "len(list)", "while x == 1:", "import math", "x + 1", "x - 1", "x * 1", "x / 1", "x // 1", "x ** 1", "x % 1", "x *= 1", "x /= 1", "x %= 1", "x //= 1", "x **= 1", "x &= 1", "x != 1", "x |= 1", "x ^= 1", "x >>= 1", "x <<= 1", "def myFunction(p1):", "string.upper()", "string.lower()", "string.capitalize()", "string.count()", "string.islower()", "string.isupper()", "string.join()", "string.find()", "string.isdigit()", "string.isalpha()", "string.isnumeric()", "string.isprintable()", "string.rfind()", "string.rindex()", "string.strip()", "string.startswith()", "string.translate()", "list.index()", "list.clear()", "list.copy()", "list.insert()", "list.sort()", "list.reverse()", "list.extend()", "x > 1", "x < 1", "x <= 1", "x >= 1"]

var csharpTemplates = ["static void myMethod()", "Console.WriteLine(\"Hello World\");", "Console.ReadLine();", "namespace myNamespace", "class myClass", "Console.Write(\"Hello World\");", "//comment", "int x = 1;", "string x = \"\";", "double x = 1;", "char x = \'\';", "bool x = true;", "float x = 1;", "long x = 1;", "Convert.ToInt32();", "x + 1", "x - 1", "x * 1", "x / 1", "x % 1", "x++;", "x--;", "x += 1;", "x -= 1;", "x = 1;", "x *= 1;", "x /= 1;", "x %= 1;", "x &= 1;", "x |= 1;", "x ^= 1;", "x >>= 1;", "x <<= 1;", "x > 1", "x < 1", "x <= 1", "x >= 1", "x == 1", "x != 1"]

var cppTemplates = ["#define ull unsigned long long", "using namespace std;", "#include <bits/stdc++.h>", "std::cout << \"Hello World\";", "int a, b, c;", "vector<int> numbers;", "for (int i = 0; i < n; ++i){}", "foo.push_back(bar);", "bar.push_back(make_pair(foo, foo));", "int main(){return 0;}", "ios_base::sync_with_stdio(0);", "void doSomething(int param){}", "vector <int> allZeroes(n, 0);", "int add(int x, int y){return x + y;}", "break;", "return x;", "x ++;", "x --;", "vector.length();", "x + 1", "x - 1", "x * 1", "x / 1", "x // 1", "x ** 1", "x % 1", "x *= 1;", "x /= 1;", "x %= 1;", "x //= 1;", "x **= 1;", "x &= 1;", "x != 1;", "x |= 1;", "x ^= 1;", "x >>= 1;", "x <<= 1;"];

// getTemplate
// @param{array templates}
// returns a random template in the array 
function getWords(template) {
  return template[Math.floor(Math.random() * template.length)]
}

function isCorrect(word, text) {
  if (word.substring(0,typedString.length) == typedString) {
    return true
  }
  return false
}

var word = getWord(pyTemplates);
var language 
// Can you put what the language is set to here 

var typedString = "";
window.keyPressed = function(event){
  var key = event.key || event.charCode;
  if (key == 8) {
    typedString = typedString.substring(0,typedString.length - 1)
  } else if (isCharacter(key) == true){
    // Just compare keycodes https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    typedString += key;
  }
  console.log(key);
  if (typedString == word) {
    // We pre get all the words for a typing session and display them all
    // So a for loop going through the template and picking random YEP
    typedString = ""
  } else if (isCorrect(word, typedString) == true) {
    // Text is normal or green to show it's right
  } else {
    // Text turns red
  }
}

/** 
 *DEPLOY IN BROWSER:
  https://test.1egend.repl.co/
  (NOT LIVE VERSION, GITHUB UPLOADED VERSION)
  https://1e9end.github.io/devtype
**/