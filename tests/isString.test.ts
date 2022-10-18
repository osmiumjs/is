// noinspection JSVoidFunctionReturnValueUsed,DuplicatedCode

import {isArray, isString} from '../src';
import {testMocks}         from './mocks';

describe('isString', () => {
	testMocks(isString, expect, {
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
		guidV3      : true,
		guidV4      : true,
		guidV4Br    : true,
		infinityNeg : false,
		infinityPos : false,
		jsonInvalid : true,
		jsonValid   : true,
		map         : false,
		nan         : false,
		nil         : false,
		numberNeg   : false,
		numberPos   : false,
		obj         : false,
		objEmpty    : false,
		regEx       : false,
		set         : false,
		string      : true,
		symbol      : false,
		undef       : false
	});
});
