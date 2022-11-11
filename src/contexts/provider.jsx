import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

const StateContext = createContext();

export const useStateCtx = () => useContext(StateContext);

function Provider({children}) {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  const [theme, setTheme] = useState("");
  
  function handleChangeTheme(theme) {
	if (theme === "dark") {
	  localStorage.setItem("theme", "dark");
	  setTheme("dark");
	} else {
	  localStorage.setItem("theme", "light");
	  setTheme("");
	}
  }
  
  useEffect(() => {
	if (localStorage.theme === "light") {
	  setTheme("");
	} else if (localStorage.theme === 'dark' || (
	  !(
		'theme' in localStorage
	  ) && window.matchMedia('(prefers-color-scheme: dark)').matches
	)) {
	  setTheme("dark");
	}
  }, []);
  
  return (
	<StateContext.Provider value = {{
	  activeMenu,
	  setActiveMenu,
	  screenSize,
	  setScreenSize,
	  theme,
	  handleChangeTheme
	}}
	>
	  {children}
	</StateContext.Provider>
  )
}

export default Provider;