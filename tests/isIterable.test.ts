// noinspection JSVoidFunctionReturnValueUsed,DuplicatedCode

import {isArray, isIterable} from '../src';
import {testMocks}           from './mocks';

describe('isIterable', () => {
	testMocks(isIterable, expect, {
		array       : true,
		arrayEmpty  : false,
		boolFalse   : false,
		boolTrue    : false,
		floatNeg    : false,
		floatPos    : false,
		fnNamed     : false,
		fnArr       : false,
		fnNamedAsync: false,
		fnArrAsync  : false,
		guidV3      : false,
		guidV4      : false,
		guidV4Br    : false,
		infinityNeg : false,
		infinityPos : false,
		jsonInvalid : false,
		jsonValid   : false,
		map         : true,
		nan         : false,
		nil         : false,
		numberNeg   : false,
		numberPos   : false,
		obj         : true,
		objEmpty    : false,
		regEx       : false,
		set         : true,
		string      : false,
		symbol      : false,
		undef       : false
	});
});
