window.onload = () => document.getElementById("home").click();
const button = document.getElementsByTagName("button");
  addEventListener("click", (event) => {
    if (event.target.id === "home") {
      document.getElementById("menu").className = "menu";
      let contentAcc = `<section id="index" class="about">
    <h2>Hello World ! <i class="fas fa-globe-americas"></i></h2>
    <p>${perfil.describe}</p>
    </section><section id="knowledge" class="knowledge"></section>`;
      let knowLedgeAcc = "";
      button[0].id = "project";
      button[2].id = "contact";
      let main = document.getElementById("mainContainer");
      main.className = "main";
      main.innerText = " ";
      learned.forEach((element) => {
        knowLedgeAcc += `
      <section class="artigo-text">
      <h3 class="titles" id="git">
      <i class="${element.icon}"></i>
      ${element.title}
      </h3>
      <p>
      ${element.describe}
      </p>
      </section>`;
      });
      main.innerHTML += contentAcc;
      document.getElementById("knowledge").innerHTML = knowLedgeAcc;
      event.target.id = "clicked";
    } else if (event.target.id === "project") {
      document.getElementById("menu").className = "menu";
      button[1].id = "home";
      button[2].id = "contact";
      let section = document.createElement("section");
      let scrollMenu = document.createElement("section");
      let main = document.getElementById("mainContainer");
      main.className = "main";
      let scrollAcc = "";
      main.innerText = " ";
      main.appendChild(section);
      section.appendChild(scrollMenu);
      section.id = "project";
      scrollMenu.className = "scrollmenu";
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
      scrollMenu.innerHTML = scrollAcc;
      event.target.id = "clicked";
    } else if (event.target.id === "contact") {
      document.getElementById("menu").className = "menu-contact";
      footerAcc = "";
      linksAcc = "";
      button[0].id = "project";
      button[1].id = "home";
      let main = document.getElementById("mainContainer");
      main.innerText = " ";
      footerAcc += `
    <footer id="about" class="contact">
      <h3 class="animate-right">Contact</h3><br>
      <h4 id="name" class="animate-left">${perfil.name}</h4><br>
      <section id="info" class="info">
      <div id="allLinks" class="allLinks animate-left"></div>
      <img class="image animate-right" src="${perfil.image}" alt="foto de perfil">
      </section>
    </footer>`;
      contact.forEach((element) => {
        linksAcc += `
            <i class="${element.icon} icons-contact"></i>
              <a target="_blank" href="${element.link}">${element.contact}</a><br>`;
      });
      main.innerHTML = footerAcc;
      document.getElementById("allLinks").innerHTML = linksAcc;
      event.target.id = "clicked";
    }
  });