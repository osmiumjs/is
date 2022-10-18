// noinspection JSVoidFunctionReturnValueUsed,DuplicatedCode

import {isNumber}  from '../src';
import {testMocks} from './mocks';

describe('isNumber', () => {
	testMocks(isNumber, expect, {
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
		infinityNeg : false,
		infinityPos : false,
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
