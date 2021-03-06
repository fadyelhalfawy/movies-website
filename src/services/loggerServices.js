import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://81c378bc839045d6a429aacf3588d3a0@o1097021.ingest.sentry.io/6118652",
        integrations: [new Integrations.BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}

function log (error) {
    Sentry.captureException(error);
}

const logger = {
    init,
    log
}

export default logger;