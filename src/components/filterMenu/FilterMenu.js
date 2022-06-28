import React, { useState } from "react";
import Box from '../box/Box'
import Accordion from '../accordion/Accordion'
import { Checkbox, Button, Input, Form } from "antd";

const CheckboxGroup = Checkbox.Group;

const accordionData = [
   {
      name: 'Company',
      children: [
         "Rio Tinto", "BHP", "Fortescue Metals Group"
      ]
   },
   {
      name: 'Site',
      children: [
         "site1", "site2"
      ]
   },
   {
      name: 'Location',
      children: [
         "RTIO_Nammuldi_DryScreening", "Australia"
      ]
   },
   {
      name: 'Area',
      children: [
         "Screen Media"
      ]
   },
   {
      name: 'Type',
      children: [
         "Observation"
      ]
   },
   {
      name: 'Outcome',
      children: [
         "Successful", "Unsuccessful"
      ]
   },
]

export default function FilterMenu({ checkedValues, setCheckedValues, setFilterData, SetDropDownVisible }) {
   const [initialAccordionData, setInitialAccordionData] = useState(accordionData)
   const { form } = Form.useForm()

   const onChange = (list, category) => {
      setCheckedValues({ ...checkedValues, [category]: list })
   };

   const onSearch = (e, categoryName) => {
      const filteredData = accordionData.map((item) => {
         if (categoryName === item.name) {
            return { ...item, children: item.children.filter((innerItem) => (innerItem.toLowerCase()).indexOf(e.toLowerCase()) !== -1) }
         }
         return item
      })
      setInitialAccordionData(e !== '' ? filteredData : accordionData)
   }

   const onFinish = () => {
      const applyFilteredData={}
      Object.keys(checkedValues).forEach((item)=>{
         if(checkedValues[item].length){
            Object.assign(applyFilteredData,{[item]:checkedValues[item]})
         }
      })
      setFilterData(applyFilteredData)
      SetDropDownVisible(false)
   }


   return (
      <div>
         <Form onFinish={onFinish} form={form}>
            <Box>
               <div className="filter-label">
                  <label >Filters</label>
               </div>
               <div className="accordion-list">
                  {initialAccordionData.map(({ name, children }, inx) => {
                     return (
                        <Accordion key={inx} title={name} showIndicator={true}>
                           <Input.Search
                              allowClear
                              placeholder="Search Companies"
                              onSearch={(e) => onSearch(e, name)}
                           />
                           <Form.Item name={name} valuePropName="checked">
                              <CheckboxGroup key={inx} value={checkedValues[name]!==undefined ? checkedValues[name] : []} options={children} onChange={(e) => onChange(e, name)}/>
                           </Form.Item>
                        </Accordion>
                     )
                  })}
               </div>
               <div className="filter-buttons">
                  <Form.Item>
                     <Button onClick={() => setCheckedValues({})}>Clear</Button>
                  </Form.Item>
                  <Form.Item>
                     <Button htmlType="submit">Apply</Button>
                  </Form.Item>
               </div>
            </Box>
         </Form>
      </div>
   )
}

