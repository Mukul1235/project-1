import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Card from '../components/Card'

function Weather() {
  return (
      <div className='weather'>
          <h1>Weather Forcash</h1>
          <Input />
          <Button value="Search"/>
          <Card />
          <Button value="refresh"/>
      
    </div>
  )
}

export default Weather
