let data = process.argv
let a = data[2]
let b = data[3]
let val = data[4]

if(val == "add"){
    console.log(`${Number(a) + Number(b)}`);
}
else if(val == "sub"){
    console.log(`${a - b}`);
}
else if(val == "mul"){
    console.log(`${a * b}`);
}
else if(val == "div"){
    console.log(`${a / b}`);
}
else if(val == "mod"){
    console.log(`${a % b}`);
}