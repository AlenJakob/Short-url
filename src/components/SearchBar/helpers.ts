export function uuid(): string {
  return Math.random().toString(16).slice(2);
}

export function validateInput(value: string): string {
  console.log(value);
  if (value.length < 5) {
    return "something is wrong to short?";
  } else {
    console.log(value);
    return value;
  }
}
export function parseLink(link: string): string {
  return link.substr(0, 6) + "--test- parse link";
}
