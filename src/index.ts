const asyncFunctionPattern: string = '$TvNd3G0XQ1gN';

function testConstructor(constructorName: string, value: any): boolean {
	return !isUndefined(value)
	       && !isNull(value)
	       && value.constructor &&
	       value.constructor.name === constructorName;
}

/** Is value an *AsyncFunction* */
export function isAsyncFunction<ValueType>(value: ValueType, asyncPattern: string = ''): boolean {
	if (!value) return false;

	return testConstructor('AsyncFunction', value) ||
	       (testConstructor('Function', value)
	        && (
		        value.toString().indexOf(asyncPattern.length > 1 ? asyncPattern : asyncFunctionPattern) > 0
		        || (value.toString().indexOf('return __awaiter(this') > 0 && value.toString().indexOf('return __generator(this') > 0)
	        ));
}

/** Is value a *null* */
export function isNull<ValueType>(value: ValueType): boolean {
	return Object.prototype.toString.call(value) === '[object Null]';
}

/** Is value an *undefined* */
export function isUndefined<ValueType>(value: ValueType): boolean {
	return typeof value === 'undefined';
}

/** Is value a *Function* */
export function isFunction<ValueType>(value: ValueType): boolean {
	return testConstructor('Function', value)
	       || isAsyncFunction(value);
}

/** Is value an *Array* */
export function isArray<ValueType>(value: ValueType): boolean {
	return testConstructor('Array', value);
}

/** Is value an *Array* with length == 0 */
export function isArrayEmpty<ValueType>(value: ValueType): boolean {
	return isArray(value)
	       && (value as []).length === 0;
}

/** Is value an *object* */
export function isObject<ValueType>(value: ValueType): boolean {
	return ({}.toString.call(value)) === '[object Object]';
}

/** Is value an *object* and without keys */
export function isObjectEmpty<ValueType>(value: ValueType): boolean {
	return isObject(value)
	       && Object.keys(value as object).length === 0;
}

/** Is value a Native *Object* */
export function isNativeObject<ValueType>(value: ValueType): boolean {
	return testConstructor('Object', value);
}

/** Is value a *string* */
export function isString<ValueType>(value: ValueType): boolean {
	return testConstructor('String', value);
}

/** Is value a *boolean* */
export function isBoolean<ValueType>(value: ValueType): boolean {
	return Object.prototype.toString.call(value) === '[object Boolean]';
}

/** Is value a *numeric* */
export function isNumeric<ValueType>(value: ValueType): boolean {
	return testConstructor('Number', value)
	       && !isNaN(value as number);
}

/** Is value a *number* */
export function isNumber<ValueType>(value: ValueType): boolean {
	return Number.isFinite(value)
	       && !isNaN(parseFloat(value as string));
}

/** Is value an Integer *number* */
export function isInteger<ValueType>(value: ValueType): boolean {
	return Number.isSafeInteger(value);
}

/** Is value an Float */
export function isFloat<ValueType>(value: ValueType) {
	return isNumber(value)
	       && !isInteger(value);
}

/** Is value an postivie integer */
export function isPositiveInteger<ValueType>(value: ValueType): boolean {
	return isInteger(value)
	       && (value as number) >= 0;
}

/** Is value an postivie number */
export function isPositiveNumber<ValueType>(value: ValueType): boolean {
	return isNumber(value)
	       && (value as number) >= 0;
}

/** Is value symbol */
export function isSymbol<ValueType>(value: ValueType, name: boolean | string = false) {
	return typeof value === 'symbol'
	       && (!name || (value as Symbol).description === name);
}

/** Is value iterable (*object* or *Array* with not zero length) */
export function isIterable<ValueType>(value: ValueType): boolean {
	return (isObject(value) ? !!Object.keys(value as object).length : false)
	       || (isArray(value) ? !!(value as []).length : false)
	       || (isMap(value) ? !!(value as Map<any, any>).size : false)
	       || (isSet(value) ? !!(value as Set<any>).size : false);
}

/** Is value a JSON and can be decoded as *object* */
export function isJSON<ValueType>(value: ValueType): boolean {
	if (!isString(value)) return false;

	try {
		const obj: object = JSON.parse(value as string);

		return !!obj && typeof obj === 'object';
	} catch (e) {}

	return false;
}

/** Is value a valid GUIDv4 *string* */
export function isGUIDv4<ValueType>(value: ValueType): boolean {
	return isString(value)
	       && /^(?:\{[\dA-F]{8}-[\dA-F]{4}-4[\dA-F]{3}-[89AB][\dA-F]{3}-[\dA-F]{12}}|[\dA-F]{8}-[\dA-F]{4}-4[\dA-F]{3}-[89AB][\dA-F]{3}-[\dA-F]{12})$/i.test(value as string);
}

/** Is value a valid GUID *string* */
export function isGUID<ValueType>(value: ValueType): boolean {
	return isString(value)
	       && /^(?:\{[\dA-F]{8}-[\dA-F]{4}-[\dA-F]{4}-[\dA-F]{4}-[\dA-F]{12}}|[\dA-F]{8}-[\dA-F]{4}-[\dA-F]{4}-[\dA-F]{4}-[\dA-F]{12})$/i.test(value as string);
}

/**  Is value a *RegExp*  */
export function isRegExp<ValueType>(value: ValueType): boolean {
	return testConstructor('RegExp', value);
}

/** Is value a *Map* */
export function isMap<ValueType>(value: ValueType): boolean {
	return value instanceof Map;
}

/** Is value a *Set* */
export function isSet<ValueType>(value: ValueType): boolean {
	return value instanceof Set;
}

/** Is value a *WeakSet* */
export function isWeakSet<ValueType>(value: ValueType): boolean {
	return value instanceof WeakSet;
}

/** Is value a *WeakMap* */
export function isWeakMap<ValueType>(value: ValueType): boolean {
	return value instanceof WeakMap;
}