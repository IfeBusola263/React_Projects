import { createContext, useState } from "react";

export const UserProgressContext = createContext({
     progress: '',
     showCart: () => {},
     hideCart: () => {},
     showCheckout: () => {},
     hideCheckout: () => {}
})


export default function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState('');

    function showCart(){
        setUserProgress('cart');
    }

    function hideCart(){
        setUserProgress('');
    }

    function showCheckout(){
        setUserProgress('checkout');
    }

    function hideCheckout(){
        setUserProgress('');
    }

    const progressCtx = {
        progress: userProgress,
        hideCart,
        showCart,
        hideCheckout,
        showCheckout
    }

    return <UserProgressContext.Provider value={progressCtx}>
        {children}
    </UserProgressContext.Provider>
}