const sorting = require("../../app");

/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
};

module.exports = config;

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);

    /* const input = [                      // вариант из лекции   
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]

    const output = sorting.sortByName(input)

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]

    expect(output).toEqual(expected); */
    
  });

  /* TestWatcher("Without param", () => {           // Второй вариант из лекции
    expect(() => sorting.sortByName()).toThrow(TypeError)
  }) */

  it("Books have not been sorted", () => {
    const input = [
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
    ]

    const output = sorting.sortByName(input)

    const expected = [
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
    ]

    expect(output).toEqual(expected);
    
  });
});
