export interface category_data {
  title: string;
  image?: string;
  name?: string;
}

// Categorias
export const CATEGORY_LIST: category_data[] = [
    {title: 'Favorite character'},
    {title: 'Favorite defense'},
    {title: 'Favorite prosecutor'},
    {title: 'Favorite assistant'},
    {title: 'Favorite detective'},
    {title: 'Favorite victim'},
    {title: 'Favorite defendant'},
    {title: 'Favorite witness'},
    {title: 'Favorite culprit'},
    {title: 'Favorite breakdown'},
    {title: 'Favorite design'},
    {title: "Favorite character's theme"},
    {title: 'Character you hate'},
    {title: 'Overrated character'},
    {title: 'Underrated character'},
    {title: 'Overhated character'},
    {title: 'I expected to like them more'},
    {title: 'I expected to like them less'},
    {title: 'Character you relate to'},
    {title: 'Character who deserves a spin-off'},
    {title: 'Character you want back'},
    {title: 'Favorite game mechanic'},
    {title: 'Favorite case'},
    {title: 'Favorite game'},
]

export const specialCategoryList = [
  'defense', 'prosecutor', 'assistant', 'detective',
   'victim', 'culprit', 'defendant', 'witness', 'case', 'game', 'breakdown', 'theme'
]