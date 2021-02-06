import axios from 'axios'

let apiUrl = "https://vaxxdoc.herokuapp.com"

let api = {
    getUsers: () =>
    axios({
        'method':'GET',
        'url': apiUrl + '/user',
    }),
    getUser: () =>
    axios({
        'method':'GET',
        'url': apiUrl + '/user' + '/' + 'abcc',
    })
}

export default api