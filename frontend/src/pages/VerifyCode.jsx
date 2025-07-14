import {
  Button,
  Typography,
} from "@material-tailwind/react";
import { verifyCodes } from "../api/api";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";


export default function VerifyCode() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem('email');
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
  if (!email) {
    setErrorMessage("Debes registrarte primero.");
    setErrorAlert(true);
    setTimeout(() => {
      sessionStorage.removeItem('email');
      navigate("/register");
    }, 2500);
  }
}, [email, navigate]);


  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // solo dígitos
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[0];
    setOtp(newOtp);

    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.removeAttribute("disabled");
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Solo reinicia los campos siguientes si NO estamos en el primero
      if (index > 0) {
        for (let i = index; i < otp.length; i++) {
          inputRefs.current[i].value = "";
          inputRefs.current[i].setAttribute("disabled", true);
        }

        inputRefs.current[index - 1]?.focus();
      } else {
        // Si estamos en el primero, solo limpia su valor y lo mantiene enfocado y habilitado
        inputRefs.current[0].removeAttribute("disabled");
        inputRefs.current[0].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    const newOtp = [...otp];

    for (let i = 0; i < newOtp.length; i++) {
      if (pasteData[i]) {
        newOtp[i] = pasteData[i];
        inputRefs.current[i].value = pasteData[i];
        inputRefs.current[i].removeAttribute("disabled");
      }
    }

    setOtp(newOtp);

    const nextIndex = pasteData.length < 6 ? pasteData.length : 5;
    inputRefs.current[nextIndex]?.focus();
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join("");
    try {
      const data = await verifyCodes(email, code);
      const message = data.message || "Error desconocido";
      setErrorMessage(message);
      
      setErrorAlert(true);
      setTimeout(() => {
      sessionStorage.removeItem('email');
      navigate("/login");
    }, 3000);
    } catch (error) {
      const message = error.response?.data?.message || "Error desconocido";
      setErrorMessage(message);
      setErrorAlert(true);
      console.error("Error al verificar el código:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className="bg-verify">
        <ErrorAlert
          open={errorAlert}
          onClose={() => setErrorAlert(false)}
          message={errorMessage}
        />
      </div>
      <div className="absolute register-form flex flex-col p-4 rounded-2xl border-white border-8 items-center justify-center w-[20em] sm:w-[20em] md:w-[25em] lg:w-[25em] xl:w-[25em]">
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" className="mb-4 text-center text-gray-800">
            Ingrese el código enviado a {email}
          </Typography>
          <div
            className="otp-field mb-4 flex justify-between gap-2"
            onPaste={handlePaste}
          >
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                ref={(el) => (inputRefs.current[i] = el)}
                onChange={(e) => handleChange(e, i)}
                onKeyUp={(e) => handleKeyUp(e, i)}
                disabled={i !== 0}
                className="w-10 h-10 text-center text-xl rounded border"
              />
            ))}
          </div>
          <Button
            type="submit"
            color="green"
            className={`w-full ${!isOtpComplete ? "opacity-50" : ""}`}
            disabled={!isOtpComplete}
          >
            Verificar
          </Button>
          <p className="text-muted mt-4">
            ¿No recibiste el código? <a href="#" className="text-blue-500 hover:underline">Solicitar nuevamente</a>
          </p>
        </form>
      </div>
    </>
  );
}
