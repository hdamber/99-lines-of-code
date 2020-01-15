// an array of 5 friends
let friends = ["TJ", "Rachel", "Brittany", "Mallory", "Wendy"];

for (i = 0; i < friends.length; i++) {
    for (k = 99; k > 0; k--) {

        if (k > 1) {
            console.log(k + ' lines of code in the file, ' + k + ' lines of code; ' + friends[i]  + ' strikes one out, clears it all out, ' + k + ' lines of code in the file ') 
        }
        else if (k == 1) {
            console.log(`${k} line of code in the file, ${k} lines of code; ${friends[i]} strikes one out, clears it all out, ${k} line of code in the file `) }
        
    }
}

