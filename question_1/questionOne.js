var a = [7,21,5,2,8,3];
var leaderArray = [];
var isLess = false;

for (let i = 0; i < a.length; i++) {
  for (let k = i+1; k < a.length; k++) {
    if(a[i] < a[k]) {
      isLess = true;
    }
  }
  if (!isLess) {
    leaderArray.push(a[i]);
  }
  isLess = false;
}


console.log(leaderArray)