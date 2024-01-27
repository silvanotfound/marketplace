import { DimensionsItem, Item } from "../item.entity";

test('Deve calcular o volume do item', () => {
    const item = new Item("Lanterna", 150.0, new DimensionsItem(20.0,15.0,10.0,1.0))
    expect(item.getVolume()).toBe(0.003)
});

test('Deve calcular a densidade do item', () => {
    const item = new Item("Lanterna", 150.0, new DimensionsItem(20.0,15.0,10.0,1.0))
    expect(item.getDensity()).toBe(333)
});