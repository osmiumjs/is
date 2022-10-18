// noinspection JSVoidFunctionReturnValueUsed,DuplicatedCode

import {isBoolean} from '../src';
import {testMocks} from './mocks';

describe('isBoolean', () => {
	testMocks(isBoolean, expect, {
		array       : false,
		arrayEmpty  : false,
		boolFalse   : true,
		boolTrue    : true,
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
		map         : false,
		nan         : false,
		nil         : false,
		numberNeg   : false,
		numberPos   : false,
		obj         : false,
		objEmpty    : false,
		regEx       : false,
		set         : false,
		string      : false,
		symbol      : false,
		undef       : false
	});
});
