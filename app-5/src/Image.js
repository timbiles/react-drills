// import React, {Component} from 'react';
// import './App.css';

// class Image extends Component{
//     render(props){
//         return(
//             <div className='Image'>
//                 <img src={props.myImage} />
//             </div>
//         )
//     }
// }




// export default Image




import React from 'react';

export default function Image( props ) {
  return (
    <div>
      <img src={ props.myImage } alt="" />
    </div>
  )
}