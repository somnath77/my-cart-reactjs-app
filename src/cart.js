 // import {Button} from 'reactstrap'
// // import React ,{useState}from "react"
// import productList from './productList.json'
// import Productcard from './productcard'


// export const ProductList = () => {
//     return (
//         <>
//         {
//             productList.map( (product) => <Productcard product={product}/>)
//         }
//         </>
//     )
// }

// export const ProductList = () => <> { productList.map( (product) => <Productcard key={product.id} product={product}/>) } </>
    


// export default ProductList


// export function Danger() { 
//     let [list,setList] = useState([])
//     const handleClick = ()=>{
//         list = productList.map(({name,id})=><div>
//             <p>{name}</p>
//             <p>{id}</p>
//         </div>
//         )
//         setList(list)
//     }
//     // console.log(list)
//     return (

//         <>
//         <Button onClick={handleClick}>Click me </Button>
//         <div>
//             <ul>
//                 {list.length !== 0 && list}
//             </ul>
//         </div>
//         </>
//     );
// }

// function functionOnClick() {
//     return(
//     <div className="App">
//         {
//             // productList.map( ({name,id}) => 
//             //     <h5 key={id}>  {name} </h5>
//             // )
//             productList.map( (product) => {
//                 return <h2>{product['name']}</h2>
//             })
//         }
//     </div>
       
        
//     );
//     // function handleClick(e) {
//     //     e.preventDefault();
//     //     console.log('The link was clicked.');
//     //   }
    
//     //   return (
//     //     <a href="#" onClick={handleClick}>
//     //       Click me
//     //     </a>
//     //   );
// }