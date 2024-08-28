import axios from 'axios';
export const ticketsApi = async (req, res) => {
    // const payments = await axios.get(`http://payment_service:3005/auth/payments`);
    // const users = await axios.get(`http://user_service:3007/auth/users`);
    // console.log('payments.data: ', payments.data);
    // console.log('users.data: ', users.data);
    res.status(200).send({ message: "Hello tickets api." })
}