// noinspection JSVoidFunctionReturnValueUsed,DuplicatedCode

import {isArray, isNumeric, isPositiveNumber} from '../src';
import {testMocks}                            from './mocks';

describe('isNumeric', () => {
	testMocks(isNumeric, expect, {
		array       : false,
		arrayEmpty  : false,
		boolFalse   : false,
		boolTrue    : false,
		floatNeg    : true,
		floatPos    : true,
		fnNamed     : false,
		fnArr       : false,
		fnNamedAsync: false,
		fnArrAsync  : false,
		guidV3      : false,
		guidV4      : false,
		guidV4Br    : false,
		infinityNeg : true,
		infinityPos : true,
		jsonInvalid : false,
		jsonValid   : false,
		map         : false,
		nan         : false,
		nil         : false,
		numberNeg   : true,
		numberPos   : true,
		obj         : false,
		objEmpty    : false,
		regEx       : false,
		set         : false,
		string      : false,
		symbol      : false,
		undef       : false
	});
});
