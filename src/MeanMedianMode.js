import ClassData from "./ClassData";

function MeanMedianMode({data}) {

    return (
        <table>
            <tr>
                <th>Measure</th>
                <th>Flavanoids Mean</th>
                <th>Flavanoids Median</th>
                <th>Flavanoids Mode</th>
            </tr>
            {
                data.map(value => <ClassData classData={value} />)
            }
        </table>
    )
}

export default MeanMedianMode;