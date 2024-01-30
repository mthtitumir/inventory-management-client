import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const SalesHistoryChart = () => {
    const data = [
        { name: 'January', sales: 400 },
        { name: 'February', sales: 500 },
        { name: 'March', sales: 600 },
        { name: 'April', sales: 700 },
        { name: 'May', sales: 500 },
        { name: 'June', sales: 300 },
        { name: 'February', sales: 500 },
        { name: 'March', sales: 600 },
        { name: 'April', sales: 700 },
        { name: 'May', sales: 500 },
        { name: 'June', sales: 300 },
        { name: 'February', sales: 500 },
        { name: 'March', sales: 600 },
        { name: 'April', sales: 700 },
        { name: 'May', sales: 500 },
        { name: 'June', sales: 300 },
        { name: 'February', sales: 500 },
        { name: 'March', sales: 600 },
        { name: 'April', sales: 700 },
        { name: 'May', sales: 500 },
        { name: 'June', sales: 300 },
    ];
    return (
        <div>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="stepBefore" dataKey="sales" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default SalesHistoryChart