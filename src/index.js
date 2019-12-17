import $ from 'jquery'

$(document).ready(() => {
  $.get("https://wordwatch-api.herokuapp.com/api/v1/top_word", function(data){
    document.querySelector('#topword').innerHTML = JSON.stringify(data.word)
  });

  // function turnPink() {
  //   var textareaval = $('#textArea').val();
  // }

  document.querySelector('.top-word').addEventListener('mouseover', function (e) {
    e.srcElement.style.background = 'pink'
  })

  document.querySelector('.top-word').addEventListener('mouseout', function (e) {
    e.srcElement.style.background = 'white'
  })

  document.querySelector('#submitButton').addEventListener('click', async function (e) {
    e.preventDefault()
    // console.log(e)
    var text = $('#textArea').val();
    console.log(text)
    console.log("Is it hitting here?")

    let body = { "word": { "value": `${text}` } }

    $.post("https://wordwatch-api.herokuapp.com/api/v1/words", body, function(response){
      console.log(response)
    });

    // const fetch = require('node-fetch');
    // let response = await fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
    // // console.log(JSON.stringify(response.word))
    // let response_json = await JSON.stringify(response)
    // console.log(response_json.word)
    // let response_json = response.json()
    // console.log(response.saoasdfas)

  })
  // let variable2 = $('text-submission').serialize()
  // let variable = document.querySelector('#text')
  // console.log(variable)
  // console.log(variable2)

  const fetch = require('node-fetch');
  let response = fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  console.log(response)

  function outputTranslated() {
    $('#toBeTranslatedForm').submit(function() {
       var textareaval = $('#textArea').val();
       console.log(textareaval)
       alert(textareaval);
    });

    document.outputTranslated()
    var selectval = $('#translationOptions').val();
    console.log(selectval)

}
})
