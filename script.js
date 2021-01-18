/**
 * @ML Framework (WIP NEVER FINISHED)
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
var jsTemplates = ["if (x == 1){}", "for (var i = 0; i < n; ++i){}", "console.log(\"Hello world!\")", "function myFunction(p1){}", "return x;", "var x = 1;", "x + 1", "x - 1", "x * 1", "x / 1", "x % 1", "x ** 1", "x++;", "x--;", "x += 1;", "x -= 1;", "x = 1;", "x *= 1;", "x /= 1;", "x %= 1;", "x &= 1;", "x |= 1;", "x ^= 1;", "x >>= 1;", "x <<= 1;", "x > 1", "x < 1", "x <= 1", "x >= 1", "x == 1", "x != 1;", "x >>>= 1;", "Math.floor()", "Math.random()", "//comment", "break;", "this.x", "string.length", "string.indexOf()", "string.lastIndexOf()", "string.search()", "string.slice()", "string.substring()", "string.substr()", "string.replace()", "string.toUpperCase()", "string.toLowerCase()", "string.concat()", "string.trim()", "alert()", "string.padStart()", "string.charAt()", "string.charCodeAt()", "string.split()", "document.getElementById().innerHTML", "Date()", "window.reqAnimationFrame", "window.msRequestAnimationFrame", "x.toString()", "x.toExponential()", "x.toFixed()", "x.toPrecision()", "x.valueOf()", "x.Number()", "x.parseInt()", "x.parseFloat()", "Number.MAX_VALUE", "Number.MIN_VALUE", "Number.POSITIVE_INFINITY", "Number.NEGATIVE_INFINITY", "array.pop()", "array.push()", "array.shift()", "delete", "array.splice()", "array.concat()", "array.slice()"];

var pyTemplates = ["print(\"Hello world\")", "for i in range(0,1):", "if x == 1:", "else:", "elif:", "x = 1", "x = input()", "x = string.split()", "list = []", "list.append(x)", "break", "return x", "x += 1", "x -= 1", "len(list)", "while x == 1:", "import math", "x + 1", "x - 1", "x * 1", "x / 1", "x // 1", "x ** 1", "x % 1", "x *= 1", "x /= 1", "x %= 1", "x //= 1", "x **= 1", "x &= 1", "x != 1", "x |= 1", "x ^= 1", "x >>= 1", "x <<= 1", "def myFunction(p1):", "string.upper()", "string.lower()", "string.capitalize()", "string.count()", "string.islower()", "string.isupper()", "string.join()", "string.find()", "string.isdigit()", "string.isalpha()", "string.isnumeric()", "string.isprintable()", "string.rfind()", "string.rindex()", "string.strip()", "string.startswith()", "string.translate()", "list.index()", "list.clear()", "list.copy()", "list.insert()", "list.sort()", "list.reverse()", "list.extend()", "x > 1", "x < 1", "x <= 1", "x >= 1", "int()", "str()"];

var csharpTemplates = ["static void myMethod()", "Console.WriteLine(\"Hello World\");", "Console.ReadLine();", "namespace myNamespace", "class myClass", "Console.Write(\"Hello World\");", "//comment", "int x = 1;", "string x = \"\";", "double x = 1;", "char x = \'\';", "bool x = true;", "float x = 1;", "long x = 1;", "Convert.ToInt32();", "x + 1", "x - 1", "x * 1", "x / 1", "x % 1", "x++;", "x--;", "x += 1;", "x -= 1;", "x = 1;", "x *= 1;", "x /= 1;", "x %= 1;", "x &= 1;", "x |= 1;", "x ^= 1;", "x >>= 1;", "x <<= 1;", "x > 1", "x < 1", "x <= 1", "x >= 1", "x == 1", "x != 1", "string[] x = {};", "int[] x = {};", "break;", "using namespace", "Math.Max()", "Math.Min()", "Math.Sqrt()", "Math.Abs()", "Math.Round()", "Math.Floor()", "string.Length", "string.ToUpper()", "string.ToLower()", "string.Concat()", "string.IndexOf()", "string.SubString()", "if (x){}", "else", "elseif (x){}", "switch (x){}", "case x:", "break;", "while (x){}", "do {}", "for (int i = 0; i < x; i++){}", "foreach (x i in array){}", "continue;", "Array.Sort()", "class x {}"];

var cppTemplates = ["#define ull unsigned long long", "using namespace std;", "#include <bits/stdc++.h>", "std::cout << \"Hello World\";", "int a, b, c;", "vector \<int\> numbers;", "for (int i = 0; i < n; ++i){}", "foo.push_back(bar);", "bar.push_back(make_pair(foo, foo));", "int main(){return 0;}", "ios_base::sync_with_stdio(0);", "void doSomething(int param){}", "vector \<int\> allZeroes(n, 0);", "int add(int x, int y){return x + y;}", "break;", "return x;", "x ++;", "x --;", "vector.length();", "x + 1", "x - 1", "x * 1", "x / 1", "x // 1", "x ** 1", "x % 1", "x *= 1;", "x /= 1;", "x %= 1;", "x //= 1;", "x **= 1;", "x &= 1;", "x != 1;", "x |= 1;", "x ^= 1;", "x >>= 1;", "x <<= 1;"];

var sqlTemplates = ["SELECT c1", "FROM table;", "COUNT(c1)", "WHERE x = 1", "x <= 1", " x >= 1", "x < 1", "x > 1", "x <> 1", "x BETWEEN v1 AND v2", "x LIKE \'\'", "x IN list", "x AND y", "x OR y", "NOT x", "ORDER BY x", "DESC", "ASC", "INSERT INTO list(c1,c2,c3)", "VALUES(v1,v2,v3)", "IS NOT NULL", "UPDATE list", "SET x = \'\'", "DELETE FROM list", "SELECT TOP x", "x PERCENT", "MIN(x)", "MAX(x)", "AS x", "AVG(x)", "SUM(x)", "%x%", "_x_", "?x?", "[a-z]", "[!x]", "[x]", "x IN list", "JOIN x", "INNER JOIN list", "LEFT JOIN list", "RIGHT JOIN list", "FULL OUTER JOIN list", "ON x = y", "UNION", "UNION ALL", "GROUP BY x", "GROUP BY COUNT(x)", "HAVING x", "WHERE EXISTS", "ANY", "ALL", "INTO list", "CASE", "END", "ELSE", "THEN", "IFNULL()", "COALESCE()", "ISNULL()", "IsNull()", "NVL()", "CREATE PROCEDURE myProcedure", "EXEC myProcedure", "--comment", "x += 1", "x -= 1", "x *= 1", "x /= 1", "x %= 1", "x &= 1", "x ^-= 1", "x |*= 1", "SOME()"];

var webTemplates = ["<!DOCTYPE>", "<html>", "<head>", "<title>", "<body>", "<p>", "<h1>", "</html>", "</body>", "</p>", "<a>", "href=url", "src=image", "<img>", "width=x", "height=x", "alt=x", "style=x", "color:x;", "lang=x", "title=x", "font-size:x", "<hr>", "<br>", "<pre>", "background-color:x;", "font-family:x;", "text-align:x", "<b>", "<strong>", "<i>", "<em>", "<mark>", "<small>", "<del>", "<ins>", "<sub>", "<sup>", "<blockquote>", "<q>", "<abbr>", "<address>", "<cite>", "<bdo>", "<!--comment-->", "border:x", "rgb(r,g,b)", "hsl(h,s,l)", "rel=x", "target=x", "id=x", "shape=x", "coords=x", "name=x", "<map>", "usemap=x", "onclick=function", "alert();", "<picture>", "<area>", "background-image:x", "<div>", "background-repeat:x", "background-attachment:x", "background-size:x", "<source>", "media=x", "srcset=x", "<table>", "<tr>", "<td>", "<th>", "border-collapse:x", "padding:x", "border-spacing:x", "<caption>", "rowspan=x", "colspan=x", "<ul>", "<li>", "<ol>", "<dl>", "<dt>", "<dd>", "overflow:x", "<article>", "<aside>", "<fieldset>", "<figcaption>", "<figure>", "<canvas>", "<footer>", "<form>", "<nav>", "<noscript>", "<tfoot>", "<video>", "<span>", "<class=x>", "<iframe>", "<meta>", "http-equiv=x", "device-width", "initial-scale", "<base>", "<code>", "<kbd>", "<samp>", "<var>", "<section>", "<summary>", "<time>", "charset=x", "<element>", "onclick=x"];

var phpTemplates = ["<?php>", "echo()", "//comment", "#comment", "$var = x;", "print()", "strlen()", "str_word_count()", "strrev()", "strpos()", "str_replace()", "is_int()", "is_float()", "is_finite()", "is_infinite()", "is_nan()", "(int)", "pi()", "min()", "max()", "abs()", "sqrt()", "round()", "rand()", "define()", "x + 1", "x - 1", "x * 1", "x / 1", "x % 1", "x ** 1", "x = 1", "x *= 1", "x /= 1","x += 1", "x -= 1", "x %= 1", "x == 1", "x === 1", "x != 1", "x <> 1", 'x !== 1', "x > 1", "x < 1", "x >= 1", "x <= 1", "x <=> 1", "++$x", "$x++", "--$x", "$x--", "and", "or", "xor", "&&", "||", "??", "if (){}", "else {}", "elseif (){}", "break;", "switch (){}", "case x:", "while (){}", "do {}", "for (){}", "foreach (){}", "continue;", "function myFunction() {}", "retunr $x;", "array()", "count()", "x++;", "x--;", "sort()", "rsort()", "asort()", "ksort()", "arsort()", "krsort()", "$GLOBALS", "$_SERVER", "$_REQUEST", "$_POST", "$_GET", "$_FILES", "$_ENV", "$_COOKIE", "$_SESSION", "preg_match()", "preg_match_all()", "preg_replace()", "date()"];

var jqueryTemplates = ["$(x).hide()", "$(function(){", "$(x)", "$(#x)", "$(.x)", "$(\"*\")", "$(this)", "$(\"x.intro\")", "$(\"x:first\")", "$(\"[x]\")", "$(\"x:first-child\")", "$(\"a[t=]\")", "$(x).ready();", "$(x).click();", "$(x).dblclick();", "$(x).mouseenter();", "$(x).mouseleave();", "$(x).mousedown();", "$(x).mouseup();", "$(x).hover();", "$(x).focus();", "$(x).blur();", "$(x).on();", "$(x).show();", "$(x).toggle();", "$(x).fadeIn();", "$(x).fadeOut();", "$(x).fadeToggle();", "$(x).fadeTo();", "$(x).slideDown()", "$(x).slideUp()", "$(x).slideToggle()", "$(x).animate({});", "$(x).stop();", "$(x).css()", "$(x).text()", "$(x).html()", "$(x).val()", "$(x).attr()", "$(x).append();", "$(x).prepend();", "$(x).after();", "$(x).before();", "$(x).remove();", "$(x).empty();", "$(x).addClass();", "$(x).removeClass();", "$(x).toggleClass();", "$(x).width()", "$(x).height()", "$(x).innerWidth()", "$(x).innerHeight()", "$(x).outerWidth()", "$(x).outerHeight()", "$(x).parent()", "$(x).parents()", "$(x).parentsUntil()", "$(x).children()", "$(x).find()", "$(x).siblings()", "$(x).next()", "$(x).nextAll()", "$(x).nextUntil()", "$(x).prev()", "$(x).prevAll()", "$(x).prevUntil()", "$(x).first()", "$(x).last()", "$(x).eq()", "$(x).filter()", "$(x).not()"];

var luaTemplates = ["local var = 1", "local function myFunction()", "end", "if x == 1 then", "elseif x == 1 then", "else", "for i = 0,1 do", "for _, i in pairs(list) do", "while true do", "_G var = 1", "local list = {}", "end)", "x += 1", "x -= 1", "x + 1", "x - 1", "x * 1", "x / 1", "x % 1", "x ^ 1", "x == 1", "x > 1", "x < 1", "x <= 1", "x >= 1", "x ~= 1", "and", "or", "not", "#list", "table.insert()", "list[i]", "for _, i in ipairs(dict) do", "tostring()", "tonumber()", "math.random()", "math.huge()", "math.sin()", "print(\"Hello World\")", "table.sort()", "math.rad()", "math.deg()", "os.time()", "os.date()", "os.clock()", "string.find()", "string.lower()", "string.upper()", "string.reverse()", "table.concat()", "table.move()", "table.remove()", "table.pack()", "string.sub()", "return x", "break"];

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

// Choose best requestAnimationFrame
window.reqAnimationFrame = (function(callback){
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

// Words & Input variables
var language = parseInt(document.getElementById("langSelect").value);
var wordNum = 0;
var lineStart = 0;
var words = getWords(language);
var currentWord = words[wordNum]; 
var typedWords = [];
for (var i = 0; i < 300; ++i){
  typedWords.push(0);
}

// Typing Info variables
var timer = 60;
var score = 0;
var accuracy;
var wpm;
var predicted;
var errors = 0;
var updateWpm;

// Personal best of the session. Personal best of all time will be saved in localStorage
var roundBest = [0,0,0,0,0,0,0,0,0];

// Wpms for each second. Used to show change in wpm over the session.
var wpms = [];

// Resets the input string on page reload
document.getElementById("typeInput").value = "";

// Initialization variables
var startTime;
var start = false;

function displayWords(wrong){
  var templateText = document.getElementById("templateText");
  var templateDiv = document.getElementById("template");
  templateText.innerHTML = "";
  var lineWidth = 0;
  var lineEnd;
  // New code
  var totalStringLength = 0;
  for (var i = 0; i < 300; ++i){
    // if totalStringLength
  }
  for (var i = lineStart; i < lineStart + 100; ++i){ //30
    var textP = document.createElement("span");
    var coloured;
    var textNode = document.createTextNode(words[i]);
    if (i == wordNum){
      // Highlight the current word
      textP.style = "display: inline-block; margin-right: 3%; padding: 3px; border-radius: 5px;" + (wrong ? "background-color: #ff0000; color: white;": "background-color: #aaaaaa; color: black;"); 
      
    } 
    else {
      // Colour code typed words
      textP.style = "display: inline-block; margin-right: 3%; padding: 3px; color: " + (typedWords[i] == 0 ? "#000000" : (typedWords[i] == 1 ? "#006400": "#fe0000"));
    }
    // Check if the total text width is greater than the container width which means it parses onto new line
    textP.appendChild(textNode);
    templateText.appendChild(textP);
    if (lineEnd == undefined){
      lineWidth += textP.clientWidth + 0.03 * templateDiv.clientWidth; 
      // Adding on width of text and space in between
      if (lineWidth > templateDiv.clientWidth -   templateDiv.style.paddingLeft - templateDiv.style.paddingRight){
        // Save which word the line ends at
        lineEnd = i - 1;
      }
    }
    else {
      if (wordNum > lineEnd){
        lineStart = wordNum;
      }
    }
  }
}

function updateInfo(wpm, timer, accuracy, predicted, roundBest){
  var timeP = document.getElementById("time");
  var wpmP = document.getElementById("wpm");
  var accuracyP = document.getElementById("accuracy");
  var predictedP = document.getElementById("predicted");
  var rbP = document.getElementById("roundBest");

  timeP.innerHTML = timer || "60.0";
  wpmP.innerHTML = wpm || "0";
  accuracyP.innerHTML = accuracy || "0";
  predictedP.innerHTML = predicted || "0";
  rbP.innerHTML = roundBest[language] || "0";
}

function initType(){
  //var box = document.getElementById("timeUI");
  //box.style = "background-color: #111111";
  lineStart = 0;
  language = parseInt(document.getElementById("langSelect").value);
  document.getElementById("typeInput").value = "";
  document.getElementById("typeInput").blur();
  typedString = "";
  wordNum = 0;
  words = getWords(language);
  currentWord = words[wordNum];  
  typedWords = [];
  for (var i = 0; i < 300; ++i){
    typedWords.push(0);
  }
  timer = 60;
  score = 0;
  errors = 0;
  wpms = [];
  startTime = null;
}

function setLocal(name, value){
  try {
    localStorage.setItem(name, value);
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
      console.log("localStorge limit exceeded, freeing up space...");

      var w = localStorage.getItem("wpm");
      var ending;
      for (var i = 0; i < w.length; ++i){
        if (w[i] == " "){
          ending = i + 1;
          break;
        }
      }
      setLocal("wpm", localStorage.getItem("wpm").substring(ending, w.length()));

      var a = localStorage.getItem("accuracy");
      var ending;
      for (var i = 0; i < a.length; ++i){
        if (a[i] == " "){
          ending = i + 1;
          break;
        }
      }
      setLocal("accuracy", localStorage.getItem("accuracy").substring(ending, a.length()));

      // Retry 
      setLocal(name, value);
    }
  }
}

function drawLastSession() {
  var data = new google.visualization.DataTable();
  var pastWpms = localStorage.session.split(" ");
  data.addColumn('number', 'X');
  data.addColumn('number', "WPM so far");

  var rowData = [];
  for (var i = 0; i < pastWpms.length; ++i){
    rowData.push([i, Number(pastWpms[i]) || 0]);
  }
  data.addRows(rowData);

  var options = {
    title: "Last Session (WPM/Time)",
    titleTextStyle: {
      color: "000000",
        fontSize: 25,
        fontName: "Arial",
        bold: true,
    },
    hAxis: {
      title: "Elapsed Time (seconds)",
      textStyle: {
        color: "000000",
        fontSize: 15,
        fontName: "Arial",
        italic: true
      },
      titleTextStyle: {
        color: '#000000',
        fontSize: 16,
        fontName: 'Arial',
        bold: true,
        italic: true
      }
    },
    vAxis: {
      title: 'WPM',
      textStyle: {
        color: '#ff0000',
        fontSize: 15,
        bold: false
      },
      titleTextStyle: {
        color: '#000000',
        fontSize: 22,
        bold: true
      }
    },
    colors: ['#a52714', '#097138']
  };
  var chart = new google.visualization.LineChart(document.getElementById("prevSession"));
  chart.draw(data, options);
}

function drawAllTime() {
  var data = new google.visualization.DataTable();
  var allWpms = localStorage.wpm.split(" ");
  data.addColumn('number', 'X');
  data.addColumn('number', "Final WPM");

  var rowData = [];
  for (var i = 0; i < allWpms.length; ++i){
    rowData.push([i, Number(allWpms[i]) || 0]);
  }
  data.addRows(rowData);

  var options = {
    title: "All Time (Final WPM/Session)",
    titleTextStyle: {
      color: "000000",
        fontSize: 25,
        fontName: "Arial",
        bold: true,
    },
    hAxis: {
      title: "Session #",
      textStyle: {
        color: "000000",
        fontSize: 15,
        fontName: "Arial",
        italic: true
      },
      titleTextStyle: {
        color: '#000000',
        fontSize: 16,
        fontName: 'Arial',
        bold: true,
        italic: true
      }
    },
    vAxis: {
      title: 'Final WPM',
      textStyle: {
        color: '#ff0000',
        fontSize: 15,
        bold: false
      },
      titleTextStyle: {
        color: '#000000',
        fontSize: 22,
        bold: true
      }
    },
    colors: ["#097138"]
  };
  var chart = new google.visualization.LineChart(document.getElementById("allTime"));
  chart.draw(data, options);
}

function updateStats(){
    
  if (localStorage.session){
    /** 
    var pastWpms = localStorage.session.split(" ");
    var prevSession = document.getElementById("prevSession");
    prevSession.innerHTML = "";
    for (var i = 0; i < 60; ++i){
      var addNode = document.createTextNode(pastWpms[i] + " ")
      prevSession.appendChild(addNode);
    }
    **/
    // Load google charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawLastSession);
  }
  else{
    var prevSession = document.getElementById("prevSession");
    prevSession.innerHTML = "";
    var addNode = document.createTextNode("No results yet, get typing!");
    prevSession.appendChild(addNode);
  }

  if (localStorage.wpm){
    // Load google charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawAllTime);
  }
  else{
    var prevSession = document.getElementById("allTime");
    prevSession.innerHTML = "";
    var addNode = document.createTextNode("No results yet, get typing!");
    prevSession.appendChild(addNode);
  }

  document.getElementById("record").innerHTML = localStorage.best || 0;
}

