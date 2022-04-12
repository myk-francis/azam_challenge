var a = [1,2,3,7,5]
var s = 12
var result = true
var terminate = false

function main() {
  for(j = 0; j < a.length; j++){
    if(terminate === false) {
      result = summation(a,s,j)
    }
  }

  if(result) {
    console.log(result)
  }else {
    //console.log("bad input")
  }
}


function summation(array, value, begin) {
  var sum = 0

  for(i = begin; i < array.length; i++){
    sum = sum + a[i]

    if (sum === value) {
      console.log(begin + 1, i + 1)
      terminate = true
      return true
    }
  }
  return false;
}

main()
