var editingArea = document.getElementById("notepad");

var KEY = "storageKey";
var text = localStorage.getItem(KEY);
if (text !== null) {
  editingArea.value = text;
}

editingArea.addEventListener(
  "keyup",
  function(event) {
    localStorage.setItem(KEY, editingArea.value);
  },
  false
);

var resetButton = document.getElementById("reset");
resetButton.addEventListener(
  "click",
  function(event) {
    localStorage.setItem(KEY, "");
    editingArea.value = "";
  },
  false
);

var resetButton = document.getElementById("reset");
resetButton.addEventListener(
  "click",
  function(event) {
    localStorage.setItem(KEY, "");
    editingArea.value = "";
  },
  false
);

//
var webStorageSupported =
  "localStorage" in window && window["localStorage"] !== null;

var guid = function() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};

var store_it = function(val) {
  localStorage.setObject("my_text", val);
};

console.log(
  "localStorage.getObject('app_keys') :: " + localStorage.getObject("my_text")
);
console.log(
  "localStorage.getObject('my_text') :: " + localStorage.getObject("my_text")
);

$("#titulo").val(localStorage.getObject("my_text"));
$("#titulo").bind("change keyup", function(e) {
  store_it(e.target.value);
});