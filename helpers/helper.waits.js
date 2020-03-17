const defaultTimeoutInMs = 5000;

export function waitUntilUrlIncludes(value, timeoutInMs=defaultTimeoutInMs) {
	browser.waitUntil(
		() => {
			return browser.getUrl().includes(value);
		}, timeoutInMs, 'expected URL to include ' + value
	);
}

export function waitForElementDisplay(elem, timeoutInMs = defaultTimeoutInMs) {
	browser.waitUntil(
		() => {
			return elem.isDisplayed() === true;
		}, timeoutInMs, 'expected element to be displayed'
	);
}