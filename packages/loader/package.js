Package.describe({
  summary: "Just for testing.",
  version: "0.0.0",
  debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use(["zoltan:test-package"], ["client", "server"]);
  api.addFiles(['common.js'], ["client", "server"]);
});
