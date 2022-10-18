// noinspection JSVoidFunctionReturnValueUsed,DuplicatedCode

import {isAsyncFunction} from '../src';
import {testMocks}       from './mocks';

describe('isAsyncFunction', () => {
	testMocks(isAsyncFunction, expect, {
		array       : false,
		arrayEmpty  : false,
		boolFalse   : false,
		boolTrue    : false,
		floatNeg    : false,
		floatPos    : false,
		fnNamed     : false,
		fnArr       : false,
		fnNamedAsync: true,
		fnArrAsync  : true,
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
