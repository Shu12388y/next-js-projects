import React from 'react'

function pageId({params}:any) {
  return (
    <>
    <div>pageId</div>
    <div>{params.id}</div>
    </>
  )
}

export default pageId