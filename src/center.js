import React, { useState } from 'react'
import { EachValue } from './eachValue'

export const Center = (props) => {
    const { datas, shows, singleDatas } = props
    const [singleData, setSingleData] = useState()
    const [nums1, setNum1] = useState()
    const [show, setShow] = useState(false)
    console.log(singleDatas, "dsfdsfsdf")

    const handleClick = (index) => {
        setNum1(index)
        shows(index)
        setSingleData(datas[index])
        setShow(true)
    }

    return (

        <div>
            {show ? <EachValue data={singleDatas?.length === 0 ? singleData : singleDatas} num1={nums1} num2={datas.length} /> :
                datas?.map((each, index) =>
                    <p key={index} onClick={() => handleClick(index)}>{`${index + 1}. ${each}`}</p>)}
        </div>
    )
}
