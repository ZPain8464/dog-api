

function displayResults(responseJson) {
    console.log('displayResults ran');
    console.log(responseJson.message);
    $('.js-images').empty();
    for (let i = 0; i < responseJson.message.length; i++) {
        $('.js-images').append(`
    <li><img src="${responseJson.message[i]}" class="results-img"></li><hr>`);
    $('.results').removeClass('hidden');
    };
    

}


function watchForm() {
    console.log('watchForm ran')
    $('form').submit(event =>{
        event.preventDefault();  
        numImages = $('#text-box').val();
        let URL = `https://dog.ceo/api/breeds/image/random/${numImages}`;
    fetch(URL).then(response => response.json())
    .then(responseJson => 
        displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'))
    });
}

$(function() {
    console.log('App loaded! Waiting for submit');
    watchForm();
})