import { useState } from 'react'
import styled from 'styled-components'
import BenchmarkChart from './components/BenchmarkChart'
import MetricInput from './components/MetricInput'
import { industryData, metrics } from './data'

const Widget = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Header = styled.div`
  margin-bottom: 30px;
`

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin: 0 0 10px 0;
`

const Description = styled.p`
  color: #666;
  margin: 0;
`

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 20px;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  gap: 20px;
`

const InsightBox = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
`

const App = () => {
  const [industry, setIndustry] = useState('retail')
  const [selectedMetric, setSelectedMetric] = useState('avgCallTime')
  const [yourMetrics, setYourMetrics] = useState({
    avgCallTime: 240,
    abandonmentRate: 4.5,
    firstCallResolution: 70,
    customerSatisfaction: 83
  })

  const getInsight = (metric, value, industryAvg) => {
    const diff = value - industryAvg
    const isGood = metric === 'abandonmentRate' ? diff < 0 : diff > 0
    
    return isGood 
      ? `You're performing better than the industry average by ${Math.abs(diff).toFixed(1)}${metric === 'avgCallTime' ? ' seconds' : '%'}`
      : `There's room for improvement. The industry average is better by ${Math.abs(diff).toFixed(1)}${metric === 'avgCallTime' ? ' seconds' : '%'}`
  }

  return (
    <Widget>
      <Header>
        <Title>Customer Support Benchmark</Title>
        <Description>Compare your metrics with industry standards</Description>
      </Header>

      <Controls>
        <Select value={industry} onChange={(e) => setIndustry(e.target.value)}>
          {Object.keys(industryData).map(ind => (
            <option key={ind} value={ind}>
              {ind.charAt(0).toUpperCase() + ind.slice(1)}
            </option>
          ))}
        </Select>

        <Select value={selectedMetric} onChange={(e) => setSelectedMetric(e.target.value)}>
          {metrics.map(metric => (
            <option key={metric.id} value={metric.id}>
              {metric.label}
            </option>
          ))}
        </Select>
      </Controls>

      <MetricInput
        value={yourMetrics[selectedMetric]}
        onChange={(value) => setYourMetrics(prev => ({ ...prev, [selectedMetric]: value }))}
        label="Your Value"
      />

      <BenchmarkChart
        data={industryData}
        metric={selectedMetric}
        yourValue={yourMetrics[selectedMetric]}
      />

      <InsightBox>
        {getInsight(
          selectedMetric,
          yourMetrics[selectedMetric],
          industryData[industry][selectedMetric]
        )}
      </InsightBox>
    </Widget>
  )
}

export default App
