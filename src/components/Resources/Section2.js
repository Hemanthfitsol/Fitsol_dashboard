import React from "react";

const Section2 = () => {
  const myarr = [
    "Petrol (litres)",
    "Diesel fuel (litres)",
    "Auto LPG (kg)",
    "Taxis (km)",
    "Local bus (Best/Company bus) (km)",
    "Autorickshaw (km)",
    "Local train (km)",
  ];

  const myarr2 = [
    "Number of LPG Cylinders Used for cooking",
    "Amount of CNG used at home (m3)",
    "Electricity used in a month (kWh)",
    "MY total emissions (kg CO2e/Month)",
    "My average annual carbon footprint (Tonnes of CO2e)",
  ];
  return (
    <div className="container max-w-full  mx-auto px-6">
      <div className="container grid grid-cols-4">
      <h2 className="col-span-4 lg:col-span-3 lg:mx-0 tracking-[8px] px-4 text-md text-col9 font-poppins mb-1">
      CARBON FOOTPRINT CALCULATOR
      </h2>
      </div>
      <form>
        <table className="w-full">
          <thead>
            <tr className="w-full px-4 text-left bg-white">
              <th className="py-2 px-4 w-1/3 ">Activity/Fuel Use</th>
              <th className="py-2 px-4 w-1/3">Quantity</th>
              <th className="py-2 px-4 w-1/3">CO2e (KG)</th>
            </tr>
          </thead>
          <tbody>
            <div className="pt-2 px-4 text-primary text-xs font-semibold">Transportation</div>
                {Array.from({ length: 7 }, (_, index) => (
                  <tr key={index} >
                    <td className="py-2 px-4 w-1/3">{myarr[index]}</td>
                    <td className="py-2 px-4 w-1/3">
                      <input
                        type="text"
                        className="w-full bg-white border border-bordcol rounded px-2 py-2"
                        placeholder=""
                      />
                    </td>
                    <td className="py-2 px-4 w-1/3">
                      <input
                        type="text"
                        className="w-full bg-white border border-bordcol rounded px-2 py-2"
                        placeholder=""
                      />
                    </td>
                  </tr>
                ))}
            <div className="pt-2 px-4 text-primary text-xs font-semibold">Domestic Use</div>
            {Array.from({ length: 5 }, (_, index) => (
              <tr key={index}>
                <td className="py-2 px-4 w-1/3">{myarr2[index]}</td>
                <td className="py-2 px-4 w-1/3">
                  <input
                    type="text"
                    className="w-full bg-white border border-bordcol rounded px-2 py-2"
                    placeholder=""
                  />
                </td>
                <td className="py-2 px-4 w-1/3">
                  <input
                    type="text"
                    className="w-full bg-white border border-bordcol rounded px-2 py-2"
                    placeholder=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default Section2;
