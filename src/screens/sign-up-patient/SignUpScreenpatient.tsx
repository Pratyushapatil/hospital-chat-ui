import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";

import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./SignUpFormpatient.style.css";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
} from "@mui/material";

interface SignUpFormData {
  phoneNumber: string;
  patientName: string;
  bedNumber: string;
}

const SignUpScreen: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    phoneNumber: "",
    patientName: "",
    bedNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignUp = (): void => {
    // Handle sign up logic here, e.g., send data to server
    console.log("Signing up...");
    console.log("Phone Number:", formData.phoneNumber);
    console.log("Patient Name:", formData.patientName);
    console.log("Bed Number:", formData.bedNumber);
  };

  return (
    <>
      <Grid
        // border={1}
        // borderColor="#000"
        container
        style={{ height: "600px" }}
        alignContent="center"
        alignSelf="center"
        justifyContent="center"
      >
        <Grid item lg={4}>
          <Paper elevation={2}>
            <Card
              style={{
                backgroundColor: "rgb(170, 150, 150, 0.14)",
                height: "100%",
              }}
            >
              <CardContent>
                <title>Register Patient</title>
                <form>
                  <Grid
                    container
                    direction="column"
                    item
                    xs={12}
                    lg={12}
                    spacing={4}
                  >
                    <Grid item>
                      <h2> Register Patient</h2>
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Patient name"
                        variant="standard"
                        id="patientName"
                        value={formData.patientName}
                        onChange={handleInputChange}
                        required
                        fullWidth
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Phone number"
                        variant="standard"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        fullWidth
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Bed number"
                        variant="standard"
                        id="bedNumber"
                        value={formData.bedNumber}
                        onChange={handleInputChange}
                        required
                        fullWidth
                      />
                    </Grid>

                    <Grid item>
                      <ThemeProvider theme={theme}>
                        <Button
                          fullWidth
                          style={{ marginTop: "16px" }}
                          variant="contained"
                          color="primary"
                          onClick={handleSignUp}
                        >
                          Register
                        </Button>
                      </ThemeProvider>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
// Styling code starts from here

const theme = createTheme({
  palette: {
    primary: {
      main: "#7F1114",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});
export default SignUpScreen;
