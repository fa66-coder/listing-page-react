import { useState } from 'react'
import './App.css'
import DashboardToolBar from './components/Dashboard/DashboardToolBar'
import ImageGridLayout from './components/ImageGrid/ImageGridLayout'
import SampleDemo from './components/Dashboard/SampleDemo'

export default function App() {
  let [searchFilter, setSearchFilter] = useState('')
  function onSearchTextUpdate(text) {
    setSearchFilter(text)
  }

  return (
    <div className="app-container">
      <DashboardToolBar onInputUpdate={onSearchTextUpdate} />
      {/* <ImageGridLayout searchFilter={searchFilter} /> */}
      <SampleDemo/>
    </div>
  )
}
