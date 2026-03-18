import { useState } from "react";

const SportCars = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      marka: "Ferrari",
      modell: "SF90 Stradale",
      evjarat: 2023,
      loero: 1000,
      gyorsulas_0_100: "2.5s",
      vegsebesseg: "340 km/h",
    },
    {
      id: 2,
      marka: "Lamborghini",
      modell: "Revuelto",
      evjarat: 2024,
      loero: 1015,
      gyorsulas_0_100: "2.5s",
      vegsebesseg: "350 km/h",
    },
    {
      id: 3,
      marka: "Porsche",
      modell: "911 GT3 RS",
      evjarat: 2023,
      loero: 525,
      gyorsulas_0_100: "3.2s",
      vegsebesseg: "296 km/h",
    },
    {
      id: 4,
      marka: "McLaren",
      modell: "750S",
      evjarat: 2024,
      loero: 750,
      gyorsulas_0_100: "2.8s",
      vegsebesseg: "332 km/h",
    },
    {
      id: 5,
      marka: "Bugatti",
      modell: "Chiron Super Sport",
      evjarat: 2022,
      loero: 1600,
      gyorsulas_0_100: "2.4s",
      vegsebesseg: "440 km/h",
    },
    {
      id: 6,
      marka: "Aston Martin",
      modell: "DBS Volante",
      evjarat: 2023,
      loero: 715,
      gyorsulas_0_100: "3.6s",
      vegsebesseg: "340 km/h",
    },
    {
      id: 7,
      marka: "Koenigsegg",
      modell: "Jesko Absolut",
      evjarat: 2024,
      loero: 1600,
      gyorsulas_0_100: "2.5s",
      vegsebesseg: "530 km/h",
    },
    {
      id: 8,
      marka: "Chevrolet",
      modell: "Corvette Z06",
      evjarat: 2023,
      loero: 670,
      gyorsulas_0_100: "2.6s",
      vegsebesseg: "312 km/h",
    },
    {
      id: 9,
      marka: "Nissan",
      modell: "GT-R NISMO",
      evjarat: 2024,
      loero: 600,
      gyorsulas_0_100: "2.8s",
      vegsebesseg: "315 km/h",
    },
    {
      id: 10,
      marka: "Maserati",
      modell: "MC20",
      evjarat: 2023,
      loero: 630,
      gyorsulas_0_100: "2.9s",
      vegsebesseg: "325 km/h",
    },
  ]);
  const [result, setResult] = useState(null);
  const [bestCar, setBestCar] = useState(null);

  const findFastestCar = () => {
    const sortedCars = [...cars].sort(
      (a, b) =>
        Number(b.vegsebesseg.split(" ")[0]) -
        Number(a.vegsebesseg.split(" ")[0]),
    );
    setResult(sortedCars[0]);
  };

  const bestCarHP = () => {
    const car = [...cars].sort((a, b) => {
      const A = Number(a.loero) / Number(a.gyorsulas_0_100.split("s")[0]);
      const B = Number(b.loero) / Number(b.gyorsulas_0_100.split("s")[0]);
      return B - A;
    });
    setBestCar(car[0]);
  };
  return (
    <div>
      <ul>
        {cars.map((c) => (
          <li key={c.id}>{c.marka + " " + c.modell}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        <button onClick={findFastestCar}>Find fastest car</button>
        {result !== null && <p>{result?.marka + " " + result?.modell}</p>}
        <button onClick={bestCarHP}>Loero/Gyorsulas</button>
        {bestCar !== null && <p>{bestCar?.marka + " " + bestCar?.modell}</p>}
      </div>
    </div>
  );
};

export default SportCars;
