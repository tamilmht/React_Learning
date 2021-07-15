import { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function DishDetail(props) {
    console.log(props);
    const dish_detail = props.props.comments.map((a) => {
        return (
            <div tag="li">
                <p>{a.comment}</p>
                <p>{'-- ' + a.author + ' , ' + a.date}</p>
            </div>

        )
    })
    return (
        <div class="row">
            <div className="col-12 col-sm-5 m-1">
                <Card>
                    <CardImg width="100%" src={props.props.image} alt={props.text} />
                    <CardBody>
                        <CardTitle>{props.props.name}</CardTitle>
                        <CardText>{props.props.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                <h2 heading>Comments</h2>
                <div list>{dish_detail}</div>
            </div>
        </div>

    )

}

export default DishDetail;