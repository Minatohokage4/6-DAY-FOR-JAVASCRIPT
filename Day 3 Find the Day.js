function findDay(myDate) {
	var d = new Date(myDate); 
	var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] 
	console.log(dayNames[d.getDay()]);
} 
findDay("10/10/2538");

