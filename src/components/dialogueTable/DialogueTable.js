import React, { useEffect, useState } from 'react'
import { Button, Table, Dropdown } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import FilterMenu from '../filterMenu/FilterMenu'
import { FilterOutlined } from '@ant-design/icons'
import './DialogueTable.scss'

const data = [
    {
        key: 1,
        Date: '28/03/2022',
        user: 'Tommy Ngo',
        Location: 'RTIO_Nammuldi_DryScreening',
        Area: 'Screen Media',
        Type: 'Observation',
        Description: 'Current screen media not hitting the required 20 weeks. Trialled XYZ company screen media, not hitting targets.',
        Action: 'Approached Schenck Process for screening media supply.',
        Outcome: 'Unsuccessful',
        Status: 'open'
    },
    {
        key: 2,
        Date: '18/03/2022',
        user: 'Craig Strong',
        Location: 'RTIO_Nammuldi_DryScreening',
        Area: 'Screen Media',
        Type: 'Observation',
        Description: 'Current screen media not hitting the required 20 weeks. Trialled XYZ company screen media, not hitting targets.',
        Action: 'Approached Schenck Process for screening media supply.',
        Outcome: 'Successful',
        Status: 'closed'
    },
    {
        key: 3,
        Date: '12/03/2022',
        user: 'Craig Strong',
        Location: 'RTIO_Nammuldi_DryScreening',
        Area: 'Screen Media',
        Type: 'Observation',
        Description: 'Current screen media not hitting the required 20 weeks. Trialled XYZ company screen media, not hitting targets.',
        Action: 'Approached Schenck Process for screening media supply.',
        Outcome: 'Unsuccessful',
        Status: 'open'
    },
    {
        key: 4,
        Date: '03/03/2022',
        user: 'Morgan Vine',
        Location: 'RTIO_Nammuldi_DryScreening',
        Area: 'Screen Media',
        Type: 'Observation',
        Description: 'Current screen media not hitting the required 20 weeks. Trialled XYZ company screen media, not hitting targets.',
        Action: 'Approached Schenck Process for screening media supply.',
        Outcome: 'Successful',
        Status: 'open'
    },
    {
        key: 5,
        Date: '21/02/2022',
        user: 'Tommy Ngo',
        Location: 'RTIO_Nammuldi_DryScreening',
        Area: 'Screen Media',
        Type: 'Observation',
        Description: 'Current screen media not hitting the required 20 weeks. Trialled XYZ company screen media, not hitting targets.',
        Action: 'Approached Schenck Process for screening media supply.',
        Outcome: 'Successful',
        Status: 'open'
    }
]

export default function Dialogue() {
    const [tableDataSource,setTableDataSource]=useState(data)
    const [dropDownVisible, SetDropDownVisible] = useState(false)
    const [checkedValues, setCheckedValues] = useState({})
    const [filterData, setFilterData] = useState({})

    const columns = [
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'key'
        },
        {
            title: 'User',
            dataIndex: 'user',
            key: 'key'
        },
        {
            title: 'Location',
            dataIndex: 'Location',
            key: 'key'
        },
        {
            title: 'Area',
            dataIndex: 'Area',
            key: 'key'
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'key'
        },
        {
            title: 'Description',
            dataIndex: 'Description',
            key: 'key'
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'key'
        },
        {
            title: 'Outcome',
            dataIndex: 'Outcome',
            key: 'key'
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'key',
            render: (status) => status === 'open' ? <div className='open-status'>Open</div> : <div className='close-status'>Closed</div>
        }
    ]

    useEffect(() => {
        let finalisedFilterData=[]
        if (Object.keys(filterData).length) {
            Object.keys(filterData).forEach((item)=>{
                finalisedFilterData=data.filter((innerItem)=>filterData[item].includes(innerItem[item]))
            })
        }
        else{
            finalisedFilterData=data
        }   
        setTableDataSource(finalisedFilterData)
    }, [filterData])

    const onRemoveList = (category, list) => {
        setCheckedValues({ ...checkedValues, [category]: checkedValues[category].filter((item) => item !== list) })
    }

    return (
        <div className='dialogue-screen'>
            <div className='nav-button'>
                <Button className='top-button' size="small">DashBoard</Button>
                <Button className='top-button' size="small">Dialogue</Button>
            </div>
            <div className='dialogue-title'>
                <div>
                    <label>Dialogue</label>
                </div>
                <div className='title-button'>
                    <div className='filter-list'>
                        {
                            checkedValues
                                ? Object.keys(checkedValues).map((item) => {
                                    return checkedValues[item].map((list, inx) => {
                                        return (
                                            <div className='checked-list' key={inx}>
                                                {list}
                                                <CloseCircleOutlined onClick={() => onRemoveList(item, list)} />
                                            </div>)
                                    })
                                })
                                : null
                        }
                    </div>
                    <Dropdown placement="bottomRight" visible={dropDownVisible} overlay={<FilterMenu checkedValues={checkedValues} setCheckedValues={setCheckedValues} setFilterData={setFilterData} SetDropDownVisible={SetDropDownVisible} />}>
                        <Button className='filter-button' onClick={() => SetDropDownVisible(!dropDownVisible)}><FilterOutlined />Filter</Button>
                    </Dropdown>
                    <Button className='dialogue-button'>Add Dialogue</Button>
                </div>
            </div>
            <div>
                <Table
                    rowkey={(val) => val.key}
                    columns={columns}
                    dataSource={tableDataSource}
                    pagination={false}
                    bordered={false}
                />
            </div>
        </div>
    )
}