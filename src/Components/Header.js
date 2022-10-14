import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();
  return (
    <div className='h-[4rem]  flex justify-between bg-orange-500'>
        <div className='text-5xl'>
            Logo
        </div>
        <nav>
            <button className='p-[1rem] hover:bg-orange-600 rounded-lg' onClick={()=>navigate('/savingsAccountForm')}>Open your Account</button>
        </nav>
    </div>
  )
}

export default Header