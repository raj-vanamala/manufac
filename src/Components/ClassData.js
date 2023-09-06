import { useEffect, useState } from "react";
import {calculateMean, calculateMedian, calculateMode} from '../helpers/MathematicalFunctions'

function ClassData({classData}) {

    const [mean, setMean] = useState(0);
    const [mode, setMode] = useState([]);
    const [median, setMedian] = useState(0);

    useEffect(() => {
        const values = classData.slice(1, classData.length)
        const mean = calculateMean(values)
        setMean(mean);
        const median = calculateMedian(values)
        setMedian(median);
        const mode = calculateMode(values)
        setMode(mode);
        console.log(mode);
    },[classData]);

    return(
        <>
            <tr>
                <th>{classData[0]}</th>
                <td>{mean}</td>
                <td>{median}</td>
                <td>
                    {
                        mode.length > 1 ? mode.join(",") : mode[0]
                    }
                </td>
            </tr>
        </>
    )
}

export default ClassData;