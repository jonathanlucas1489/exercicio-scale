$('.first_challenger').on('click', (e) => {
    e.preventDefault()
    $.ajax('https://reqres.in/api/users', {
        success: function (data, status, xhr) {
            $(".content").empty();
            listUsers(data.data)
        }
    })
})

$('.second_challenger').on('click', (e) => {
    e.preventDefault()
    $.ajax('http://www.amock.io/api/fcmaia/countries', {
        success: function (data, status, xhr) {
            $(".content").empty();
            console.log(data)
        }
        })
})

function listUsers(data) {
    data.map((user) => {
        console.log(user)
        const avatarImg = $('<img>').attr('src', user.avatar)
        const avatar = $('<div>').append(avatarImg)
        const id = $('<div>').text(user.id)
        const first_name = $('<div>').text(user.first_name)
        const last_name = $('<div>').text(user.last_name)
        const email = $('<div>').text(user.email)
        const displayUser = $('<div>').append(avatar, id, first_name, last_name, email).addClass('avatar')
        $(".content").append(displayUser)
    })
}
