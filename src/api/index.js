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

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyDeath)=>({
            confirmed: dailyDeath.confirmed.total,
            deaths:dailyDeath.deaths.total,
            date:dailyDeath.reportDate
        }))

        return modifiedData

    }
    catch(error) {

    }
}