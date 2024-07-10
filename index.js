//creates a function that takes in fetch() request
function submitData (name, email){

  //sends a Post request
return fetch ('http://localhost:3000/users', {
  method: 'POST',

  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },

//converts the name and email to JSON string
  body: JSON.stringify({
    name, email
  })
})

//accesses the response and converts it to js object
.then(function(res){
  return res.json()
})

//sets the innerHtml of body to the id of the created user
.then(function(object){
  document.body.innerHTML = object["id"]
})

//sets the innerHTML of body to an error message (displays if request is unsuccessful)
.catch(function(error){
  document.body.innerHTML = error.message
})
}
