// we will use for in loops for the object iteration 

const obj={
    IN:'INDIA',
    US:'UNITED STATE OF AMERICA',
    SA:'SOUTH AFRICA',
    WI:'WEST INDIES'
};

for(const keys in obj){
    // console.log(keys)// for keys only
    console.log(`${keys} is for: ${obj[keys]}`)
}
// and to get the values of this keys we have to egt this as:
