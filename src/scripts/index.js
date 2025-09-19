import { getUser } from './services/user.js'
import { getRepositories } from './services/repositorios.js'
import {getEvents} from './services/events.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (valiDateInput(userName)) return
    getUserData(userName)
})

function valiDateInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuario do GitHub')
        return true
    }
}

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (valiDateInput(userName)) return
        getUserData(userName)
    }
})


async function getUserData(userName) {
    const userResponse = await getUser(userName)
    const eventsResponse = await getEvents(userName)
    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }
    const repositoriosResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriosResponse)
    user.setEvents(eventsResponse)
    screen.renderUser(user)
}
