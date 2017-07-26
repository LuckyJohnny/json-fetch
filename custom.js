const btn = document.querySelector('.button')

btn.addEventListener('click', loadContent)

function loadContent() {

fetch('data.json')
.then(
  function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem: ' + response.status)
      return
    }
    response.json()
    .then(function (data) {
      var newContent = ''
      for (var i = 0; i <data.artists.length; i++) {
        newContent += '<div>'
        newContent += '<img src="' + data.artists[i].work + '"'
        newContent += 'alt="' + data.artists[i].title +'">'
        newContent += '<p><strong>' + data.artists[i].name + '</strong><br>'
        newContent += data.artists[i].title + '<br>'
        newContent += '<span>' + data.artists[i].medium + '</span></p>'
        newContent += '</div>'
      }
      document.querySelector('#content').innerHTML = newContent
    })
  }
)
.catch(function (err) {
  console.log('Fetch Error: ' + err)
})
}
