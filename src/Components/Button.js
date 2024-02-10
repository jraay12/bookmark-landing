import { Children } from "react";

export default function Button({ children }) {
  return (
    <>
      <button className="text-[18px] ">{children}</button>
    </>
  );
}
