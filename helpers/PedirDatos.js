import MOCK__DATA from "../src/data/MOCK_DATA.json";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(MOCK__DATA)
        }, 500)
    })
}