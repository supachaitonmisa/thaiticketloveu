import { ticketsApi } from '../api/ticket.api.js';

export const unauthPreFix = "/unauth";
// export const authPreFixAdmin = "/auth/admin";
export const unAuthRoute = [
    {
        instance: ticketsApi,
        path: `${unauthPreFix}/tickets`,
        method: "get",
    },
]