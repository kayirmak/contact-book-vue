import axios from 'axios'

import { commands } from "./commands"

const urlFirstPart = 'https://demo.sibers.com'

export const sendRequest = (cmd, body = null) => {
    return new Promise((resolve, reject) => {
        const command = commands[cmd]

        let url = urlFirstPart + command.url

        axios({
            url,
            method: command.method,
            data: body,
            responseType: 'json'
        }).then(res => {
            console.log(res.data, 'RESPONSE');
            resolve(res.data)
        }).catch(result => {
            reject(result)
        })
    })

}
