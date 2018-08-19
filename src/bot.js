const nightmare = require('nightmare')

const url = 'https://blu365.com.br/promocoes/descontos/decimo-terceiro-pernambucanas/'
const cpfInputSelector = '#inputDocument'
const submitSelector = '#sendDocument'
const personalDataSelector = '#dadosPessoais'

const navigator = new nightmare({ show: true })

navigator
  .goto(url)
  .wait(cpfInputSelector)
  .click(cpfInputSelector)
  .type(cpfInputSelector, '35065626812')
  .click(submitSelector)
  .wait(personalDataSelector)
  // .end()
  .then(data => {
    console.log('End ', data)
  })
  .catch(err => console.log)