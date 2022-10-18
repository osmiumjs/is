export const mocks = {
	array     : [1, 2, 3, 'test', {some: 'Obj'}],
	arrayEmpty: [],

	string     : `Some\nSuper\t\rString`,
	numberPos  : 42,
	numberNeg  : -142,
	floatPos   : 9999.8888,
	floatNeg   : -19999.8888,
	nan        : Number.NaN,
	infinityPos: Number.POSITIVE_INFINITY,
	infinityNeg: Number.NEGATIVE_INFINITY,

	fnNamed() {},
	fnArr: () => {},
	async fnNamedAsync() {},
	fnArrAsync: async () => {},

	obj     : {some: 'foo', bar: 42, 'baz-baz': false},
	objEmpty: {},

	set      : new Set(['sadf', 'qwef']),
	map      : new Map([['bla', true], ['tra', false]]),
	symbol   : Symbol('sym'),
	regEx    : /^some(a-z*)$/,
	nil      : null,
	boolTrue : true,
	boolFalse: false,
	undef    : undefined,

	jsonValid  : '[{"bla":true, "foo":"bar"}]',
	jsonInvalid: '[{"bla":true, "foo":"bar"}',

	guidV4  : 'ab9ff855-68e9-44db-990d-afc03cff85f9',
	guidV4Br: '{77B967C3-E377-4E58-907A-D145A6D91AEC}',
	guidV3  : 'C2E2DA2D-8F6B-36FF-B00C-ABC14A1E6433',
};

export type Mocks = Record<keyof typeof mocks, boolean>

export const testMocks = (what: Function, expect: jest.Expect, list: Mocks) => {
	Object.keys(list).forEach((idx: string) => {
		const val: any = mocks[idx as keyof typeof mocks];
		const should = list[idx as keyof typeof mocks];

		it(`should ${idx} = ${should}`, function () {
			expect(what(val)).toEqual(should);
		});
	});
};