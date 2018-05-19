'use strict'

import axios from 'axios'
import {BASE_ENDPOINT} from '../../../config'

const api = axios.create({
  baseURL: BASE_ENDPOINT,
  timeout: 3000
})

export default {
  preview: async () => {
    return api.get('/preview')
  }
}
