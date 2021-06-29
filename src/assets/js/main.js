$('.first_challenger').on('click', (e) => {
    e.preventDefault()
    $.ajax('https://reqres.in/api/users', {
        success: function (data) {
            $(".content").empty();
            listUsers(data.data)
        }
    })
})

$('.second_challenger').on('click', (e) => {
    e.preventDefault()
    $.ajax('http://www.amock.io/api/fcmaia/countries', {
        success: function (data) {
            $(".content").empty();
                moreBorder(data)
        }
    })
})

function listUsers(data) {
    data.map((user) => {
        const avatarImg = $('<img>').attr('src', user.avatar).addClass('picture')
        const avatar = $('<div>').append(avatarImg)
        const email = $('<div>').text(`Email: ${user.email}`).attr('id', 'userEmail')
        const UserInfo = $('<div>').text(`${user.first_name} ${user.last_name}`).addClass('user').append(email)
        const displayUser = $('<div>').append(avatar, UserInfo).addClass('avatar')
        $(".content").append(displayUser)
    })
}

function moreBorder(countries) {
    if(finishOrder(countries)) {
        const biggest = countries.reduce((prev, country) => {
            return (prev.fronteiras.length > country.fronteiras.length) ? prev : country
        })
        countries.map((country) => country.code === biggest.code ?  country.fronteiras = [] : country)
        const country = $('<div>').text(`${biggest.code} ${biggest.name}`).addClass('country')
        $(".content").append(country)
        return moreBorder(countries)
    }
    return countries
}

function finishOrder(countries) {
    let result = false
    countries.forEach((country) => country.fronteiras.length > 0 ? result = true : result = result)
    return result
}