import { IUserSession } from "../model/IUserSession";

const key = 'dafne-user-data';

const getUserSession = (): IUserSession | null => {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}

const setUserSession = (value: IUserSession) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const removeUserSession = () => {
    localStorage.removeItem(key);
}


const LocalStorageHelper = {
    getUserSession,
    setUserSession,
    removeUserSession
};

export default LocalStorageHelper;