import React from 'react'
import './detail_element.css'

const Detail_element = ({data}) => {
  return (
    <div className='detail_element'>
     <div className="element-heading">
        <h3>{data.title}</h3>
     </div>
     <div className="element-detail-div">
        <div className='img-div'><img src={data.url} alt="err" /></div>
        <div className='about-detail'><p>{data.detail}</p></div>
     </div>
     <br />
    </div>
  )
}

export default Detail_element