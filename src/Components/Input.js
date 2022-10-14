import React from 'react'

const Input = ({ name, value, setValue ,label,placeholder,type,disabled,w}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className={`h-8 p-2  ${w?w:'w-[22rem]'}  mt-6 ml-6 border-[2px] rounded-md focus:outline-none focus:border-orange-400`}
        name={name}
        disabled = {disabled}
        type={type?type:'text'}
        value={value}
        placeholder={placeholder}
        onChange={setValue}
      />
    </div>
  )
}

export default Input