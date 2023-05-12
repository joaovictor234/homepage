import { Checkbox, CheckboxProps } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

export const WarningCheckbox = withStyles({
  root: {
    color: "#f2a30f",
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);