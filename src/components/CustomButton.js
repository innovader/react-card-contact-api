import React from 'react'
import styles from './customButton.module.css'

export default function CustomButton({ text }) {

  return (
    <button className={styles.customButton}>{ text }</button>
  )
}
