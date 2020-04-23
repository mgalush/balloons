'use strict';
// DONE: create function renderResults for all of the following:
function renderResults() {



  // DONE get results from local storage
  // DONE: get & parse
  var stringResultsInStorage = JSON.parse(localStorage.getItem('resultsInLocalStorage'));
  // var jsResultsInStorage = JSON.parse(stringResultsInStorage); //these are the results that can be used
  console.log(stringResultsInStorage);


  // DONE: create table for results
  var tableToTarget = document.getElementById('results');
  //create the header row
  var newTrEl = document.createElement('tr');
  var newThEl = document.createElement('th');
  newThEl.textContent = 'NAME';
  newTrEl.appendChild(newThEl);

  newThEl = document.createElement('th');
  newThEl.textContent = 'SCORE';
  newTrEl.appendChild(newThEl);

  tableToTarget.appendChild(newTrEl); //renders this portion of the table


  // DONE: put results inside table
  //hard coded content should come from localStorage once it's available
  for(var i = 0; i < stringResultsInStorage[stringResultsInStorage.length - 1].allScores.length; i++){

    newTrEl = document.createElement('tr');
    var newTdEl = document.createElement('td');
    newTdEl.textContent = stringResultsInStorage[stringResultsInStorage.length - 1].name; //hard coded for now
    newTrEl.appendChild(newTdEl);


    newTdEl = document.createElement('td');
    newTdEl.textContent = stringResultsInStorage[stringResultsInStorage.length - 1].allScores[i]; // hard coded for now
    newTrEl.appendChild(newTdEl);

    // DONE: render table
    tableToTarget.appendChild(newTrEl); //renders this portion of the table
  }


}

renderResults();
