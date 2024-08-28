import { usersApi } from '../api/user.api.js';

export const authPreFix = "/auth";
// export const authPreFixAdmin = "/auth/admin";
export const authRoute = [
    {
        instance: usersApi,
        path: `${authPreFix}/users`,
        method: "get",
    },
]