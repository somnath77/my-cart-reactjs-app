import React from "react"
import {
    Card, CardText,CardImg, CardBody, CardLink,CardHeader, CardFooter,
    CardTitle, CardSubtitle,Button
  } from 'reactstrap';


const Productcard = (props) => {
    const {name,description,stocked,price,category} = props.product 
    return (
        <div >
        <div class="col d-flex justify-content-center">
            <Card   style={{width: '25rem' }}>
                {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                <CardHeader tag="h2"> 
                { name } 
                { (stocked) ? <h6>Available</h6> : <h6>Out of stock</h6>}
                </CardHeader>
                <CardBody>

                
                <CardSubtitle tag="h6" className="mb-2 text-muted"> { category } </CardSubtitle>
                <CardText> { description } </CardText>
                <Button>Add to cart</Button>
                </CardBody>
                <CardFooter>
                Price: { price } $<br/ >
                
                </CardFooter>
            </Card>

            
            </div>
        <br/><br/>
        </div>
    );
};

export default Productcard