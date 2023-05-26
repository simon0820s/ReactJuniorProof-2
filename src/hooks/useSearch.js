import { useState, useEffect } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search.match(/^\d+$/)) {
      setError("please dont use only numbers");
      return;
    }
    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
