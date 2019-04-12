import SplitMessageService from './SplitMessage';

// Test message contains of a span of non-whitespace characters longer than 50 characters
test('throws on message contains a span of non-whitespace characters longer than 50 characters', () => {
    expect(() => {
        SplitMessageService.splitMessage("Thisislongspanmessagewithlengthgreaterthan50anditshoudthrowanerror");
    }).toThrow();
});

test('throws on message contains a span of non-whitespace characters longer than 50 characters', () => {
    expect(() => {
        SplitMessageService.splitMessage("This is long spanmessagewithlengthreaterthan50anditshoudthrowanerror");
    }).toThrow();
});

test('split correctly on message longer than 50', () => {
    expect(
        SplitMessageService.splitMessage("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself."))
        .toEqual(["1/2 I can't believe Tweeter now supports chunking", "2/2 my messages, so I don't have to do it myself."])
});

test('do not split on message shorter than 50', () => {
    expect(
        SplitMessageService.splitMessage("Haha hihi"))
        .toEqual(["Haha hihi"])
});
