// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET','')


let request = new XMLHttpRequest();
request.open('GET', 'frontend_dummy.json', true);

request.onload = function () {
  // Convert JSON data to an object
  let frontend_dummy = JSON.parse(this.response);
  let output = '';
  for (var i = 0; i < frontend_dummy.length; i++) {
    output += '<li>' + frontend_dummy[i].Name + ' is great.'; '</li>'
  }
  document.getElementById('users').innerHTML = output; /
}
