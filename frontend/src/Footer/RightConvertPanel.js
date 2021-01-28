import React, { useContext } from 'react'

import KarenContext from '../KarenContext'

import './ClassConvertPanels.css'

const RightConvertPanel = (props) => {
    const values = useContext(KarenContext)

    return (
        <div className='convertDiv' id='rightConvert'>
            <div className='rightButtonDiv' >
                <div className='rightConvertTextDiv'>Kreate Random Kolors</div>
                <button className='rightConvertButton' onClick={() => {
                    values.toggleCreateTriadic();
                } }>Triadic</button>
                <button className='rightConvertButton' onClick={() => {
                    values.toggleCreateAnalogous();
                }}>Analogous</button>
                <button className='rightConvertButton' onClick={() => {
                    values.toggleCreatePastel();
                }}>Pastel</button>
            </div>

            <div className='rightConvertInputDiv'>
                <div className='convertBling  firstBling'></div>
                <div className='rightLabelDiv'>
                    <h1 className='rightLabel'>{props.toTopLabel}</h1>
                    <h1 className='rightInput'>{props.toTopInput}</h1>
                </div>
                <div className='convertBling  secondBling'></div>
                <div className='rightLabelDiv'>
                    <h1 className='rightLabel'>{props.toMiddleLabel}</h1>
                    <h1 className='rightInput'>{props.toMiddleInput}</h1>
                </div>
                <div className='convertBling  thirdBling'></div>
                <div className='rightLabelDiv'>
                    <h1 className='rightLabel'>{props.toBottomLabel}</h1>
                    <h1 className='rightInput'>{props.toTopInput}</h1>
                </div>
            </div>
        </div>
    )
}

export default RightConvertPanel;
