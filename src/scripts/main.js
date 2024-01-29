import { createPlan } from "./plan.js";

const yearlyPlan = createPlan()
    
const appropriatelyNamedVariable = createPlan()



import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";

const asparagusSeed = createAsparagus()
const cornStalk = createCorn()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
const potatoSeed = createPotato()

import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
plantSeeds(yearlyPlan)

addPlant(asparagusSeed)
addPlant(cornStalk)
addPlant(soybeanSeed)
addPlant(sunflowerSeed)
addPlant(wheatSeed)
addPlant(potatoSeed)



const plantsInField = usePlants()

console.log(plantsInField)