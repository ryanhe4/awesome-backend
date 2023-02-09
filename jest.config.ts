import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: ['<rootDir/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
}

export default config
