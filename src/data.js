export const industryData = {
  retail: {
    avgCallTime: 220,
    abandonmentRate: 5.2,
    firstCallResolution: 72,
    customerSatisfaction: 85
  },
  technology: {
    avgCallTime: 350,
    abandonmentRate: 4.8,
    firstCallResolution: 68,
    customerSatisfaction: 82
  },
  finance: {
    avgCallTime: 280,
    abandonmentRate: 3.9,
    firstCallResolution: 75,
    customerSatisfaction: 88
  },
  healthcare: {
    avgCallTime: 420,
    abandonmentRate: 4.5,
    firstCallResolution: 70,
    customerSatisfaction: 84
  }
}

export const metrics = [
  { id: 'avgCallTime', label: 'Average Call Time (seconds)', type: 'time' },
  { id: 'abandonmentRate', label: 'Abandonment Rate (%)', type: 'percentage' },
  { id: 'firstCallResolution', label: 'First Call Resolution (%)', type: 'percentage' },
  { id: 'customerSatisfaction', label: 'Customer Satisfaction (%)', type: 'percentage' }
]
