/*
Lesson 24
Task: Pick your Best Friend
Elements of an array are index based. 
From your array of best created in the previous task, choose your best friend based on their index in the array. 
Steps: 
On the next line below your array of friends, Declare a variable, bestFriend and assign your best friend from the array of friends. (Use bracket notation)
Log bestFriend to the console to ensure you chose the right friend.
*/
console.log("task11")
const friends = ["Taiwo", "Chinonzo", "Muhammed", "Fatia", "Sola"]
const bestFriend = friends[3]
console.log(bestFriend)

//Push and Pop
console.log("Push and Pop")
let newFriends = ["Taiwo", "Chinonzo", "Muhammed", "Fatia", "Sola", "Sunday"]
newFriends.push("Olamide","Bimbo","kayode")
console.log("new friends after push: " + newFriends)
newFriends.pop()
console.log("new friends after pop " + newFriends)

//Shift and Unshift
console.log("Shift and Unshift")
let pupilClass = ['kg1','kg2','kg3','kg4','kg5']
pupilClass.shift()
console.log("new pupilClass after shift " + pupilClass)
pupilClass.unshift('newKg', 'newKg1')
console.log("new pupilClass after unshift " + pupilClass)

// Slice and Splice
console.log("Slice and Splice")
let yearMonths = ['jan','feb','mar', 'apr','may','jun','jul','aug','sept','oct']
const newYearMonths = yearMonths.slice(2, 5) //remove element from index 2 to index4 (5 is exclusive), 
// should return jan,feb, jun, ..., but wont modify the actual array
console.log("yearMonths after slice: " + newYearMonths) 
//result will remain the same because slice doesnt modify array, that why i log the sliced elements

yearMonths.splice(2, 3, 'newmar', 'newapr','newmay' ) 
//remove element from start index- 2, 
// remove "counts of elements"- 3
// replace elements from that start index with new values after removal count
console.log("new yearMonths after splice " + yearMonths)


