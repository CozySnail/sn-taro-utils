const typescript = require('rollup-plugin-typescript2');
const babel = require('rollup-plugin-babel');

const pkg = require('../package.json');

// compatible with sn-taro-utils and @CozySnail/sn-taro-utils
// @CozySnail/sn-taro-utils -> sn-taro-utils

// const name = pkg.name.split('/').pop();
const name = (pkg.name + '').replace(/-\D/g,
    function (match) {
        return match.charAt(1).toUpperCase();
    });

// @CozySnail/sn-taro-utils -> CozySnail_sn-taro-utils
// var name = pkg.name.replace('@', '').replace(/\//g, '_');
const version = pkg.version;

const banner =
    `/*!
 * ${pkg.name} ${version} (https://github.com/CozySnail/sn-taro-utils)
 * API https://github.com/CozySnail/sn-taro-utils/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} CozySnail. All Rights Reserved
 * Licensed under MIT (https://github.com/CozySnail/sn-taro-utils/blob/master/LICENSE)
 */
`;

const type = pkg.srctype === 'ts' ? 'ts' : 'js';

function getCompiler(opt) {
    if (type === 'js') {
        return babel({
            babelrc: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        'targets': {
                            'browsers': 'last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9',
                            'node': '0.10'
                        },
                        'modules': false,
                        'loose': false
                    }
                ]
            ],
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        'helpers': false,
                        'regenerator': false
                    }
                ]
            ],
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        });
    }

    opt = opt || {
        tsconfigOverride: {compilerOptions: {module: 'ES2015'}}
    };

    return typescript(opt);
}

exports.type = type;
exports.name = name;
exports.banner = banner;
exports.getCompiler = getCompiler;
