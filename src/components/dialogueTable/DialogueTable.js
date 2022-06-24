import React from 'react'
import { Button, Table } from 'antd'
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
        Outcome: 'Successful',
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
        Outcome: 'Successful',
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
                    <Button className='filter-button'><FilterOutlined />Filter</Button>
                    <Button className='dialogue-button'>Add Dialogue</Button>
                </div>
            </div>
            <div>
                <Table
                    rowkey={(val) => val.key}
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    bordered={false}
                />
            </div>
        </div>
    )
}