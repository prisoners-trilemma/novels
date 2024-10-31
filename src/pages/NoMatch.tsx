const NoMatch = () => {
  setTimeout(() => {
    window.location.pathname = "";
  }, 1000);
  return <p>ページが見つかりませんでした。トップページに遷移します。</p>;
};

export default NoMatch;
