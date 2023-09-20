import { Box } from "@mui/material";

function BoxBetween ({children}: any) {
  return (<>
    <Box sx={{
            p: [6, 3],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
        {children}
    </Box>
  </>);
}

export default BoxBetween;