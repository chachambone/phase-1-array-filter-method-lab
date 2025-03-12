function findMatching(drivers, driver_name) {
    return drivers.filter(driver => driver.toLowerCase() === driver_name.toLowerCase());
}

function fuzzyMatch(drivers, initial) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(initial.toLowerCase()));
}

function matchName(drivers, driver_name) {
    return drivers.filter(driver => driver.name === driver_name);
}

