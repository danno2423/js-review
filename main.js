/*

# JavaScript Review

1. Create a function that accepts a parameter named 'door'. When the function is invoked, 
show the user feedback on the screen, as to what is 'behind' the passed in door parameter. 
Use an array to store the different values that could be behind the door.


*/


function myDoor() {
	var door = prompt('Pick a door one or two!');
	var prizes = ['George Washington', 'Chevrolet Chavelle', 'a wig'];

	if (door ==='one'|| door ==='One' ) {
		alert('You won ' + prizes[0]);
	} else if (door || door === 'Two') {
		alert('You won ' + prizes[1]);
	} else {
		alert('You won ' + prizes[2]);
	}
}

myDoor();


/*

2. Submit a fixed version of this script:

 */


function sayHelicopterName(name) {
	console.log(name);
}; 

var helicopter = "Sikorsky";

sayHelicopterName(helicopter);

var helicopters = ["Apache", "Cobra", "Harbin Z-19", "Kamov Ka-50"];

for(var x = 0; x < helicopters.length; x++) {

sayHelicopterName(helicopters[x]);

}




