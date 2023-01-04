import { createContext, useEffect, useState } from "react";
import get_follow_story from "../pages/api/user/get_follow_story";
import me from "../pages/api/user/me";

export const ContextProvider= createContext()
function Context({ children }) {
    const [auth, setAuth]= useState(false)
    const [user, setUser]= useState()
    const [followStory, setFollowStory]= useState()
    useEffect(()=> {
        me(setUser)
        get_follow_story(setFollowStory)
    }, [])
    return (
      <ContextProvider.Provider value={{ auth, user, setUser, setAuth, followStory}}>
        {children}
      </ContextProvider.Provider>
    );
  }

export default Context