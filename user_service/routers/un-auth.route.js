import { usersApi } from '../api/user.api.js';

export const unauthPreFix = "/unauth";
// export const authPreFixAdmin = "/auth/admin";
export const unAuthRoute = [
    {
        instance: usersApi,
        path: `${unauthPreFix}/users`,
        method: "get",
    },
]