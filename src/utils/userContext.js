import { createContext } from "react";

const userContext = createContext({
    userFromContext : {
        name : "Dummy Name",
        email : "dummy@gmail.com"
    }
});

export default userContext;

