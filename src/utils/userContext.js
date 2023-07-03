import { createContext } from "react";

const userContext = createContext({
    userFromContext : {
        name : "Dummy Name",
        email : "dummy@gmail.com"
    }
});

userContext.displayName = "userContext";

export default userContext;

