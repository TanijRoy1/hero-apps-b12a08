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

export {getStoredAppsId, addIdToLS};