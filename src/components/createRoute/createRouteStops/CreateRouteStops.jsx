import { useFieldArray } from 'react-hook-form';
import { Button, TextField, Box, Typography, IconButton } from '@mui/material';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CreateRouteStops = ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `stops[${nestIndex}].urls`,
  });

  return fields.length === 0 ? (
    <div>
      <Typography variant={'h5'} component={'p'}>Ничего не добавлено</Typography>
      <Button
        type="button"
        onClick={() =>
          append({
            name: '',
            descr: '',
            url: '',
          })
        }
      >
        Добавить гостиницу/ресторан
      </Button>
    </div>
  ) : (
    <div>
      {fields.map((item, k) => {
        return (
          <Box key={item.id} sx={{ display: 'flex' }}>
            <TextField
              label="Название"
              variant="outlined"
              type="text"
              {...register(`stops[${nestIndex}].urls[${k}].name`)}
            />

            <TextField
              label="Описание"
              variant="outlined"
              type="text"
              {...register(`stops[${nestIndex}].urls[${k}].descr`)}
            />
            <TextField
              label="Ссылка"
              variant="outlined"
              type="text"
              {...register(`stops[${nestIndex}].urls[${k}].url`)}
            />

            {/* <Button color={'error'} type="button" onClick={() => remove(k)}>
              Удалить
            </Button> */}
            <Box sx={{ display: 'flex', ml: 2 }}>
              <IconButton onClick={() => remove(k)} size='large'>
                <DeleteOutlineOutlinedIcon/>
              </IconButton>
            </Box>
          </Box>
        );
      })}

      <Button
        type="button"
        onClick={() =>
          append({
            name: '',
            descr: '',
            url: '',
          })
        }
      >
        Добавить гостиницу/ресторан
      </Button>

      <hr />
    </div>
  );
};
export default CreateRouteStops;
