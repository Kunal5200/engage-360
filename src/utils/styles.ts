import { COLORS } from "./enum";
import { roboto } from "./fonts";

export const loginTextField = {
  "& label.Mui-focused": {
    color: "#000000",
  },
  "& label": {
    fontSize: "15px",
    fontFamily: roboto.style,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #000",
      padding: "12px",
    },
    "&:hover fieldset": {
      borderColor: COLORS.BLACK,
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #000 !important",
    },
  },

  "& .Mui-error": {
    "& fieldset": {
      border: "1px solid #d32f2f",
    },
    "&:hover fieldset": {
      border: "1px solid #d32f2f",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #d32f2f",
    },
    "& label.Mui-focused": {
      color: "#d32f2f",
    },
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "#d32f2f",
  },
};
