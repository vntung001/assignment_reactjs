import instance from "./instance";

export const getAll = () => {
    const url = "/product";
    return instance.get(url);
};

export const remove = (id) => {
    const url = "/product/" + id;
    return instance.delete(url);
};
export const add = (product) => {
    const url = "/product";
    return instance.post(url, product);
};
export const read = (id) => {
    const url = "/product/" + id;
    return instance.get(url);
};
export const update = (product) => {
    const url = "/product/" + product.id;
    return instance.put(url, product);
};
