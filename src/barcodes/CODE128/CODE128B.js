import CODE128 from './CODE128.js';
import {B_START_CHAR, B_CHARS, C_CHARS, CODE_C_CHAR} from './constants';

class CODE128B extends CODE128 {
	constructor(string, options) {
		if (options.optimise && (new RegExp(`^${C_CHARS}+$`)).test(string)) {
			super(B_START_CHAR + CODE_C_CHAR + string, options);
		} else {
			super(B_START_CHAR + string, options);
		}
	}

	valid() {
		return (new RegExp(`^${B_CHARS}+$`)).test(this.data);
	}
}

export default CODE128B;
