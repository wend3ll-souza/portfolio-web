window.onload = () => {
const main = document.getElementById("mainContainer");
main.innerHTML = `<article class="jumbotron jumbotron-fluid">
                    <div class="container text-center text-lg-left">
                      <h2 class="display-4 text-center">Hello World ! <i class="fas fa-globe-americas"></i></h2>
                      <p class="lead">${perfil.describe}</p>
                      <hr class="my-4">
                      <p>${perfil.describe}</p>
                      <a class="btn btn-outline-white bg-light btn-lg" href="#">Saiba mais</a>
                    </div>
                    <div class="container my-5">
                      <section id="knowledgeDinamicIndex" class="row align-items-center my-5 bg-dark p-5">
                      </section>
                    </div>
                  </article>
                  <section id="scrollmenu" class="row mt-5 main_last_articles">
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
  knowLedgeAcc += `<article class="col-12 col-md-6 col-lg-3 mb-3 d-flex align-self-stretch">
                    <div class="card">
                      <div class="card-body text-center">
                          <h5 class="card-title"><i class="${element.icon}"></i>${element.title}</h5>
                          <p class="card-text">${element.describe}</p>
                      </div>
                    </div>
                  </article>`;
});
let scrollAcc = "";
projects.forEach((element) => {
  scrollAcc += `<a href=""><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex align-self-stretch">
  <div class="card">
      <img src="${element.image}" class="card-img-top img-wrapper" alt="...">
      <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.describe}</p>
          <p class="text-center"><a href="" class="btn btn-outline-purple d-block">Saber mais...</a></p>
      </div>
  </div>
</div></a>`;
});  
let linksAcc = "";
contact.forEach((element) => {
  linksAcc += `<li class="list-item"><i class="${element.icon}"><a target="_blank" class="mx-3" href="${element.link}">${element.contact}</a></i></li>`;
});
document.getElementById("knowledgeDinamicIndex").innerHTML = knowLedgeAcc;
document.getElementById("scrollmenu").innerHTML = scrollAcc;
document.getElementById("allLinks").innerHTML = linksAcc;
}
