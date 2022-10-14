import React from 'react'
import Input from './Input'

const InputName = ({ name, value, setValue, label, placeholder, type, w }) => {
    const options = [
        {
            value: 'Mr.'
        },
        {
            value: 'Ms.'
        },
        {
            value: 'Mrs.'
        },
        {
            value: 'Dr.'
        }
    ]
    return (
        <div>
            <div className='font-bold mb-4'>
                {label}
            </div>
            <div>
                <label>Prefix : </label>
                    <select name = 'prefix' onChange={setValue} selected = {'Mr.'}> 
                        {
                            options.map((option,i)=>{
                                return <option key = {i} value = {option.value}>{option.value}</option>
                            })
                        }
                    </select>
                <Input
                    name = {'firstName'}
                    label={'First Name'}
                    placeholder={'Enter your first name'}
                    value={value.firstName}
                    setValue={setValue}
                    w={w}
                />
                <Input
                    name = {'lastName'}
                    label={'Last Name'}
                    placeholder={'Enter your last name'}
                    value={value.lastName}
                    setValue={setValue}
                    w={w}
                />
            </div>
        </div>
    )
}

export default InputName