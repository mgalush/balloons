// DONE: create function renderResults for all of the following:
function renderResults(){

   
   
   // DONE get results from local storage
   // DONE: get & parse
   var stringResultsInStorage = localStorage.getItem('resultsInLocalStorage');
   var jsResultsInStorage = JSON.parse(stringResultsInStorage); //these are the results that can be used

   
   
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
   newTrEl = document.createElement('tr');
   var newTdEl = document.createElement('td');
   newTdEl.textContent = 'Dave Wolfe'; //hard coded for now
   newTrEl.appendChild(newTdEl);
   
   
   newTdEl = document.createElement('td');
   newTdEl.textContent = '12345678'; // hard coded for now
   newTrEl.appendChild(newTdEl);
   
   // DONE: render table
   tableToTarget.appendChild(newTrEl); //renders this portion of the table
   
   
}

renderResults();