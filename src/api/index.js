import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'


export const fetchData = async(country) => {

    let changeableUrl = url
    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }
    try {
        const {data:{confirmed,deaths,recovered, lastUpdate}} = await axios.get(changeableUrl)

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

export const fetchCountries = async () => {
    const {data:{countries}} = await axios.get(`${url}/countries`)

    return countries.map((item)=>item.name)
}
