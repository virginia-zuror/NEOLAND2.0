import { createContext, useState, useEffect} from "react";

export const colorThemeContext = createContext();

export const ColorThemeContextProvider = ({children})=>{

        const [colorTheme, setColorTheme]= useState('light')

        const colorChange =()=>{
            if (colorTheme==='light') {
                setColorTheme('dark');
            } else {setColorTheme('light')}
        }
        useEffect(()=>{
            document.body.className = colorTheme;
        }, [colorTheme])
        
        return(
            <colorThemeContext.Provider value={{colorChange}}>
            {children}
            </colorThemeContext.Provider>
        )
        




}