import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

// Pipe to convert any charachter to space
export class ConvertToSpacesPipe implements PipeTransform{
 
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}