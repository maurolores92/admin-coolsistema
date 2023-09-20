import { Box, Button } from "@mui/material";
import { toast } from "react-hot-toast";
import apiConnector from "src/services/api.service";

const VerifyMail = () => {
  const sendEmail = async () => {
    try {
      await apiConnector.post('/user/verifyEmail', {});
      toast.success('Mensaje enviado.')
    } catch (error) {
      toast.success('Ups. Ocurrió un error')
    }
  }
  
return (
    <Box sx={{width: '100%', backgroundColor: '#fff', textAlign: 'center', paddingY: '12px'}}>
      <span>¡Hey! Tu correo aún <span style={{fontWeight: 700}}>no ha sido verificado,</span> revisa tu bandeja de entrada</span>
      <Button variant='contained' sx={{ px: '20px', py: '7px', borderRadius: '15px', color: '#fff', marginLeft: '20px'}} onClick={sendEmail}>
        Verificar correo
      </Button>
    </Box>
  );
}
export default VerifyMail;