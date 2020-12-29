window.onload = () => {
const main = document.getElementById("mainContainer");
main.innerHTML = `<section id="home" class="about"> 
                    <h2>Hello World ! <i class="fas fa-globe-americas"></i></h2>
                    <p>${perfil.describe}</p>
                    <section id="knowledge" class="knowledge"></section>
                    <div id="knowledgeDinamicIndex"></div>
                  </section>
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
                  </footer>`
let knowLedgeAcc = "";
learned.forEach((element) => {
  knowLedgeAcc += `<section class="artigo-text">
                      <h3 class="titles" id="git">
                        <i class="${element.icon}"></i>
                        ${element.title}
                      </h3>
                      <p>
                        ${element.describe}
                      </p>
                    </section>`;
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
