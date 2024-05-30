import React from 'react'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import './styles.css'
const Header = () => {
  return (
    <header>
      <div className='upper-nav'>
        <div>{"<"}</div>
        <div>Select Dishes</div>
      </div>
      <div className='lower-nav'>
        <div className='black'></div>
        <div className='white'></div>
        <div className='date-container'>
            <div className='date'>
                <div className='icons'> <CalendarMonthRoundedIcon /></div>
                <div>21 May 2021</div>
            </div>
            <div className='col'></div>
            <div className='time'>
              <div className='icons'><AccessAlarmsIcon /></div>
              <div>10:30 Pm-12:30 Pm</div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
