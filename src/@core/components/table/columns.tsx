import { Box, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { DateTime } from "luxon";
import Link from "next/link";
import CustomChip from 'src/@core/components/mui/chip';


export const titleColumn = (field: any, color = 'primary.main') => (
  <Typography variant='body2' sx={{ color }}>
    {field}
  </Typography>
)

export const priceColumn = (field: any, color = 'success.dark', currency = '$') => (
  <Typography variant='body2' sx={{ color }}>
    {currency} {field}
  </Typography>
)
export const dateTimeColumn = (params: GridRenderCellParams) => {
  const date = DateTime.fromISO(params.row.createdAt).toFormat('dd-MM-yyyy');
  const time = DateTime.fromISO(params.row.createdAt).toFormat('hh:mm a');

return (
  <Box>
    <Typography variant='body2' sx={{ color: 'text.primary'}}>{date}</Typography>
    <Typography variant='body2' sx={{ color: 'text.primary'}}>{time}</Typography>
  </Box>
);
};

export const labelColumn = (data: any, color: any ='primary') => (<CustomChip label={data} skin='light' color={color} />)

export const emailAndPhoneColumn = (params: GridRenderCellParams) => {
  
  return (
    <>
      <Box>
        <Link href={`mailto:${params.row.email}`} style={{ color: 'info.main', textDecoration: 'none'  }}>{params.row.email}</Link>
        <Typography variant='body2' sx={{ color: 'text.primary'}}>{params.row.phone}</Typography>
      </Box>
    </>
  )
};

export const dateColumn = {
  flex: 0.175,
  type: 'date',
  minWidth: 120,
  headerName: 'Creado',
  field: 'created_at',
  valueGetter: (params: any) => new Date(params.value),
  renderCell: dateTimeColumn
};

