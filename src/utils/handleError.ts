import { toast } from "react-toastify";

const handleError = (error: any) => {
  if (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
    toast.error(error.message);
  }
};

export default handleError;
