import axios from 'axios'

const baseUrl = process.env.NUXT_ENV_BASE_URL

const getUserDetailsUrl = `${baseUrl}/users`

export default {
    getUser(user) {
        return axios.get(`${getUserDetailsUrl}/${user}`)
    },

    getUserRepo(user) {
        return axios.get(`${getUserDetailsUrl}/${user}/repos`)
    },
}
