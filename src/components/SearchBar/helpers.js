export function uuid() {
    return Math.random()
        .toString(16)
        .slice(2);
}

export function validateInput(value) {
    console.log(value);
    if (value.length < 5) {
        return "something is wrong to short?";
    } else {
        console.log(value);
        return value;
    }
}
export function parseLink(link) {
    return link.substr(0, 6) + "--test- parse link";
}
