import React from "react";
import { Button } from "../Button/Button";
import { BUTTON_VIEW_VARIANT } from '../Button/constants'
import { SIZE } from '../../constants/size'

export const Tab = ({ onClick, title, isActive }) => {
  return (
    <Button
      size={SIZE.l}
      viewVariant={BUTTON_VIEW_VARIANT.primary}
      onClick={onClick}
      disabled={isActive}
    >
      {title}
    </Button>
  )
};
