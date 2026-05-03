/**
 * Utility class for handling iframe interactions
 * Methods
 * - getFrameLocator(page, frameSelector): Returns a FrameLocator for the specified iframe
 * - fillInFrame(frameLocator, selector, text): Fills text in an element inside the iframe
 * - clickInFrame(frameLocator, selector): Clicks an element inside the iframe
 * - getTextFromFrame(frameLocator, selector): Gets text from an element inside the iframe
 */

class IframeUtil {
    /**
     * Gets a FrameLocator for the specified iframe selector
     * @param {Page} page - The Playwright page object
     * @param {string} frameSelector - CSS selector for the iframe
     * @returns {FrameLocator} The frame locator
     */
    async getFrameLocator(page, frameSelector) {
        return page.frameLocator(frameSelector);
    }

    /**
     * Fills text in an element inside the iframe
     * @param {FrameLocator} frameLocator - The frame locator
     * @param {string} selector - CSS selector for the element inside the iframe
     * @param {string} text - Text to fill
     */
    async fillInFrame(frameLocator, selector, text) {
        await frameLocator.locator(selector).fill(text);
    }

    /**
     * Clicks an element inside the iframe
     * @param {FrameLocator} frameLocator - The frame locator
     * @param {string} selector - CSS selector for the element inside the iframe
     */
    async clickInFrame(frameLocator, selector) {
        await frameLocator.locator(selector).click();
    }

    /**
     * Gets text from an element inside the iframe
     * @param {FrameLocator} frameLocator - The frame locator
     * @param {string} selector - CSS selector for the element inside the iframe
     * @returns {string} The text content
     */
    async getTextFromFrame(frameLocator, selector) {
        return await frameLocator.locator(selector).textContent();
    }
}

module.exports = IframeUtil;