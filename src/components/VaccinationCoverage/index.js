import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Legend,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationData} = props
  return (
    <div className="dashboard-card">
      <h1 className="dashboard-card-title">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={vaccinationData} width={1000} height={300}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <YAxis
            tick={{
              stroke: 'gray',
              strokeWidth: 0.5,
            }}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" />
          <Bar dataKey="dose2" name="Dose 2" fill="#f54394" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
