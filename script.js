/*Build a tip calculator*/



/*
Step 1: Create an html doc with a form for the user to input the cost of meal and tip percentage.
Step 2: Style the html page with css.
Step 3: In javascript, define a function that will calculate the tip amount when user submit the form.
Step 4: Define another function so the user can reset calculator.
*/



/*

JavaScript

First thing I did on line 37 was to retrieve the form element's id from the DOM and attached an addEventListener method. It will then listen for the 
the submit event when the user clicks to submit the form. I used the preventDefault method on line 38 to keep the form from being submitted and reloading
the page.

Next, on lines 40 and 41 I declared the variables for the bill amount and tip percentage, which will retrieve the values of the form element input entered by the user. 
The third variable on line 43 will be assigned the calculateTip function that will be called when the user clicks on the button to submit the form.

To have the tip amount be visible to the user on line 45, I retrieved the p element's id from the DOM with the textcontent property and assigned a template literal to it.
This will convert the number value of the tip amount into a string and the toFixed method will round the number to 2 decimal places.

On line 49, I defined a function with the bill and tip percent as parameters that will be called when the user clicks the calculate tip button. Within the function, I  
declared a variable that will calculate the tip amount by dividing the tip percent by 100 and multiply the result with the bill amount.

Finally, in order for the user to be able to reset the calculator, on line 56 I defined a function that will clear the values of the user input from the form element
and clear the text from the p element from the DOM
*/



document.getElementById('tip-form').addEventListener('click', function(event) {
	event.preventDefault();

	let billAmount = document.getElementById('billAmount').value;
	let tipPercentage = document.getElementById('tipPercentage').value;

	let tip = calculateTip(billAmount, tipPercentage);

	document.getElementById('tipAmount').textContent = `The tip amount is $${tip.toFixed(2)}`;
});


function calculateTip(bill, tipPercent) {
	let tipAmount = bill * (tipPercent / 100);
	return tipAmount;
	};



function resetForm() {
		document.getElementById('billAmount').value = "";
		document.getElementById('tipPercentage').value = "";
		document.getElementById('tipAmount').textContent = "";
	}	