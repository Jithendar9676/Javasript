let marks={
  harry:90,
  chintu:99,
  varsha:99
  
}
for(let i=0;i<Object.keys(marks).length;i++){
  console.log(Object.keys(marks)[i]+" : "+marks[Object.keys(marks)[i]]);
}
for(let i in marks){
  console.log(i);
}

let num=5;
let n;
while(n!=num){
 n= prompt("enter the number")
}