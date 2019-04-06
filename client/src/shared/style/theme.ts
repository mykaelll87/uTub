import {ThemeContext} from 'styled-components'
export interface ITheme {
  colors: {
    main: string,
    secondary: string
  },
  font: {
    size: number,
    family: string,
  }
}

export const theme: ITheme = {
  colors: {
    main: "#acacac",
    secondary: "#acacac"
  },
  font: {
    family: `-apple-system, BlinkMacSystemFont,"Roboto", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
    size: 12
  }
}
