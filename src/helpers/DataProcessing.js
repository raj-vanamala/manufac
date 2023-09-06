export function processData(data) {

    const alcoholGroups = [];

    data.forEach(item => {
    const alcoholValue = item.Alcohol;

    if (!alcoholGroups[alcoholValue]) {
        alcoholGroups[alcoholValue] = [];
        alcoholGroups[alcoholValue][0] = `Class ${alcoholValue}`
    }

    // pushes each flavonoid value into array
    alcoholGroups[alcoholValue].push(parseFloat(item.Flavanoids));
    });

    // Remove empty elements from the array
    const nonEmptyAlcoholGroups = alcoholGroups.filter(group => group);
    return nonEmptyAlcoholGroups;
}


export function processGammaData(data) {

    const alcoholGroups = [];

    data.forEach(item => {
        const alcoholValue = item.Alcohol;

        if (!alcoholGroups[alcoholValue]) {
            alcoholGroups[alcoholValue] = [];
            alcoholGroups[alcoholValue][0] = `Class ${alcoholValue}`
        }

        // calculates and pushes Gamma value for each object
        alcoholGroups[alcoholValue].push((item["Ash"] * item["Hue"]) / item["Magnesium"]);
    });
    // Remove empty elements from the array
    const nonEmptyAlcoholGroups = alcoholGroups.filter(group => group);
    return nonEmptyAlcoholGroups;
}




