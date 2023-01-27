import { ChangeEvent, useRef } from "react";

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      // todo: buscar consulta
      console.log("Debounce value ", event.target.value);
    }, 350);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar"
        onChange={onQueryChanged}
      />
    </div>
  );
};
