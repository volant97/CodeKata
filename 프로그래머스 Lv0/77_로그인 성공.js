function solution(id_pw, db) {
  let result = "fail";

  db.forEach((data) => {
    if (data[0] === id_pw[0] && data[1] === id_pw[1]) {
      result = "login";
    } else if (data[0] === id_pw[0] && data[1] !== id_pw[1]) {
      result = "wrong pw";
    }
  });

  return result;
}

// 다른풀이1
// Map
// 키, 값 쌍을 갖는 Map에 db를 넣고 map에 id가 있다면 id 키 값에 해당하는 pw를 찾아서 있다면 로그인(id, pw 존재 및 일치),
// 틀린 비밀번호(id 존재, pw 불일치)를 리턴하고 map자체에 id가 없으면 fail을 준다.
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
