const RETRY_COUNT = 5;

async function retryPromise(fn, retries = RETRY_COUNT) {
    return fn().catch((error) => {
        if (retries > 1) {
            return retryPromise(fn, retries - 1);
        } else {
            return Promise.reject(error);
        }
    });
}

function fetchUrl(url) {
    return retryPromise(() => fetch(url), 5);
}

fetchUrl("https://google.com")
    .then((data) => console.log("Page content:", data))
    .catch((error) => console.error("Failed to load page:", error));
