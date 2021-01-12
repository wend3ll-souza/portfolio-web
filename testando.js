const json = require('jsonfile');

const withoutSpace = (string) => {
    const array = string.split(' ');
    const data = array.reduce((acc, value) => acc += value);
    json.writeFile('string.json', data)
}

withoutSpace(`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="projects.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="bootstrap.css">
        <title>index</title>
    </head>
    <body>
        <nav class="navbar nav-style navbar-expand-lg navbar-dark bg-dark position-fixed">
            <div class="container">
            <a class="navbar-brand h1 mb-0" href="">Portfolio <b>Web</b></a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSite"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSite">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="#home" class="nav-link">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a href="#myKnowledge" class="nav-link">Conhecimentos</a>
                        </li>
                        <li class="nav-item">
                            <a href="#myProjects" class="nav-link">Projetos</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contacts" class="nav-link">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main id="mainContainer" class="">
            <article id="home" class="jumbotron jumbotron-fluid mb-0">
                <div class="container text-center text-lg-left">
                    <h1 class="text-center">
                        Hello World !
                        <i class="fas fa-globe-americas"></i>
                    </h1>
                    <p id="helloMessage" class="lead text-center"></p>
                </div>
                <br>
                <section id="curriculum py-5" class="">
                    <section class="curriculum-section">
                        <img  class="img-fluid" src="./curriculum.png">
                          <section class="position-absolute ml-5">
                          <h5>Veja meu Curriculo Aqui:</h3>
                              <a class="btn text-dark btn-outline-white bg-light btn-lg">Download PDF</a>
                          </section>
                    </section>
                </section>
            </article>
            <div class="container-fluid bg-dark py-5">
                <div id="myKnowledge" class="container my-5">
                    <h2 class="text-center text-white">Conhecimentos</h2>
                    <hr>
                    <section id="knowledgeDinamicIndex" class="scrollmenu">
                    </section>
                </div>
            </div>
            <div id="myProjects" class=" py-5 container">
                <h2 class="text-center">Projetos</h2>
                <hr>
                <section id="scrollmenu" class="scrollmenu">
                </section>
            </div>
            <section class="py-5">
                <section class="curriculum-section">
                    <img  class="img-fluid" src="https://source.unsplash.com/random">
                    <section class="position-absolute d-flex flex-column justify-content-center">
                        <h5>Visite meus Repositórios Remotos:</h3>
                            <a class="btn text-dark btn-outline-white bg-light btn-lg">GitHub</a>
                        </section>
                    </section>    
            </section>
            
            <footer id="contacts" class="bg-dark py-5">
                <section class="container d-flex justify-content-between">
                    <div class="row py-5">
                        <article id="moreAbout" class="col-lg-6 col-md-6 col-12 d-flex"></article>
                        <div class="container d-flex row col-12 col-md-6 col-lg-6">
                            <ul id="fast-links"  class="col-lg-4 col-md-4 col-6 navbar-nav ml-auto">
                                <h5 class="text-white">Navegue pela Página:</h5>
                                <li class="nav-item">
                                    <a href="#home" class="nav-link">Sobre</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#myKnowledge" class="nav-link">Conhecimentos</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#myProjects" class="nav-link">Projetos</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#contacts" class="nav-link">Contato</a>
                                </li>
                                
                            </ul>
                            <div class="col-lg-4 col-md-4 col-6">
                                <h5 class="text-white">Entre em contato:</h5>
                                <ul class="navbar-nav ml-auto" id="allLinks">
                                </ul>
                            </div>
                        </div>
                        </div>
                </section>
            </footer>
        </main>
    </body>
    <script src="script.js"></script>
    <script src="data.js"></script>
    <script src="./jquery.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</html>
`)