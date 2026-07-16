(() => {
  const card = document.querySelector('main');
  const mark = document.querySelector('.mark');
  const title = document.querySelector('h1');
  const message = document.querySelector('#message');
  const link = document.querySelector('#confirm-link');
  const hint = document.querySelector('.hint');
  const prefix = '?confirmation_url=';
  const encodedUrl = location.search.startsWith(prefix)
    ? location.search.slice(prefix.length)
    : '';

  history.replaceState(null, '', '/auth/confirm/');

  try {
    const confirmationUrl = new URL(decodeURIComponent(encodedUrl));
    const isExpectedUrl =
      confirmationUrl.protocol === 'https:' &&
      confirmationUrl.hostname === 'kxshuqukyaelzaruespx.supabase.co' &&
      confirmationUrl.pathname === '/auth/v1/verify' &&
      confirmationUrl.searchParams.has('token') &&
      confirmationUrl.searchParams.get('type') === 'signup';

    if (!isExpectedUrl) throw new Error('invalid_confirmation_url');

    link.href = confirmationUrl.toString();
    card.dataset.state = 'ready';
  } catch {
    card.dataset.state = 'error';
    mark.textContent = '!';
    title.textContent = '유효한 인증 링크가 아니에요';
    message.textContent = 'MindLens 앱에서 인증 메일을 다시 요청해주세요.';
    hint.textContent = '본인이 가입을 요청하지 않았다면 이 페이지를 닫아주세요.';
  }
})();
