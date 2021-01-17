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

var pyTemplates = ["print(\"Hello world\")", "for i in range(0,1):", "if x == 1:", "else:", "elif:", "x = 1", "x = input()", "x = string.split()", "list = []", "list.append(x)", "break", "return x", "x += 1", "x -= 1", "len(list)", "while x == 1:", "import math", "x + 1", "x - 1", "x * 1", "x / 1", "x // 1", "x ** 1", "x % 1", "x *= 1", "x /= 1", "x %= 1", "x //= 1", "x **= 1", "x &= 1", "x != 1", "x |= 1", "x ^= 1", "x >>= 1", "x <<= 1", "def myFunction(p1):", "string.upper()", "string.lower()", "string.capitalize()", "string.count()", "string.islower()", "string.isupper()", "string.join()", "string.find()", "string.isdigit()", "string.isalpha()", "string.isnumeric()", "string.isprintable()", "string.rfind()", "string.rindex()", "string.strip()", "string.startswith()", "string.translate()", "list.index()", "list.clear()", "list.copy()", "list.insert()", "list.sort()", "list.reverse()", "list.extend()", "x > 1", "x < 1", "x <= 1", "x >= 1"];

var csharpTemplates = ["static void myMethod()", "Console.WriteLine(\"Hello World\");", "Console.ReadLine();", "namespace myNamespace", "class myClass", "Console.Write(\"Hello World\");", "//comment", "int x = 1;", "string x = \"\";", "double x = 1;", "char x = \'\';", "bool x = true;", "float x = 1;", "long x = 1;", "Convert.ToInt32();", "x + 1", "x - 1", "x * 1", "x / 1", "x % 1", "x++;", "x--;", "x += 1;", "x -= 1;", "x = 1;", "x *= 1;", "x /= 1;", "x %= 1;", "x &= 1;", "x |= 1;", "x ^= 1;", "x >>= 1;", "x <<= 1;", "x > 1", "x < 1", "x <= 1", "x >= 1", "x == 1", "x != 1"];

var cppTemplates = ["#define ull unsigned long long", "using namespace std;", "#include <bits/stdc++.h>", "std::cout << \"Hello World\";", "int a, b, c;", "vector<int> numbers;", "for (int i = 0; i < n; ++i){}", "foo.push_back(bar);", "bar.push_back(make_pair(foo, foo));", "int main(){return 0;}", "ios_base::sync_with_stdio(0);", "void doSomething(int param){}", "vector <int> allZeroes(n, 0);", "int add(int x, int y){return x + y;}", "break;", "return x;", "x ++;", "x --;", "vector.length();", "x + 1", "x - 1", "x * 1", "x / 1", "x // 1", "x ** 1", "x % 1", "x *= 1;", "x /= 1;", "x %= 1;", "x //= 1;", "x **= 1;", "x &= 1;", "x != 1;", "x |= 1;", "x ^= 1;", "x >>= 1;", "x <<= 1;"];

var sqlTemplates = ["SELECT c1", "FROM table;", "COUNT(c1)", "WHERE x = 1", "x <= 1", " x >= 1", "x < 1", "x > 1", "x <> 1", "x BETWEEN v1 AND v2", "x LIKE \'\'", "x IN list", "x AND y", "x OR y", "NOT x", "ORDER BY x", "DESC", "ASC", "INSERT INTO list(c1,c2,c3)", "VALUES(v1,v2,v3)", "IS NOT NULL", "UPDATE list", "SET x = \'\'", "DELETE FROM list", "SELECT TOP x", "x PERCENT", "MIN(x)", "MAX(x)", "AS x", "AVG(x)", "SUM(x)", "%x%", "_x_", "?x?", "[a-z]", "[!x]", "[x]", "x IN list", "JOIN x", "INNER JOIN list", "LEFT JOIN list", "RIGHT JOIN list", "FULL OUTER JOIN list", "ON x = y", "UNION", "UNION ALL", "GROUP BY x", "GROUP BY COUNT(x)", "HAVING x", "WHERE EXISTS", "ANY", "ALL", "INTO list", "CASE", "END", "ELSE", "THEN", "IFNULL()", "COALESCE()", "ISNULL()", "IsNull()", "NVL()", "CREATE PROCEDURE myProcedure", "EXEC myProcedure", "--comment", "x += 1", "x -= 1", "x *= 1", "x /= 1", "x %= 1", "x &= 1", "x ^-= 1", "x |*= 1", "SOME()"];

var webTemplates = ["<!DOCTYPE>", "<html>", "<head>", "<title>", "<body>", "<p>", "<h1>", "</html>", "</body>", "</p>", "</h1>" ];

var phpTemplates = [""];

