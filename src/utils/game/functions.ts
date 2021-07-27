export function millisecondsToTimeDisplay(milliseconds: number): string {
  if (milliseconds === 0) {
    return "00:00"
  }
  if (milliseconds < 10000) {
    return `00:${Math.floor(milliseconds / 1000)
      .toString()
      .padStart(2, "0")}.${Math.floor((milliseconds % 1000) / 100)}`;
  } else {
    return `${Math.floor(milliseconds / 60000).toString().padStart(2, "0")}:${Math.floor((milliseconds % 60000) / 1000).toString().padStart(2, "0")}`;
  }
}

