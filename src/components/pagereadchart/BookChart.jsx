'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 
'recharts';
import { TriangleBar } from './ChartsFunction';
// colors
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const BookChart = ({books}) => {

    return (
        <ResponsiveContainer width="100%" height={400}>
        <BarChart 
            data={books} // <-- Pass your JSON array here
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            
            <XAxis dataKey="bookName" />
            
            <YAxis />
            <Tooltip />

            {/* <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} /> */}
            <Bar dataKey="totalPages" shape={(props) => <TriangleBar {...props} colors={colors} />} label={{ position: 'top' }} />
        </BarChart>
    </ResponsiveContainer>
    );
}
 
export default BookChart;