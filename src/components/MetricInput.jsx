import styled from 'styled-components'

const InputContainer = styled.div`
  margin: 20px 0;
`

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  width: 120px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`

const MetricInput = ({ value, onChange, label }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        step="0.1"
      />
    </InputContainer>
  )
}

export default MetricInput
