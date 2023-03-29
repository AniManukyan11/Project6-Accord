import {useState, useEffect} from 'react'

function AccordionFunc() {
    const [countries, setCountries] = useState([]);
    const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      fetch(`https://countriesnow.space/api/v0.1/countries/capital`)
         .then((res) => res.json())
         .then((res) => {
        
            setCountries(res.data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   function changeActive(id){
    if(isActive === id){
        setIsActive(!isActive);
        return
    }
    setIsActive(id);
   }
  return (
    <div>
        {countries.map((country, i)=>{
            return (
                <div key={i} className="content">
                  <div>
                    <p>{country.name}</p>
                    <span
                      className="plus_minus_btn"
                      onClick={()=>changeActive(country.iso2)}
                    >
                      {isActive === country.iso2 ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={
                      isActive === country.iso2 ? "capital_box" : ""
                    }
                  >
                    {isActive === country.iso2 && (
                      <p className="capital_txt">{country.capital}</p>
                    )}
                  </div>
                </div>
              );
        })}
    </div>
  )
}

export default AccordionFunc