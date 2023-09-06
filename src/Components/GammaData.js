import ClassData from "./ClassData";

export default function GammaData({data}) {

    return (
        <table>
            <tr>
                <th>Measure</th>
                <th>Gamma Mean</th>
                <th>Gamma Median</th>
                <th>Gamma Mode</th>
            </tr>
            {
                data.map(value => <ClassData classData={value} />)
            }
        </table>
    )
}