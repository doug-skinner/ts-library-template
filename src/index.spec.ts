import { hello } from './index'

describe('hello', () => {
    it('should return hello', () => {
        expect(hello('World')).toBe('Hello World!')
    })
})
