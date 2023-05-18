import caesarCipher from "./caesarCipher";

test('Should wrap z to a', () => {
    expect(caesarCipher('olaf',25)).toBe('pmbg');
})

test('Should maintain punctuation marks', () => {
    expect(caesarCipher('olaf?.',25)).toBe('pmbg?.');
})

test('Shift should be no more than 25', () => {
    expect(caesarCipher('olaf?.',26)).toBe(undefined);
})