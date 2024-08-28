import axios from 'axios';
export const usersApi = async (req, res) => {
    const payments = await axios.get(`http://payment_service:3005/auth/payments`);
    const tickets = await axios.get(`http://ticket_service:3006/auth/tickets`);
    // response.data
    console.log('tickets.data: ', tickets.data);
    console.log('payments.data: ', payments.data);
    res.status(200).send({ message: "Hello user api." })
}