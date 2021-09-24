var sum = 0;
var count = 0;
function add(x) {
  if(x == 1)
  {
    sum = sum + x;
    count = count + 1;
  }
  else if(x == 2)
  {
    sum = sum + x;
    count = count + 1;
  }
  else if(x == 3)
  {
    sum = sum + x;
    count = count + 1;
  }
  else if(x == 4)
  {
    sum = sum + x;
    count = count + 1;
  }
  else if(x == 5)
  {
    sum = sum + x;
    count = count + 1;
  }
  else if(x == 6)
  {
    sum = sum + x;
    count = count + 1;
  }
  else if(x == 7)
  {
    sum = sum + x;
    count = count + 1;
  }
  else if(x == 8)
  {
    sum = sum + x;
    count = count + 1;
  }
  else if(x == 9)
  {
    sum = sum + x;
    count = count + 1;
  }
  print();
}
function print() {
  document.getElementById("outputa").innerHTML = "The sum is " + sum;
  document.getElementById("outputb").innerHTML = "The count is " + count;
}
function clearThing() {
  document.getElementById("outputa").innerHTML = "";
  document.getElementById("outputb").innerHTML = "";
  sum = 0;
  count = 0;
}
