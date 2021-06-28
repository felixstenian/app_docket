import axios from 'axios'

const baseUrl = 'https://viacep.com.br/ws'

const viaCep = {
  getAddress: (cep) => {
    return axios.get(`${baseUrl}/${cep}/json/`)
  }
}

export default viaCep
