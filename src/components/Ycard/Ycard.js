import React from 'react'
import './Ycard.css'
function Ycard(props) {
  return (
    <div>
      <div  style={{ }} className='cardbox'>
        <div className='PropsTitle Header'>{props.title}</div>
          <div className='body'>
            <div className='PropsValue value'>{props.value}</div>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */
              }
          </div>
      </div>
    </div>
  )
}

export default Ycard
