import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

// Step 2 & 3
function createCard(data) {

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const userImg = document.createElement('img');
  userImg.setAttribute('src', data.avatar_url);
  cardDiv.appendChild(userImg);

  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');
  cardDiv.appendChild(cardInfoDiv);

  const nameH3 = document.createElement('h3');
  nameH3.classList.add('name');
  nameH3.textContent = data.name;
  cardInfoDiv.appendChild(nameH3);

  const usernameP = document.createElement('p');
  usernameP.classList.add('username');
  usernameP.textContent = data.login;
  cardInfoDiv.appendChild(usernameP);

  const locationP = document.createElement('p');
  locationP.textContent = data.location;
  cardInfoDiv.appendChild(locationP);
  
  const profileP = document.createElement('p');
  cardInfoDiv.appendChild(profileP);

  const a = document.createElement('a');
  a.textContent = `Profile: ${data.html_url}`
  a.setAttribute('href', data.html_url)
  cardInfoDiv.appendChild(a)
  profileP.appendChild(a)

  const followersP = document.createElement('p');
  followersP.textContent = `Followers: ${data.followers}`;
  cardInfoDiv.appendChild(followersP);

  const followingP = document.createElement('p');
  followingP.textContent = `Following: ${data.following}`;
  cardInfoDiv.appendChild(followingP);

  const bioP = document.createElement('p');
  bioP.textContent = `Bio: ${data.bio}`;
  cardInfoDiv.appendChild(bioP);

  return cardDiv
}

const cards = document.querySelector('.cards')

// Step 4
axios.get('https://api.github.com/users/Eelli002')
.then(res => {
    cards.appendChild(createCard(res.data));
  }) .catch((err) => { console.log(err) })

// Step 5
const followersArray = [];
followersArray.push('tetondan');
followersArray.push('dustinmyers');
followersArray.push('justsml');
followersArray.push('luishrd');
followersArray.push('bigknell');

followersArray.forEach( element => {
  axios.get(`https://api.github.com/users/${element}`)
  .then(stuff =>{
    cards.appendChild(createCard(stuff.data))
  }) .catch(err => { console.log(err) })
})
