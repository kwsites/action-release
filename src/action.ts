import * as core from '@actions/core'
import { wait } from './wait';

export async function action() {
    const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`);

    await wait(parseInt(ms, 10));
    core.setOutput('time', new Date().toTimeString())
}
