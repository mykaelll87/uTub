import React from 'react'
import { StylableComponent } from '../../../shared/style/models';
import { PathEnum } from './PathEnum';

interface IIconProps{
  icon: PathEnum
}

type IconProps = IIconProps & StylableComponent
export const Icon: React.FC<IconProps> = props =>(
  <svg>
    <path>{props.icon}</path> {/* TODO */}
  </svg>
)