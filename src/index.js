function orderByProps(obj, properties) {
    const arrForObjectA = [];
    const arrForObjectB = [];

    for (const prop in obj) {
            const customObject = {};
            customObject.key = prop;
            customObject.value = obj[prop];
            if (properties.includes(prop)) {
                arrForObjectA.push(customObject);
            } else {
                arrForObjectB.push(customObject);
            }
        }
    return [...arrForObjectA, ...arrForObjectB.sort((a, b) => ((a.key > b.key) ? 1 : -1))];
}

module.exports = { orderByProps };
