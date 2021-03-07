import { average } from "./functions";

describe('Test Average', () => {
    it('average fn should work', () => {
        expect(average('1', 1)).toEqual('Average is 1');
        expect(average(1, '1')).toEqual('Average is 1');
        expect(average(3, 2, 1)).toEqual('Average is 2');
    })
})
