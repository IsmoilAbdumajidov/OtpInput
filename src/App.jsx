import React, { useState } from 'react'
import OtpInput from './components/OtpInput/OtpInput'

const App = () => {
  const [otp, setOtp] = useState('');
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
    console.log(enteredOtp);
  };
  return (
    <div className='flex justify-center items-center min-h-screen bg-sky-200'>
      <div className='backdrop-blur-md bg-white/30 w-[500px] h-[300px] rounded-lg flex items-center justify-center'>
        <OtpInput value={otp} separator={<span>-</span>} onChange={handleChange} numInputs={4} />
      </div>
    </div>
  )
}

export default App