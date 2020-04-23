'use strict';
function renderResults() {
  // get results from local storage
  var stringResultsInStorage = JSON.parse(localStorage.getItem('resultsInLocalStorage'));
  // create table for results
  var tableToTarget = document.getElementById('results');
  //create the header row
  var newTrEl = document.createElement('tr');
  var newThEl = document.createElement('th');
  newThEl.textContent = 'NAME';
  newTrEl.appendChild(newThEl);
  newThEl = document.createElement('th');
  newThEl.textContent = 'SCORE';
  newTrEl.appendChild(newThEl);
  tableToTarget.appendChild(newTrEl);

  // put results inside table
  for (
    var i = 0; i < stringResultsInStorage[stringResultsInStorage.length - 1].allScores.length; i++) {
    newTrEl = document.createElement('tr');
    var newTdEl = document.createElement('td');
    newTdEl.textContent = stringResultsInStorage[stringResultsInStorage.length - 1].name;
    newTrEl.appendChild(newTdEl);
    newTdEl = document.createElement('td');
    newTdEl.textContent = stringResultsInStorage[stringResultsInStorage.length - 1].allScores[i];
    newTrEl.appendChild(newTdEl);
    tableToTarget.appendChild(newTrEl);
  }
}

renderResults();
