const names = ['Anna', 3, 'Roma', 17, 15, 'Kate', 14, 'Oleg'];

for (let i = 0; i < names.length; i += 1){

if(typeof names[i] !== "string"){

names.splice(i, 1 ) 
 i-=1;
}

}
console.log(names);
for (let i = names.length -1; i >= 0; i -= 1){
 
    if(typeof names[i] !== "string"){
    
    names.splice(i, 1 ) 

    }
}
console.log(names);
