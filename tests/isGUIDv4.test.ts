// noinspection JSVoidFunctionReturnValueUsed,DuplicatedCode

import {isArray, isGUIDv4} from '../src';
import {testMocks}         from './mocks';

describe('isGUIDv4', () => {
	testMocks(isGUIDv4, expect, {
		array       : false,
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
		guidV4      : true,
		guidV4Br    : true,
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
