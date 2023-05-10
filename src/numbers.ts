export function printNumbers() {
    const numbers = [];
    
    for(let i = 1; i <= 100; i++){
        const multip3 = i % 3 == 0;
        const multip5 = i % 5 == 0;
        
        const number = multip3 && multip5 && 'Marketplace' ||
        multip3 && 'Falabella' ||
        multip5 && 'IT' ||
        i.toString();
        numbers.push(number);
    }

    return numbers;
}