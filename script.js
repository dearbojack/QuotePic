$(document).ready(function() {
  $('#capture-button').click(function() {
    domtoimage.toBlob(document.getElementById('quote-div'))
    .then(function (blob) {
        window.saveAs(blob, 'quote.png');
    });
  })
})