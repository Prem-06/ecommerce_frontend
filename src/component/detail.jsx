import React from 'react'
import './detail.css'
import Detail_element from './detail_element'
import detail_data from './detail_data.js'
const Detail = () => {
  return (
    <div className='detail'>

<div className="detail-title-div">
    <h2>Why Buy from FinnoFarms?</h2>
</div>
<br />
<div className="deatil-element-div">
  {
    detail_data.map((val,k)=>{
      return <Detail_element data={val}/>
    })
  }

</div>
<div className="return-div">
    <div><h3>Return Policy</h3></div>
    <br />
    <p>The product is non-returnable. For damaged, defective, expired or incorrect items, you can request for a refund for the selected items to our delivery person during time of delivery.</p>
</div>
    </div>
  )
}

export default Detail