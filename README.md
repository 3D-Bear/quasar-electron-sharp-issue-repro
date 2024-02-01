# Quasar Electron App with sharp (quasar-electron-sharp-issue-repro)

A repository meant to reproduce an error while using and packing sharp library in an Electron App with Vite.

## App description

The repo features a dummy 'renderer' part, which is not important for this issue (but if you see it, it means that the app works)

The electron main process uses the sharp library to resize an image (media/Lenna-in.png ==> media/Lenna-out.png). The app is supposed to launch the resizing as soon as it is launched. If everyting goes well, the 'Lenna-out.png' file should pop in the media folder, when you start the app.

## The issue in detail

- The expected behaviour works perfectly fine in dev mode on Linux: `npm run dev:electron`

* This works also perfectly fine in production mode on Linux with `npm run build:electron` and the run the app with `dist/electron/Packaged/Quasar\ Electron\ App\ with\ sharp-linux-x64/Quasar\ Electron\ App\ with\ sharp`

* The problem occurs when launching the Windows build, as the module `sharp-win32-x64` is not resolved. When launching the app by double-clicking the icon, it failes with an error message and doesn't event launch the GUI part.

* There is a [npm issue](https://github.com/npm/cli/issues/4828), making it difficult to get the `sharp-win32-x64` deployed alongside the other platform libs. However even if `sharp-win32-x64` is manually copied to the build folder (where I guess it should be normally), it is not resolved either. That is the purpose of the `&& cp ...` part in the `build:electron` script in `package.json`

## Commands

### Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run dev:electron
```

### Build the app for production (Windows and Linux)

```bash
npm run build:electron
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
