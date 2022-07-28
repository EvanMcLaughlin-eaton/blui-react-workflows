import '@testing-library/jest-dom/extend-expect';

const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    transform: {
        ...tsjPreset.transform,
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
        },
    },
    testEnvironment: 'jsdom',
};
