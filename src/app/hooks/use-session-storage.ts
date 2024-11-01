import { useEffect, useState } from "react";

const useSessionStorage = <T>(key: string, iValue: T) => {
	const [state, setState] = useState<T>(iValue);

	useEffect(() => {
		if (typeof window !== "undefined") {
			try {
				const value = window.sessionStorage.getItem(key);
				if (value !== null) {
					setState(JSON.parse(value));
				}
			} catch (error) {
				console.error(error);
			}
		}
	}, [key]);

	const setValue = (value: T) => {
		try {
			window.sessionStorage.setItem(key, JSON.stringify(value));
			setState(value);
		} catch (error) {
			console.error(error);
		}
	};

	return [state, setValue] as const;
};

export default useSessionStorage;
