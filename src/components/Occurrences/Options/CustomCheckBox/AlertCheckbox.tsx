import { withStyles } from '@material-ui/styles'
import { Checkbox, CheckboxProps } from '@material-ui/core';

export const AlertCheckbox = withStyles({
  root: {
    color: "#ef4444",
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);