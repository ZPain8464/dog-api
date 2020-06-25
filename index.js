

// function getDogImage() {
//     console.log('get DogImage ran')
//     let URL = "https://dog.ceo/api/breeds/image/random";
//     $(`/${numImages}`).appendTo(URL);
//     fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
//     .then(responseJson => 
//         displayResults(responseJson))
//         // append 
//     .catch(error => alert('Something went wrong. Try again later.'));
// }

function displayResults(responseJson) {
    console.log(responseJson)
    $('.results').replaceWith(
        `<img src="${responseJson.message}">`
    );
}

function watchForm() {
    console.log('watchForm ran')
    $('form').submit(event =>{
        event.preventDefault();  
        numImages = $('#text-box').val();
        // console.log(numImages)
        // getDogImage();
        let URL = `https://dog.ceo/api/breeds/image/random/${numImages}`;
    // $(`/${numImages}`).appendTo(URL);
    fetch(URL).then(response => response.json())
    .then(responseJson => 
        displayResults(responseJson))
        // append 
    .catch(error => alert('Something went wrong. Try again later.'))
    });
}

$(function() {
    console.log('App loaded! Waiting for submit');
    watchForm();
})