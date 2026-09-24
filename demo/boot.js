// Starts the Godot web export from the shell's JSON config blocks. External on
// purpose: the page's CSP has no 'unsafe-inline' (docs/15).
(function () {
	'use strict';
	const config = JSON.parse(document.getElementById('godot-config').textContent);
	const threads = JSON.parse(document.getElementById('godot-threads').textContent);
	const overlay = document.getElementById('status');
	const progress = document.getElementById('status-progress');
	const progressWrap = document.getElementById('status-progress-wrap');
	const notice = document.getElementById('status-notice');
	const canvas = document.getElementById('canvas');

	function fail(err) {
		console.error(err);
		progressWrap.hidden = true;
		notice.textContent = err instanceof Error ? err.message : String(err);
		notice.hidden = false;
	}

	const missing = Engine.getMissingFeatures({ threads: threads });
	if (missing.length !== 0) {
		fail('This browser is missing what the demo needs:\n' + missing.join('\n'));
		return;
	}
	config.canvas = canvas;
	config.canvasResizePolicy = 2;
	const engine = new Engine(config);
	engine.startGame({
		onProgress: function (current, total) {
			if (current > 0 && total > 0) {
				progress.value = current;
				progress.max = total;
			} else {
				progress.removeAttribute('value');
				progress.removeAttribute('max');
			}
		},
	}).then(function () {
		overlay.remove();
		canvas.focus();
	}, fail);
}());
