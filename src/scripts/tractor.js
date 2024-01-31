import { addPlant } from "./field.js"
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




export const plantSeeds = (yearlyPlan) => {
    for(const plan of yearlyPlan) {
        for(const seeds of plan) {

            if(seeds === "Asparagus"){
                addPlant(asparagusSeed)
            }
            
            if(seeds === "Corn") {
                addPlant(cornStalk)
            }

            if(seeds === "Soybean") {
                addPlant(soybeanSeed)
            }

            if(seeds === "Sunflower") {
                addPlant(sunflowerSeed)
            }

            if(seeds === "Wheat") {
                addPlant(wheatSeed)
            }

            if(seeds === "Potato") {
                addPlant(potatoSeed)
            }

        }
    }
}