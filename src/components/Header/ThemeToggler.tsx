import Switch from 'react-switch'

import { useThemeStore } from '../../store/ThemeStore'

import { THEMES } from '../../enums'

import MoonIcon from './../icons/MoonIcon'

const ThemeToggler = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  const theme = useThemeStore((state) => state.theme)

  return (
    <div className="flex items-center gap-4">
      <Switch
        onChange={toggleTheme}
        onColor="#a445ed"
        offColor="#757575"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        uncheckedIcon={false}
        checkedIcon={false}
        checked={theme === THEMES.DARK}
        height={20}
        width={35}
        handleDiameter={12}
      />
      <MoonIcon theme={theme} />
    </div>
  )
}

export default ThemeToggler
