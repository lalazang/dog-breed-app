'use strict';


  function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  console.log(responseJson.message);
  if (responseJson.status == "error") {
    alert(responseJson.message);
  }
  else{
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
  }

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $('input').val();
    console.log(breed);
    getDogImage(breed);
    })
  }

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});