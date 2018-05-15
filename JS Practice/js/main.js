var fullAge = true;
console.log(fullAge);


var job = 'cop';

// job = prompt('What does John do?');

switch (job) {
	case 'teacher':
		console.log('John teach kids.');
		break;
	case 'driver':
		console.log('John drive cap.');
		break;
	case 'cop':
		console.log('john fights crime.');
		break;
	default:
		console.log('John does something else.');

}

function calculateAge(yearOfBirth) {
	var age = 2016 - yearOfBirth;
	return age;
};

console.log( calculateAge(1992) );

var john = ['John', 'Smith', 1980, 'teacher', false]

if (john.indexOf('teacher') === -1) {
	console.log('john is Not a teacher.');
}