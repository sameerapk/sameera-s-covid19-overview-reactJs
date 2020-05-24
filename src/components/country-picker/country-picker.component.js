import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import {fetchCountries} from '../../api'
import styles from './country-picker.module.css'

const CountryPicker = ({handleCountryChange}) => {
    const [countries,setFetchedCountries] = useState([])

    useEffect(()=>{
      const fetchApi = async()=>{
          setFetchedCountries(await fetchCountries())
      }
      fetchApi()  
    },[])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                defsult = ''
                onChange={(e)=>handleCountryChange(e.target.value)}
            >

                <option value=''>Global</option>
                {
                    countries.map((country, i)=><option key={i} value={country}>{country}</option>)
                }

            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker