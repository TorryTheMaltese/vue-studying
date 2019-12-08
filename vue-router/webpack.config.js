const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',    // 웹팩 빌드 속도를 빠르게 하기 위함
    resolve: {
        extensions: ['.js', '.vue']
    },
    entry: {
        //app: './main.js',    // 스크립트들이 나중에 main.js (임의 이름)에 하나로 합쳐짐
        app: path.join(__dirname, 'main.js'),   // 절대경로로 주기위해 path.join 사용
    },
    module: {
        rules: [{   // webpack은 javascripts만 처리. javascripts 외 다른 파일을 읽을 수 있도록 rules를 추가함
            test: /\.vue$/,  //.vue로 끝나는 파일 (정규표현식)
            loader: 'vue-loader',   //.vue로 끝나는 파일을 만나면 vue-loader로 전달
        },{
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',   // main.js에 합친다.
        // path: './dist'           // main.js의 위치를 정해줌
        path: path.join(__dirname, 'dist'),  // 절대경로로 주기위함
        publicPath: '/dist'
    },
};