import { FcGoogle } from "react-icons/fc";

export default function Google({ ...props }) {
  return (
    <button className="bg-white rounded-full" {...props}>
      <FcGoogle size={45} />
    </button>
  );
}
