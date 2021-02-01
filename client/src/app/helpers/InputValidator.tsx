export const InputValidator = (
        prevValue: string, 
        value: string, 
        maxSize: number
    ): string => {
    let regExp = /[^а-яА-Яa-zA-Z0-9\s]/.test(value);
    
    if (regExp || value.length > maxSize) return prevValue;

    return value;
}