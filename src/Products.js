import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import productImage from "./resources/product.jpg"
import Paper from '@material-ui/core/Paper';
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/CloseRounded";
import DoneIcon from "@material-ui/icons/Check"
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    product: {
        width: "250px",
        float: "left",
        margin: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: "gray"
    },
    button: {
        float: "right"
    },
    title: {
        fontWeight: "bold"
    },
    quantity: {
        fontSize: "0.6em"
    },
    price: {
        fontWeight: "bold"
    },
    cart: {
        '& > *': {
            margin: theme.spacing(2),
            width: "300px",
            height: "500px",
        },
    },
    paper: {
        position: "relative",
    },
    cContainer: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(1),
        "& span": {
            fontSize: "20px",
            fontWeight: "bold"
        }
    },
    delWra: {
        display: "flex",
        alignContent: "center"
    },
    drawLine: {
        height: "1px",
        width: "100%",
        backgroundColor: "#d6d6d6"
    },

    atcWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(1),
    },
    atcBtnWra: {
        position: "absolute",
        bottom: theme.spacing(1),
        left: theme.spacing(1),
        "& button": {
            marginRight: theme.spacing(1)
        }
    }
}));



export default function Products(props) {
    const classes = useStyles();

    const generateProductList = () => {
        console.log(props.proData)
        if (props && props.proData) {

            return Object.entries(props.proData).map(([key, value], index) => {
                let cartButton = <AddShoppingCart />
                Object.entries(props.addToCartData).forEach(([atcKey, atcValue], i) => {
                    if (atcKey === key) {
                        cartButton = <DoneIcon />
                    }
                })
                return (
                    <Card className={classes.product} key={index}>
                        <IconButton aria-label="add to favorites" className={classes.button}>
                            <FavoriteIcon />
                        </IconButton>
                        <CardMedia
                            className={classes.media}
                            image={productImage}
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" className={classes.title}>
                                {value.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" className={classes.quantity}>
                                Quantity: {value.quantity}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" className={classes.price}>
                                ${value.price}
                            </Typography>
                        </CardContent>

                        <IconButton aria-label="share" className={classes.button} onClick={() => props.onQuery(key, value, "add")}>
                            {cartButton}
                        </IconButton>

                    </Card>
                )
            })

        }
        else return null
    }

    const getChatContent = () => {
        let calcutaledTotal = 500
        return (
            <div className={classes.cWrapper}>
                <div className={classes.cContainer}>
                    <span>
                        Your Cart
                    </span>
                    <div className={classes.delWra}>
                        <DeleteIcon />
                        clear
                    </div>
                </div>
                <div className={classes.drawLine} />
                {Object.entries(props.addToCartData).map(([key, value], index) => {
                    return (
                        <div key={index} className={classes.atcWrapper}>
                            <span>
                                {value.title}
                            </span>
                            <span>
                                {value.quantity}
                            </span>
                            <span>
                                {value.price}
                            </span>
                            <IconButton aria-label="add to favorites" className={classes.button} size="small" onClick={() => props.onQuery(key, value, "delete")}>
                                <CloseIcon />
                            </IconButton>

                        </div>
                    )
                })}

                <div className={classes.atcBtnWra}>
                    <Button
                        variant="contained"
                        color="primary">
                        Place Order
                    </Button>
                    <span>
                        GrandTotol ${calcutaledTotal}
                    </span>
                </div>
            </div>
        )

    }

    const genrateCart = () => {
        return (
            <div className={classes.cart}>
                <Paper elevation={3} children={getChatContent()} className={classes.paper} />
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <div className={classes.proWrapper}>
                {generateProductList()}
            </div>
            {genrateCart()}
        </div>
    );
}