import React from 'react'

const Loading = ({ center }) => {
  return <div className={center ? 'loading loading-center' : 'loading'}></div>
}

export default Loading

// default styles for spinner
/* 
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading {
  width: 6rem;
  height: 6rem;
  border: 5px solid gray;
  border-radius: 50%;
  border-top-color: #3b82f6;
  animation: spinner 2s linear infinite;
}
.loading-center {
  margin: 0 auto;
}
*/