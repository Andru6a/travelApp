import { useFieldArray } from 'react-hook-form';
import CreateRouteStops from 'components/createRoute/createRouteStops/CreateRouteStops';

import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CreateRouteMain = ({ control, register, setValue, getValues }) => {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: 'stops',
  });
  const [stopName, setStopName] = useState(['']);

  const setValueFnc = (e, index) => {
    const addNewValue = [...stopName];
    addNewValue[index] = e.target.value;
    setStopName(addNewValue);
  };
  
  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignContent: 'center',
                    mb: 1,
                    position: 'relative',
                  }}
                >
                  <IconButton
                    onClick={() => remove(index)}
                    sx={{ position: 'absolute', left: '-45px' }}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                  <Typography variant="h4" component={'p'}>
                    Остановка: {stopName[index]}
                  </Typography>
                </Box>
                <TextField
                  label="Название остановки"
                  variant="outlined"
                  type="text"
                  {...register(`stops[${index}].nameStop`, {
                    onBlur: (e) => {
                      setValueFnc(e, index);
                    },
                  })}
                />

                <TextField
                  label="Описание"
                  variant="outlined"
                  {...register(`stops[${index}].descrStop`)}
                />

                <Box>
                  <Typography variant="h5" component={'p'} sx={{ mb: 1 }}>
                    Даты{' '}
                  </Typography>
                  <TextField
                    label=""
                    variant="outlined"
                    type="date"
                    {...register(`stops[${index}].date1Stop`)}
                  />
                  <TextField
                    label=""
                    variant="outlined"
                    type="date"
                    {...register(`stops[${index}].date2Stop`)}
                  />
                </Box>

                <TextField
                  label="Бюджет"
                  variant="outlined"
                  type="number"
                  {...register(`stops[${index}].budgetStop`)}
                />
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" component={'p'} sx={{ mb: 1 }}>
                  Гостиницы/рестораны:
                </Typography>
                <CreateRouteStops
                  nestIndex={index}
                  {...{ control, register }}
                />
              </Box>
            </li>
          );
        })}
      </ul>

      <section style={{ textAlign: 'center' }}>
        <Button
          variant="outlined"
          type="button"
          onClick={() => {
            append({
              nameStop: '',
              descrStop: '',
              date1Stop: '',
              date2Stop: '',
              budgetStop: '',
            });
          }}
        >
          Добавить остановку
        </Button>

        {/* <button
          type="button"
          onClick={() => {
            setValue('test', [
              ...getValues().test,
              {
                name: 'append',
                nestedArray: [{ field1: '', field2: '' }],
              },
            ]);
          }}
        >
          Добавить гостиницу/ресторан
        </button> */}

        {/* <button
          type="button"
          onClick={() => {
            prepend({ name: 'append' });
          }}
        >
          prepend
        </button> */}

        {/* <button
          type="button"
          onClick={() => {
            setValue('test', [
              {
                name: 'append',
                nestedArray: [{ field1: 'Prepend', field2: 'Prepend' }],
              },
              ...getValues().test,
            ]);
          }}
        >
          prepend Nested
        </button> */}
      </section>
    </>
  );
};
export default CreateRouteMain;
