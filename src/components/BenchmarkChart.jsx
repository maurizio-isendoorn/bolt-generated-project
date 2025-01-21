import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 20px 0;
`

const BenchmarkChart = ({ data, metric, yourValue }) => {
  const chartData = Object.entries(data).map(([industry, values]) => ({
    industry,
    value: values[metric]
  }))

  return (
    <ChartContainer>
      <ResponsiveContainer>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="industry" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6f3fd9" />
          <ReferenceLine y={yourValue} stroke="#ff6b6b" strokeDasharray="3 3" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default BenchmarkChart
