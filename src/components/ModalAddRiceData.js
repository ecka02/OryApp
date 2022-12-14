import React from 'react'
import ReactDom  from 'react-dom'
import closeIcon from "../assets/close.svg"

const ModalAddRiceData = ({open, children, onClose}) => {
  if(!open) return null
  
  return ReactDom.createPortal (
   <>
    <div className=" fixed left-0 right-0 bottom-0 top-0 z-50 bg-black opacity-70 "/>
    <div className=" flex flex-col absolute left-20 right-20 bottom-16 top-16 z-50 bg-white rounded-md  px-6 pt-10 pb-6  md:left-52 md:right-52  lg:left-80 lg:right-80 overflow-hidden ">
      <div className="absolute right-5 z-50 ">
          <button onClick={onClose}>
            <img className="relative" src={closeIcon} alt="" />
          </button>
        </div>
      {children}
    </div>
  </>,
  document.getElementById('portal')
  )
}

export default ModalAddRiceData