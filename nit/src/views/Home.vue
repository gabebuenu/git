<template>
  <div class="home">
    <section id="home" class="relative-container">
      <img src="https://github.com/gabebuenu/guardarimagens/blob/main/home_nit_curva_2.png?raw=true" alt="home-image" class="responsive-image">
      <h1 class="title"><span class="bold-text">O Núcleo de Inovação Tecnológica e Empreendedorismo (NITE)</span> da UNIMAR é um ambiente de incentivo à criatividade e ao empreendedorismo, que visa transformar ideias inovadoras em soluções de impacto para a sociedade.</h1>
    </section>
    <section id="empreendedorismo" class="relative-container">
      <img src="https://raw.githubusercontent.com/gabebuenu/guardarimagens/main/fundo.png" alt="empreenda-image" class="responsive-image">
    </section>
    <section id="sobre" class="relative-container">
      <img src="https://raw.githubusercontent.com/gabebuenu/guardarimagens/main/celular_nite.png" alt="sobre-image" class="responsive-image">
    </section>
    <section id="contato" class="relative-container">
      <img src="https://raw.githubusercontent.com/gabebuenu/guardarimagens/main/entre%20em%20contato_2.png" alt="contato-image" class="responsive-image">
    </section>
    <footer>
    <div class="footerContainer">
        <div class="socialIcons">
            <a href="https://www.facebook.com/universidadedemarilia"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/nite_unimar/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/unimar_oficial"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.youtube.com/@UnimarTV"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="footerNav">
            <ul><li><a href="#home">Inicio</a></li>
                <li><a href="#empreendedorismo">Novidades</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </div>
        
    </div>
    <div class="footerBottom">
        <p>&copy; Designed by <span class="designer">Gabriel Bueno</span></p>
    </div>
</footer>
  </div>
</template>

<style>


.responsive-image {
  width: 100%;
  height: auto;
}

.relative-container {
  position: relative;
}

.title {
  color: rgb(82, 82, 82);
  position: absolute;
  top: 25%; 
  right: 5%; 
  text-align: right;
  width: 45%; 
  font-size: 2vw; 
}

.bold-text {
  font-weight: bold;
  color: rgb(0, 0, 0);
}
footer{
    background-color: #121212;
}
.footerContainer{
    width: 100%;
    padding: 70px 30px 20px ;
}
.socialIcons{
    display: flex;
    justify-content: center;
}
.socialIcons a{
    text-decoration: none;
    padding:  10px;
    background-color: white;
    margin: 10px;
    border-radius: 50%;
}
.socialIcons a i{
    font-size: 2em;
    color: black;
    opacity: 0,9;
}

.socialIcons a:hover{
    background-color: #111;
    transition: 0.5s;
}
.socialIcons a:hover i{
    color: white;
    transition: 0.5s;
}
.footerNav{
    margin: 30px 0;
}
.footerNav ul{
    display: flex;
    justify-content: center;
    list-style-type: none;
}
.footerNav ul li a{
    color:white;
    margin: 10px;
    text-decoration: none;
    font-size: 1.4em;
    opacity: 0.7;
    transition: 0.5s;

}
.footerNav ul li a:hover{
    opacity: 1;
}
.footerBottom{
    background-color: #121212;
    padding: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
}
.footerBottom p{
    color: white;
}
.designer{
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    margin: 0px 5px;
}
@media (max-width: 700px){
    .footerNav ul{
        flex-direction: column;
    } 
    .footerNav ul li{
        width:100%;
        text-align: center;
        margin: 10px;
    }
    .socialIcons a{
        padding: 8px;
        margin: 4px;
    }
}
</style>
