import { createContext } from 'react';

export const UserContext = createContext(null);

// export const UserProvider = ({children}) => {

//     const [user, setUser] = useState('Good Job');

//     return (
//         <UserContext.Provider value={user}>
//             {children}
//         </UserContext.Provider>
//     )
// };
