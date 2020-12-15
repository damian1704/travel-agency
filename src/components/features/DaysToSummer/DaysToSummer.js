import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  constructor(){
    super();
  }


  getCountdownDays(){
    const currentTime = new Date();
    const nextSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21));
  
    if(nextSummer.getTime() - currentTime.getTime() <= 0){
      nextSummer.setUTCFullYear(currentTime.getUTCFullYear()+1);
    }
    
    return Math.round((nextSummer.getTime() - currentTime.getTime())/(1000 * 60 * 60 * 24));
  }


  render() {
    const countdown = this.getCountdownDays();
    const days = countdown === 1 ? 'day' : 'days';
    return (

      <div className={styles.component}>
        <h3 className={styles.promoDescription}>{countdown < 271 ? `${countdown} ${days} to summer!` : ''}</h3>
      </div>
    );
  }
}

export default DaysToSummer;