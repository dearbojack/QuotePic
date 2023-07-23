$(document).ready(function() {
  $('#capture-button').click(function() {
    domtoimage.toBlob(document.getElementById('quote-div'))
    .then(function (blob) {
        window.saveAs(blob, 'quote.png');
    });
  })

  $('#cn-capture-button').click(function() {
    domtoimage.toBlob(document.getElementById('cn-quote-div'))
    .then(function (blob) {
        window.saveAs(blob, 'quote.png');
    });
  })
})