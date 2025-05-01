// src/App.jsx
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [countryFlags, setCountryFlags] = useState([])
  //const [selectedRegion, setSelectedRegion] = useState('')

  useEffect(() => {
    async function getFlagData() {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/all`)
        setCountryFlags(data)
        // const { region } = await axios.get(`https://restcountries.com/v3.1/region/${selectedRegion}`)
        // setSelectedRegion(region)
        // setCountryFlags(countryFlags.sort((a, b) => a.name > b.name ? 1 : -1))

      } catch (error) {
        console.log(error)
      }
    }
    getFlagData()
  }, [])

  // function handleChange(event){
  //   setSelectedRegion(event.target.value)
  // }
  return (
    <>
      <div className="continent">
        <label htmlFor="continents">Continent</label>
        <select name="continents" id="continents">
          <option value="All">All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="flags">
        {countryFlags.length > 0 &&
          countryFlags.map(countryFlag => {
            return (
              <div key={countryFlag.name.common} className="each-flag">
                <h2>{countryFlag.name.common}</h2>
                <p>{countryFlag.name.official}</p>
                <img src={countryFlag.flags.png} alt={countryFlag.name.alt}></img>

              </div>


            )
          })}
      </div>

    </>
  )
}

