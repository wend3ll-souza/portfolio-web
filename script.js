const helloMessage = () => {
  const p = document.querySelector('#helloMessage')
  p.innerHTML = `${perfil.helloMessage}`;
}

const myKnowledges = () => {
  let knowLedgeAcc = "";
  learned.forEach((element) => {
    knowLedgeAcc += `<article href="" class="bg-light myProjects">
                        <div class="wrapper">
                          <section class="card-info text-center">
                          <i class="${element.icon} ml-3 mr-3"></i>
                            <h5>${element.title}</h5>
                            <p class="p-3">${element.describe}</p>
                            <a class="btn btn-outline-white bg-warning btn-lg">Saiba mais</a>
                          </section>
                        </div>
                    </article>`;
  });
  document.getElementById("knowledgeDinamicIndex").innerHTML = knowLedgeAcc;
}

const myProjects = () => {
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
  document.getElementById("scrollmenu").innerHTML = scrollAcc;
}

const moreabout = () => {
  document.getElementById('moreAbout').innerHTML = `
  <section class="container row">
    <img class="img-perfil" src="${perfil.image}" alt="foto de perfil">
    <p class="p-4 col-12">${perfil.describe}</p>
  </section>`;
}

const contacts = () => {
  let linksAcc = "";
  contact.forEach((element) => {
    linksAcc += `<li class="list-item">
                    <a target="_blank" class="mx-3" href="${element.link}">
                      <i class="${element.icon} list-icon"> ${element.contact}</i>
                    </a>
                  </li>`;
  });
  document.getElementById("allLinks").innerHTML = linksAcc;
}

const curriculemVitae = () => {
  const section = document.getElementById('curriculum');
  section.innerHTML =``
}

window.onload = () => {
  helloMessage();
  myKnowledges();
  myProjects();
  moreabout();
  contacts();
  // curriculemVitae();
}