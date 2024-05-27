// Tableau des éléments
const elements = [
    { name: "Java", children: [{ name: "Doc officiel", url: "https://docs.oracle.com/en/java/" }, { name: "Doc W3 School", url: "https://www.w3schools.com/java/" }] },
    { name: "html", children: [{ name: "Doc officiel", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }, { name: "Doc W3 School", url: "https://www.w3schools.com/html/default.asp" }] },
    { name: "css", children: [{ name: "Doc officiel", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }, { name: "Doc W3 School", url: "https://www.w3schools.com/css/default.asp" }] },
    { name: "Phyton", children: [{ name: "Doc officiel", url: "https://docs.python.org/3/" }, { name: "Doc W3 School", url: "https://www.w3schools.com/python/default.asp" }] },
    { name: "Golang", children: [{ name: "Doc officiel", url: "https://go.dev/doc/" }, { name: "Doc W3 School", url: "https://www.w3schools.com/go/index.php" }] },
    { name: "php", children: [{ name: "Doc officiel", url: "https://www.php.net/docs.php" }, { name: "Doc W3 School", url: "https://www.w3schools.com/php/default.asp" }] },
    { name: "Java-script", children: [{ name: "Doc officiel", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }, { name: "Doc W3 School", url: "https://www.w3schools.com/js/default.asp" }] },
    { name: "c++", children: [{ name: "Doc officiel", url: "https://learn.microsoft.com/fr-fr/cpp/cpp/?view=msvc-170" }, { name: "Doc W3 School", url: "https://www.w3schools.com/cpp/default.asp" }] },
    { name: "c#", children: [{ name: "Doc officiel", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" }, { name: "Doc W3 School", url: "https://www.w3schools.com/cs/index.php" }] }
  ];
  
  // Fonction pour afficher les éléments dans la liste
  function displayElements(elements) {
    const list = document.getElementById("list");
    list.innerHTML = ""; // Effacer la liste actuelle
  
    elements.forEach(element => {
        const listItem = document.createElement("li");
        listItem.textContent = element.name;
        list.appendChild(listItem);
  
        // Ajouter un événement de clic pour afficher les enfants au clic sur l'élément parent
        listItem.addEventListener("click", () => {
            displayChildren(element.children);
        });
    });
  }
  
  // Fonction pour afficher les enfants d'un élément
  function displayChildren(children) {
    const list = document.getElementById("list");
    list.innerHTML = ""; // Effacer la liste actuelle
  
    children.forEach(child => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = child.name;
        link.href = child.url; // Définir l'URL du lien
  
        // Ajouter un gestionnaire d'événements au lien pour ouvrir l'URL dans une nouvelle fenêtre
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            window.open(child.url, "_blank"); // Ouvrir l'URL dans une nouvelle fenêtre
        });
  
        listItem.appendChild(link);
        list.appendChild(listItem);
    });
  }
  
  
  
  // Gérer la recherche
  document.getElementById("searchInput").addEventListener("input", (event) => {
    const searchValue = event.target.value.toLowerCase();
  
    if (searchValue === "") {
        document.getElementById("list").innerHTML = ""; // Effacer la liste si la recherche est vide
        return;
    }
  
    const filteredElements = elements.filter(element =>
        element.name.toLowerCase().includes(searchValue) ||
        element.children.some(child => child.name.toLowerCase().includes(searchValue))
    );
  
    displayElements(filteredElements);
  });
  