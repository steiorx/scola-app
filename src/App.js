import React, {useState} from 'react';
import NumberTable from './components/NumberTable';
import './App.css';

let amount = Array(11).fill(0);

function App() {
  const [av, setAv] = useState(0);

  function modifyAverage(number, newAmount) {
    console.log(number, newAmount);
    amount[number] = newAmount;
    let tsum = 0, tgrades = 0;

    for (let i = 1; i <= 10; i++) {
      tsum += amount[i] * i;
      tgrades += amount[i];
    }

    let average = tgrades === 0 ? 0 : tsum / tgrades;
    if (average === 10) setAv(10);
    else setAv(average.toPrecision(3));
}

  return (
    <div>
      <NumberTable modifyAverage={modifyAverage}/>
      <p className='averageDisplay'>The average is {av}</p>
    </div>
  );
}

export default App;
