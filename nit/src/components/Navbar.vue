<template>
    <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img src="https://oficial.unimar.br/wp-content/themes/re-universo-unimar/images/logo.svg" alt="Unimar Logo" height="30">
            </router-link>
            <router-link class="navbar-logo navbar-center-image" to="/">
            <img src="https://raw.githubusercontent.com/gabebuenu/guardarimagens/main/nite.png" alt="Nite" height="70">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/" >Inicio</router-link>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="display: flex; align-items: center;">
                        Novidades <i class="bi bi-chevron-down" style="height: 18px;"></i>
                    </a>
                    <ul class="dropdown">
                    <li>
                    <router-link class="dropdown-content" to="/empreendedorismo">Empreenda Unimar</router-link>
                    </li>
                    </ul>
                </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/sobre">Sobre</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contato">Contato</router-link>
                    </li>   
                </ul>
            </div>
        </div>
    </nav>
</template>



<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

* {
    font-family: "Montserrat", sans-serif;
}

.navbar {
    padding: 15px 0px;
}

.nav-link {
    font-size: 85%;
    color: #FFF;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #00d9ff;
}

.navbar-center-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
}

/* .navbar-center-image { nite em cima da logo da unimar
    position: static;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
} */

.navbar-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}


.navbar-brand img {
    display: block;
    margin: 0 auto;
}

.custom-navbar {
    background-color: #0072bc !important;
}

.nav-item.dropdown .nav-link .bi-chevron-down {
    color: #00d9ff !important;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown ul {
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    list-style: none; 
    padding: 0; 
    border-radius: .25rem;
}

.dropdown ul li {
    border-bottom: 1px solid #ddd;
}

.dropdown ul li:last-child {
    border-bottom: none;
}

.dropdown:hover ul {
    display: block;
}

.dropdown ul li a {
    text-decoration: none; 
    padding: 12px 16px; 
    display: block; 
    color: #212529;
    transition: color 0.3s ease; 
}

.dropdown ul li a:hover {
    color: #007aff; 
}
</style>
  