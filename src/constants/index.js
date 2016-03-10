let createFile;

// Detecting if platform is Windows, OSX, or Linux
// for creating files
switch (process.platform) {
  case 'darwin':
  case 'linux':
    createFile = 'touch ';
    break;
  case 'win32':
    createFile = 'echo > ';
    break;
  default:
    throw new Error('Unsupported platform: ' + process.platform);
}

// stylesheet extensions
const styleExts = ['--scss', '--css', '--styl', '--less'];

export { createFile, styleExts }