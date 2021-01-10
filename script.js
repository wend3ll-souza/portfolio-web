const helloMessage = () => {
  const p = document.querySelector('#helloMessage')
  p.innerHTML = `${perfil.describe}`;
}

const myKnowledges = () => {
  let knowLedgeAcc = "";
  learned.forEach((element) => {
    knowLedgeAcc += `<article href="" class="bg-light myProjects">
                        <div class="wrapper">
                          <section class="card-info text-center">
                            <h5><i class="${element.icon}"></i>${element.title}</h5>
                            <p class="p-3">${element.describe}</p>
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
  <img class="col-6 img-perfil" src="${perfil.image}" alt="foto de perfil">
  <p class="col-6"></p>`;
}

const contacts = () => {
  let linksAcc = "";
  contact.forEach((element) => {
    linksAcc += `<li class="list-item"><i class="${element.icon}"><a target="_blank" class="mx-3" href="${element.link}">${element.contact}</a></i></li>`;
  });
  document.getElementById("allLinks").innerHTML = linksAcc;
}

window.onload = () => {
  helloMessage();
  myKnowledges();
  myProjects();
  moreabout();
  contacts();
}