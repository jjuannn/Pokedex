/// <reference types="Cypress" />
describe("testea la pokedex", () => {
        let fetchPolyfill

   before( () => {
    const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js'
        
    cy.request(polyfillUrl)
      .then((response) => {
        fetchPolyfill = response.body
      });
    
    beforeEach( () => {
      cy.viewport(1366, 768)
    })
    cy.server();
    cy.route('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20', 'fixture:pagina1')
      .as('obtenerPrimeraPagina')
    
    cy.visit('http://127.0.0.1:8080', {
      onBeforeLoad(contentWindow) {
        delete contentWindow.fetch;
        contentWindow.eval(fetchPolyfill)
        contentWindow.fetch = contentWindow.unfetch
        },
      })
    })

  it("carga la primera pagina", () => {
    const cantidadPokemones = "964"
    cy.get("#cantidad-pokemones")
      .should("have.text", cantidadPokemones)

    cy.get(".l-pokemones")
      .should("have.length", 20)
  
    cy.get("#nombre-pokemon")
      .should("have.text", "...")

    cy.get("#foto-pokemon")
      .should("have.class", "oculto")
  })
  it("selecciona un pokemon", () => {
    cy.server()
    cy.route('https://pokeapi.co/api/v2/pokemon/bulbasaur', 'fixture:bulbasaur')
      .as("obtenerInfoPokemon")


    cy.get("#foto-pokemon").should("have.class", "oculto")      
    cy.get(".bulbasaur").click()

    const cantidadDeTipos = 2

    cy.get("#peso-pokemon").should("have.text", "69")
    cy.get("#altura-pokemon").should("have.text", "7")
    cy.get("#hp-pokemon").should("have.text", "45")
    cy.get("#ataque-pokemon").should("have.text", "49")
    cy.get("#defensa-pokemon").should("have.text", "49")
    cy.get("#velocidad-pokemon").should("have.text", "45")
    cy.get("#ataque-especial").should("have.text", "65")
    cy.get("#defensa-especial").should("have.text", "65")
    cy.get(".tipos").should("have.length", cantidadDeTipos)
    cy.get("#foto-pokemon").should("not.have.class", "oculto")
    // falta foto que no carga idk porque
  })

  it("usa los botones de la pagina", () => {
    cy.server()
    cy.route('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20', 'fixture:pagina2')
      .as("obtenerSegundaPagina")
    cy.route('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', 'fixture:pagina1')
      .as('obtenerPrimeraPagina')
    
    cy.get("#pokemones-next").click()
    cy.get("#lista-pokemones")
      .should("be.visible")
    cy.get("#bodyTabla")
      .should("be.visible")
    cy.get("#pokemones-next")
      .should("be.visible")
    cy.get("#pokemones-prev")
      .should("be.visible")
    cy.get(".l-pokemones")
      .should("have.class", "list-group-item")
    cy.get(".l-pokemones")
      .should("have.class", "list-group-item-action")
    cy.get("#pokemones-prev").click()
    cy.get("#lista-pokemones")
      .should("be.visible")
    cy.get("#bodyTabla")
      .should("be.visible")
    cy.get("#pokemones-next")
      .should("be.visible")
    cy.get("#pokemones-prev")
      .should("be.visible")
    cy.get(".l-pokemones")
      .should("have.class", "list-group-item")
    cy.get(".l-pokemones")
      .should("have.class", "list-group-item-action")

  })
})


