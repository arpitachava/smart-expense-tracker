import { Grid, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'

import PageContainer from '../components/layout/PageContainer'
import SummaryCard from '../components/dashboard/SummaryCard'
import BudgetProgress from '../components/dashboard/BudgetProgress'
import ExpenseForm from '../components/forms/ExpenseForm'
import CustomSnackbar from '../components/common/CustomSnackbar'

const Dashboard = () => {
  const [openForm, setOpenForm] = useState(false)
  const [snackbar, setSnackbar] = useState(false)

  return (
    <PageContainer>
      <Typography variant="h5" gutterBottom>
        Dashboard
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ mb: 3 }}
        onClick={() => setOpenForm(true)}
      >
        Add Transaction
      </Button>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <SummaryCard title="Total Balance" amount={45000} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SummaryCard title="Income" amount={60000} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SummaryCard title="Expense" amount={15000} />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <BudgetProgress used={15000} total={30000} />
        </Grid>
      </Grid>

      <ExpenseForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSuccess={() => setSnackbar(true)}
      />

      <CustomSnackbar
        open={snackbar}
        onClose={() => setSnackbar(false)}
        message="Transaction added successfully!"
      />
    </PageContainer>
  )
}

export default Dashboard
