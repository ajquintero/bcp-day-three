var countTo = prompt("How high should we count even numbers?");

// (init; condition; post-loop)
for(var i = 0; i < countTo; i++){
    if(i % 2 == 0){
        console.log(i + " is an even number");
    } else {
        (console.log(i + " is an odd number"));
    }
}

console.log("all done");