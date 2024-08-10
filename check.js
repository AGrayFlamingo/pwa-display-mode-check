class DisplayModeChecker {
  getInfo() {
    return {
      id: 'displaymodechecker',
      name: 'Display Mode Checker',
      blocks: [
        {
          opcode: 'checkDisplayMode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Is display mode standalone?'
        }
      ]
    };
  }

  checkDisplayMode() {
    return window.matchMedia('(display-mode: standalone)').matches;
  }
}

Scratch.extensions.register(new DisplayModeChecker());
