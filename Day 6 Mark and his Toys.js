
function processData(input) {
    var rows = input.split('\n');
    var max = rows[0].split(' ').map(Number)[1];
    var arr = rows[1].split(' ').map(Number);
    arr = arr.sort(function(a, b){return a-b}); 
    var i = 0;
    while(max>=0) {
        max -= arr[i];
        i++;
    }
    console.log(i-1);
} 