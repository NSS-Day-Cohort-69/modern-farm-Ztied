import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

const yearlyPlan = createPlan()    


plantSeeds(yearlyPlan)

const plantsInField = usePlants()

const harvestedFood = harvestPlants(plantsInField)

const plantsHTML = catalog(harvestedFood)

const parentPlantsHTML = document.querySelector(".crops")

parentPlantsHTML.innerHTML = plantsHTML;



console.log(harvestedFood)