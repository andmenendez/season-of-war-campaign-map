import type { LatLngExpression } from "leaflet";
import { MAX_H, MAX_W } from "./constants";

export function convertSvgCoordinates(svgPathData: string): LatLngExpression[] {
    let coordinates: [number, number][] = [];
    const parts = svgPathData.split(/[, ]+/); // Split by commas and spaces

    let currentX = 0;
    let currentY = 0;
    let local_max_x = 0;
    let local_max_y = 0;

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];

        if (part === "M" || part === "L") {
            // Move to or Line to commands
            currentX = parseFloat(parts[++i]);
            currentY = parseFloat(parts[++i]);
            coordinates.push([currentX, currentY]);
        } else if (part === "Z") {
            // Close path command, no coordinates needed
            //No coordinates are added here.
        } else if (!isNaN(parseFloat(part))) {
            //if the part is a number and no command was found, it must be part of a lineTo command that was implicit.
            currentX = parseFloat(part);
            currentY = parseFloat(parts[++i]);
            if (!isNaN(currentX) && !isNaN(currentY)) {
                coordinates.push([currentX, currentY]);
            }
        }

        if (currentX > local_max_x)
            local_max_x = currentX;
        if (currentY > local_max_y)
            local_max_y = currentY;
    }
    coordinates = coordinates.map(([x,y])=> {
        return [.25*MAX_H * y/local_max_y, 0.25*MAX_W * x/local_max_x]
    })
    // return coordinates;
    return mirrorCoordinateVertically(coordinates.slice(0,coordinates.length-1));
}


export function mirrorCoordinateVertically(coordinates: [number, number][]): LatLngExpression[] {
    let maxY = MAX_H;
    return coordinates.map(([y, x]) => {
        const flippedY = maxY - y;
        return [flippedY, x];
    });
}


export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}