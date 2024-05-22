describe('template spec', () => {

  before(() => {
    cy.visit('/')
  })

  it('Verificar se o header está visivel', () => {
    let titleHead;
    //capturar o elemento title, e ver se ele está visivel
    cy.get("[aria-label='title-head']").should("be.visible")
    cy.get("[aria-label='title-head']").should("contain", 'Good morning')
  });

  it("Verificar se existe itens na listagem de playlist", () => {
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  });

  it("Clicar no primerio item da lista, para listar as suas musicas", () => {
    cy.get("[aria-label='playlist-item']").first().click();
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  })

  it("Clicar na música desejada e executar o áudio", () => {
    cy.get("[aria-label='music-item']").contains("Casca de Bala").click();
  })
})