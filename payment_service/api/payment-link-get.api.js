import axios from 'axios';
import { LEFT, RIGHT } from '../helpers/response.helper.js';
import { paymentLinkGetService } from '../services/payment.service.js';
export const paymentLinkGetApi = async (req, res) => {
    try {
        console.log('process.env.USER_SERVICE_URL: ', process.env.USER_SERVICE_URL);
        const users = await axios.get(`${process.env.USER_SERVICE_URL}/auth/users`)
        console.log('users.data: ', users.data);
        const response = await paymentLinkGetService({ deviceId: "asdxxxsadcxxxz" })
        res.status(200).send(response)
    } catch (error) {
        console.log('error: ', error);
        res.status(error.status).send(error)
    }
}