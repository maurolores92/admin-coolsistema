import React from 'react';
import LoginForm from 'src/components/pages/login/loginForm';
import { Container, Typography, Box, CssBaseline } from '@mui/material';

const LoginPage: React.FC = () => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{textAlign:'center'}}>
                <img
                    src="/images/logos/logo.png"
                    alt="CoolSistema"
                    width={200} 
                    height={100}
                    style={{margin:'100px'}}
                />
                <Typography component="h1" variant="h5">CoolSistema</Typography>
            </Box>
            
            <LoginForm />
        </Container>
    );
};

export default LoginPage;