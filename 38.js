// 직사각형 별찍기

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    let answer = ""
    for (let j = 0; j < a; j++) {
      answer += "*"
    }
    console.log(answer);
  }
});


// 다른 풀이 1
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     const star = `${'*'.repeat(a)}\n`;

//     console.log(star.repeat(b));
// });

// (5 3);
// *****
// *****
// *****