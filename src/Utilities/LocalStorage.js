const getStoredAppsId = () => {
    const StoredIds = JSON.parse(localStorage.getItem("installedAppsId"));
    if (StoredIds) {
        return StoredIds;
    } else {
        return [];
    }
}

const addIdToLS = (id) => {
    const storedIds = getStoredAppsId("installedAppsId");
    if (storedIds.includes(id)) {
        alert("This book already exist.");
    } else {
        storedIds.push(id);
        localStorage.setItem("installedAppsId", JSON.stringify(storedIds));
    }
}

const removeIdFromLS = (id) => {
    const storedIds = getStoredAppsId("installedAppsId");
    const remainingIds = storedIds.filter(storedId => storedId !== id);
    console.log(remainingIds);
    localStorage.setItem("installedAppsId", JSON.stringify(remainingIds));
}

export {getStoredAppsId, addIdToLS, removeIdFromLS};