import '../App.css';
import GammaData from './GammaData';
import MeanMedianMode from './MeanMedianMode';
import data from '../Resources/Wine-Data.json';
import {processData, processGammaData} from '../helpers/DataProcessing';
import {useEffect, useState} from 'react'

function App() {

  const [isDataAvailable , setIsDataAvailable] = useState(false);
  const [preProcessedData, setPreProcessedData] = useState([]);
  const [preProcessedGammaData, setPreProcessedGammaData] = useState([]);
  useEffect(() => {
    const filteredValues = processData(data);
    setPreProcessedData(filteredValues);
    const gammaData = processGammaData(data);
    setPreProcessedGammaData(gammaData);
    setIsDataAvailable(true);
  }, []);

  return (
    <div className="App">
      {
        isDataAvailable ? <MeanMedianMode data = {preProcessedData} /> : "Loading..."
      }
      {
        isDataAvailable ? <GammaData data = {preProcessedGammaData} /> : "Loading..."
      }
    </div>
  );
}

export default App;
