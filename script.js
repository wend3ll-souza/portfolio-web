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
                      <section id="knowledgeDinamicIndex" class="row align-items-center">
                      </section>
                    </div>
                  </article>
                  <section id="project">
                    <section id="scrollmenu" class="scrollmenu"></section>
                  </section>
                  <footer id="contact" class="contact">
                    <h3 class="animate-right">Contact</h3><br>
                     <h4 id="name" class="animate-left">${perfil.name}</h4><br>
                    <section id="info" class="info">
                      <div id="allLinks" class="allLinks animate-left"></div>
                      <img class="image animate-right" src="${perfil.image}" alt="foto de perfil">
                     </section>
                  </footer>
               `
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
  scrollAcc += `<a href="${element.link}" target="_blank" class="myProjects">
                      <div class="wrapper">
                          <img src="${element.image}" alt="">
                          <section class="card-info">
                              <h3>${element.title}</h3>
                              <p>${element.describe}</p>
                          </section>
                      </div>
                  </a>`;
});  
let linksAcc = "";
contact.forEach((element) => {
  linksAcc += `<i class="${element.icon} icons-contact"></i>
              <a target="_blank" href="${element.link}">${element.contact}</a><br>`;
});
document.getElementById("knowledgeDinamicIndex").innerHTML = knowLedgeAcc;
document.getElementById("scrollmenu").innerHTML = scrollAcc;
document.getElementById("allLinks").innerHTML = linksAcc;
}
