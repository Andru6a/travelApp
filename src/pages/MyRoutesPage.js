import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const MyRoutesPage = () => {
  return (
    <div>
      <Typography variant="h4" component={'h2'} sx={{ mb: 1 }}>
        Маршрутов пока нет
      </Typography>

      <Button variant="contained" to="create-route" component={RouterLink}>
        Создать новый маршрут
      </Button>
    </div>
  );
};
export default MyRoutesPage;
