import axios from 'axios'

// let apiUrl = "https://vaxxdoc.herokuapp.com"
let apiUrl = "http://127.0.0.1:5000"

let api = {
    getUsers: () =>
    axios({
        'method':'GET',
        'url': apiUrl + '/user',
        withCredentials: true
    }),

    getUser: (email) =>
    axios({
        'method':'GET',
        'url': apiUrl + '/user/' + email,
        withCredentials: true
    }),

    markV1: (email, hospital) => {
        var bodyFormData = new FormData()
        bodyFormData.append('email', email)
        bodyFormData.append('hospital', hospital)
        return axios({
            method: 'POST',
            url: apiUrl + '/markV1',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' },
            withCredentials: true
        })
    },

    markV2: (email) => {
        var bodyFormData = new FormData()
        bodyFormData.append('email', email)
        return axios({
            method: 'POST',
            url: apiUrl + '/markV2',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' },
            withCredentials: true
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
            headers: {'Content-Type': 'multipart/form-data' },
            withCredentials: true
        })
    },

    login: (email, password) => {
        var bodyFormData = new FormData()
        bodyFormData.append('email', email)
        bodyFormData.append('password', password)
        return axios({
            method: 'POST',
            url: apiUrl + '/login',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' },
            withCredentials: true
        })
    },

    staffLogin: (email, password) => {
        var bodyFormData = new FormData()
        bodyFormData.append('email', email)
        bodyFormData.append('password', password)
        return axios({
            method: 'POST',
            url: apiUrl + '/staffLogin',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' },
            withCredentials: true
        })
    },

    checkLogin: () =>
    axios({
        'method':'GET',
        'url': apiUrl + '/checkLogin',
        withCredentials: true
    }),

    checkStaffLogin: () =>
    axios({
        'method':'GET',
        'url': apiUrl + '/checkStaffLogin',
        withCredentials: true
    }),

    logout: () =>
    axios({
        'method':'GET',
        'url': apiUrl + '/logout',
        withCredentials: true
    }),
}

export default api