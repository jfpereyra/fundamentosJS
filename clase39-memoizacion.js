function factorial(numero){
    if(!this.cacheFactorial){
        this.cacheFactorial = {}
    }

    if(this.cacheFactorial[numero]){
        return this.cacheFactorial[numero]
    }

    if(numero === 1){
        return 1
    }
    
    this.cacheFactorial[numero] = numero * factorial(numero - 1)
    return this.cacheFactorial[numero]
    
}