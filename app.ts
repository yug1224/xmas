const topStar = ' \u2605'; // ' ★'
const fullWidthSolidus = '\u001b[32m\uFF0F'; // '／'
const fullWidthReverseSolidus = '\u001b[32m\uFF3C\n'; // '＼'
const ornaments = [
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0020', // ' '
  '\u0026', // '&'
  '\u0040', // '@'
  '\u0069', // 'i'
  '\u2042', // '⁂'
  '\u2E1B', // '⸛'
  '\u2E2E', // '⸮'
  '\uFF61', // '｡'
];
const colors = [
  33, // yellow
  34, // blue
  35, // magenta
  36, // cyan
  37, // white
];
const circumflexAccent = '\u001b[32m\u005e';

let result = '';
function w(s: string) {
  result += s;
}

w('\n');
(function T(height) {
  // ツリーの背景部分
  for (let i = 0; i < height; i++) {
    w(' ');
  }

  // 星
  w('\u001b[33m' + topStar + '\n');

  const M = height * 2 - 1;

  for (let i = 1; i <= height; i++) {
    // ツリー左半分の背景部分
    const O = i * 2 - 2;
    const spaces = (M - O) / 2;
    for (let i = 0; i < spaces; i++) {
      w(' ');
    }

    //ボールド解除
    w('\u001b[21m');

    // ツリー左側輪郭
    w(fullWidthSolidus);

    // オーナメント設定
    for (let i = 0; i < O; i++) {
      w(
        '\u001b[' +
          colors[Math.floor(Math.random() * colors.length)] +
          'm' +
          ornaments[Math.floor(Math.random() * ornaments.length)]
      );
    }

    // ツリー右側輪郭
    w(fullWidthReverseSolidus);

    // 色付け解除
    w('\u001b[0m');
  }
  w(' ');

  for (let i = 1; i < height; i++) {
    // ツリーの下側輪郭
    w(circumflexAccent);
  }

  // ツリーの幹
  w('|  |');
  for (let i = 1; i < height; i++) {
    // ツリーの下側輪郭
    w(circumflexAccent);
  }
  if (height > 10) {
    w('\n ');
    for (let i = 1; i < height; i++) {
      w(' ');
    }
    w('|  |');
    for (let i = 1; i < height; i++) {
      w(' ');
    }
  }
})(20);
w('\n\n');

w('\u001b[0mDeno \u001b[35mloves you\u001b[0m Happy Xmas, TypeScripters!');

console.log(result);
