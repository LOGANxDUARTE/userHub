const BASE_URL = 'https://jsonplace-univclone.herokuapp.com';

function fetchUsers() {
    return fetch(`${ BASE_URL }/users`)
    .then(function (response) {
        return response.json();
    }).catch(function (error) {
      console.log(error)
    });
  }

fetchUsers().then(function (data) {
    console.log(data);
  });

function renderUser(user) {
    return $(`
    <div class="user-card">
  <header>
    <h2>${user.name}</h2>
  </header>
  <section class="company-info">
    <p><b>Contact:</b> ${user.email}</p>
    <p><b>Works for:</b> ${user.company.name}</p>
    <p><b>Company creed:</b> ${user.company.catchPhrase}</p>
  </section>
  <footer>
    <button class="load-posts">POSTS BY ${user.username}</button>
    <button class="load-albums">ALBUMS BY ${user.username}</button>
  </footer>
</div>
`).data('user', user)
}

function renderUserList(userList) {
    $('#user-list').empty()
    userList.forEach(function(user) {
        const userElement = renderUser(user)
        $('#user-list').append(userElement)
    })
}

$('#user-list').on('click', '.user-card .load-posts', function () {
    $(this).closest()
    // render posts for this user
    console.log(this)
  });
  
  $('#user-list').on('click', '.user-card .load-albums', function () {
    $(this).closest()
    // render albums for this user
    console.log(this)
  });

  // MODULE 2

  /* get an album list, or an array of albums */
function fetchUserAlbumList(userId) {
  return fetch(`${ BASE_URL }/users/${ userId }/albums`)  
  .then(function (response) {
    return response.json()
  })
  .catch(function (error) {
    console.log(error)  
  })
}

fetchUserAlbumList(1).then(function (albumList) {
  console.log(albumList);
});

function fetchData(url) {
  
}

// /* render a single album */
// function renderAlbum(album) {

// }

// /* render a single photo */
// function renderPhoto(photo) {

// }

// /* render an array of albums */
// function renderAlbumList(albumList) {

// }

function bootstrap() {
  fetchUsers().then(renderUserList);
}
  
  bootstrap();