module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            const { dev, isServer } = options
            const { vendors = [], splitMinChunks } = nextConfig
            if (!dev && !isServer) {
                config.optimization.splitChunks = Object.assign(
                    config.optimization.splitChunks,
                    {
                        chunks: 'all',
                        cacheGroups: {
                            default: false,
                            vendors: false,
                            commons: {
                                name: 'commons',
                                chunks: 'all',
                                minChunks: splitMinChunks || 3
                            },
                            libBase: {
                                name: 'vendors',
                                chunks: 'all',
                                priority: 10,
                                test(module) {
                                    return vendors.some(item => module.context.indexOf(item) > -1)
                                }
                            },
                            styles: config.optimization.splitChunks.cacheGroups.styles
                        }
                    },
                )
            }

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }
            return config
        }
    })
};
