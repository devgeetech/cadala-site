// import React, { useState, useContext } from "react"
// import { navigate } from "gatsby"

// import LangContext from '../../../../context/langContext'

// import closeIcon from "../../../../images/SVG/close.svg"

// const SrchSidebar = ({ show, onClose }) => {

//   const context = useContext(LangContext);
//   const [srchTerm, updTerm] = useState("")

//   const lang = context.currLang===1 ? 
//   [
//     'Seach by category, product name…'
//   ] : [
//     'بحث حسب الفئة واسم المنتج '
//   ]

//   const srClose = context.direction === 'rtl' ? "side-search--close-rtl" : "side-search--close";
      
//   let styleClass = "side-search " + srClose

//   if(show===1){
//     styleClass = "side-search side-search--open"
//   }

//   const srchChangeHandler = (event) => {
//     updTerm(event.target.value)
//   }

//   return (
//     // <div className="search-sidebar">
//       <div className={styleClass}>
//         <div className="side-search__main">
//           <button className="side-search__main__icon" onClick={onClose}>
//             <img 
//               src={closeIcon} 
//               className="side-search__main__icon__img" 
//               alt="search icon"/>
//           </button>
//           <div className="side-search__main__input">
//             <form
//               onSubmit={event => {
//                 event.preventDefault()
//                 navigate(`/listing?${srchTerm}`)
//                 onClose()
//               }} >
//               <input 
//                 type="text"
//                 aria-label="Search box" 
//                 placeholder={lang}
//                 value={srchTerm}
//                 onChange={srchChangeHandler}
//                 className="side-search__main__input__real"/>
//               <input type="submit" 
//                 style={{position: "absolute", left: "-9999px", width: "1px", height: "1px"}}
//                 tabIndex="-1"
//                 aria-label="search box submit"/>
//             </form>
//           </div>
//         </div>
//       </div>
//     // </div>
    
//   )
// }

// export default SrchSidebar
