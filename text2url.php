<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTMLテキストボックスに入力されている文字列をリアルタイムにURLのパラメーターに反映する方法</title>
</head>
<body>
<h4>
HTMLテキストボックスに入力されている文字列をリアルタイムにURLのパラメーターに反映する方法
</h4>
<label for="inputText">Text Input:</label>
<input type="text" id="inputText" oninput="updateURLParameter()">
<script>
function updateURLParameter() {
	// 入力されたテキストを取得
	var inputTextValue = document.getElementById('inputText').value;
	// 現在のURLを取得
	var currentURL = window.location.href;
	// URLにパラメーターが含まれている場合と含まれていない場合で処理を分ける
	if (currentURL.indexOf('?') !== -1) {
		// パラメーターがすでに存在する場合は置き換える
		var updatedURL = currentURL.replace(/(\?|&)text=.*?(&|$)/, '$1text=' + encodeURIComponent(inputTextValue) + '$2');
	} else {
		// パラメーターが存在しない場合は新しく追加する
		var updatedURL = currentURL + '?text=' + encodeURIComponent(inputTextValue);
	}
	// ブラウザの履歴を変更せずにURLを更新
	window.history.replaceState({ path: updatedURL }, '', updatedURL);
}
// ページロード時にURLからパラメーターを読み取ってテキストボックスに反映
window.onload = function () {
	var urlParams = new URLSearchParams(window.location.search);
	var textParam = urlParams.get('text');
	if (textParam !== null) {
		document.getElementById('inputText').value = decodeURIComponent(textParam);
	}
};
</script>
</body>
</html>