var jqueryTemplates = ["$(x).hide()", "$(function(){", "$(x)", "$(#x)", "$(.x)", "$(\"*\")", "$(this)", "$(\"x.intro\")", "$(\"x:first\")", "$(\"[x]\")", "$(\"x:first-child\")", "$(\"a[t=]\")"];

var luaTemplates = ["local var = 1", "local function myFunction()", "end", "if x == 1 then", "elseif x == 1 then", "else", "for i = 0,1 do", "for _, i in pairs(list) do", "while true do", "_G var = 1", "local list = {}", "end)", "x += 1", "x -= 1", "x + 1", "x - 1", "x * 1", "x / 1", "x % 1", "x ^ 1", "x == 1", "x > 1", "x < 1", "x <= 1", "x >= 1", "x ~= 1", "and", "or", "not", "#list", "table.insert()", "list[i]", "for _, i in ipairs(dict) do", "tostring()", "tonumber()", ]

var wordTemplates = ["cat", "dog", "bird", "lizard", "boat", "cliff", "canoe", "bible", "can", "pan", "penguin", "english", "french", "charles", "is", "smart", "and", "he", "likes", "to", "program"];

var massive = [];
massive.push(jsTemplates, pyTemplates, csharpTemplates, cppTemplates, sqlTemplates, webTemplates, phpTemplates, jqueryTemplates, luaTemplates);

function getWords(lang) {
  var template = massive[lang];
  var listWords = [];
  for (i = 0; i < 300; ++i) {
    var x = Math.floor(Math.random() * template.length);
    listWords.push(template[x]);
  }
  return listWords;
}

function isCorrect(word, text) {
  return word.substring(0, text.length) == text;
}

var language = 0;

// Choose best requestAnimationFrame
window.reqAnimationFrame = (function(callback){
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

// Words & Input variables
var wordNum = 0;
var words = getWords(language);
var currentWord = words[wordNum]; 

// Typing Info variables
var timer = 60;
var score = 0;
var accuracy;
var wpm;

// Resets the input string on page reload
document.getElementById("typeInput").value = "";

// Initialization variables
var startTime;
var start = false;


function displayWords(wrong){
  var templateText = document.getElementById("templateText");
  templateText.innerHTML = "";
  for (var i = wordNum; i < wordNum + 30; ++i){
    var textP = document.createElement("p");
    var textNode = document.createTextNode(words[i] + "\n");
    if (i == wordNum){
      textP.style = "display: inline-block; margin-right: 3%; padding: 3px; border-radius: 5px;" + (wrong ? "background-color: #ff0000; color: white;": "background-color: #aaaaaa; color: black;");
    }
    else {
      textP.style = "display: inline-block; margin-right: 3%; padding: 3px;";
    }
    textP.innerHTML = words[i];
    templateText.appendChild(textP);
  }
}

function updateInfo(wpm, timer, accuracy){
  var timeP = document.getElementById("time");
  var wpmP = document.getElementById("wpm");
  var accuracyP = document.getElementById("accuracy");

  timeP.innerHTML = timer || "60.0";
  wpmP.innerHTML = wpm || "0";
  accuracyP.innerHTML = accuracy || "0";
}

function initType(){
  language = parseInt(document.getElementById("langSelect").value);
  console.log(language);
  document.getElementById("typeInput").value = "";
  document.getElementById("typeInput").blur();
  typedString = "";
  wordNum = 0;
  words = getWords(language);
  currentWord = words[wordNum];  
  timer = 60;
  score = 0;
  startTime = null;
  accuracy = null;
}

function run(){
  // Runs every frame
  var currentTime = (new Date()).getTime();
  var typedString = document.getElementById("typeInput").value;

  if (!start && wordNum == 0 && typedString != ""){ 
    start = true;
    startTime = (new Date()).getTime();
  }
  
  if (start){
    timer = 60 - (currentTime - startTime)/1000; 
    timer = parseFloat(timer.toFixed(1));
    if (timer <= 0){
      // Resets the program
      timer = 60;
      start = false;
      initType();
    }
    else if (timer != 60){
      wpm = score * 60 / (5 * (60 - timer));
      wpm = Math.round(wpm)
    }
  }

  var wrong = false;
  if (typedString == " "){
    document.getElementById("typeInput").value = "";
    typedString = "";
  }
  if (typedString == currentWord) {
    wordNum ++;
    score += currentWord.length;
    currentWord = words[wordNum];
    document.getElementById("typeInput").value = "";
  } else if (!isCorrect(currentWord, typedString)) {
    wrong = true;
  }

  displayWords(wrong);
  updateInfo(wpm, timer, accuracy);
  window.reqAnimationFrame(run);
}

window.addEventListener("load", run, false);

/** 
 *DEPLOY IN BROWSER:
  https://test.1egend.repl.co/
  (NOT LIVE VERSION, GITHUB UPLOADED VERSION)
  https://1e9end.github.io/devtype
**/
