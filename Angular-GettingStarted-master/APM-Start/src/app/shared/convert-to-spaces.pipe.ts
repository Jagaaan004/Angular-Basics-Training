// Imported pipe from angular
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convertToSpaces"
})

// Creating a structure format for replacement. Replacing characters with empty spaces " "
export class ConvertToSpacespipe implements PipeTransform{
transform(value: string, character: string): string {
  return value.replace(character, ' ');
}
}
