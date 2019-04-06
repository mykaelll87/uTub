import { ITheme } from './theme';

export interface IThemableProps{
  theme?: ITheme
}
export type StylableComponent = IThemableProps & {
  className?: string
}