// A capitalize function that takes a string and returns it with the first character capitalized.

const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}

export default capitalize