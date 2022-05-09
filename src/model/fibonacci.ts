export abstract class fibonacciTools {

    public static getFibonnaciArray(lenghtOfArray: number): Array<number> {

        let fib: Array<number> = [];
        fib[0] = 0;
        fib[1] = 1;

        for (let i = 2; i < lenghtOfArray; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
        }

        return fib;
    }
}

