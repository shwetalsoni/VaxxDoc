import axios from 'axios'

let api = {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://vaxxdoc.herokuapp.com/user',
        // 'headers': {
        //     'content-type':'application/octet-stream',
        //     'x-rapidapi-host':'example.com',
        //     'x-rapidapi-key': process.env.RAPIDAPI_KEY
        // },
        'params': {
            'search':'parameter',
        },
    })
}

export default api