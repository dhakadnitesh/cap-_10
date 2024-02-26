

document.getElementById("btn").addEventListener("click", function () {
  event.preventDefault();
  var url = "https://reqres.in/api/users";

  let response = fetch(url);
  // let div = document.getElementById("container");

  response
    .then(function (data) {
      return data.json();
    })
    .then(function (data){
      let div = document.getElementById("container");
      div.innerHTML =""
      data.data.forEach(function (item) {




        let card = document.createElement("div");
        card.className = "card"

        let avatar = document.createElement("img");
        avatar.src = item.avatar;
        avatar.className ="avatar"

        let email = document.createElement("p");
        email.innerText = item.email;
        email.className = "email"

        let first_name = document.createElement("h3");
        first_name.innerText = item.first_name;
        first_name.className = "first" 

        let id = document.createElement("h4");
        id.innerText = item.id;
        id.className = "id"

        let last_name = document.createElement("h5");
        last_name.innerText = item.last_name;

        card.append(avatar, email, first_name, id);
        div.append(card);
      });
      console.log(data)
    })
    .catch(function (error) {
      console.log(error);
    });
});

