// noinspection JSVoidFunctionReturnValueUsed,DuplicatedCode

import {isArrayEmpty} from '../src';
import {testMocks}    from './mocks';

describe('isArrayEmpty', () => {
	testMocks(isArrayEmpty, expect, {
		array       : false,
		arrayEmpty  : true,
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
