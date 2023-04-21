import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiFetchStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiFetchStatus.initial,
    last7DaysData: [],
    vaccinationByAge: [],
    vaccinationByGender: [],
  }

  componentDidMount() {
    this.setState({apiStatus: apiFetchStatus.inProgress})
    this.getCowinStatsData()
  }

  getCowinStatsData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok === true) {
      const fetchedData = await response.json()
      const last7DaysData = fetchedData.last_7_days_vaccination.map(
        vaccine => ({
          dose1: vaccine.dose_1,
          dose2: vaccine.dose_2,
          vaccineDate: vaccine.vaccine_date,
        }),
      )
      const vaccinationByAge = fetchedData.vaccination_by_age
      const vaccinationByGender = fetchedData.vaccination_by_gender
      this.setState({
        last7DaysData,
        vaccinationByAge,
        vaccinationByGender,
        apiStatus: apiFetchStatus.success,
      })
    } else {
      this.setState({apiStatus: apiFetchStatus.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderDashboardContent = () => {
    const {last7DaysData, vaccinationByAge, vaccinationByGender} = this.state
    return (
      <div>
        <h1 className="dashboard-heading">CoWIN Vaccination in India</h1>
        <VaccinationCoverage vaccinationData={last7DaysData} />
        <VaccinationByGender vaccinationData={vaccinationByGender} />
        <VaccinationByAge vaccinationData={vaccinationByAge} />
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        className="failure-view-img"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
      />
      <h1 className="failure-view-msg">Something went wrong</h1>
    </div>
  )

  renderCowinDashboard = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiFetchStatus.inProgress:
        return this.renderLoader()
      case apiFetchStatus.success:
        return this.renderDashboardContent()
      case apiFetchStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="app-body">
          <div className="website-header">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <h1 className="website-title">Co-WIN</h1>
          </div>
          {this.renderCowinDashboard()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
