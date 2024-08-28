import axios from 'axios';
export const paymentsApi = async (req, res) => {
    // const payments = await axios.get(`http://payment_service:3005/auth/payments`);
    // const tickets = await axios.get(`http://ticket_service:3006/auth/tickets`);
    // console.log('payments.data: ', payments.data);
    // console.log('tickets.data: ', tickets.data);
    res.status(200).send({ message: "Hello payment api." })
}