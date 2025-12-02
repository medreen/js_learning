let names = ['James', 'Erick', 'Jane', 'Kennedy']
let whileCount = 0

console.log("---while loops----")
while (whileCount < names.length){
    let name = names[whileCount]
    console.log(name)    
    whileCount ++ 
}

console.log("---for...of---")
for (const name of names){
    console.log(name)
}