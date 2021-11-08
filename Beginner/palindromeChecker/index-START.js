/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    let charArr = text.toLowerCase().split('')
    let backwards = charArr.reverse().join('')
    return text.toLowerCase() === backwards ? true : false
}



module.exports = palindromeChecker;