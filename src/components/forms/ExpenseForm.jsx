import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  Autocomplete,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from '../../features/expenses/expenseSlice'

const categories = ['Food', 'Travel', 'Shopping', 'Bills', 'Salary']
const tags = ['Urgent', 'Monthly', 'Personal', 'Office']

const ExpenseForm = ({ open, onClose, onSuccess }) => {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    title: '',
    amount: '',
    type: 'expense',
    category: '',
    recurring: false,
    tags: []
  })

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = () => {
    dispatch(
      addTransaction({
        ...form,
        amount: Number(form.amount),
        id: Date.now()
      })
    )
    onSuccess()
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Transaction</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="dense"
          label="Amount"
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
        />

        <Typography sx={{ mt: 2 }}>Transaction Type</Typography>
        <RadioGroup
          row
          name="type"
          value={form.type}
          onChange={handleChange}
        >
          <FormControlLabel value="income" control={<Radio />} label="Income" />
          <FormControlLabel value="expense" control={<Radio />} label="Expense" />
        </RadioGroup>

        <Select
          fullWidth
          name="category"
          value={form.category}
          onChange={handleChange}
          displayEmpty
          sx={{ mt: 2 }}
        >
          <MenuItem value="">Select Category</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>

        <Autocomplete
          multiple
          options={tags}
          onChange={(e, value) => setForm({ ...form, tags: value })}
          renderInput={(params) => (
            <TextField {...params} label="Tags" margin="dense" />
          )}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={form.recurring}
              onChange={handleChange}
              name="recurring"
            />
          }
          label="Recurring Transaction"
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ExpenseForm
