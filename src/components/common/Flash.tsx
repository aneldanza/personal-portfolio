import { useEffect, useState, type FC } from "react";

interface FlashProps {
  message: string;
  type: "error" | "success";
}

const Flash: FC<FlashProps> = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`${
        type === "error" ? "bg-red-500" : "bg-green-500"
      } text-white text-center py-2 absolute top-8 left-0 right-0 z-50 rounded`}
    >
      {message}
    </div>
  );
};

export default Flash;
