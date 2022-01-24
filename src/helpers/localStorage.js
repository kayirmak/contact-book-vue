export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
        console.log('ERROR setting data', error);
    }
}

export const getItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.log('ERROR getting data', error);
    }
}

export const DATA_API = 'DATA'