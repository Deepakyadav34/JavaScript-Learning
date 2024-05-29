console.log(2==1)



/*    ************String with Numbers *************  */
console.log("1"==1)
// here it is true because javascript directly convert the string to numbers during comparision.
// Here the answer is unpredictable , hence we have to make sure that the dtatypes during the comparision is same and hence we can get the accurate answer.



/*   ****************** comparing NULL ************************ */

//while comparing null , during comparision the compiler converts the  NULL to 0 and then compares .
// during equality checking the null is treated as undefined or null and hence the equality check remains false .

console.table([null>0,null==0,null>=0])

// here 0 is not greater than 0 hence it is false , again during equality check it is always false and 0>=0 hence it is true .



/*   *************** For Undefined ************** */

//for undefined every aspects remains false as the undefined has no value and thus it can't be compared with any numbers or Strings.

