import instance from "./instance";

const UserAPI = {
    getAll() {
        const url = `/user`;
        return instance.get(url);
    },
    get(id) {
        const url = `/user/${id}`;
        return instance.get(url);
    },
    add(user) {
        const url = `/user`;
        return instance.post(url, user);
    },
    remove(id) {
        const url = `/user/${id}`;
        return instance.delete(url);
    },
    update(id, data) {
        const url = `/user/${id}`;
        return instance.put(url, data);
    },



};
export default UserAPI;