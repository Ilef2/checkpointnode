
const generatepassword = require('generate-password')


var passwords = generatepassword .generateMultiple(3, {
	length: 10,
	uppercase: false
});
console.log(passwords);