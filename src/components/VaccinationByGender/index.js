import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationData} = props
  return (
    <div className="dashboard-card">
      <h1 className="dashboard-card-title">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="60%"
            data={vaccinationData}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
