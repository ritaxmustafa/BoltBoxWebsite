import React, { useEffect, useState } from "react";
import { client } from "../../helpers/config/api";
import Select from "react-select";
import { useSelector } from "react-redux";

function CountrySelect(props) {
  const [countries, setCountries] = useState([]);
  const { country } = useSelector((state) => state.global );
  useEffect(() => {
    //Get steps
    // document.body.style.overflow = "hidden";

    client.get("countries").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <>
      <Select
        defaultValue={country}
        onChange={props.selectCountry}
        options={countries}
      />
    </>
  );
}

export default CountrySelect;
