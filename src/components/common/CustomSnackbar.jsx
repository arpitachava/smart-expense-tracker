import { Snackbar, Alert } from '@mui/material'

const CustomSnackbar = ({ open, onClose, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  )
}

export default CustomSnackbar
