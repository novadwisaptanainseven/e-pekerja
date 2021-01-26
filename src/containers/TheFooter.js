import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  const year = new Date().getFullYear();

  return (
    <CFooter fixed={false}>
      <div>
        {/* <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">IT DISPERKIM</a> */}
        <span className="ml-1">&copy; {year} IT DISPERKIM</span>
      </div>
      {/* <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
      </div> */}
    </CFooter>
  )
}

export default React.memo(TheFooter)
