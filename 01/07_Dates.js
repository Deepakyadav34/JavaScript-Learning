const date=new Date()
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.toTimeString())
// console.log(date.toLocaleTimeString())
// console.log(date.toString())
// console.log(date.toUTCString())
// console.log(date.getTimezoneOffset())

//++++++++++++++++++++++++++++ creating a defined date ++++++++++++++++++++++++++++++

// Here Date can be declared by many types such as :
// 1.
const mycreateDate=new Date('12-21-2024')
// console.log(mycreateDate.toLocaleString())

// 2. 
const mycreateDate2=new Date(2023,3,13)//here it will show the month of april(4) because the object /array starts from 0 index.
// console.log(mycreateDate2.toDateString())

//3. 
const mydate3=new Date("2023/01/12")//YYYY/MM/DD
// console.log(mydate3.toDateString())


//    +++++++++++++++++++++++ Time Stamp  ++++++++++++++++++++++++

let mydate=Date.now()
// console.log(mydate.toLocaleString('en-IN'))

// we can get the timestamp of any date as 

// console.log(mydate3.getTime())  
// timestamp of mydate3 and so we can compare two timstamp with each other to get the time diffrence and to decide the poll winner or something like that

// we can further use the get methods ti get the time , date , day , month 

// console.log(mydate3.getDate())
// console.log(mydate3.getDay())
// console.log(mydate3.getFullYear())
// console.log(mydate3.getHours())
// console.log(mydate3.getTime())

// we can customize the .toLocaleString method as :

console.log(mydate3.toLocaleString('default',

{
    weekday:"long",
    day:"numeric",
    month:"long"
    
}
)

)