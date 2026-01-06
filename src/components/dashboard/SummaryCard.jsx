import { Card, CardContent, Typography, Box } from '@mui/material'

const SummaryCard = ({ title, amount, icon }) => {
  return (
    <Card sx={{ minHeight: 150, minWidth: 150}}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography color="text.secondary" variant="body2">
              {title}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              ₹ {amount}
            </Typography>
          </Box>

          <Box sx={{ fontSize: 40, color: 'primary.main' }}>
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default SummaryCard
