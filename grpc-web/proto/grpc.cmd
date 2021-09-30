@REM # Path to this plugin
set PROTOC_GEN_TS_PATH="D:\Lang\cache\nodejs\node-cache\node_modules\ts-protoc-gen\bin\protoc-gen-ts.cmd"

@REM # Directory to write generated code to (.js and .d.ts files)
set OUT_DIR="..\src\generated"

protoc ^
    --plugin="protoc-gen-ts=%PROTOC_GEN_TS_PATH%" ^
    --js_out="import_style=commonjs,binary:%OUT_DIR%" ^
    --ts_out="service=grpc-web:%OUT_DIR%" ^
    services.proto
