import { addPlant } from "./field.js"

export const plantSeeds = (plantingPlan) => {
    for(let i = 0; i < plantingPlan.length; i++) {
        const row = plantingPlan[i]

    for(let j = 0; j < row.length; j++) {
        const seed = row[j]
        
        addPlant(seed)
     }
    }
}