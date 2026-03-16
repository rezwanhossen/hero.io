import { toast } from "react-toastify";

const getElement = () => {
  const storApp = localStorage.getItem("apps");
  if (storApp) {
    const storList = JSON.parse(storApp);
    return storList;
  } else {
    return [];
  }
};

const addLocalStorag = (id) => {
  const storApps = getElement();
  if (storApps.includes(id)) {
    toast(" Alrady Installed ! 😊");
  } else {
    storApps.push(id);
    const data = JSON.stringify(storApps);
    localStorage.setItem("apps", data);
  }
};

const removeData = (id) => {
  const stordata = getElement();
  const remint = stordata.filter((sid) => sid !== id.toString());
  localStorage.setItem("apps", JSON.stringify(remint));
};

export { getElement, addLocalStorag, removeData };
