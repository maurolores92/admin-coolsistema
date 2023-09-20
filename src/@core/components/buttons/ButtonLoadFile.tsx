import { Button } from "@mui/material";

const ButtonLoadFile = ({children, onChange, sx, id = 'load-file'}: any) => {
  const loadImage = (e: any) => {
    onChange(e.target.files[0]);
  }
  
return (<>
    <input
      accept="image/*"
      style={{ display: 'none' }}
      id={id}
      multiple
      type="file"
      onChange={loadImage}
    />
    <label htmlFor={id}>
      <Button variant="tonal" component="span" color='secondary' sx={sx}>
        {children}
      </Button>
    </label> 
  </>);
}

export default ButtonLoadFile;