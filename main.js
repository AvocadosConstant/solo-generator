//var tonic = "C";
//var mode = "ionian";

var MAX_STRING_LENGTH = 50;
var STRINGS = ["e", "B", "G", "D", "A", "E"];
var TAB_TEMPLATE = {
    e: "e|-",
    B: "B|-",
    G: "G|-",
    D: "D|-",
    A: "A|-",
    E: "E|-"
}
var lastFret = 9;
var tab = $.extend({}, TAB_TEMPLATE);;

function newNote() {
    if(tab["e"].length >= MAX_STRING_LENGTH) return;
    var string = STRINGS[Math.floor(Math.random() * 6)];
    
    var minFret = (lastFret - 4 < 0) ? 0 : lastFret - 3;
    var fret = (lastFret - 4 < 0) ? Math.floor(Math.random() * 5) : lastFret-3 + Math.floor(Math.random() * 6);
    lastFret = fret;
    console.log("String " + string + ", fret " + fret);
    STRINGS.forEach(function(entry) {
        //console.log(entry);
        if(entry == string) tab[entry] += fret + "-";
        else tab[entry] += "--";
    });
    printTab();
}

function printTab() {
    $("#tabs").empty();
    STRINGS.forEach(function(entry) {
        $("#tabs").append(tab[entry] + "<br>");
    });
}

function clearTab() {
    tab = $.extend({}, TAB_TEMPLATE);
    printTab();
}

$("#genNote").click(function() {
    //setInterval(newNote, 1000);
    newNote();
});

$("#clearTabBtn").click(function() {
    clearTab();
});
