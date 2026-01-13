#!/bin/bash
rm -rf ./dist

tsc -p ./tsconfig.export.json;
rm ./**/tsconfig.export.tsbuildinfo;
cp ./src/module.d.ts ./dist/module.d.ts;
resolve-tspaths -p ./tsconfig.export.json --verbose;


git add .;
