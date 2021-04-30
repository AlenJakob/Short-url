export function uuid(): string {
  return Math.random().toString(16).slice(2);
}

export function copyUrl(shortenLink: string): void {
  navigator.clipboard.writeText(shortenLink);
}
