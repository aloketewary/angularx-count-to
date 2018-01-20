{
    "compileOnSave": false,
    "compilerOptions": {
      "outDir": "../dist/out-tsc",
      "baseUrl": ".",
      "module": "commonjs",
      "target": "es5",
      "sourceMap": true,
      "declaration": false,
      "moduleResolution": "node",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "typeRoots": [
        "../node_modules/@types"
      ],
      "types": [
        "jasmine",
        "webpack"
      ],
      "lib": [
        "es2016",
        "dom"
      ]
    },
    "include": [
      "../scripts/typings.d.ts",
      "../scripts/test.ts",
      "**/*.ts",
      "**/*.d.ts"
    ],
    "exclude": [
      "../demo",
      "../node_modules"
    ]
  }