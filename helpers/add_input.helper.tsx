export function addItem(value: string, items: string[], setItems: React.Dispatch<React.SetStateAction<string[]>>) {
    const trimmedValue = value.trim();
    if (!trimmedValue) return;

    const index = items.findIndex(item =>
        item.toLowerCase() === trimmedValue.toLowerCase()
    );

    if (index !== -1) {
        const newItems = [...items];
        newItems[index] = trimmedValue;

        setItems(newItems);
    } else {
        setItems([...items, trimmedValue]);
    }
};

export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, items: string[],
    setInputValue: React.Dispatch<React.SetStateAction<string>>, setItems: React.Dispatch<React.SetStateAction<string[]>>) => {
    const value = e.target.value;

    if (value.endsWith(' ') || value.endsWith('\n')) {
        addItem(value, items, setItems);
        setInputValue('');
    } else {
        setInputValue(value);
    }
};

export const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, inputValue: string, items: string[],
    setInputValue: React.Dispatch<React.SetStateAction<string>>, setItems: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        addItem(inputValue, items, setItems);
        setInputValue('');
    }
};
