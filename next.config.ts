/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack (config:import('webpack').Configuration) {
        config?.module?.rules?.push({
            test: /.*\.(glb|gltf)$/,
            use: {
            loader: 'file-loader',
            }
        })
        return config;
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig