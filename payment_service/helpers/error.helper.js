import { LEFT, RESPONSE_CODE, RESPONSE_MESSAGE } from "./response.helper.js"

const PAYMENT = {
    PAYMENT_LINK_GET: (error) => {
        try {
            
            console.log('error: ', error.message);
            return LEFT({ code: RESPONSE_CODE.PAYMENT_LINK_FAIL, message: RESPONSE_MESSAGE.PAYMENT_LINK_FAIL })
        } catch (error) {
            console.log('error: ', error);
            return LEFT(error)
        }
    }
} 
export const ERROR_HANDLES = {
    PAYMENT
}