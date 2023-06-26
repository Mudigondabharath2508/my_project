import axios from 'axios'
import React, { useState } from 'react'
import { Center } from './center'
import { Header } from './Header'
import { Col, Row } from 'react-bootstrap'


export const Footer = () => {
    const [data, setData] = useState([])
    const [singleData, setSingleData] = useState([])
    const [show, setShow] = useState(false)
    const [index, setIndex] = useState(0)
    const [colors, setColors] = useState("black")
    const colorsData = ["green", "red", "yellow", "blue", "black", "grey"]

    const handleApi = async () => {
        await axios.get("https://api.chucknorris.io/jokes/87eQtBjKT3eXcrX2wXa3Ew")
            .then(res => {
                setData([...data, res.data.value])
                console.log(res.data.value)
            }

            )
            .catch(e => console.log(e))
    }

    const handleStyle = () => {

        const randomValue = Math.floor(Math.random() * 10);
        setColors(colorsData[randomValue])
    }

    const callBackToShow = (props) => {
        setIndex(props)
        setShow(true)
    }

    const onLeftClick = () => {
        if (index < data?.length && index > 0) {
            setSingleData(data[index - 1])
            setIndex(index - 1)
            setSingleData(data[index - 1])
        }

    }
    const onRightClick = () => {
        if (index < data?.length - 1 && index >= 0) {
            setIndex(index + 1)
            setSingleData(data[index + 1])
        }

    }

    return (
        <div>
            <div className='formview'>
                <Row>
                    <Col sm={12} className='formheader'>
                        <Header styles={colors} />
                    </Col>
                    <Col sm={12} className='formbody'>
                        <Center datas={data} singleDatas={singleData} shows={callBackToShow} />

                    </Col>
                    <Col sm={12} className='formfooter'>
                        {!show ? <Row>
                            <Col sm={12}>
                                <div className='formbutton'> <button onClick={handleApi}>Start Loading</button>
                                    <button onClick={handleStyle} > Change Header Color</button> </div>
                            </Col>
                        </Row> : <Row className='formpage'>
                            <Col sm={4}>
                                <img onClick={onLeftClick} src="./left-arrow.png" />
                            </Col>
                            <Col sm={4}>
                                <p>{`Showing ${index + 1} of ${data.length}`}</p>
                            </Col>
                            <Col sm={4}>
                                <img onClick={onRightClick} src="./right-arrow.png" />
                            </Col>
                        </Row>}
                    </Col>
                </Row>

            </div>




        </div>
    )
}
