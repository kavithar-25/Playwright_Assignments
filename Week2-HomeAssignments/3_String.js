//Example:1 
let s = "Hello World"
let splitting = s.split(" ")
let lastWord = splitting[splitting.length - 1]
console.log(lastWord.length)

//Example:2
let str2 =  "   fly me   to   the moon  " 
let trimming = str2.trim()
let spliting = trimming.split(" ")
let endWord = spliting[spliting.length - 1]
console.log(endWord.length)

//Example:3 
function  isAnagram(str1, str2) {
    let word1 = str1.trim().toLowerCase().split("").sort().join()
    let word2 = str2.trim().toLowerCase().split("").sort().join()
     return word1==word2
}
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))
