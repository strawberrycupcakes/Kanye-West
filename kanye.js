function generatorquote() {

  var request = new XMLHttpRequest();
  request.open('GET','https://api.kanye.rest', true);

  request.onreadystatechange = function () {

  if (request.readyState == 4 && request.status == 200) {
    var text = request.responseText;
    var jsonText = JSON.parse(text);
    var joke = jsonText.quote;
    document.getElementById('quote').innerHTML = joke
    }

  };
  request.send();
}