updateStats();

function storeData(listWords, typedWords, wpm, wpms, accuracy){
  if (typeof(Storage) !== "undefined") {
    var sessionWpm = "";
    for (var i = 0; i < 60; ++i){
      sessionWpm += wpms[i] + " ";
    }
    setLocal("session", sessionWpm);
    setLocal("best", Math.max(Number(localStorage.best) || 0, wpm));
    setLocal("wpm", localStorage.wpm + wpm + " ");
    setLocal("accuracy", localStorage.accuracy + accuracy + " ");
    updateStats();
  } else {
    console.log("Browser does not support localStorage. Cannot save data.");
    alert("Browser does not support localStorage. Cannot save data.");
  }
}

function colourCode(ui, colourValues, val){ 
  //console.log(colourValues);
  var box = document.getElementById(ui);
  var royg = ["#006400","#ffa500","#ff0000"];
  for (var i = 0; i < colourValues.length; ++i){
    if (val >= colourValues[i]){
      box.style.backgroundColor = royg[i];
      return;
    }
  }
}

function getAverage(list){
  var sum = 0;
  for (var i = 0; i < list.length; ++i){
    sum += parseInt(list[i], 10);
  }
  return sum/list.length;
}

function run(){
  // Runs every frame
  var currentTime = performance.now();
  //var changed = false;
  var typedString = document.getElementById("typeInput").value;

  /**if (prievString != typedString) {
    changed = true;
    prievString = typedString;
  }**/

  if (!start && wordNum == 0 && typedString != ""){ 
    start = true;
    startTime = performance.now();
    updateWpm = setInterval(function() {
      // console.log(timer + " " + wpm);
      wpms.push(wpm)
    }, 1000);
  }
  
  if (start){
    timer = 60 - (currentTime - startTime)/1000; 
    timer = parseFloat(timer.toFixed(1));
    colourCode("timeUI", [30,10,0], timer);
    if (timer <= 0){
      // Resets the program
      clearInterval(updateWpm);
      storeData(words, typedWords, wpm, wpms, accuracy);
      predicted = getAverage(wpms); //HERE
      start = false;
      initType();
    }
    else if (timer != 60){
      wpm = score * 60 / (5 * (60 - timer));
      wpm = Math.round(wpm);
      colourCode("wpmUI", [50,30,0], wpm);
      /** 
      if (Number.isInteger(60 - (currentTime - startTime)/1000)){
        console.log(timer);
        console.log(wpm);
        wpms.push(wpm);
      }
      **/
      if (wpm > roundBest[parseInt(document.getElementById("langSelect").value)]){
        roundBest[parseInt(document.getElementById("langSelect").value)] = wpm;
        //colourCode("peakUI",[60,40,0]);
      }
      accuracy = 100 * score / (score + errors);
      colourCode("accUI", [90,75,0], accuracy);
      if (accuracy >= 0){
        accuracy = Math.round(accuracy) + "%";
      } else {
        accuracy = 0 + "%";
      }
    }
  }

  var wrong = false;
  if (typedString == " "){
    document.getElementById("typeInput").value = "";
    typedString = "";
  }
  
  if (typedString == currentWord + " ") {
    typedWords[wordNum] = 1;
    wordNum ++;
    score += currentWord.length;
    currentWord = words[wordNum];
    document.getElementById("typeInput").value = "";
  } else if (typedString.length > currentWord.length && typedString.substring(typedString.length - 1) == " "){
    typedWords[wordNum] = 2;
    wordNum ++;
    errors += currentWord.length;
    currentWord = words[wordNum];
    document.getElementById("typeInput").value = "";
  } else if (!isCorrect(currentWord, typedString)) {
    wrong = true;
  }

  displayWords(wrong);
  updateInfo(wpm, timer, accuracy, predicted, roundBest);
  window.reqAnimationFrame(run);
}

window.addEventListener("load", run, false);

/** 
 *DEPLOY IN BROWSER:
  https://test.1egend.repl.co/
  (NOT LIVE VERSION, GITHUB UPLOADED VERSION)
  https://1e9end.github.io/devtype
**/
