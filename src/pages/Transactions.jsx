import {
  Tabs,
  Tab,
  Box,
  Typography,
  IconButton
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import PageContainer from '../components/layout/PageContainer'
import ConfirmDialog from '../components/common/ConfirmDialog'
import CustomSnackbar from '../components/common/CustomSnackbar'
import { deleteTransaction } from '../features/expenses/expenseSlice'

const Transactions = () => {
  const transactions = useSelector(
    (state) => state.expenses.transactions
  )
  const dispatch = useDispatch()

  const [tab, setTab] = useState(0)
  const [selectedId, setSelectedId] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [snackbar, setSnackbar] = useState(false)

  const handleDelete = () => {
    dispatch(deleteTransaction(selectedId))
    setOpenDialog(false)
    setSnackbar(true)
  }

  const filteredData = transactions.filter((item) => {
    if (tab === 1) return item.type === 'income'
    if (tab === 2) return item.type === 'expense'
    return true
  })

  const columns = [
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <IconButton
          color="error"
          onClick={() => {
            setSelectedId(params.row.id)
            setOpenDialog(true)
          }}
        >
          <DeleteIcon />
        </IconButton>
      )
    }
  ]

  return (
    <PageContainer>
      <Typography variant="h5" gutterBottom>
        Transactions
      </Typography>

      <Tabs value={tab} onChange={(e, val) => setTab(val)}>
        <Tab label="All" />
        <Tab label="Income" />
        <Tab label="Expense" />
      </Tabs>

      <Box sx={{ height: 400, mt: 2 }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          getRowId={(row) => row.id}
          pageSizeOptions={[5]}
        />
      </Box>

      <ConfirmDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleDelete}
      />

      <CustomSnackbar
        open={snackbar}
        onClose={() => setSnackbar(false)}
        message="Transaction deleted"
      />
    </PageContainer>
  )
}

export default Transactions
