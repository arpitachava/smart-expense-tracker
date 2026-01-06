import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Card,
  CardContent,
  Rating,
  Box,
  LinearProgress,
  CircularProgress
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector } from 'react-redux'

import PageContainer from '../components/layout/PageContainer'

const Reports = () => {
  const transactions = useSelector(
    (state) => state.expenses.transactions
  )

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const budgetLimit = 30000
  const usagePercent = Math.min((totalExpense / budgetLimit) * 100, 100)

  return (
    <PageContainer>
      <Typography variant="h5" gutterBottom>
        Reports & Analytics
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Total Income</Typography>
              <Typography variant="h6">₹ {totalIncome}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Total Expense</Typography>
              <Typography variant="h6">₹ {totalExpense}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Savings</Typography>
              <Typography variant="h6">
                ₹ {totalIncome - totalExpense}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Budget Usage */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography gutterBottom>Budget Usage</Typography>
          <LinearProgress variant="determinate" value={usagePercent} />
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <CircularProgress
              variant="determinate"
              value={usagePercent}
              size={90}
            />
          </Box>
        </CardContent>
      </Card>

      {/* Monthly Accordion */}
      <Accordion sx={{ mt: 3 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Monthly Expense Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You have spent ₹ {totalExpense} this month.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* User Rating */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography gutterBottom>
            Rate Your Financial Discipline
          </Typography>
          <Rating defaultValue={3} size="large" />
        </CardContent>
      </Card>
    </PageContainer>
  )
}

export default Reports
