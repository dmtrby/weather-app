export const CHANGE_CITY = 'CHANGE_CITY';

export function changeCity(index) {
    return {
        type: CHANGE_CITY,
        index: index,
    }
}