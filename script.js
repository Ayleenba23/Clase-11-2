const portfolio = document.querySelector("#popote");

async function datos(url) {
  try {
    const consulta = await fetch(url);
    const resultado = await consulta.json();
    const trabajos = resultado.data;

    portfolio.innerHTML = ""; // limpiar antes de cargar

    trabajos.forEach((trabajo) => {
      portfolio.innerHTML += `
        <div class="col">
          <div class="card shadow-sm">
            <img src="${trabajo.imagen}" class="card-img-top" alt="${trabajo.titulo}">
            <div class="card-body">
              <p class="card-text">${trabajo.titulo}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">${trabajo.categoria}</button>
                </div>
                <small class="text-body-secondary">Reciente</small>
              </div>
            </div>
          </div>
        </div>`;
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}

datos("https://api.myjson.online/v1/records/5df883c6-4a59-47b8-ba92-e2e340ed317a");
