import { paymentsApi } from '../api/payment.api.js';

export const unauthPreFix = "/unauth";
// export const authPreFixAdmin = "/auth/admin";
export const unAuthRoute = [
    {
        instance: paymentsApi,
        path: `${unauthPreFix}/payments`,
        method: "get",
    },
]