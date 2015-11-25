//var tonic = "C";
//var mode = "ionian";

var strings = ["e", "B", "G", "D", "A", "E"];
var tab = {
    e: "|--",
    B: "|--",
    G: "|--",
    D: "|--",
    A: "|--",
    E: "|--"
}

function newNote() {
    var string = strings[Math.floor(Math.random() * 6)];
    var fret = Math.floor(Math.random() * 10);
    console.log("String " + string + ", fret " + fret);
    strings.forEach(function(entry) {
        //console.log(entry);
        if(entry == string) tab[entry] += fret + "-";
        else tab[entry] += "--";
    });
}

function printTab() {
    $("#tabs").empty();
    strings.forEach(function(entry) {
        $("#tabs").append(tab[entry] + "<br>");
    });
}

$("#genNote").click(function() {
    newNote();
    printTab();
});
