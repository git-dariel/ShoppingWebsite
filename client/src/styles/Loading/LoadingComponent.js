import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoadingComponent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/store");
      toast.success("User logged in successfully", {
        position: "top-right",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      {loading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#0F0F0F"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          wrapperClassName=""
          visible={true}
        />
      )}
    </div>
  );
};

export default LoadingComponent;
