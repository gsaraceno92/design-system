import { format } from './utils';

describe(`format`, function () {
  it(`returns empty string for no names defined`, function () {
    expect(format(undefined, undefined, undefined)).toEqual(``);
  });

  it(`formats just first names`, function () {
    expect(format(`Joseph`, undefined, undefined)).toEqual(`Joseph`);
  });

  it(`formats first and last names`, function () {
    expect(format(`Joseph`, undefined, `Publique`)).toEqual(`Joseph Publique`);
  });

  it(`formats first, middle and last names`, function () {
    expect(format(`Joseph`, `Quincy`, `Publique`)).toEqual(`Joseph Quincy Publique`);
  });
});
