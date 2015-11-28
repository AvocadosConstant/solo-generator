//var tonic = "C";
//var mode = "ionian";

var MAX_STRING_LENGTH = 100;
var STRINGS = ["e", "B", "G", "D", "A", "E"];
var TAB_TEMPLATE = {
    e: "e|",
    B: "B|",
    G: "G|",
    D: "D|",
    A: "A|",
    E: "E|"
}
var lastFret, bars, tab;
var ANCHOR = 5;
function init() {
    tab = $.extend({}, TAB_TEMPLATE);
    lastFret = 9;
    bars = 0;
    printTab();
}

function newNote() {
    var string = STRINGS[Math.floor(Math.random() * 6)];
    
    // choose a fret with max distance of 4 from the previous fret
    //var fret = (lastFret - 3 < 0) ? Math.floor(Math.random() * 4) : 
    //    lastFret-3 + Math.floor(Math.random() * 6);
    
    // choose a fret around an anchor fret
    var fret = ANCHOR + Math.floor(Math.random() * 4);

    lastFret = fret;
    console.log("String " + string + ", fret " + fret);
    return {'string': string, 'fret': fret};
}

function insertNote(note) {
    STRINGS.forEach(function(entry) {
        if(entry == note['string']) tab[entry] += note['fret'] + 
            ((note['fret'] < 10) ? "---" : "--");
        else tab[entry] += "----";
    });
    if((tab["e"].length - 2 - bars) % 16 == 0) {
        STRINGS.forEach(function(entry) {
            tab[entry] += "|";
        });
        bars++;
    }
}

function printTab() {
    $("#tabs").empty();
    STRINGS.forEach(function(entry) {
        $("#tabs").append(tab[entry]);
        for(var i = tab["e"].length; i < MAX_STRING_LENGTH; i++) {
            if((i-1-bars) % 16 == 0) {
                $("#tabs").append("-|");
                //i = i + 1;
            }
            //else if(i + 11 < MAX_STRING_LENGTH) 
            else $("#tabs").append("-");
        }
        $("#tabs").append("<br>");
    });
}

function clearTab() {
    init();
}

$(document).ready(function() {
    init();
    printTab();
});

$("#genNote").click(function() {
    if(tab["e"].length >= MAX_STRING_LENGTH) return;
    insertNote(newNote());
    printTab();
});

$("#fillBtn").click(function() {
    console.log("Fill");
    while(tab["e"].length < MAX_STRING_LENGTH) {
        insertNote(newNote());
    }
    printTab();
});

$("#clearTabBtn").click(function() {
    clearTab();
});
