// DONE: create function renderResults for all of the following:
function renderResults(){

   
   
   // DONE get results from local storage
   // DONE: get & parse
   var stringAllScoresInStorage = localStorage.getItem('scoresInLocalStorage');
   var jsAllScoresInStorage = JSON.parse(stringAllScoresInStorage); //these are the results that can be used

   
   
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

   tableToTarget.appendChild(newTrEl);
   
   
   // TODO: put results inside table
   
   
   
   // TODO: render table
}

renderResults();