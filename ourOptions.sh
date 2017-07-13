#!/bin/bash
npm install

npm install -g live-server

live-server
babel . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled --source-maps inline --watch
