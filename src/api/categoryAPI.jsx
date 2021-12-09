import instance from "./instance";

export const getAllCategory = () => {
    const url = "/category";
    return instance.get(url);
};

export const removeCategory = (id) => {
    const url = "/category/" + id;
    return instance.delete(url);
};
export const addCategory = (category) => {
    const url = "/category";
    return instance.post(url, category);
};
export const read = (id) => {
    const url = "/category/" + id;
    return instance.get(url);
};
export const updateCategory = (category) => {
    const url = "/category/" + category.id;
    return instance.put(url, category);
};
