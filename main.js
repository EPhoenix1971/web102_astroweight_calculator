// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

// Get dropdown element from DOM
  var dropdown = document.getElementById('planets');

// Loop through the array
  for (var i = 0; i < planets.length; i++) {
    // Append the element to the end of Array list
      dropdown[dropdown.length] = new Option(planets[i][0], planets[i][1]);
    

}

  // We're going to solve this by breaking the problem into three parts.
  // Programmers like automating things, we'll populate the HTML drop down options using code,
  // instead of having to type out all the values.
  // Create a function that does the some math and gives us the new weight.
  // Then create a function that responds when the user clicks on the button.
  // 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
//var conversionFactor= planets[i][1];

  //planets.forEach(function(planetName){

//});   




  
  
  function handleClickEvent(e) {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = document.getElementById('user-weight').value;
    // 4. Create a variable called planetName and assign the nam(e of the selected planet from the drop down.
    var planetWeight = document.getElementById('planets').value;
    var selectedPlanet = document.getElementById('planets');
    var selectedText =selectedPlanet.options[selectedPlanet.selectedIndex].text;
    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = (userWeight * planetWeight);
    // 6. Write code to display the message shown in the screenshot.
    document.getElementById('output').innerHTML = 'If you were on ' + selectedText + ', you would weigh ' + result + "lbs!";
  }
  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  document.getElementById('calculate-button').addEventListener('click', handleClickEvent)
   
// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)