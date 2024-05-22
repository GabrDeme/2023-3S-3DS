describe('template spec', () => {
  before(() => {
    cy.visit('/')
  })

  it('Redirecionar a minha tela para a tela de busca', () => {
    cy.get("[href='/Search']").click();
    cy.scrollTo("top")
  })
  it('Procurar por uma música', () => {
    
    cy.get("[data-testid='campoBusca']").type("Farra, Pinga e Foguete")

  })

  it("Verificar se existe a música exata", () => {
    cy.get("[aria-label='music-item']").contains(/^(Farra, Pinga e Foguete)/i).click();
  })

  it("Clicou no botão de curtir", async() => {
    cy.wait(1500)
    
    cy.get("[aria-label='music-item']").filter(":contains('Farra, Pinga e Foguete')").first().then( async(item) => {
      cy.wait(1500)
      cy.wrap(item).find("[data-testid='icon-button']").click()
    });
  })

})

