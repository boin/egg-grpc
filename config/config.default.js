'use strict';

/**
 * grpc config
 * @member Config#grpc
 * @property {String} dir - proto files dir, relative path
 * @property {String} property - default attach to `ctx.grpc.**`
 * @property {Object} loadOpts - options pass to `protoloader.load(file, opts)`
 * @property {String[]} loadOpts.includeDirs - dirs to include like `['node_modules/google-proto-files', '/path/to/your/include']`
 * @property {Object} clientOpts - options pass to `new Client(host, credentials, opts)`
 * @property {String} endpoint - default andress to connect, for debug or showcase purpose
 * @property {Number} timeout - default 5000ms
 */
exports.grpc = {
  dir: 'app/proto',
  property: 'grpc',
  loadOpts: {
    includeDirs: [],
  },
  clientOpts: {},
  endpoint: 'localhost:50051',
  timeout: 5000,
};
