import PropTypes from 'prop-types'

import api from '../../services/api'
import viacep from '../../services/viacep'

function calcValidateCnpj (numbers, x) {
  const slice = numbers.slice(0, x)
  let factor = x - 7
  let sum = 0

  for (let i = x; i >= 1; i--) {
    const n = slice[x - i]
    sum += n * factor--
    if (factor < 2) factor = 9
  }

  const result = 11 - (sum % 11)

  return result > 9 ? 0 : result
}

function calcValidateCpf (numbers, x) {
  const slice = numbers.slice(0, x)
  let sum = 0

  for (let i = x; i > 1; i--) {
    const n = slice[x - i]
    sum += n * i
  }

  const result = 11 - (sum % 11)

  return result > 9 ? 0 : result
}

function validate (data) {
  if (data.value?.length === 0) {
    return { message: 'Campo obrigatório' }
  }
  if (data.field === 'cpfOrCnpj') {
    // Guarda um array com todos os dígitos do valor

    const value = data.value.replace(/\D/g, '')
    const match = value.toString().match(/\d/g)
    const numbers = Array.isArray(match) ? match.map(Number) : []

    // Elimina inválidos com todos os dígitos iguais
    const items = [...new Set(numbers)]
    if (items.length === 1) return { message: 'CPF ou CNPJ Inválido' }

    if (numbers.length === 14) {
      // Separa os 2 últimos dígitos de verificadores
      const digits = numbers.slice(12)

      // Valida 1o. dígito verificador
      const digit0 = calcValidateCnpj(numbers, 12)

      // Valida 2o. dígito verificador
      const digit1 = calcValidateCnpj(numbers, 13)

      if (digit0 !== digits[0] || digit1 !== digits[1]) return { message: 'CNPJ Inválido' }
    } else if (numbers.length === 11) {
      // Separa os 2 últimos dígitos de verificadores
      const digits = numbers.slice(9)

      // // Valida 1o. dígito verificador
      const digit0 = calcValidateCpf(numbers, 10)

      // // Valida 2o. dígito verificador
      const digit1 = calcValidateCpf(numbers, 11)
      if (digit0 !== digits[0] || digit1 !== digits[1]) return { message: 'CPF Inválido' }
    } else {
      return { message: 'CPF ou CNPJ Inválido' }
    }
  }
  return { message: '' }
}

async function checkAddress (
  cartorioZipCode,
  setCartorioRoad,
  setCartorioCity,
  setCartorioState
) {
  const { data } = await viacep.getAddress(cartorioZipCode)

  if (data.error) {
    return
  }

  setCartorioRoad(data.logradouro)
  setCartorioCity(data.localidade)
  setCartorioState(data.uf)
}

async function handleRegister (
  body,
  setErrorMessage,
  setNameDoc,
  setTypePerson,
  setNameOrRazao,
  setCpfOrCnpj,
  setCartorioZipCode,
  setCartorioRoad,
  setCartorioNum,
  setCartorioCity,
  setCartorioState,
  setRequests,
  setShowToast,
  setLoading
) {
  setLoading(true)
  const validations = []
  const erros = []
  Object.keys(body).forEach(element => {
    const checkValidate = validate({ field: element, value: body[element] })
    validations.push({ [element]: checkValidate.message })
    checkValidate.message !== '' && erros.push({ [element]: checkValidate.message })
  })
  setErrorMessage(validations.map(element => {
    return element
  }))

  if (erros.length === 0) {
    try {
      await api.createRequest(body)

      setNameDoc('')
      setTypePerson()
      setCpfOrCnpj('')
      setNameOrRazao('')
      setCartorioZipCode('')
      setCartorioRoad('')
      setCartorioNum('')
      setCartorioCity('')
      setCartorioState('')
      getRequests(setRequests, setLoading)
      setShowToast(true)
      // setLoading(false)
    } catch (error) {
      console.log({ error })
    }
  }
  setLoading(false)
}

async function getRequests (setRequests, setLoading) {
  const { data } = await api.getAllRequests()
  setRequests(data)
  setLoading(false)
}

async function handleDelete (id, setRequests, setLoading) {
  try {
    await api.deleteRequest(id)
    getRequests(setRequests, setLoading)
  } catch (error) {
    console.log(error)
  }
}

validate.propTypes = {
  data: PropTypes.object.isRequired
}

handleRegister.propTypes = {
  body: PropTypes.object.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  setNameDoc: PropTypes.func.isRequired,
  setTypePerson: PropTypes.func.isRequired,
  setNameOrRazao: PropTypes.func.isRequired,
  setCpfOrCnpj: PropTypes.func.isRequired,
  setCartorioZipCode: PropTypes.func.isRequired,
  setCartorioRoad: PropTypes.func.isRequired,
  setCartorioNum: PropTypes.func.isRequired,
  setCartorioCity: PropTypes.func.isRequired,
  setCartorioState: PropTypes.func.isRequired,
  setRequests: PropTypes.func.isRequired,
  setShowToast: PropTypes.func.isRequired,
  setLoading: PropTypes.func
}

getRequests.propTypes = {
  setRequests: PropTypes.func.isRequired,
  setLoading: PropTypes.func
}

handleDelete.propTypes = {
  id: PropTypes.numbers,
  setRequests: PropTypes.func,
  setLoading: PropTypes.func
}

checkAddress.propTypes = {
  cartorioZipCode: PropTypes.func,
  setCartorioRoad: PropTypes.func,
  setCartorioCity: PropTypes.func,
  setCartorioState: PropTypes.func
}

export {
  validate,
  handleRegister,
  getRequests,
  handleDelete,
  checkAddress
}
