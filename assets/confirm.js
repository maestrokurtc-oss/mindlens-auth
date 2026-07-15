(() => {
  const result = window.__MINDLENS_AUTH_RESULT__ ?? { state: 'neutral' };
  const card = document.querySelector('main');
  const mark = document.querySelector('.mark');
  const title = document.querySelector('h1');
  const message = document.querySelector('#message');
  const hint = document.querySelector('.hint');

  card.dataset.state = result.state;

  if (result.state === 'success') {
    mark.textContent = '✓';
    title.textContent = '이메일 인증이 완료됐어요';
    message.textContent = 'MindLens 앱으로 돌아가 가입한 이메일과 비밀번호로 로그인해주세요.';
    hint.textContent = 'PC에서 이 페이지를 열었다면 휴대폰에서 MindLens 앱을 실행해주세요.';
    return;
  }

  if (result.state === 'error') {
    mark.textContent = '!';
    title.textContent = '이메일 인증을 완료하지 못했어요';
    message.textContent = result.message || '인증 링크가 만료되었거나 이미 사용되었습니다.';
    hint.textContent = 'MindLens 앱의 로그인 화면에서 인증 메일을 다시 요청해주세요.';
    return;
  }

  mark.textContent = 'i';
  title.textContent = 'MindLens 이메일 인증';
  message.textContent = '가입 이메일에서 받은 인증 버튼을 눌러 이 페이지를 열어주세요.';
  hint.textContent = '본인이 가입을 요청하지 않았다면 이메일을 무시하셔도 됩니다.';
})();
