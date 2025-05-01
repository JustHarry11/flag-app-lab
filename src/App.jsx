// src/App.jsx
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [countryFlags, setCountryFlags] = useState([])

  useEffect(() => {
    async function getFlagData() {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/all`)
        setCountryFlags(data)
        // setCountryFlags(countryFlags.sort((a, b) => a.name > b.name ? 1 : -1))

      } catch (error) {
        console.log(error)
      }
    }
    getFlagData()
  }, [])
  return (
    <>
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

