const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                         <img src="${user.avatarUrl}" alt="Foto perfil usuario" />
                             <div class="data">
                             <h1>${user.name ?? 'Nao possui nome cadastrado 😢'}</h1>
                            <p>${user.bio ?? 'Nao possui bio cadastrada 😢'}</p>
                            </div>
                        </div>`

        let repositoriosItens = ''
        user.repositories.forEach(repo => repositoriosItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if (user.repositories.length >= 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositorios</h2>
                                            <ul>${repositoriosItens}</ul>
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuario nao encontrado</h3>"
    }
}

export { screen }