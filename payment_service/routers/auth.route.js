import { paymentLinkGetApi } from '../api/payment-link-get.api.js';
import { paymentsApi } from '../api/payment.api.js';

export const authPreFix = "/auth";
// export const authPreFixAdmin = "/auth/admin";
export const authRoute = [
    {
        instance: paymentsApi,
        path: `${authPreFix}/payments`,
        method: "get",
    },
    {
        instance: paymentLinkGetApi,
        path: `${authPreFix}/payment-link/get`,
        method: "post",
    },
]