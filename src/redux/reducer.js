import { MEALS } from '../shared/meals';
import { COMMENTS } from '../shared/comments';
import { PIZZAS } from '../shared/pizzas';
import { SALADS } from '../shared/salads';
import { PIES } from '../shared/pies';
import { PASTAS } from '../shared/pastas';
import { LASAGNAS } from '../shared/lasagnas';

export const initialState = {
    meals: MEALS,
    comments: COMMENTS,
    pizzas: PIZZAS,
    salads: SALADS,
    pies: PIES,
    pastas: PASTAS,
    lasagnas: LASAGNAS
};

export const Reducer = (state = initialState, action) => {
    return state;
};