function sort(width: number, height: number, length: number, mass: number): string {
  // check if it's bulky first
  if ((width * height * length >= 1000000) || width >= 150 || height >= 150 || length >= 150) {
    if (mass >= 20) return "REJECTED"; // both bulky and heavy
    else return "SPECIAL";
  } else {
    if (mass >= 20) return "SPECIAL"; // just heavy
  }
  return "STANDARD"; 
}
