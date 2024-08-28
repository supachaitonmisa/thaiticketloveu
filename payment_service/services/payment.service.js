import { ERROR_HANDLES } from "../helpers/error.helper.js"
import { RESPONSE_CODE, RESPONSE_MESSAGE, RIGHT } from "../helpers/response.helper.js";

export const paymentLinkGetService = async (param) => {
    try {
        return RIGHT({ url: "https://www.beanstream.com/api/v1" })
    } catch (error) {
        throw ERROR_HANDLES.PAYMENT.PAYMENT_LINK_GET(error)
    }
}