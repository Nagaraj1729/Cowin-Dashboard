import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationData} = props
  return (
    <div className="dashboard-card">
      <h1 className="dashboard-card-title">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={vaccinationData}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
