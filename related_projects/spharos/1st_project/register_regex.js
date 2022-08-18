console.log('=====아이디 TEST=====');
/* ID */
// O: 영소문자 X: 영대문자, 특수문자, 한글
const checkId = (id, type) => {
  // 정규식
  const regex = /^[a-z0-9]+$/g;
  const result = regex.test(id);
  id = String(id);

  // result가 false or id 길이 6 이하 or id 길이 20 이상이라면?
  if (result && id.length >= 6 && id.length <= 20) {
    console.log('id결과:', `(${type}) id 통과!`);
  } else {
    console.log(
      'id결과:',
      `(${type}) 아이디는 영소문자 및 숫자만 포함, 길이는 6자 이상 20자 이하로 작성해주세요`
    );
  }
};
checkId('abcd1234', '영소문자&숫자'); // true
checkId('ㅇㅇ', '한글&길이부족'); // false
checkId('!a', '특수문자'); // false
checkId('A', '영대문자'); // false
checkId('Asdf', '영대문자 포함'); // false
checkId('abcㅇ', '한글 포함'); // false
checkId('abcd1234!', '소문자+숫자+특수문자'); // false
checkId(1111111, '숫자만'); // true
checkId('aaaaaa', '영소문자만'); // true
checkId(
  'abcd1234aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  '길이 초과'
); // false

console.log('=====비밀번호 TEST=====');
/* PW */
// O: 영대소문자, 숫자 X: 특수문자, 한글
const checkPwd = (pwd, type) => {
  const regex = /^[A-Za-z0-9]+$/g;
  const result = regex.test(pwd);
  pwd = String(pwd);

  // result가 false or id 길이 8 이하 or id 길이 20 이상이라면?
  if (result && pwd.length >= 8 && pwd.length <= 20) {
    console.log('Pwd결과:', `(${type}) 비밀번호 통과!`);
  } else {
    console.log(
      'Pwd결과:',
      `(${type}) 비밀번호는 영대소문자 및 숫자만 포함, 길이는 8자 이상 20자 이하로 작성해주세요`
    );
  }
};

checkPwd('ㅇㅅㅇ', '한글&길이부족'); // false
checkPwd('!!!!!!!!!!!!!!!!!!!!', '특수문자'); // false
checkPwd('AAAAAAAAAAAAAAA', '대문자만'); // true
checkPwd('Asdffffffffffffff', '대소문자'); // true
checkPwd('abcㅇ', '한글 포함'); // false
checkPwd('abcd1234!', '소문자+숫자+특수문자'); // false
checkPwd(1111111111111, '숫자만'); // true
checkPwd('aaaaaaaaaaaaaaaaaa', '영소문자만'); // true
