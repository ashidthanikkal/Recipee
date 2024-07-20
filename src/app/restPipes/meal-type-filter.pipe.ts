import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mealTypeFilter'
})
export class MealTypeFilterPipe implements PipeTransform {

  transform(items: any[], mealType: string): any[] {
    if (!items) {
      return [];
    }
    if (!mealType || mealType === 'Sort By Meal-Type') {
      return items;
    }
    return items.filter((item) => item.mealType.includes(mealType));
  }

}
