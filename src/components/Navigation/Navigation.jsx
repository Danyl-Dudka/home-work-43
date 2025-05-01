import { Select, Switch } from "antd";
import { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  LanguageContext,
  LANGUAGES,
  ThemeContext,
  THEMES,
} from "../../context";

import "./Navigation.css";

export default function Navigation() {
  const defaultClassName = "navigation";
  const [className, setClassName] = useState(defaultClassName);

  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  
  // it will not work coz Navigation is not rendered under the AuthProvider
  // const {isAuth} = useContext(AuthContext);
  // console.log(isAuth);
  
  
  const handleThemeChange = (checked) => {
    setTheme(checked ? THEMES.DARK : THEMES.LIGHT);
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  useEffect(() => {
    document.body.classList.remove(THEMES.DARK, THEMES.LIGHT);
    document.body.classList.add(theme)
  }, [theme]);

  return (
    <div className={className}>
      <div className="much-weight">
        <Select
          value={language}
          className="select_language"
          onChange={handleLanguageChange}
          options={[
            { value: LANGUAGES.EN.value, label: LANGUAGES.EN.text },
            { value: LANGUAGES.UA.value, label: LANGUAGES.UA.text },
          ]}
        />
      </div>

      <div className="much-weight">
        <Switch
          checkedChildren={THEMES.DARK}
          className="select_theme"
          style={{fontSize: 24}}
          unCheckedChildren={THEMES.LIGHT}
          onChange={handleThemeChange}
          checked={theme === THEMES.DARK}
        />
      </div>
    </div>
  );
}
