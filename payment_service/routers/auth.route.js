import { paymentsApi } from '../api/payment.api.js';

export const authPreFix = "/auth";
// export const authPreFixAdmin = "/auth/admin";
export const authRoute = [
    {
        instance: paymentsApi,
        path: `${authPreFix}/payments`,
        method: "get",
    },
]