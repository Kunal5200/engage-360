import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import { loginValidationSchema } from "@/utils/validation";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: () => {
      console.log("values");
    },
  });
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Typography
        sx={{
          textAlign: "left",
          fontSize: 25,
          fontFamily: roboto.style,
          fontWeight: 500,
          textTransform: "uppercase",
        }}
      >
        Engage 360
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4} mt={3}>
          <TextField
            sx={{ ...loginTextField }}
            label="Email"
            id="email"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            sx={{ ...loginTextField }}
            label="Password"
            type={showPassword ? "text" : "password"}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            id="password"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            sx={{ color: COLORS.BLACK, fontFamily: roboto.style }}
            variant="contained"
            type="submit"
          >
            {" "}
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Login;
