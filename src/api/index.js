import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'


export const fetchData = async() => {
    try {
        const {data:{confirmed,deaths,recovered, lastUpdate}} = await axios.get(url)

        const modifiedResponse = {
            confirmed,
            deaths,
            recovered,
            lastUpdate,
        }
        return modifiedResponse
    }
    catch (error) {

    }
}