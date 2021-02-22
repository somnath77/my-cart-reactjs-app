import React from "react"
import {
    Card, CardText, CardBody,CardHeader, CardFooter, CardSubtitle
  } from 'reactstrap';
//   import PostList from './PostList'

  const Productcard = (props) => {
    const {id,name,username,email,address:{city,zipcode}} = props
    console.log( id)

    // alert(name)
    // if (!props) return null;
    console.log(props)
    console.log(name)
    
    return (
        <div >
        <div className="col d-flex justify-content-center">
            <Card  key ={id} style={{width: '25rem' }}>
                {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                <CardHeader > 
                <h2> Name: { name } </h2>
                {/* { (stocked) ? <h6>Available</h6> : <h6>Out of stock</h6>} */}
                <h6>username: {username}</h6>
                </CardHeader >
                <CardBody>

                
                <CardSubtitle tag="h6" className="mb-2 text-muted"> Email ID: { email } </CardSubtitle>
                <CardText> CIty: { city } </CardText>
                {/* <Button disabled={!stocked}>Add to cart</Button> */}
                </CardBody>
                <CardFooter>
                {/* Price: { price } $<br/ > */}
                
                </CardFooter>
            </Card>

            
            </div>
        <br/><br/>
        </div>
    );
};
export default Productcard
// const Productcard = (props) => {
//     const {id,name,description,stocked,price,category} = props.product 
//     return (
//         <div >
//         <div className="col d-flex justify-content-center">
//             <Card   style={{width: '25rem' }}>
//                 {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
//                 <CardHeader tag="h2"> 
//                 { name } 
//                 { (stocked) ? <h6>Available</h6> : <h6>Out of stock</h6>}
//                 </CardHeader >
//                 <CardBody>

                
//                 <CardSubtitle tag="h6" className="mb-2 text-muted"> { category } </CardSubtitle>
//                 <CardText> { description } </CardText>
//                 <Button disabled={!stocked}>Add to cart</Button>
//                 </CardBody>
//                 <CardFooter>
//                 Price: { price } $<br/ >
                
//                 </CardFooter>
//             </Card>

            
//             </div>
//         <br/><br/>
//         </div>
//     );
// };

