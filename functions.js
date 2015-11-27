/* Converts a scale pattern, given as an array of consecutive intervals, 
 * to a scale pattern, given as an array of note distances in semitones from the root.
 *
 * ie major scale: (2 2 1 2 2 2 1) -> (0 2 4 5 7 9 11 12)
 */
function intervalToSemitone(intervalArr) {
    var semitoneArr = [0]; 

    for (var i = 0; i < intervalArr.length; i++) {
        semitoneArr[i + 1] = intervalArr[i] + semitoneArr[i];
    }
    return semitoneArr;
}

/* Converts a scale pattern, given as an array of note distances in semitones from
 * the root, to an array of consecutive intervals.
 *
 * ie major scale: (0 2 4 5 7 9 11 12) -> (2 2 1 2 2 2 1)
 */
function semitoneToInterval(semitoneArr) {
    var intervalArr = [];
    
    for (var i = 1; i < semitoneArr.length; i++) {
        intervalArr[i - 1] = semitoneArr[i] - semitoneArr[i - 1];
    }
    return intervalArr;
} 

/* Converts a scale pattern, given as an array of notes distances in semitones from
 * the root, to an array of scale degrees.
 *
 * ie major scale: (0 2 4 5 7 9 11 12) -> (1 2 3 4 5 6 7 8)
 */
function semitoneToDegree(semitoneArr) {
    var map = ["1", "b2", "2", "b3", "3", "4", "b5", "5", "b6", "6", "b7", "7", "8"];
    var degreeArr = [];

    for (var i = 0; i < semitoneArr.length; i++) {
        degreeArr[i] = map[semitoneArr[i]];
    }
    return degreeArr;
} 
