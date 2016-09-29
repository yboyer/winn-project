SystemJS.config({
  devConfig: {
    'map': {
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.11.5',
      'babel-plugin-transform-es2015-typeof-symbol': 'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0',
      'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.14.0',
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
      'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.1.0',
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.10'
    },
    'packages': {
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-template': 'npm:babel-template@6.15.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.14.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.13.0'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.11.5': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.8.0',
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.13.0'
        }
      },
      'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-angular2-annotations@5.1.0': {
        'map': {
          'babel-generator': 'npm:babel-generator@6.14.0'
        }
      },
      'npm:babel-helper-function-name@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-traverse': 'npm:babel-traverse@6.15.0',
          'babel-template': 'npm:babel-template@6.15.0',
          'babel-types': 'npm:babel-types@6.15.0',
          'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.8.0'
        }
      },
      'npm:babel-helper-get-function-arity@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.15.0'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'js'
    }
  },
  transpiler: 'plugin-babel',
  babelOptions: {
    'plugins': [
      'babel-plugin-transform-es2015-typeof-symbol',
      'babel-plugin-angular2-annotations',
      'babel-plugin-transform-decorators-legacy',
      'babel-plugin-transform-class-properties',
      'babel-plugin-transform-flow-strip-types'
    ]
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    '@angular/common': 'npm:@angular/common@2.0.1',
    '@angular/compiler': 'npm:@angular/compiler@2.0.1',
    '@angular/core': 'npm:@angular/core@2.0.1',
    '@angular/forms': 'npm:@angular/forms@2.0.1',
    '@angular/http': 'npm:@angular/http@2.0.1',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.1',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.1',
    '@angular/router': 'npm:@angular/router@3.0.1',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'babel': 'npm:babel-core@6.14.0',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'core-js': 'npm:core-js@2.4.1',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.8',
    'rxjs': 'npm:rxjs@5.0.0-beta.12',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'timers': 'github:jspm/nodelibs-timers@0.2.0-alpha',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zone.js': 'npm:zone.js@0.6.25'
  },
  packages: {
    'npm:babel-core@6.14.0': {
      'map': {
        'babel-helpers': 'npm:babel-helpers@6.8.0',
        'babel-register': 'npm:babel-register@6.14.0',
        'babel-code-frame': 'npm:babel-code-frame@6.11.0',
        'babel-template': 'npm:babel-template@6.15.0',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-traverse': 'npm:babel-traverse@6.15.0',
        'path-exists': 'npm:path-exists@1.0.0',
        'convert-source-map': 'npm:convert-source-map@1.3.0',
        'path-is-absolute': 'npm:path-is-absolute@1.0.0',
        'slash': 'npm:slash@1.0.0',
        'shebang-regex': 'npm:shebang-regex@1.0.0',
        'json5': 'npm:json5@0.4.0',
        'private': 'npm:private@0.1.6',
        'babel-generator': 'npm:babel-generator@6.14.0',
        'source-map': 'npm:source-map@0.5.6',
        'babylon': 'npm:babylon@6.11.2',
        'minimatch': 'npm:minimatch@3.0.3',
        'babel-types': 'npm:babel-types@6.15.0',
        'debug': 'npm:debug@2.2.0',
        'lodash': 'npm:lodash@4.16.1'
      }
    },
    'npm:babel-register@6.14.0': {
      'map': {
        'core-js': 'npm:core-js@2.4.1',
        'babel-core': 'npm:babel-core@6.14.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'path-exists': 'npm:path-exists@1.0.0',
        'home-or-tmp': 'npm:home-or-tmp@1.0.0',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'source-map-support': 'npm:source-map-support@0.2.10',
        'lodash': 'npm:lodash@4.16.1'
      }
    },
    'npm:babel-helpers@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-template': 'npm:babel-template@6.15.0'
      }
    },
    'npm:rxjs@5.0.0-beta.12': {
      'map': {
        'symbol-observable': 'npm:symbol-observable@1.0.2'
      }
    },
    'npm:babel-messages@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6'
      }
    },
    'npm:babel-runtime@6.11.6': {
      'map': {
        'core-js': 'npm:core-js@2.4.1',
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5'
      }
    },
    'npm:babel-code-frame@6.11.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'esutils': 'npm:esutils@2.0.2',
        'js-tokens': 'npm:js-tokens@2.0.0',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:babel-template@6.15.0': {
      'map': {
        'babel-traverse': 'npm:babel-traverse@6.15.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babylon': 'npm:babylon@6.11.2',
        'babel-types': 'npm:babel-types@6.15.0',
        'lodash': 'npm:lodash@4.16.1'
      }
    },
    'npm:babel-traverse@6.15.0': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.11.0',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-types': 'npm:babel-types@6.15.0',
        'babylon': 'npm:babylon@6.11.2',
        'debug': 'npm:debug@2.2.0',
        'invariant': 'npm:invariant@2.2.1',
        'lodash': 'npm:lodash@4.16.1',
        'globals': 'npm:globals@8.18.0'
      }
    },
    'npm:babel-generator@6.14.0': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-types': 'npm:babel-types@6.15.0',
        'source-map': 'npm:source-map@0.5.6',
        'lodash': 'npm:lodash@4.16.1',
        'detect-indent': 'npm:detect-indent@3.0.1'
      }
    },
    'npm:source-map-support@0.2.10': {
      'map': {
        'source-map': 'npm:source-map@0.1.32'
      }
    },
    'npm:minimatch@3.0.3': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.6'
      }
    },
    'npm:babel-types@6.15.0': {
      'map': {
        'esutils': 'npm:esutils@2.0.2',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'lodash': 'npm:lodash@4.16.1',
        'to-fast-properties': 'npm:to-fast-properties@1.0.2'
      }
    },
    'npm:home-or-tmp@1.0.0': {
      'map': {
        'os-tmpdir': 'npm:os-tmpdir@1.0.1',
        'user-home': 'npm:user-home@1.1.1'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:source-map@0.1.32': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.0'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:brace-expansion@1.1.6': {
      'map': {
        'concat-map': 'npm:concat-map@0.0.1',
        'balanced-match': 'npm:balanced-match@0.4.2'
      }
    },
    'npm:invariant@2.2.1': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0'
      }
    },
    'npm:debug@2.2.0': {
      'map': {
        'ms': 'npm:ms@0.7.1'
      }
    },
    'npm:detect-indent@3.0.1': {
      'map': {
        'minimist': 'npm:minimist@1.2.0',
        'repeating': 'npm:repeating@1.1.3',
        'get-stdin': 'npm:get-stdin@4.0.1'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'has-ansi': 'npm:has-ansi@2.0.0',
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'supports-color': 'npm:supports-color@2.0.0',
        'strip-ansi': 'npm:strip-ansi@3.0.1'
      }
    },
    'npm:loose-envify@1.2.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@1.0.3'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.8',
        'randombytes': 'npm:randombytes@2.0.3',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'github:jspm/nodelibs-timers@0.2.0-alpha': {
      'map': {
        'timers-browserify': 'npm:timers-browserify@1.4.2'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'elliptic': 'npm:elliptic@6.3.2'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:pbkdf2@3.0.8': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'miller-rabin': 'npm:miller-rabin@4.0.0'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0'
      }
    },
    'npm:repeating@1.1.3': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.1'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'ieee754': 'npm:ieee754@1.1.6',
        'base64-js': 'npm:base64-js@1.2.0',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.2'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'browserify-des': 'npm:browserify-des@1.0.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0'
      }
    },
    'npm:timers-browserify@1.4.2': {
      'map': {
        'process': 'npm:process@0.11.9'
      }
    },
    'npm:is-finite@1.0.1': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.0'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.3',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.3',
        'inherits': 'npm:inherits@2.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'pbkdf2': 'npm:pbkdf2@3.0.8',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'asn1.js': 'npm:asn1.js@4.8.1'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:elliptic@6.3.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'brorand': 'npm:brorand@1.0.6',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.1.5'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:asn1.js@4.8.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:readable-stream@2.1.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'isarray': 'npm:isarray@1.0.0',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.4.0'
      }
    },
    'npm:stream-http@2.4.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.1.5',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'querystring': 'npm:querystring@0.2.0',
        'punycode': 'npm:punycode@1.3.2'
      }
    }
  }
});
