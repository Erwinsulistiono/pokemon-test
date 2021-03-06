import React from 'react';
import '../style/Styles.css';

const DetailBox = (data) => {
  const detail = data.data;

  return (
    <div className={"details-value " + detail}>
      <p>{detail}</p>
    </div>
  )
}

export default DetailBox;