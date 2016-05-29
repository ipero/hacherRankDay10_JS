// Solution for Hacker Rank "Day 10: Binary Numbers" challenge
function main() {
    var n = parseInt(readLine());
    var binaryNum = "";
    var maxConsecutive = 0;
    while(n>1){
        var remainder = Math.floor(n%2);
        n = n/2;
        binaryNum = remainder + binaryNum;
    }
    // convert 1110011001 string to array [111,,11,,1]
    binaryArr = binaryNum.split("0");
    // find largest 1's consecutive
    binaryArr.map(longest);
    function longest(string){
        if(string.length>maxConsecutive){
            maxConsecutive = string.length;
        }
    }
    console.log(maxConsecutive);
}
