export const title = (name) => {
        str = name.toLowerCase()
        str = str.split(" ")
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
        }
        return str.join(" ")
};
