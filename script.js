window.onload = () => {
const main = document.getElementById("mainContainer");
main.innerHTML = `<article class="jumbotron jumbotron-fluid">
                    <div class="container text-center text-lg-left ">
                      <h1 class="text-center">Hello World ! <i class="fas fa-globe-americas"></i></h1>
                      <p class="lead">${perfil.describe}</p>
                      <hr class="my-4">
                      <p>${perfil.describe}</p>
                      <a class="btn btn-outline-white bg-light btn-lg" href="#">Saiba mais</a>
                    </div>
                  </article>
                  <div class="container-fluid bg-dark py-5">
                      <section id="knowledgeDinamicIndex" class="scrollmenu">
                      </section>
                    </div>
                  <section id="scrollmenu" class="scrollmenu mt-5 main_last_articles">
                    <div class="col-12 mt-5 mb-4">
                        <h2></h2>
                    </div>
                  </section>
                  <div class="main_footer bg-info">
                  <section class="container">
                      <div class="row py-5">
                    <div class="container text-center">
                    <h4>${perfil.name}</h4><br>
                    </div>
                          <article class="col-12 d-flex col-md-6 col-lg-4">
                              <img class="col-6 img-perfil" src="${perfil.image}" alt="foto de perfil">
                              <p class="col-6">Leve o desenvolvimento dos seus layouts para um próximo nível usando o Bootstrap 4. Veja como é fácil
                                  e rápido desenvolver uma aplicação de qualidade!</p>
                          </article>

                          <article class="col-12 col-md-6 col-lg-4">
                          <div class="container text-center my-5">
                          <h4>Contact</h4><br>
                          </div>
                              <ul id="allLinks">
                                
                              </ul>
                          </article>
                      </div>
                  </section>
              </div>`
let knowLedgeAcc = "";
learned.forEach((element) => {
  knowLedgeAcc += `<article href="" class="bg-light myProjects">
  <div class="wrapper">
      <section class="card-info text-center">
      <h5>
      <i class="${element.icon}"></i>${element.title}</h5>
          <p class="p-3">${element.describe}</p>
      </section>
  </div>
</article>`;
});
let scrollAcc = "";
projects.forEach((element) => {
  scrollAcc += `<a href="${element.link}" class="myProjects">
  <div class="wrapper">
  <img src="${element.image}">
      <section class="position-absolute text-center">
      <h5>${element.title}</h3>
          <p>${element.describe}</p>
      </section>
  </div>
</a>`;
});  
let linksAcc = "";
contact.forEach((element) => {
  linksAcc += `<li class="list-item"><i class="${element.icon}"><a target="_blank" class="mx-3" href="${element.link}">${element.contact}</a></i></li>`;
});
document.getElementById("knowledgeDinamicIndex").innerHTML = knowLedgeAcc;
document.getElementById("scrollmenu").innerHTML = scrollAcc;
document.getElementById("allLinks").innerHTML = linksAcc;
}
