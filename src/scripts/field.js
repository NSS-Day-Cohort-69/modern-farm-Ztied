const field = []

export const addPlant = (seed) => {
     if(Array.isArray(seed)) {
        seed.forEach((singleSeed) => {
         
         field.push(singleSeed)
     })   
    }   else {
        field.push(seed)
     }
}

export const usePlants = () => {
    return field
}