import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function DishDetail(props) {
    console.log(props.dish, 'pop');
    const dish_detail = props.dish.comments.map((a) => {
        return (
            <div tag="li">
                <p>{a.comment}</p>
                <p>{'-- ' + a.author + ' , ' + a.date}</p>
            </div>
        )
    })
    return (
        <div className="container">
            <div class="row">
                <div className="col-12 col-sm-5 m-1">
                    <Card>
                        <CardImg width="100%" src={props.dish.image} alt={props.dish.text} />
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h2 heading>Comments</h2>
                    <div list>{dish_detail}</div>
                </div>
            </div>
        </div>

    )

}

export default DishDetail;