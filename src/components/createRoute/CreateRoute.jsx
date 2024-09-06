// [] Отправка на сервер
// [] Фотки
// [] Яндекс карта
// [] Валидация

import { useForm } from 'react-hook-form';
import CreateRouteMain from 'components/createRoute/createRouteMain/CreateRouteMain';

import { Button, TextField, Typography, Box } from '@mui/material';

const CreateRoute = () => {
  const defaultValues = {
    routeName: '',
    routeDescr: '',
    stops: [
      {
        nameStop: '',
        descrStop: '',
        date1Stop: '',
        date2Stop: '',
        budgetStop: '',
        urls: [{ name: '', descr: '', url: '' }],
      },
    ],
  };

  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm({
    defaultValues,
  });

  // const onSubmit = (data) => alert(JSON.stringify(data));
  const onSubmit = (data) => console.log(data);

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
        <Box sx={{ mb: 3 }}>
          <Typography variant="h3" component={'h2'}>
            Создай свой маршрут
          </Typography>
          <Typography variant="h6" component={'p'}>
            Заполни оставновки, точки маршрута, добавь фотографии и другое...
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            label="Название путешествия"
            variant="outlined"
            {...register(`routeName`)}
          />

          <TextField
            label="Описание"
            variant="outlined"
            {...register(`routeDescr`)}
          />
        </Box>

        <CreateRouteMain
          {...{ control, register, defaultValues, getValues, setValue, errors }}
        />

        <Box
          sx={{ mt: 3, display: 'flex', gap: '10px', justifyContent: 'center' }}
        >
          <Button
            type="button"
            color="error"
            onClick={() => reset(defaultValues)}
          >
            Сбросить
          </Button>

          <Button
            type="submit"
            variant="contained"
            // onClick={() => reset(defaultValues)}
          >
            Сохранить
          </Button>
        </Box>
    </Box>
  );
};

export default CreateRoute;
