import React from 'react'
import styles from './contactCard.module.css'
import calendar from '../assets/calendar.svg'
import email from '../assets/email.svg'
import location from '../assets/location.svg'
import CustomButton from './CustomButton';
import { useState, useEffect } from 'react';

export default function ContactCard() {
  const [data, setData] = useState('')

  const getData = async () => {
    try {
      const response = await fetch ("https://random-data-api.com/api/v2/users")
      const responseData = await response.json()
      setData(responseData)
    } catch (error) {
      console.log(error)
      // maybe redirect to fallback later on
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const formatedDate = (dataDate) => {
    const date = new Date(dataDate)
    return date.toLocaleDateString()
  }

  return (
    <div className={styles.contactCard}>

      <div
        style={{ backgroundImage:`url(${data?.avatar})` }}
        className={styles.avatar}>
      </div>

      <div className={styles.contactInfo}>
        <div className={styles.name}>
          {data?.first_name} {data?.last_name}
        </div>

        <div className={styles.email}>
          <img className={styles.icon} src={email} alt="email icon" />
          {data?.email}
        </div>

        <div className={styles.location}>
          <img className={styles.icon} src={location} alt="location icon" />
          {data?.address?.city}, {data?.address?.country}
        </div>

        <div className={styles.dateOfBirth}>
          <img className={styles.icon} src={calendar} alt="calendar icon" />
          {formatedDate(data?.date_of_birth)}
        </div>

        <div className={styles.buttonContainer}>
          <CustomButton text="Contact"/>
        </div>

      </div>

    </div>
  )
}
