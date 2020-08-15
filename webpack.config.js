const path = require('path');

//웹팩 설정
module.exports = {
  name: '구구단', //이름
  mode: 'development', // 개발모드, 실사용시: production
  devtool: 'eval', // 속도 빠르게?
  resolve: {
    extensions: ['js', 'jsx'],
    /* 웹팩에서 불러올 파일 확장자를 지정해 주는 기능 
    예를 들어 entry:{ app: ['./합칠 파일1'] }으로 불러오면 '합칠 파일1' 이름을 가진 js파일과 jsx파일만 불러와줌
    */
  },
  entry: {
    app: ['./합칠 파일1', './합칠 파일'],
    /* app: [] 안에 넣은 파일이 output.filename에 설정한 파일명으로 하나의 파일로 생성됨
    만약 1번 파일에서 2번 파일을 불러오고 있는 상태라면 app: ['./합칠 파일1']로 지정해줘도 됨,
    웹팩에서는 app: []안에 지정한 파일이 또다른 파일을 불러오고 있다면 알아서 불러와 주기 때문*/
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        option: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'), // 현재 폴더안에 'dist' 경로를 자동으로 생성해줌.
    filename: 'app.js', // js파일을 모두모아 하나의 app.js 파일로 생성해줌.
  }, // 출력
};
