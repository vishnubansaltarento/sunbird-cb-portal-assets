(function (window) {
    window["env"] = window["env"] || {};

    // Environment variables
    window["env"]["sitePath"] = '${SITE_PATH}';
    window["env"]["debug"] = '${DEBUG}';
    window["env"]["karmYogiPath"] = '${KARM_YOGI_PATH}'
    window["env"]["cbpPath"] = '${CBP_PATH}'
})(this);
