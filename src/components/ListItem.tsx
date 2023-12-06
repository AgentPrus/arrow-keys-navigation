import { useEffect, useRef } from "react";

const ListItem = ({
  email,
  imageUrl,
  name,
  index,
  focus,
  setFocus,
}: {
  email: string;
  imageUrl: string;
  name: string;
  index: number;
  focus: boolean;
  setFocus: (index: number) => void;
}) => {
  const focusRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (focus && focusRef?.current) {
      focusRef?.current.focus();
    }
  }, [focus]);

  const handleKeyDown = () => {
    setFocus(index);
  };

  return (
    <li
      className="flex gap-x-4 px-3 py-5 hover:bg-gray-100 focus:bg-gray-100 outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={index}
      ref={focusRef}
    >
      <img
        className="h-12 w-12 flex-none rounded-full bg-gray-50"
        src={imageUrl}
        alt=""
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{email}</p>
      </div>
    </li>
  );
};

export default ListItem;
