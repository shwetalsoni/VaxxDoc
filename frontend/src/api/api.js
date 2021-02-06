import axios from 'axios'

let apiUrl = "https://vaxxdoc.herokuapp.com"
// let apiUrl = "http://127.0.0.1:5000"

let api = {
    getUsers: () =>
    axios({
        'method':'GET',
        'url': apiUrl + '/user',
    }),

    getUser: (email) =>
    axios({
        'method':'GET',
        'url': apiUrl + '/user/' + email,
    }),

    markV1: (email, hospital) => {
        var bodyFormData = new FormData()
        bodyFormData.append('email', email)
        bodyFormData.append('hospital', hospital)
        return axios({
            method: 'POST',
            url: apiUrl + '/markV1',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
    },

    markV2: (email) => {
        var bodyFormData = new FormData()
        bodyFormData.append('email', email)
        return axios({
            method: 'POST',
            url: apiUrl + '/markV2',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
    },

    register: (email, name, age, gender, number, password) => {
        var bodyFormData = new FormData()
        bodyFormData.append('email', email)
        bodyFormData.append('name', name)
        bodyFormData.append('age', age)
        bodyFormData.append('gender', gender)
        bodyFormData.append('number', number)
        bodyFormData.append('password', password)
        return axios({
            method: 'POST',
            url: apiUrl + '/user',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
    },
}

export default api