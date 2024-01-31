export const harvestPlants = (plants) => {
    const harvestedSeeds = []

    for ( const plant of plants) {
        let outputCount = plant.output

        if (plant.type === 'Corn') {
            outputCount /= 2
        }

        for (let i = 0; i < outputCount; i++) {
            harvestedSeeds.push({
                type: plant.type,
                height: plant.height,
                output: plant.output
            })
        }

    }

    return harvestedSeeds
}