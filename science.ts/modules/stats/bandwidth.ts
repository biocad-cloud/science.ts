﻿
// Bandwidth selectors for Gaussian kernels.
// Based on R's implementations in `stats.bw`.
namespace science.stats.bandwidth {

    // Silverman, B. W. (1986) Density Estimation. London: Chapman and Hall.
    export function nrd0(x) {
        var hi = Math.sqrt(science.stats.variance(x));
        var lo: number;

        if (!(lo = Math.min(hi, science.stats.iqr(x) / 1.34)))
            (lo = hi) || (lo = Math.abs(x[1])) || (lo = 1);
        return .9 * lo * Math.pow(x.length, -.2);
    }

    // Scott, D. W. (1992) Multivariate Density Estimation: Theory, Practice, and
    // Visualization. Wiley.
    export function nrd(x) {
        var h = science.stats.iqr(x) / 1.34;
        return 1.06 * Math.min(Math.sqrt(science.stats.variance(x)), h)
            * Math.pow(x.length, -1 / 5);
    }
}