var form = document.getElementById('createForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var toast = $('#alerts-toast-creation');
  var toastAlert = $("#toast-alerts")
  toastAlert.empty();
  var headers = new Headers();
  headers.set('Accept', 'application/json');
  headers.set('Content-Type', 'application/json');

  var data = new Map();
  var objectData = {};
  for (var i = 0; i < form.length; ++i) {
      console.log(form[i])
      console.log(form[i].name)
      console.log(form[i].value)
    data.set(form[i].name, form[i].value)
  }

  data.forEach((value, key) => {
    var keys = key.split('.'),
        last = keys.pop();
    keys.reduce((r, a) => r[a] = r[a] || {}, objectData)[last] = value;
});
  console.log("/////")
  console.log(objectData)
  var fetchOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(objectData)
  };
  
  var responsePromise = fetch('http://localhost:3000/api/v1/quotes', fetchOptions);
  
  
  responsePromise
    .then(function(response) {
        toastAlert.append('<p>Cotizacion creada con exito!</p>');
        toast.show();
      return response.json();
    })
    
    .then(function(jsonData) {
        toastAlert.append('<p>Error al crear la cotizacion</p>');
    	console.log(jsonData);
    });
  
});