import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

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
        <div style={{width: "100%", height: "500px", padding: '10px'}}>
            <h1>Sales History </h1>
            <ResponsiveContainer  width={"100%"}>
                <LineChart width={700} height={300} data={data} >
                    <Line type="stepBefore" dataKey="sales" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SalesHistoryChart
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// const SalesHistoryChart = () => {
//     const data = [
//       {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//       },
//       {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//       },
//       {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//       },
//       {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//       },
//       {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//       },
//       {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//       },
//       {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//       },
//     ];
//     return (
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>
//       );
// }

// export default SalesHistoryChart
    
