import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  CircularProgress
} from '@mui/material'

const BudgetProgress = ({ used, total }) => {
  const percentage = Math.min((used / total) * 100, 100)

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Monthly Budget Usage</Typography>

        <Box sx={{ mt: 2 }}>
          <LinearProgress variant="determinate" value={percentage} />
          <Typography variant="body2" sx={{ mt: 1 }}>
            {used} / {total} used
          </Typography>
        </Box>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress variant="determinate" value={percentage} size={80} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default BudgetProgress
