import React, { useState } from 'react'
import { Select, Input } from 'antd'
import { HexColorPicker, HexColorInput, RgbColorPicker } from 'react-colorful'
import './ColorPicker.scss'
const { Option } = Select

export default function ColorPicker() {
    const [hexColor, setHexColor] = useState('#5EB651')
    const [rgbColor, setRgbColor] = useState({ r: 140, g: 110, b: 255 })
    const [typeSelect, setTypeSelect] = useState('Hex')

    const rgbData = [
        {
            key: 1,
            type: rgbColor.r,
            name: 'r'
        },
        {
            key: 2,
            type: rgbColor.g,
            name: 'g'
        },
        {
            key: 3,
            type: rgbColor.b,
            name: 'b'
        }
    ]

    const handleChange = (type) => {
        setTypeSelect(type)
    }

    const onInputChange = (e) => {
        setRgbColor({ ...rgbColor, [e.target.name]: e.target.value })
    }

    return (
        <div className='color-picker'>
            {
                typeSelect === 'Hex'
                    ? <HexColorPicker color={hexColor} onChange={setHexColor}/>
                    : <RgbColorPicker color={rgbColor} onChange={setRgbColor} />
            }
            <div className='hex-code'>
                <Select
                    defaultValue={typeSelect}
                    onChange={handleChange}
                    showArrow={true}
                    bordered={false}
                >
                    <Option value="Hex">Hex</Option>
                    <Option value="RGB">RGB</Option>
                </Select>
                {
                    typeSelect === 'Hex'
                        ? <HexColorInput color={hexColor} className="hex-input" onChange={setHexColor} prefixed={true} />
                        : <div>
                            {
                                rgbData.map((item) => {
                                    return <Input key={item.key} maxLength={255} onChange={onInputChange} name={item.name} className="rgb-input" value={item.type} />
                                })
                            }
                        </div>
                }
            </div>
        </div>
    )
}