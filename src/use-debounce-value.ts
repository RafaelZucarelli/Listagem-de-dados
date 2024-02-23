// Observa quando a pessoa parar de digitar e faz algo
import { useEffect, useState } from "react";


export default function useDebounceValue<T = unknown>(value: T, delay: number) {
    const [debounceValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debounceValue
}