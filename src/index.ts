import { debug } from '@actions/core'
import { action } from './action';

try {
    action();
}
catch (e) {
    debug('Exception thrown: ' + e);
}

