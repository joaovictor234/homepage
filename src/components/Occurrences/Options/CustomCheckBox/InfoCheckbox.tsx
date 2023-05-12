import { withStyles } from '@material-ui/styles'
import { Checkbox, CheckboxProps } from '@material-ui/core';

export const InfoCheckbox = withStyles({
  root: {
    color: "#08678c",
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);