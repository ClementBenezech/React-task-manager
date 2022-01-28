import {getTaskStyle} from './getTaskStyle'

describe("testing some stuff", () => {
    //Checking if we get the right styling from the function
    test('Getting task style', () => {
        const lateDate =  new Date(1962, 6, 7)
        //Checking if an open task with the deadline set for today gets the open task styling
        expect(getTaskStyle({'status': 'open', 'deadline' : Date.now()}).status).toBe('open')
        //Checking if a LATE open task gets the late task styling
        expect(getTaskStyle({'status': 'open', 'deadline' : lateDate}).status).toBe('late')
        //Checking if a closed task gets the closed task styling
        expect(getTaskStyle({'status': 'close', 'deadline' : Date.now()}).status).toBe('close')
        /*expect(getTaskStyle('close')).toBe('far fa-check-circle')*/
    })
})