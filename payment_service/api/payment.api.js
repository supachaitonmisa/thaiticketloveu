import axios from 'axios';
import { LEFT, RIGHT } from '../helpers/response.helper.js';
export const paymentsApi = async (req, res) => {
    try {
        res.status(200).send(RIGHT({ message: "Hello payment api." }))
    } catch (error) {
        res.status(500).send(LEFT(error))
    }
}