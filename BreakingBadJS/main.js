//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", gettFetch);

function gettFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);
  const url = `https://www.breakingbadapi.com/api/characters/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data[0].img);

      document.querySelector(".birthday").innerText = data[0].birthday;
      document.querySelector(".nickname").innerText = data[0].nickname;
      document.querySelector(".occupation").innerText = data[0].occupation;
      document.querySelector(".name").innerText = data[0].name;
      document.querySelector("img").src = data[0].img;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}
