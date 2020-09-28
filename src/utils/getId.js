export const getId = arr => Math.max(...arr.map(item => +item.id)) + 1
