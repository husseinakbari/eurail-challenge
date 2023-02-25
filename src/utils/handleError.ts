import { AxiosError } from "axios";
import { toast } from "react-toastify";

const handleError = (error: AxiosError) => {
  if (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
    toast.error(error.message);
  }
};

export default handleError;
