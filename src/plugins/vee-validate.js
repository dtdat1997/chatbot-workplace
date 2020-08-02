import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

export async function loadVeeValidate(locale) {
    if (locale == 'cn') locale = 'zh_CN';
    Object.keys(rules).forEach(rule => {
        extend(rule, {
            ...rules[rule] // copies rule configuration
        });
    });
}
