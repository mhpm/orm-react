import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: string) => {
  // Retrieve the initial value from local storage or use the provided initial value
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  // Update local storage whenever the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return { value, setValue };
};

function LocalStorage() {
  const { value, setValue } = useLocalStorage('inputValue', '');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label className="block mb-2" htmlFor="">
        Local Storage:{' '}
      </label>
      <input
        className="rounded p-3 text-[#7f7f7f]"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default LocalStorage;
