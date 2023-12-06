import { directory } from "../assets/data";
import useRoveFocus from "../hooks/useRoveFocus";
import ListItem from "./ListItem";

const List = () => {
  const [focus, setFocus] = useRoveFocus(directory.length ?? 0);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {directory.map((person, index) => (
        <ListItem
          {...person}
          key={person.email}
          index={index}
          focus={focus === index}
          setFocus={setFocus}
        />
      ))}
    </ul>
  );
};

export default List;
