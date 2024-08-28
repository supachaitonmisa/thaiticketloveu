import { ticketsApi } from '../api/ticket.api.js';

export const authPreFix = "/auth";
// export const authPreFixAdmin = "/auth/admin";
export const authRoute = [
    {
        instance: ticketsApi,
        path: `${authPreFix}/tickets`,
        method: "get",
    },
]