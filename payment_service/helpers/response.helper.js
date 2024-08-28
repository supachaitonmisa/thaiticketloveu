export const RESPONSE_CODE = {
    SUCCESS: 200000,
    INTERNAL_FAIL: 500000,
    EXTERNAL_FAIL: 500500,
    UNEXPECTED_ERROR: 500200,

    // PAYMENT
    PAYMENT_LINK_FAIL: 401001
}
export const RESPONSE_MESSAGE = {
    SUCCESS: "Success.",
    INTERNAL_FAIL: "Fail.",
    EXTERNAL_FAIL: "External fail.",
    UNEXPECTED_ERROR: "Unexpected error.",

    // PAYMENT
    PAYMENT_LINK_FAIL: "Fail get payment link."
}

export const RIGHT = (data) => {
    return {
        code: RESPONSE_CODE.SUCCESS,
        desc: RESPONSE_MESSAGE.SUCCESS,
        data
    }
}

export const LEFT = (error = {}) => {
    return {
        status: 500,
        code: error?.code || RESPONSE_CODE.UNEXPECTED_ERROR,
        desc: error?.message || RESPONSE_MESSAGE.UNEXPECTED_ERROR,
        error: null
    }
}