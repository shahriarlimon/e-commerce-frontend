import React from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import UserOrderDetailsPageComponent from './UserOrderDetailsPageComponent';
import { loadScript } from '@paypal/paypal-js'

const UserOrderDetailPage = () => {
    const { userInfo } = useSelector((state) => state.userRegisterLogin.userRegisterLogin)
    const getOrder = async (orderId) => {
        const { data } = await axios.get(`http://localhost:4000/api/v1/orders/user/${orderId}`, { withCredentials: true })
        return data
    }
    const getUser = async () => {
        const { data } = await axios.get(`http://localhost:4000/api/v1/users/profile/${userInfo._id}`, { withCredentials: true })
        return data
    }
    const loadPaypalScript = function (cartSubTotal, cartItems, orderId, updateStateAfterOrder) {
        console.log(cartSubTotal, cartItems)
        loadScript({
            "client-id": "AXmAJOAupE6AITuv0oytTSyWHHfsM6saE3QWs-16jXDcx7hLIpylbWRhPwHbiBzam4mSIRUrG8A9C-8s"
        }).then((paypal) => {
            paypal.Buttons(buttons(cartSubTotal, cartItems, orderId, updateStateAfterOrder)).render("#paypal-container-element")
        }).catch(err => {
            console.log("failed to load paypal JS SDK script", err)
        })
    }
    const buttons = (cartSubTotal, cartItems, orderId, updateStateAfterOrder) => {
        return {
            createOrder: function (data, actions) {
                console.log(cartSubTotal, cartItems)
                return actions.order.create(
                    {
                        purchase_units: [{
                            amount: {
                                value: cartSubTotal,
                                breakdown: {
                                    item_total: {
                                        currency_code: "USD",
                                        value: cartSubTotal
                                    }
                                }
                            },
                            items:
                                cartItems?.map((product) => {
                                    return {
                                        name: product?.name,
                                        unit_amount: {
                                            currency_code: "USD",
                                            value: product?.price
                                        },
                                        quantity: product?.quantity
                                    }
                                })

                        }]
                    }
                )
            },
            onCancel: onCancelHandler,
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (orderData) {
                    var transaction = orderData.purchase_units[0].payments.captures[0];
                    if (transaction.status === "COMPLETED" && Number(transaction.amount.value) === Number(cartSubTotal)) {
                        updateOrder(orderId).then((data) => {
                            if (data.isPaid) {
                                updateStateAfterOrder(data.paidAt)
                            }
                        }).catch((err) => console.log(err))
                    }
                })
            },
            onError: onErrorHandler
        }
    }

    const onCancelHandler = function () {
        console.log('on cancel handler')
    }
    const onApproveHandler = function () {
        console.log('on approve handler')
    }
    const onErrorHandler = function (err) {
        console.log('on error handler')
    }
    const updateOrder = async (orderId) => {
        const { data } = await axios.put(`http://localhost:4000/api/v1/orders/paid/${orderId}`, { withCredentials: true })
        return data;
    }
    return <UserOrderDetailsPageComponent loadPaypalScript={loadPaypalScript} getUser={getUser} userInfo={userInfo} getOrder={getOrder} />
};

export default UserOrderDetailPage;