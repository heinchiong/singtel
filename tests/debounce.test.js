const debounce = (func, delay) => {
  let timerId;
	return (...args) => {
		if (timerId) {
			clearTimeout(timerId);
		}
		timerId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	}
}

// Unit test for debounce
describe('debounce', () => {
	jest.useFakeTimers();

	it('should call the function after 1000ms', () => {
		const callback = jest.fn();
		const debounced = debounce(callback, 1000);

		// Call the debounced function 3 times
		debounced();
    debounced();
    debounced();

		// Fast-forward time
		jest.advanceTimersByTime(999);

		// The callback should not be called yet
		expect(callback).not.toBeCalled();
		
		// Fast-forward time again
		jest.advanceTimersByTime(1);

		// The callback should be called once
		expect(callback).toBeCalledTimes(1);
	});
});