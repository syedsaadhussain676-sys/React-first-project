import { createContext } from 'react';



const UserContext = createContext({
    name: "Default Name",
    email: "tigerzindahai@gmail.com",
});

export default UserContext;